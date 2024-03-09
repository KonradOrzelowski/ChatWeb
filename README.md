# ChatWeb

ChatWeb is a simple chatbot application that uses the Hugging Face Inference API to generate responses to user inputs. The application consists of a frontend built with HTML and CSS, and a backend built with Node.js.

## Project Structure

The project is divided into two main parts: the frontend and the backend.

### Frontend

The frontend is a simple HTML page styled with CSS. It provides an interface for the user to interact with the chatbot. The relevant files are:

- [`frontend/index.html`]: This is the main HTML file.
- [`frontend/script.js`]: It includes a chat interface where the user can send messages and view the chatbot's responses.
- [`/css/ directory`]: This directory contains CSS files that style the web page.
- [`/assets/ directory`]: This directory contains static files like images and icons used in the application. It includes a   subdirectory `/icons/` which contains icon files.
- [`/js/ directory`]: It includes additional JavaScript files that handle various functionalities on the web page

### Backend

The backend is a Node.js server that handles requests from the frontend, interacts with the Hugging Face Inference API, and sends responses back to the frontend. The relevant files are:

- [`backend/main.js`]: This is the main entry point for the backend. It sets up the server and handles the main chat loop.
- [`backend/server.js`]: This file sets up the Express server and defines the API endpoints.
## Setup

To set up the project, follow these steps:

1. Clone the repository.
2. Navigate to the [`backend`] directory.
3. Run `npm install` to install the necessary dependencies.
4. Create a [`config.json`] file in the directory with your Hugging Face API token:

```json
{
  "token": "your-hugging-face-api-token"
}
```

5. Start the server by running `nodemon server.js` in the [`backend`] directory.
6. Open [`frontend/index.html`] in your web browser to interact with the chatbot.


## Test Proposals

### 1. `backend/main.js`
- Test the `askQuestion` function to ensure it correctly prompts and retrieves user input.
- Test the `runInference` function to ensure it correctly interacts with the Hugging Face API and returns the expected results.
- Test the `mainLoop` function to ensure it correctly orchestrates the conversation flow and handles the 'exit' command. 

### 2. `backend/server.js`
- Test the server setup to ensure it correctly applies middleware and starts listening on the correct port.
- Test the `runInference` function similar to the one in [`main.js`](command:_github.copilot.openSymbolInFile?%5B%22frontend%2Findex.html%22%2C%22main.js%22%5D "frontend/index.html").
- Test the server's response to various API requests, ensuring it correctly handles and responds to valid and invalid requests.

### 3. `frontend/index.html`
- Test the user interface to ensure it correctly displays conversations and handles user input.
- Test the fetch request to ensure it correctly interacts with the backend server and updates the conversation display.

### 4. `frontend/style.css`
- Test the styles to ensure they are correctly applied to the HTML elements.
