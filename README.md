# 🧠 Classroom.AI – The Future of Interactive Learning

Welcome to **Classroom.AI**, your smart classroom assistant powered by multimodal AI!
Imagine a platform where students can complete classroom tasks using **text, voice, or images**, interact with an AI tutor, and store all their work in one personalized dashboard — that’s what we built.

> “Classroom.AI is not just a tool, it's a learning companion.” 📚✨

---

## 📌 Problem Statement

Modern classrooms often lack a centralized system where students can:

* Ask academic questions in natural language
* Complete assignments using AI (writing, summarizing, coding)
* Use voice or images to interact with AI
* Save and organize their generated content securely

⚠️ This leads to fragmented learning and productivity issues.
✅ **Classroom.AI** solves this by offering an all-in-one educational assistant — a platform that understands **text, voice, and visuals**, while storing content under a secure, student-specific dashboard.

---

## 💥 Impact

* Saves time by assisting with notes, essays, and summaries
* Empowers students to learn independently through an AI tutor
* Supports multimodal input: **Text, Voice, Image**
* Stores all outputs in user-specific folders for later review
* Enhances accessibility and self-paced learning

---

## 🔗 Live Links

* 🌐 **Live Website:** [Classroom.AI on Netlify](#)
* 🔁 **Backend API:** [Flask Render App](#)


---

## 🧠 Features

| Category          | Tools                                                         |
| ----------------- | ------------------------------------------------------------- |
| ✍️ Text Tools     | Essay Writer, Notes Generator, Summarizer, Question Answering |
| 🎨 Visual Tools   | Image QnA (Ask about diagrams), OCR Scanner                   |
| 🎤 Audio Tools    | Voice Assistant                                                |
| 💻 Coding Tools   | Code Generator, Code Debugger, Code Explainer                 |
| 📂 Dashboard      | Save content into folders, Rename/Delete/Organize             |
| 🔐 Auth & Profile | Google Sign-In, Profile Editing                               |
| 💡 UI Experience  | Clean, dark-themed interface                                  |

---

## 💻 Technical Overview

### ⚛️ Frontend (HTML + Tailwind CSS + JS)

* Responsive dark UI with **Tailwind CSS**
* ChatGPT-style chat interfaces
* Individual tool pages with chat bubbles and save buttons
* Reusable modals for save, edit, and project creation

### 🧠 Backend (Flask + AI Models)

* Uses **Flan-T5** or **Gemini** models for NLP tasks
* Handles AI queries for summaries, answers, and essay generation
* Voice features powered by Web Speech API
* Visual features (OCR/ImageQnA) powered by multimodal APIs

### 🔥 Firebase Integration

* Firebase Auth: Google Sign-In and Email/Password
* Firestore Database to store:

  * Folder structures
  * Files inside folders
  * User profile info
* Real-time sync and CRUD operations

### 🚀 Deployment

* Frontend: **Netlify**
* Backend: **Render** (Flask API)
* Authentication + DB: **Firebase**

---




---

## 📸 Screenshots

Include images of:

* ✅ Essay Writer tool in action
  <img width="1909" height="865" alt="image" src="https://github.com/user-attachments/assets/520bfffe-1d32-4f5a-baf1-09cfab744fb5" />

* ✅ Dashboard showing folders and saved files
* ✅ Profile edit modal or create folder popup

---

## 🧪 Local Setup

```bash
# Clone the repository
$ git clone https://github.com/Aditya2005-ai/Classroom-AI.git
$ cd Classroom-AI

# Frontend (open any HTML file in browser)
Open home.html or dashboard.html directly in a browser

# Backend (Flask API)
$ cd backend
$ pip install -r requirements.txt
$ python connect_api.py
```

---

## 🧾 Business Model

### 🎯 Freemium Access

* Limited daily usage for free users
* Premium plan for unlimited access to tools

### 📢 Ads & Affiliates

* EdTech promotions inside dashboard UI (non-intrusive)

### 🏫 Institutional Plans

* Offer Classroom.AI to schools for a yearly subscription
* Teachers get monitoring and assignment tools

---

## 📈 Future Roadmap

* 📊 User analytics dashboard
* 🧑‍🏫 Teacher Mode with assignment review
* 🗣️ Multilingual support
* 👫 Collaborative learning (real-time group tools)
* 📡 Offline file access (saved locally)

---

## 🤝 Contribution

We welcome all contributors! 🚀
Fork this repo, make improvements, and submit a PR.

```bash
git clone https://github.com/Aditya2005-ai/Classroom-AI.git
cd Classroom-AI
```

---

## 📬 Contact

**Aditya Singh** – Project Lead
📧 Email: [adityakrsingh454@gmail.com](mailto:adityakrsingh454@gmail.com)
🐙 GitHub: [Aditya2005-ai](https://github.com/Aditya2005-ai)

> "Empowering classrooms with the future of learning – AI."
> — Made with ❤️ by Classroom.AI
