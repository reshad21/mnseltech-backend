# Backend Setup Guide

This guide will help you set up and run the backend server locally.

---

## Prerequisites

Ensure you have the following installed on your system:

1. **Node.js**: Download and install from [Node.js official website](https://nodejs.org/).
2. **npm or yarn**: Package manager for installing dependencies (npm comes with Node.js).
3. **MongoDB**: A running MongoDB instance or an accessible MongoDB connection string.

---

## Clone the Repository

1. Open a terminal.
2. Clone the project repository:
   ```bash
   git clone <https://github.com/reshad21/mnseltech-backend>
   ```
3. Navigate to the project folder:
   ```bash
   cd <project-folder>
   ```

---

## Install Dependencies

Install all required dependencies:

### Using npm:

```bash
npm install
```

### Using yarn:

```bash
yarn install
```

---

## Configure Environment Variables

This project uses an `.env` file to manage sensitive environment variables. Follow these steps to set it up:

1. In the root directory of your project, create a file named `.env`.
2. Copy and paste the following credentials into the `.env` file:
   ```env
   PORT=5000
   DATABASE_URL=mongodb+srv://admin-ast:admin12345@cluster0.gplljg9.mongodb.net/mnsel-tech?retryWrites=true&w=majority&appName=Cluster0
   DEFAULT_PASS=1234
   JWT_ACCESS_SECRET=9005e38d1fd9fe38fbf3e33c61c32bd6c8938b767bac24d0e192f1ed477ebcca
   JWT_REFRESH_SECRET=41b991b21dc0a439cb45fed544992ba3fafa3f912d3c4dedebec3592d7d552fb74a86a4d69ea560bcf7bf988d173ddecaffa9815dd5a6661bcacd58c0cdb2dc5

   JWT_ACCESS_EXPIRES_IN=10d
   JWT_REFRESH_EXPIRES_IN=365d
   ```

> **Note:** Keep the `.env` file secure and do not commit it to version control.

---

## Start the Server

Run the backend server using the following command:

### Using npm:

```bash
npm run start
```

### Using yarn:

```bash
yarn start
```

The server will start and listen on the port specified in the `.env` file (default: `5000`).

You can access the server at:

```
http://localhost:5000
```

---

## Additional Scripts

### Development Mode:

For development mode with hot-reloading, use:

```bash
npm run dev
# or
yarn dev
```

### Testing:

Run tests with:

```bash
npm run test
# or
yarn test
```

---

## Troubleshooting

1. **Port already in use**: If the default port (`5000`) is in use, specify a different port in the `.env` file.

2. **Database connection issues**: Ensure the `DATABASE_URL` in the `.env` file is correct and the database is accessible.

3. **Missing dependencies**: If dependencies are missing, rerun:

   ```bash
   npm install
   # or
   yarn install
   ```

---

You're all set! If you encounter any issues, refer to the project's documentation or contact the maintainer.

