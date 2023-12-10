### GUI

BSP-3813 Develop a GUI client for client/server based refurbishing solution

### Used Versions

- Node.js version: v18.16.0
- npm version: 9.6.7

### Installation

1. Clone the Git repository to your local machine:

    `git clone <repository-url>`

2. Navigate to the project directory:

    `cd project-name`

### Uage

To run the application, follow these steps:

1. Execute the following command to start the application:

- `npm start`

2. Open your web browser and access one of the following URLs:

- http://localhost:3000
- http://your-ip-address:3000

The page will automatically reload when you make changes to the code. Lint errors will be displayed in the console.

### Connecting to the Server

To enable the GUI interface to connect and communicate with the server, follow these steps:

1. Ensure that your computer is connected to the (Extender/Gateway)) and has an IPv4 address `(192.168.1.10)`.
2. Ensure that the Rust server is in listening mode under the board.

**Note:** In my case, the server was listening on address `0.0.0.0:8000`.

### Authors
Malek Guizani
© 2023 sagemcom. All Rights Reserved.
