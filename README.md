# Chat Application

This is a real-time chat application built using HTML, CSS, and JavaScript. Users can join chat rooms, exchange messages in real-time, and have a smooth and interactive chat experience.

## Features

- **User Interface:** Intuitive and visually appealing user interface.
- **Real-Time Communication:** Real-time message exchange using WebSockets.
- **User Authentication:** Users can choose a username before joining a chat room.
- **Chat Features:** Send text messages, see who sent each message, and timestamp each message.
- **Room Management:** Create new chat rooms and join existing ones.
- **Responsive Design:** Accommodates different screen sizes.

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js (for WebSocket server)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/chat-application.git
    cd chat-application
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

### Running the Application

1. **Start the WebSocket server:**

    ```sh
    node server.js
    ```

2. **Open `index.html` in your web browser:**

    Open `index.html` directly in your browser or use a local web server to serve the files.

### Usage

- Open the chat application in your browser.
- Enter a username to join a chat room.
- Select or create a chat room.
- Start chatting in real-time with other users.

### Adding and Deleting Rooms

- **To create a new room:** Enter a room name in the input field and click "Create Room".
- **To delete a room:** Select the room from the list and click the "Delete Room" button.

## File Structure

- `index.html`: The main HTML file for the chat application.
- `styles.css`: The CSS file for styling the application.
- `app.js`: The JavaScript file for client-side functionality.
- `server.js`: The Node.js server file for handling WebSocket connections.
