# SkillSwap App (Expo + Backend)

SkillSwap is a mobile application that allows users to list, explore, and exchange skills with others. This project is developed using **React Native (Expo SDK 54)** for the frontend and a **Node.js + Express** backend.

---

## 🚀 Tech Stack

### Frontend

* React Native
* Expo SDK 54
* React Navigation (Stack & Bottom Tabs)
* Expo Vector Icons

### Backend

* Node.js
* Express.js
* MongoDB (optional / future)

---

## 📂 Project Structure

```
skillswap/
│
├── frontend/        # Expo React Native App
│   ├── App.js
│   ├── package.json
│   └── ...
│
├── backend/         # Node.js Backend
│   ├── index.js
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## 🧑‍💻 Frontend Setup (Expo)

### 1️⃣ Create Expo App

```bash
npx create-expo-app frontend
cd frontend
```

### 2️⃣ Install Required Packages

```bash
npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs
npx expo install react-native-screens react-native-safe-area-context
```

### 3️⃣ Start Expo App

```bash
npx expo start
```

* Press **a** → Run on Android Emulator
* Press **w** → Run on Web
* Scan QR → Run on Physical Device

---

## 🖥️ Backend Setup (Node + Express)

### 1️⃣ Initialize Backend

```bash
mkdir backend
cd backend
npm init -y
```

### 2️⃣ Install Dependencies

```bash
npm install express cors nodemon
```

### 3️⃣ Basic Server (`index.js`)

```js
const express = require('express');
const app = express();
app.use(express.json());
app.use(require('cors')());

app.get('/', (req, res) => {
  res.send('SkillSwap API is running');
});

app.listen(5000, () => console.log('Server running on port 5000'));
```

### 4️⃣ Run Backend Server

```bash
npx nodemon index.js
```

Backend will run on:

```
http://localhost:5000
```

---

## 🔄 Connecting Frontend with Backend

In Expo app, use backend URL:

```js
const API_URL = "http://localhost:5000";
```

For real devices, replace `localhost` with your system IP address.

---

## 📱 App Features

* Login & Signup (Dummy Authentication)
* Home Feed (Skill Listings)
* Add Skill Screen
* Profile Screen
* Bottom Tab Navigation with Icons
* Clean UI for academic project

---

## 📸 Screenshots

Add screenshots in a folder and reference here:

```
/screenshots
  ├── login.png
  ├── signup.png
  ├── home.png
  ├── add-skill.png
  └── profile.png
```

---

## 📦 GitHub Upload Commands

```bash
git init
git add .
git commit -m "Initial commit - SkillSwap App"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

---

## 📝 Notes

* This project is created for academic purposes.
* Backend authentication and database can be extended later.
* Dummy data is used to demonstrate functionality.

---

## 👨‍🎓 Author

**SkillSwap App**
Developed using Expo & Node.js

---

⭐ If you like this project, give it a star on GitHub!
video link you tube https://youtu.be/O1FWzVgYbvU?si=demk_pcyiq_jM5Se
