# SnipURL - Modern URL Shortener

<!-- Cover Image -->
![SnipURL Cover](snip-url-cover-image.png)
<!-- Replace 'cover-image.png' with your actual image file path -->

## Live Demo

[View SnipURL Live](https://your-deploy-link.com)
<!-- Replace with your actual deployed link -->

## Video Demo

[![Watch the demo](snip-url-cover-image.png)](https://your-video-demo-link.com)
<!-- Replace 'demo-thumbnail.png' and the link with your actual video demo -->

## About the Project

SnipURL is a modern, full-stack URL shortener web application. It allows users to create short links from long URLs, track analytics such as clicks, device types, and geolocation, and manage their links with a user-friendly dashboard. Built with React and Supabase, SnipURL provides a seamless experience for link management and sharing.

## Features

- **Shorten URLs:** Instantly generate short links for any long URL.
- **Custom Aliases:** Create custom short URLs for branding or memorability.
- **QR Code Generation:** Automatically generate QR codes for each short link.
- **User Authentication:** Secure login and signup with profile picture upload.
- **Dashboard:** View and manage all your created links in one place.
- **Analytics:** Track total clicks, device types (mobile/desktop), and location data for each link.
- **Delete Links:** Remove unwanted links from your dashboard.
- **Clipboard & Download:** Copy short links or download QR codes with one click.

## Tech Stack


- **Frontend:** <br>
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Radix UI](https://img.shields.io/badge/Radix%20UI-000000?style=for-the-badge&logo=radix-ui&logoColor=white)
  ![Recharts](https://img.shields.io/badge/Recharts-FF6384?style=for-the-badge&logo=recharts&logoColor=white)
- **Backend:** <br>
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white) (Database, Auth, Storage)
- **Utilities:**<br> 
![Yup](https://img.shields.io/badge/Yup-4B4B4B?style=for-the-badge) (validation), ![UAParser.js](https://img.shields.io/badge/UAParser.js-4B4B4B?style=for-the-badge) (device detection), ![ipapi.co](https://img.shields.io/badge/ipapi.co-4B4B4B?style=for-the-badge) (geolocation)
- **Build Tools:** <br>
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
  ![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white)

## File Structure

```
url-shortener/
├── public/
│   ├── logo.jpeg
│   ├── logo.png
│   ├── qr.png
│   └── vite.svg
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── context.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── components/
│   │   ├── create-link.jsx
│   │   ├── device-stats.jsx
│   │   ├── error.jsx
│   │   ├── header.jsx
│   │   ├── link-card.jsx
│   │   ├── location-stats.jsx
│   │   ├── login.jsx
│   │   ├── require-auth.jsx
│   │   ├── signup.jsx
│   │   └── ui/
│   ├── db/
│   │   ├── apiAuth.js
│   │   ├── apiClicks.js
│   │   ├── apiUrls.js
│   │   └── supabase.js
│   ├── hooks/
│   │   └── use-fetch.js
│   ├── layouts/
│   │   └── app-layout.jsx
│   ├── lib/
│   │   └── utils.js
│   └── pages/
│       ├── auth.jsx
│       ├── dashboard.jsx
│       ├── landing.jsx
│       ├── link.jsx
│       └── redirect-link.jsx
├── .env
├── .eslintrc.cjs
├── .gitignore
├── .htaccess
├── components.json
├── index.html
├── jsconfig.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
```


## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`
3. Set up your Supabase credentials in `.env`.
4. Start the development server: `npm run dev`

---

Made with 💗 by Saurabh

