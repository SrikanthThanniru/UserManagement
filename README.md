

# User Management Dashboard

This project is a simple User Management Dashboard built using React and CSS. It allows for adding, editing, and deleting users, with a responsive design that adapts to mobile and desktop screens. It includes a table for displaying user data, along with the ability to perform CRUD operations.

## Features

- **Responsive Design**: The table becomes scrollable on smaller screens to handle large datasets.
- **CRUD Operations**: Add, Edit, and Delete users.
- **Styled Components**: Custom CSS for styling the form, table, and buttons.

## Technologies Used

- **React**: Frontend library for building the user interface.
- **CSS**: For styling the components.
- **JSX**: JavaScript XML syntax used for component structure.

## Setup and Run Instructions

### Prerequisites

- **Node.js**: Ensure that Node.js is installed on your machine. If not, download and install it from [here](https://nodejs.org/).

- **npm (Node Package Manager)**: npm is installed with Node.js. You can verify the installation by running the following commands:


  node -v
  npm -v
  ```



### Install Dependencies

Run the following command to install the necessary dependencies:


npm install
```

This will install all the required packages listed in `package.json`.

### Start the Development Server

To run the application in development mode, use the following command:


npm start
```

The app will start on [http://localhost:3000](http://localhost:3000). Open this URL in your browser to view the app.

### Build for Production

To build the project for production, run the following command:

```bash
npm run build
```

This will create an optimized production build in the `build/` directory, which can then be deployed to a live server.

## Folder Structure

- `src/`
  - `components/` – Contains React components for the user management form and user list.
  - `App.js` – The main React component.
  - `index.js` – Entry point for rendering the React app.
  - `index.css` – Global CSS for the app.



This README provides the necessary setup steps, dependencies, and instructions for running and contributing to the project. Adjust the repository link and any other details as needed based on your specific setup.