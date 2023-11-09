# TeeBay Application Documentation

## Overview

This section of the README provides an overview of our Next.js-based frontend application, which serves as a client to our GraphQL API. The application is designed to provide an interactive and user-friendly interface for managing and viewing a variety of products and user accounts.

### Features

- **Product Management:** Users can add, view, Purchase and Rent products.
- **User Authentication:** Sign-up and sign-in functionalities for users to access their accounts.
- **Responsive Design:** Crafted using Mantine-UI, the application is fully responsive and provides a seamless experience across different devices.

## Technology Stack

The application leverages the following technologies:

- **Next.js:** A React framework that enables server-side rendering and generating static websites for React-based web applications.
- **MantineUI:** A popular React UI framework that provides a range of ready-to-use components that are both attractive and functional.
- **TypeScript:** A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- **GraphQL Client:** The application uses a GraphQL client for efficient data fetching and state management in the context of a GraphQL server.

## Running the Project Without Docker

To get started without Docker, run the following commands:

```bash
npm install
# or
yarn

# Run the development server
npm run dev
# or
yarn dev
```

## Running the Project With Docker

To get started with Docker,

```bash
docker build -t teebay-frontend .

# Run the container
docker run -p 3000:3000 teebay-frontend
```
