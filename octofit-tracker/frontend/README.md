
# Octofit Tracker — Frontend

This folder contains the React frontend for Octofit Tracker. The file below provides quick start and build instructions specific to this frontend.

## Quick start

1. Install dependencies

```bash
npm install --prefix octofit-tracker/frontend
```

2. Run in development mode (port 3000 by default)

```bash
npm start --prefix octofit-tracker/frontend
```

3. Build for production

```bash
npm run build --prefix octofit-tracker/frontend
```

## Serving the production build

After building, serve the `build/` folder with any static server. For a quick preview you can install `serve`:

```bash
npm install -g serve
serve -s octofit-tracker/frontend/build
```

## Environment / Backend URL

The frontend is configured to fetch backend data from a Codespace-hosted Django REST API. The components use an environment variable `REACT_APP_CODESPACE_NAME` to construct the endpoint URLs, for example:

```
https://$REACT_APP_CODESPACE_NAME-8000.app.github.dev/api/activities/
```

Set `REACT_APP_CODESPACE_NAME` in your environment before starting the dev server. In bash you can do:

```bash
export REACT_APP_CODESPACE_NAME=my-codespace-name
npm start --prefix octofit-tracker/frontend
```

## Notes

- The dev server runs on port 3000 by default. The backend (Django) is expected to be reachable on port 8000 in the Codespace URL above.
- The project already imports Bootstrap CSS and includes themed styles in `src/App.css`.
- Favicon has been added at `public/favicon.svg`. Replace it with an `.ico` if you need broader legacy browser support.

## Troubleshooting

- If the dev server does not pick up `REACT_APP_CODESPACE_NAME`, restart the dev server after exporting the environment variable.
- For CORS issues, ensure the backend allows requests from the frontend origin (or configure CORS appropriately in Django settings).

Open `http://localhost:3000` in your browser when running locally, or use your Codespace forwarded ports to view the app in the browser.

