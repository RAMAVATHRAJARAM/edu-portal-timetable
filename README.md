# 🎓 Edu Portal Timetable & Announcements

A responsive **web application** for managing and displaying **timetables, announcements, and events** for educational institutions.  
Includes a secure **Admin Panel** to update content in real time using **Firebase Realtime Database**.

🌐 **Live Site**: [Edu Portal Timetable](https://ramavathrajaram.github.io/edu-portal-timetable/)

---

## ✨ Features

### 👩‍🎓 Frontend (Students / Users)
- 📅 View **timetables** by section and day.
- 📢 Read **announcements** instantly (live updates).
- 🎉 View **events** with images, start/end dates, and status (active/expired).
- 🌙 **Dark/Light mode** toggle.
- 📱 Fully **responsive** for mobile, tablet, and desktop.

### 🔑 Admin Panel
- 🔐 **Firebase Authentication** for secure login.
- ➕ Add/Delete **sections**.
- 🕒 Create/Edit/Delete **timetables**.
- 🎯 Manage **events** with images and schedules.
- 📣 Post/Delete **announcements** in real time.

---

## 🛠️ Tech Stack
| Technology | Usage |
|------------|-------|
| HTML5, CSS3, Tailwind | UI & Styling |
| JavaScript (Vanilla) | Client-side Logic |
| Firebase Realtime Database | Live data storage |
| Firebase Authentication | Admin login security |
| GitHub Pages | Free hosting & deployment |

---

## 🚀 Setup & Installation

### 1️⃣ Prerequisites
- **Git** installed → [Download Git](https://git-scm.com/downloads)
- A **web browser** (Chrome/Firefox/Edge)
- A **Firebase account** → [Firebase Console](https://console.firebase.google.com)

### 2️⃣ Clone the Repository & Configure Firebase
git clone https://github.com/RAMAVATHRAJARAM/edu-portal-timetable.git
cd edu-portal-timetable

Go to Firebase Console and create a project. Then, replace your firebaseConfig in your JavaScript file **firebase-config.js:**

<pre> ```const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID" 
};``` </pre>

### 3️⃣ Run Locally
# Using Python 3
python3 -m http.server 8000
Visit http://localhost:8000

###  Author
Rajaram Ramavath

###
