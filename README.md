# Corp Comment

Corp Comment is a web application designed to collect feedback from users within a corporate environment. It provides a platform for users to submit feedback, view feedback from others, and interact with various features.

## Features

- **Feedback Form**: Users can submit feedback through a user-friendly form.
- **Feedback List**: Displays a list of all feedback submitted by users.
- **Hashtag List**: Allows users to filter feedback based on hashtags.
- **Responsive Design**: The application is designed to be responsive and work seamlessly across different devices and screen sizes.

## Technologies Used

- **React**: The project is built using React, a popular JavaScript library for building user interfaces.
- **Vite**: Vite is used as the build tool for the project, providing fast build times and a modern development experience.
- **JSON Server**: Used for mocking a backend server to store and retrieve feedback data during development.
- **TypeScript**: TypeScript is used for type-checking and improving code quality.
- **ESLint**: ESLint is used for static code analysis to maintain code quality and enforce coding standards.
- **Radix UI React Icons**: Provides a collection of high-quality icons used throughout the application.

## Getting Started

To get started with the project, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Run the development server using `npm run dev`.
4. Open your browser and navigate to `http://localhost:5173` to view the application.
5. Open another terminal and run the `server` at root by using the following command `npx json-server db/db.json`. The server will run on `localhost:3000`

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the production-ready version of the application.
- `npm run lint`: Lints the project files to ensure code quality.
- `npm run preview`: Previews the production build locally.

## License

This project is licensed under the [MIT License](LICENSE).
