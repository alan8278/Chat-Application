const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });
const rooms = new Map();
rooms.set('General', new Set());

wss.on('connection', ws => {
    ws.on('message', message => {
        const data = JSON.parse(message);

        switch (data.type) {
            case 'check-username':
                const usernameTaken = [...rooms.values()].some(users => users.has(data.username));
                ws.send(JSON.stringify({ type: 'username-checked', valid: !usernameTaken }));
                break;
            case 'join':
                rooms.get('General').add(data.username);
                broadcastRooms();
                break;
            case 'create-room':
                if (!rooms.has(data.room)) {
                    rooms.set(data.room, new Set());
                    broadcastRooms();
                }
                break;
            case 'delete-room':
                if (rooms.has(data.room) && data.room !== 'General') {
                    rooms.delete(data.room);
                    broadcastRooms();
                }
                break;
            case 'message':
                broadcastMessage(data);
                break;
        }
    });

    ws.on('close', () => {
        rooms.forEach(users => users.delete(ws.username));
        broadcastRooms();
    });

    function broadcastRooms() {
        const roomNames = [...rooms.keys()];
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ type: 'rooms', rooms: roomNames }));
            }
        });
    }

    function broadcastMessage(data) {
        const message = { type: 'message', username: data.username, message: data.message, timestamp: Date.now() };
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(message));
            }
        });
    }
});
