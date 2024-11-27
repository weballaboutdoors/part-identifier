# Part Identifier - Snap Identify Buy

This application simplifies the purchasing process by enabling customers to capture images of parts directly with their smartphones. Using this intuitive tool, customers can easily identify and specify the parts they need to purchase without the hassle of manual searches or guesswork.

## Key Features

- **Image Capture**: Easily capture images of parts with the smartphone camera.
- **Part Identification**: Utilize advanced image recognition technology to identify parts.
- **Specification Capture**: Capture detailed specifications of the identified parts.
- **Product Search**: Search for the identified parts in our catalog.
- **Purchase**: Purchase the identified parts directly from our website.

## Prerequisites

### Frontend
- Node.js (LTS version recommended)
- npm (comes with Node.js)
- Git

### Backend
- Python 3.8 or higher
- pip (Python package installer)
- Virtual environment (recommended)

## Frontend Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/weballaboutdoors/part-identifier.git
   cd part-identifier/frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

4. **Build for production:**

   ```bash
   npm run build
   ```

5. **Deploy to GitHub Pages:**

   ```bash
   npm run deploy
   ```

## Backend Setup

1. **Navigate to the backend directory:**

   ```bash
   cd ../backend
   ```

2. **Create and activate a virtual environment:**

   ```bash
   # On Windows
   python -m venv venv
   .\venv\Scripts\activate

   # On macOS/Linux
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Flask server:**

   ```bash
   # On Windows
   python app.py

   # On macOS/Linux
   python3 app.py
   ```

   The backend server will start on http://localhost:5000

## Available Scripts

### Frontend

- **`npm start`**: Runs the app in development mode.
- **`npm test`**: Launches the test runner.
- **`npm run build`**: Builds the app for production.
- **`npm run deploy`**: Deploys the app to GitHub Pages.

### Backend

- **`python app.py`**: Starts the Flask development server.
- **`pytest`**: Runs the test suite (if tests are set up).

## Deployment

### Frontend
- The frontend is deployed to GitHub Pages at: https://weballaboutdoors.github.io/part-identifier
- Deploy by running `npm run deploy`

### Backend
- The backend is deployed to Heroku
- Deploy by pushing to the Heroku remote:
  ```bash
  git push heroku main
  ```

## API Documentation

The backend provides the following endpoints:

- **POST /api/identify**: Upload an image for part identification
  - Request: Multipart form data with 'image' field
  - Response: JSON with identified part details

## Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
- [Flask documentation](https://flask.palletsprojects.com/)

## Contributing

Feel free to open issues or submit pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.