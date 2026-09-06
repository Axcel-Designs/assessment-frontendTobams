# Tobams Group — Frontend Intern Assessment

A responsive frontend implementation of the **Tobams Group Frontend Intern Assessment**, built from the provided Figma design using **Next.js, TypeScript, and Tailwind CSS**.

The project focuses on translating the supplied design into a clean, maintainable, accessible, and responsive web application while following modern Next.js development practices.

## 🚀 Live Demo

**Live Website:**
<https://frontend-tobams-rho.vercel.app/>

**GitHub Repository:**
<https://github.com/Axcel-Designs/assessment-frontendTobams>

**Figma Design:**
<https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0>

---

## 📖 Project Overview

This project was developed as part of the **Tobams Group Frontend Intern Assessment**.

The objective was to recreate the provided Figma design as a responsive frontend while demonstrating:

* Accurate design implementation
* Responsive development
* Reusable component architecture
* Semantic HTML
* Accessibility considerations
* Optimized image handling
* Clean and maintainable code
* Modern Next.js development practices

The completed application is deployed on **Vercel**.

---

## ✨ Key Features

### 🎨 Design Implementation

The provided Figma design was used as the primary visual reference throughout the implementation.

Attention was given to:

* Typography
* Colors
* Spacing
* Layout
* Component sizing
* Visual hierarchy
* Image placement
* Responsive behavior

### 📱 Responsive Design

The application is designed to provide a consistent experience across the required breakpoints:

| Device  |    Target |
| ------- | --------: |
| Mobile  |   `425px` |
| Tablet  |   `768px` |
| Desktop | `1280px+` |

Tailwind CSS responsive utilities such as `sm:`, `md:`, and `lg:` are used to handle breakpoint-specific layouts.

### 🧩 Reusable Components

The page is divided into logical components rather than being implemented as one large component.

This makes the codebase:

* Easier to understand
* Easier to maintain
* Easier to extend
* More reusable

### ♿ Accessibility

Semantic HTML elements are used throughout the application, including:

* `<header>`
* `<nav>`
* `<main>`
* `<section>`
* `<footer>`
* `<button>`
* `<a>`

Interactive elements are keyboard accessible, and images include meaningful `alt` text where appropriate.

### ⚡ Next.js Features

The project uses several Next.js features, including:

* App Router
* `next/image`
* `next/font`
* TypeScript
* Component-based architecture

---

## 🛠️ Tech Stack

### Core Technologies

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**

### Supporting Libraries

* **React Icons**

### Deployment

* **Vercel**

No CSS framework other than **Tailwind CSS** was used.

No external UI kit or template component library was used.

---

## 📂 Project Structure

```text
assessment-frontendTobams/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── ui/
│   │   └── button.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── LearningManagementSystem.tsx
│   ├── Training.tsx
│   ├── ManagementDevelopmentProgram.tsx
│   ├── TransformationHub.tsx
│   ├── Consultant.tsx
│   ├── BookConsultation.tsx
│   ├── Testimonials.tsx
│   ├── MenuButtons.tsx
│   ├── MenuBar.tsx
│   └── Footer.tsx
│
├── data/
│   └── data.ts
│
├── public/
│   └── images/
│
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

### `app/`

Contains the Next.js App Router entry points, page layout, and global styling.

### `components/`

Contains the individual page sections and reusable UI components.

### `data/`

Contains structured static content used by components, keeping content separate from presentation where appropriate.

### `public/images/`

Contains the image assets used throughout the application.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm

Check your installed versions:

```bash
node -v
npm -v
```

### 1. Clone the Repository

```bash
git clone https://github.com/Axcel-Designs/assessment-frontendTobams.git
```

### 2. Navigate into the Project

```bash
cd assessment-frontendTobams
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open the Application

Visit:

```text
http://localhost:3000
```

---

## 🏗️ Production Build

Create an optimized production build:

```bash
npm run build
```

Run the production application locally:

```bash
npm start
```

---

## 🎯 Design & Technical Decisions

### Figma as the Source of Truth

The provided Figma design was used as the primary reference for the implementation.

The implementation considers:

* Typography
* Colors
* Spacing
* Layout
* Component positioning
* Image sizing
* Responsive behavior

Where the Figma design did not explicitly define behavior for a particular screen size, responsive adjustments were made to preserve usability and maintain the overall visual hierarchy.

### Tailwind CSS

Tailwind CSS utility classes are used throughout the application for styling and responsive behavior.

This provides a consistent styling approach while avoiding unnecessary custom CSS.

### Component Architecture

The page is divided into logical components instead of placing the entire implementation inside `page.tsx`.

Reusable UI elements are kept in their own component files, while repeated content is separated into data structures where appropriate.

### Static Data

Since this assessment focuses primarily on frontend implementation and visual fidelity, the displayed content is represented using static data.

The structure allows the data layer to be replaced with API responses in the future without requiring significant changes to the UI components.

### Responsive Implementation

The implementation uses Tailwind's responsive prefixes:

```text
sm:
md:
lg:
```

No custom media-query workaround was required for the responsive layouts.

---

## 🖼️ Assets & Performance

* Images are rendered using Next.js image optimization where appropriate.
* Fonts are loaded using `next/font`.
* Styling is handled using Tailwind CSS utility classes.
* No unnecessary inline styles are used.
* Static assets are organized within the `public/images` directory.

---

## 🤖 AI Usage Disclosure

**ChatGPT was used during development for minor debugging assistance.**

It was primarily used to help identify and troubleshoot small implementation issues during development.

No AI-generated template or external UI kit was used to build the application.

---

## ⚠️ Known Limitations

This assessment is primarily a static frontend implementation.

Therefore:

* Content is represented using static data.
* Backend/API functionality is outside the scope of the assessment.
* Certain interactions represented visually in the design may not have corresponding backend functionality.
* Responsive behavior was interpreted where the Figma design did not explicitly specify every breakpoint.

---

## ✅ Assessment Checklist

| Requirement                     | Status |
| ------------------------------- | :----: |
| Next.js                         |    ✅   |
| App Router                      |    ✅   |
| TypeScript                      |    ✅   |
| Tailwind CSS                    |    ✅   |
| No additional CSS framework     |    ✅   |
| Responsive — 425px              |    ✅   |
| Responsive — 768px              |    ✅   |
| Responsive — 1280px+            |    ✅   |
| Reusable components             |    ✅   |
| Semantic HTML                   |    ✅   |
| Accessible interactive elements |    ✅   |
| Meaningful image alt text       |    ✅   |
| `next/image`                    |    ✅   |
| `next/font`                     |    ✅   |
| Public GitHub repository        |    ✅   |
| Vercel deployment               |    ✅   |
| Figma reference                 |    ✅   |
| AI usage disclosed              |    ✅   |
| Setup instructions              |    ✅   |
| Design decisions documented     |    ✅   |
| Known limitations documented    |    ✅   |

---

## 🔗 Important Links

**Live Application**
<https://frontend-tobams-rho.vercel.app/>

**Source Code**
<https://github.com/Axcel-Designs/assessment-frontendTobams>

**Figma Design**
<https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0>

---

## 👨‍💻 Author

### Acha Kelechi Excel

Frontend Developer

**GitHub:**
<https://github.com/Axcel-Designs>

---

## 📄 About the Assessment

This project was completed as part of the **Tobams Group Frontend Intern Assessment**.

The implementation demonstrates a focus on **design accuracy, responsive development, reusable React components, accessibility, performance, and maintainable code**.

**Built with Next.js + TypeScript + Tailwind CSS.**
