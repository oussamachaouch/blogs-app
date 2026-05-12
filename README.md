# BlogTech

BlogTech is a modern full-stack blog application built with React, Node.js, Express, and MongoDB.  
The project was designed as a professional blogging platform with AI-powered multilingual support, newsletter integration, and a clean responsive interface.

The application allows users to browse blog posts, read articles, manage content, and dynamically switch between multiple languages using an AI translation system powered by Hugging Face models.

---

# 🚀 Features

## 🌍 AI-Powered Multilingual System
- Dynamic translation generation using Hugging Face AI models
- Automatic creation of language JSON files
- Translation caching using localStorage
- i18n integration for global app translation
- Lazy loading of translations
- Persistent language selection
- Translation synchronization system from the default `en.json`
- Automatic fallback to English

## 📰 Blog Features
- Create blog posts
- Read full blog articles
- Display latest blogs
- Delete blog posts
- Responsive blog cards layout
- Dynamic routing with React Router

## 📧 Newsletter Integration
- Newsletter subscription system
- Brevo integration for email management
- Unsubscribe functionality

## 🎨 Frontend Features
- Responsive modern UI
- Global language selector
- Translation loading overlay
- React Hooks architecture
- Component-based structure
- Smooth navigation and scroll restoration

## ⚙️ Backend Features
- REST API architecture
- Modular controller/service/routes structure
- Dynamic translation file generation
- AI translation services
- Retry mechanism for translation failures
- Batch translation processing
- File synchronization utilities

---

# 🛠️ Tech Stack

## Frontend
- React.js
- React Router
- i18next
- React-i18next
- CSS3
- Redux

## Backend
- Node.js
- Express.js

## Database
- MongoDB

## AI & Translation
- Hugging Face Inference API
- Helsinki-NLP Translation Models

## Email Service
- Brevo API

---

# 📂 Project Structure

## Frontend
```bash
src/
│
├── components/
├── partials/
├── hooks/
├── i18n/
├── config/
├── redux/
├── styles/
└── App.js
```

## Available Scripts

In the project directory, you can run:
```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

```bash
npm test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```bash
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```bash
npm run eject
```

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
