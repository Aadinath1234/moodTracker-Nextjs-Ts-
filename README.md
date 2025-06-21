# 🧠 Emotion Check-In – Mood Tracker App

A smooth and responsive mood tracking web application built using **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.
Users can log their emotional state, add contextual notes, visualize trends, set reminders, and now **securely log in** to access their personalized dashboard.

**Designed and Developed for**: Svadhyay Sourcing
🌐 **Live Demo**: [https://mood-trackerr.vercel.app](https://mood-trackerr.vercel.app)

---

## 🛠 Tech Stack

| Layer            | Tools Used                            |
| ---------------- | ------------------------------------- |
| Framework        | Next.js (TypeScript)                  |
| Styling          | Tailwind CSS                          |
| Animations       | Framer Motion                         |
| Authentication   | JWT + LocalStorage (custom auth flow) |
| API              | Axios + JSONPlaceholder (Mock API)    |
| Charts           | Recharts, react-calendar              |
| State Management | React Context API                     |

---

## 🚀 Getting Started

```bash
git clone https://github.com/Aadinath1234/moodTracker-Nextjs-Ts-.git
cd moodtracker
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
Directory structure:
└── aadinath1234-moodtracker-nextjs-ts-/
    ├── README.md
    ├── components.json
    ├── eslint.config.mjs
    ├── next.config.ts
    ├── package.json
    ├── postcss.config.mjs
    ├── tsconfig.json
    └── src/
        ├── components/
        │   ├── CalenderMoodView.tsx
        │   ├── EmotionSelector.tsx
        │   ├── MoodIntensitySelector.tsx
        │   ├── MoodOption.tsx
        │   ├── NotesInput.tsx
        │   ├── ReminderForm.tsx
        │   ├── withAuth.tsx
        │   ├── withRedirectIfAuth.tsx
        │   ├── Homepage/
        │   │   ├── Homepage.tsx
        │   │   ├── About/
        │   │   │   └── About.tsx
        │   │   ├── Cards/
        │   │   │   └── Cards.tsx
        │   │   ├── Footer/
        │   │   │   └── Footer.tsx
        │   │   ├── Hero/
        │   │   │   └── Hero.tsx
        │   │   ├── Navbar/
        │   │   │   └── Navbar.tsx
        │   │   └── Services/
        │   │       └── Services.tsx
        │   ├── Login/
        │   │   └── Login.tsx
        │   └── ui/
        │       ├── accordion.tsx
        │       ├── button.tsx
        │       ├── card.tsx
        │       ├── carousel.tsx
        │       └── navigation-menu.tsx
        ├── context/
        │   └── MoodContext.tsx
        ├── lib/
        │   ├── db.ts
        │   ├── users.ts
        │   └── utils.ts
        ├── pages/
        │   ├── _app.tsx
        │   ├── _document.tsx
        │   ├── About.tsx
        │   ├── ActivityInput.tsx
        │   ├── Contact.tsx
        │   ├── Dashboard.tsx
        │   ├── Home.tsx
        │   ├── Homepage.tsx
        │   ├── index.tsx
        │   ├── login.tsx
        │   ├── MoodSelect.tsx
        │   ├── Summary.tsx
        │   └── api/
        │       ├── api.ts
        │       ├── auth.ts
        │       ├── hello.ts
        │       ├── realApi.ts
        │       └── auth/
        │           ├── login.ts
        │           └── register.ts
        ├── styles/
        │   └── globals.css
        └── types/
            └── MoodEntry.ts

---

## 🔄  Feature Flow

1. Home → `/` (Public)
2. Login / Register → `/login`, `/register`
3. Start Check-In → `/start`
4. Select Mood + Intensity → `/mood`
5. Add Notes → `/activity`
6. Confirm & Submit → `/summary`
7. Dashboard & Reminders → `/dashboard`
8. Logout → Redirects to `/`

---

## 🧠 Features

### ✅ Authentication (NEW!)

* Users must **log in or register** to track moods.
* Credentials stored securely with mock JWT flow.
* Auth state persisted via `localStorage`.
* Access to `/start`, `/mood`, etc., gated via context-based route protection.

### ✅ Emotion Check-In

* Select from animated, predefined emotions.
* Choose intensity (Slight, Moderate, Strong).
* Micro-interactions powered by Framer Motion.

### 📝 Notes Input

* Optional 500-character journaling input.
* Real-time character counter and validation.

### 📤 Mock API Submission

POST to `https://jsonplaceholder.typicode.com/posts`

```json
{
  "emotion": "Happy",
  "intensity": "Moderate",
  "notes": "Had a great day!",
  "timestamp": "2025-06-16T12:45:00Z"
}
```

### 📊 Dashboard

* Calendar-based monthly mood view.
* Bar chart showing emotion frequency.
* Reminders saved in `localStorage`.

---

## ⚙️ Performance & Accessibility

* **Responsive**: Mobile, tablet, and desktop.
* **Lighthouse Score** ≥ 85
* **Accessible**: Semantic HTML, keyboard navigable, ARIA-supported.

---

## 🧪 Testing & Compatibility

* Tested in Chrome and Firefox (latest).
* Form validation, loading states, and error handling covered.

---

## 📃 Key Design Decisions

* **Next.js + TypeScript**: Scalable architecture with SSR benefits.
* **Tailwind CSS**: Rapid styling and consistency.
* **Framer Motion**: Seamless animations with performance optimizations.
* **Context API**: Lightweight global state for mood + auth data.

---


