# Profile-Page

This is a React-based profile management application that allows users to update their profile information, change their profile picture, and select their country location using a dropdown with country name.

## Features

- Update profile details such as first name, last name, position, location, and description.
- Upload and change profile pictures.
- Remove the profile picture if needed.
- Select country location from a dropdown that displays country flags.

## Demo

![Profile Management Screenshot](./src/components/Profile%20Page.png) 

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Make sure you have Node.js installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).

- **npm**: npm is the package manager for Node.js. It should be installed along with Node.js.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/deepsb997/profile-page.git
   cd profile-page
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install the flag-icons CSS library**:
   Since the project uses country flags, you need to install the `flag-icons` library:
   ```bash
   npm install flag-icons
   ```

## Running the Project

1. **Start the development server**:
   ```bash
   npm start
   ```

   This command will start the React development server and open the application in your default web browser. The application should be running at `http://localhost:3000/`.

2. **Access the application**:
   Open your browser and navigate to `http://localhost:3000/` if it doesn’t open automatically.

## Project Structure

Here is a brief overview of the project structure:

```plaintext
.
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── CountryDropdown.jsx
│   │   └── Profile.jsx
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
└── README.md
```

- **`Profile.jsx`**: Main component for managing profile information.
- **`CountryDropdown.jsx`**: Component for the country dropdown with flags.
- **`App.js`**: Main entry point of the application.

## Configurations

- **Customizing Country Flags**: If you need to add more countries or change the flags displayed, modify the `CountryDropdown.jsx` component accordingly.

## Building for Production

To build the project for production:

```bash
npm run build
```

This command will create an optimized production build in the `build/` directory.

## Troubleshooting

- **Issue**: `Warning: Invalid DOM property 'for'. Did you mean 'htmlFor'?`
  - **Solution**: Ensure all labels in the `Profile.jsx` file use `htmlFor` instead of `for`.

## Contributing

Contributions are welcome! If you find a bug or want to add a new feature, feel free to create an issue or submit a pull request.
