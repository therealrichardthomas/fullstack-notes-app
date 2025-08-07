# Full-Stack Notes Application

A secure, full-stack note-taking web application built with the MERN stack (MongoDB, Express.js, React, Node.js). This application allows users to register, log in, and manage their personal notes through a clean and responsive user interface.

**Live Demo:** https://reactcourse-7gli.onrender.com/

---

## Key Features

-   **Secure User Authentication:** User registration with password hashing (bcrypt) and login system using JSON Web Tokens (JWT) for secure session management.
-   **Full CRUD Functionality:** Authenticated users can Create, Read, Update, and Delete their own notes.
-   **RESTful API:** A well-structured backend API built with Node.js and Express, following REST principles.
-   **Component & API Testing:** The project includes both frontend component tests (Vitest) and backend API tests (Jest & Supertest) to ensure code quality and reliability.
-   **Responsive Frontend:** A modern user interface built with React that works seamlessly on different screen sizes.

---

## Tech Stack

### Backend

-   **Runtime:** Node.js
-   **Framework:** Express.js
-   **Database:** MongoDB with Mongoose ODM
-   **Authentication:** JSON Web Token (JWT), bcrypt
-   **Testing:** Jest, Supertest

### Frontend

-   **Library:** React
-   **Build Tool:** Vite
-   **API Communication:** Axios
-   **Testing:** Vitest, React Testing Library

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   Node.js (v18 or later recommended)
-   npm (comes with Node.js)
-   MongoDB (You can use a local installation or a free cloud instance from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/therealrichardthomas/fullstack-notes-app.git](https://github.com/therealrichardthomas/fullstack-notes-app.git)
    cd fullstack-notes-app
    ```

2.  **Setup the Backend:**
    -   Navigate to the backend directory:
        ```bash
        cd backend
        ```
    -   Install dependencies:
        ```bash
        npm install
        ```
    -   Create a `.env` file in the `backend` directory. This file will hold your secret environment variables. Copy the contents from the example below:
        ```
        # .env file for the backend

        # Your MongoDB connection string
        MONGODB_URI=mongodb+srv://<user>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority

        # Port for the server to run on
        PORT=3001

        # A secret string for signing JWTs (can be any long, random string)
        SECRET=thisisareallylongandsupersecretstringforjwt
        ```
    -   Start the backend server:
        ```bash
        npm run dev
        ```
    -   The server should now be running on `http://localhost:3001`.

3.  **Setup the Frontend:**
    -   Open a **new terminal window** and navigate to the frontend directory from the project root:
        ```bash
        cd frontend
        ```
    -   Install dependencies:
        ```bash
        npm install
        ```
    -   Start the frontend development server:
        ```bash
        npm run dev
        ```
    -   The application should now be running and accessible at `http://localhost:5173`.

---

## Running Tests

This project includes a suite of tests to ensure functionality.

-   **To run backend tests:**
    ```bash
    # From the /backend directory
    npm test
    ```

-   **To run frontend tests:**
    ```bash
    # From the /frontend directory
    npm test
    ```
