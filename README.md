# 🍽️ SEA Catering

> **"Healthy Meals, Anytime, Anywhere"**

A modern, responsive web application for SEA Catering - a customizable healthy meal service with delivery across Indonesia. Built with React, TypeScript, and Vite for optimal performance and user experience.

![SEA Catering](https://placehold.co/800x400/667eea/white?text=SEA+Catering+Website)

## 🌟 Features

### 🎯 **Core Functionality**

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Menu** - Browse 6 different meal plans with detailed pricing
- **Subscription System** - Complete subscription flow with plan selection
- **Customer Testimonials** - Real-time testimonial submission and display
- **Contact Forms** - Multiple contact methods with form validation

### 🚀 **Technical Features**

- **React 18** with TypeScript for type safety
- **React Router** for client-side navigation
- **Responsive CSS Grid & Flexbox** layouts
- **Mobile-First Design** approach
- **Vercel Speed Insights** for performance monitoring
- **SEO-Friendly** routing structure

## 🏗️ **Project Structure**

```
sea-catering/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Contact.tsx      # Contact page with form and info
│   │   ├── Homepage.tsx     # Landing page with hero section
│   │   ├── Menu.tsx         # Meal plans showcase
│   │   ├── Navbar.tsx       # Navigation component
│   │   ├── Subscription.tsx # Subscription plans and signup
│   │   └── Testimonials.tsx # Customer reviews system
│   ├── App.css             # Main stylesheet
│   ├── App.tsx             # Main app component with routing
│   ├── index.css           # Global styles
│   └── main.tsx            # Application entry point
├── vercel.json             # Vercel deployment configuration
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🚀 **Getting Started**

### **Prerequisites**

Make sure you have the following installed on your system:

- **Node.js** (version 22.0)
- **npm** package manager
- **Git** for version control

### **Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/darrenjo/sea-catering.git
   cd sea-catering
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

## 📦 **Available Scripts**

| Script            | Description                                    |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Starts the development server with hot reload  |
| `npm run build`   | Builds the app for production to `dist` folder |
| `npm run preview` | Preview the production build locally           |
| `npm run lint`    | Run ESLint to check code quality               |

## 🎨 **Customization**

### **Styling**

- All styles are contained in `src/App.css`
- Uses CSS custom properties for easy theme customization
- Mobile-first responsive design with breakpoints:
  - Mobile: `≤ 767px`
  - Tablet: `768px - 1023px`
  - Desktop: `≥ 1024px`

### **Content**

- Meal plans can be modified in `src/components/Menu.tsx`
- Contact information is in `src/components/Contact.tsx`
- Hero content is in `src/components/Homepage.tsx`

### **Colors & Branding**

Main brand colors used throughout the application:

- **Primary Gradient**: `#667eea` to `#764ba2`
- **Secondary Gradient**: `#ffecd2` to `#fcb69f`
- **Background**: `#f8f9fa`
- **Text**: `#333` and `#555`

## 📱 **Pages Overview**

| Page             | Route           | Description                                     |
| ---------------- | --------------- | ----------------------------------------------- |
| **Homepage**     | `/`             | Landing page with hero section and key features |
| **Menu**         | `/menu`         | Display of 6 meal plans with pricing            |
| **Subscription** | `/subscription` | Three-tier subscription plans with signup       |
| **Testimonials** | `/testimonials` | Customer reviews with submission form           |
| **Contact**      | `/contact`      | Contact information and inquiry form            |

## 🛠️ **Built With**

### **Core Technologies**

- **React 18** - JavaScript library for building user interfaces
- **TypeScript** - Typed superset of JavaScript
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing for React

### **Development Tools**

- **ESLint** - Code linting and quality checks
- **Vercel Speed Insights** - Performance monitoring

### **Styling**

- **CSS3** with Flexbox and Grid
- **CSS Custom Properties** for theming
- **Responsive Design** principles
