# React + TypeScript Login Application

This React app built with TypeScript and Vite serves as a simple authentication system. It consists of a login page, user storage utilizing local storage, dashboard access upon successful login, and a logout feature.

## Features

### Login Page

- A login form that accepts user credentials (username/password).
- Validates the input fields for correctness.

### Authentication

- Upon successful login, the user information is stored in the local storage.
- Redirects the user to the dashboard.

### Dashboard

- A secure area accessible only after successful login.
- Contains personalized content or relevant information for the logged-in user.

### Logout Functionality

- Provides an option to log out, which clears the stored user data from local storage.
- Redirects the user back to the login page after logout.

## Tech Stack

- **React**: For building the UI components and managing the application state.
- **TypeScript**: To ensure type safety and enhance code quality.
- **Vite**: As the build tool to enable fast development and optimize the build process.
- **Tailwind**: For styling and creating responsive interface.
- **Local Storage**: Utilized for storing user data for authentication persistence.

## Usage

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Start the development server: `npm run dev`.
4. Access the application via the provided URL.
5. Log in with valid credentials to access the dashboard.
6. Log out to clear the stored user information and return to the login page.
