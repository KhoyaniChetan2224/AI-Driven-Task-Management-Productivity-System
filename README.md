# AI-Driven-Task-Management-Productivity-System

# Frontend - MERN Project

A modern React frontend application built with **Vite**, **React**, and **Tailwind CSS**. This project provides a responsive user interface with authentication pages, a landing page, and an overview dashboard.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Components](#components)
- [Pages](#pages)
- [Configuration](#configuration)
- [Contributing](#contributing)

## Features

- ⚡ **Fast Development** - Powered by Vite for instant HMR (Hot Module Replacement)
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 🔐 **Authentication Pages** - Login and Signup pages for user authentication
- 📱 **Responsive Design** - Mobile-first approach with responsive layouts
- 🗺️ **Routing** - Client-side routing with React Router
- 🎯 **Modular Components** - Reusable and composable React components
- 📊 **Dashboard** - Overview page for displaying application data

## Tech Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite
- **CSS Framework**: Tailwind CSS
- **Styling**: PostCSS
- **Linting**: ESLint
- **Routing**: React Router (implied from routes folder)
- **Package Manager**: npm/yarn

## Project Structure

```
frontend/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Button.jsx       # Button component
│   │   ├── Input.jsx        # Input component
│   │   └── Navbar.jsx       # Navigation bar component
│   ├── pages/               # Page components
│   │   ├── Header.jsx       # Header page
│   │   ├── Landing.jsx      # Landing/home page
│   │   ├── Login.jsx        # Login page
│   │   ├── Overview.jsx     # Overview/dashboard page
│   │   └── Signup.jsx       # Signup/registration page
│   ├── routes/              # Routing configuration
│   │   └── AppRoutes.jsx    # Application routes setup
│   ├── assets/              # Static assets
│   ├── img/                 # Image files
│   ├── App.jsx              # Main App component
│   ├── App.css              # App styles
│   ├── index.css            # Global styles
│   └── main.jsx             # Application entry point
├── public/                  # Public assets
├── index.html               # HTML entry point
├── package.json             # Project dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── eslint.config.js         # ESLint configuration
└── .gitignore               # Git ignore rules
```

## Installation

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm or yarn package manager

### Setup Steps

1. **Clone the repository** (if applicable)
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

## Available Scripts

### Development
```bash
npm run dev
```
Starts the development server with hot module reloading.

### Build
```bash
npm run build
```
Creates an optimized production build in the `dist` folder.

### Preview
```bash
npm run preview
```
Preview the production build locally before deployment.

### Linting
```bash
npm run lint
```
Run ESLint to check code quality and style compliance.

### Lint Fix
```bash
npm run lint -- --fix
```
Automatically fix ESLint issues.

## Components

### Button
Reusable button component for various actions throughout the application.

```jsx
import Button from './components/Button';

<Button onClick={() => {}}>Click me</Button>
```

### Input
Reusable input component for forms with built-in styling.

```jsx
import Input from './components/Input';

<Input type="text" placeholder="Enter text" />
```

### Navbar
Navigation bar component providing site navigation and branding.

```jsx
import Navbar from './components/Navbar';

<Navbar />
```

## Pages

### Landing Page
The main entry point of the application showcasing key features and call-to-actions.

### Login Page
User authentication page for existing users to sign in.

### Signup Page
Registration page for new users to create an account.

### Overview Page
Dashboard/overview page displaying user data and analytics.

### Header Page
Header component or page for additional navigation.

## Configuration

### Vite Configuration
Edit `vite.config.js` to customize Vite settings (plugins, build options, etc).

### Tailwind CSS Configuration
Customize Tailwind theme, colors, and utilities in `tailwind.config.js`.

### PostCSS Configuration
Modify `postcss.config.js` to adjust CSS processing.

### ESLint Configuration
Configure code linting rules in `eslint.config.js`.

## Building for Production

```bash
npm run build
```

This command generates a production-ready build in the `dist` folder. The build is minified and optimized for best performance.

To test the production build locally:
```bash
npm run preview
```

## Contributing

1. Create a new branch for your feature
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit
   ```bash
   git commit -m "Add your commit message"
   ```

3. Push to the branch
   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a Pull Request

## Best Practices

- Keep components small and focused on a single responsibility
- Use meaningful component and variable names
- Write reusable components whenever possible
- Follow the project's code style (enforced by ESLint)
- Use Tailwind classes for styling instead of custom CSS when possible
- Keep the routing structure organized and scalable

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port.

### Module Not Found Errors
Run `npm install` again to ensure all dependencies are installed.

### Build Fails
- Clear node_modules: `rm -rf node_modules package-lock.json && npm install`
- Check Node.js version: `node --version`

## License

[Add your license information here]

## Contact & Support

For questions or issues, please open an issue in the repository or contact the development team.

---

**Happy Coding!** 🚀
