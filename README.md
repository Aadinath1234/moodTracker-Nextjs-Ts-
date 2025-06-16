
# 🧠 Emotion Check-In – Mood Tracker App

A smooth and responsive mood tracking web application built using **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. It allows users to log their emotional state, add contextual notes, visualize trends, and set reminders — with animations. 🌐 Live Demo: https://mood-trackerr.vercel.app

---

---

## 🛠 Tech Stack

| Layer            | Tools Used                               |
|------------------|-------------------------------------------|
| Framework        | Next.js (TypeScript)                      |
| Styling          | Tailwind CSS                              |
| Animations       | Framer Motion                             |
| API              | Axios + JSONPlaceholder (Mock API)        |
| Charts           | Recharts, react-calendar                  |
| State Management | React Context API                         |


---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Aadinath1234/moodTracker-Nextjs-Ts-.git
cd moodtracker
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
/src
  /pages
    index.tsx              // Start Check-in
    mood.tsx               // Mood + Intensity selection
    activity.tsx           // Journaling input
    summary.tsx            // Summary & submit
    dashboard.tsx          // Mood dashboard + reminders

  /components
    EmotionSelector.tsx
    MoodIntensitySelector.tsx
    NotesInput.tsx
    CalendarMoodView.tsx
    ReminderForm.tsx

  /context
    MoodContext.tsx        // Global mood state

  /api
    api.ts                 // Axios mock API handler
```

---

## 🔄 Feature Flow

1. **Start Check-In** → `/`
2. **Select Mood + Intensity** → `/mood`
3. **Add Journal Notes** → `/activity`
4. **Confirm & Submit** → `/summary`
5. **Dashboard View** → `/dashboard`

---

## 🧠 Features

### ✅ Emotion Check-In

* Select from predefined emotions (animated cards).
* Choose intensity (Slight, Moderate, Strong).
* Smooth micro-interactions via Framer Motion.

### 📝 Notes Input

* Optional text area (max 500 characters).
* Character counter with validation.

### 📤 Mock API Submission

* POST data to `https://jsonplaceholder.typicode.com/posts`.
* Shows loading, success, or error states.
* Payload:

```json
{
  "emotion": "Happy",
  "intensity": "Moderate",
  "notes": "Had a great day!",
  "timestamp": "2025-06-16T12:45:00Z"
}
```

### 📊 Dashboard

* Monthly calendar of moods.
* Frequency bar chart.
* Reminder form with localStorage support.

---

## ⚙️ Performance & Accessibility

* Responsive (desktop ≥ 1024px)
* Lighthouse score ≥ 85 (Performance)
* Semantic HTML & keyboard navigable
* ARIA labels for better accessibility

---

## 🧪 Testing & Compatibility

* Tested on: Chrome, Firefox (latest)
* Basic form validation and submission states tested

---

## 📃 Brief Write-Up

### Key Decisions:

* **Next.js + TypeScript** for scalability and routing.
* **Tailwind CSS** for rapid and responsive styling.
* **Framer Motion** for lightweight, fluid animations.
* **Context API** instead of Redux to keep state management lightweight.

### Challenges:

* Maintaining mood selection and notes across pages without prop drilling.
  ✅ Resolved using a global `MoodContext`.

* Ensuring smooth animations with performance.
  ✅ Used `layoutId` transitions and staggered animations from Framer Motion.

### Trade-offs:

* Using mock API instead of persistent DB limits data retention.
* Could improve with persistent login/auth for long-term analytics.

