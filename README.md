# Nuojiji GitHub Pages Mirror

This directory is a static mirror of `https://nuojiji.pages.dev/`, adjusted to run on GitHub Pages.

## What was changed

- Root-relative asset links were converted to relative links. 
- The runtime preload helper now resolves asset URLs from `document.baseURI`.
- Service worker auto-registration was disabled to avoid broken cache manifests from the original deployment.
- A minimal no-op `sw.js` was added so direct service worker requests stay harmless.
- `.nojekyll` was added so GitHub Pages serves the mirrored static files directly.

## Deploy

1. Create a GitHub repository.
2. Upload the contents of this folder to the repository root.
3. Push to the `main` branch.
4. In GitHub, open `Settings -> Pages`.
5. Set `Build and deployment` to `Deploy from a branch`.
6. Choose branch `main` and folder `/ (root)`.
7. Save and wait for the site to publish.

## Local Development

### Quick Start (Windows)
Double-click `start-server.bat` to launch a local development server.

### Manual Start
```bash
npx serve .
```

Then open your browser to the URL shown in the terminal (usually `http://localhost:3000`).

## Notes

- This is a mirrored production build, not the original source code.
- If the upstream site updates, you will need to mirror it again to stay in sync.
