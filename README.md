# React App with GitHub Pages Deployment

This is a React application that automatically deploys to GitHub Pages when changes are pushed to the main branch.

## Project Structure

- `app/` - React application
- `.github/workflows/` - GitHub Actions workflow for automatic deployment

## Setup Instructions

1. Create a new repository on GitHub
2. Push this code to your repository
3. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Select "GitHub Actions" as the source

## Development

To run the application locally:

```bash
cd app
npm start
```

To build the application:

```bash
cd app
npm run build
```

## Deployment

The application will automatically deploy to GitHub Pages when changes are pushed to the main branch.

## How it works

The GitHub Actions workflow in `.github/workflows/deploy.yml` is triggered on pushes to the main branch. It:

1. Builds the React application
2. Deploys the built files to GitHub Pages