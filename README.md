# ArsAI

### AI-Driven Market Linkage and Smart Cataloging Platform for Marginalized Artisans

ArsAI is an AI-powered digital platform designed to help marginalized and traditional Indian artisans create professional product catalogs, discover fair market prices, and connect directly with potential buyers.

The platform simplifies digital catalog creation through **photo, voice, text, and touch-based inputs**, making it accessible even to artisans with limited digital literacy.

---

## 🎯 Problem

Many traditional and marginalized artisans face challenges such as:

- Limited access to digital marketplaces
- Difficulty creating professional product catalogs
- Lack of reliable market-price information
- Language and digital-literacy barriers
- Dependence on intermediaries
- Difficulty reaching urban and B2B buyers

---

## 💡 Solution

ArsAI provides a unified platform where artisans can:

1. Upload or capture a photo of their craft.
2. Describe their product using voice, text, or touch.
3. Use AI to analyze and generate product information.
4. Get an AI-assisted fair-price estimate.
5. Create a professional digital product catalog.
6. Connect directly with potential buyers.

Buyers can discover artisans and their products through a searchable marketplace.

---

## ✨ Key Features

### For Artisans

- 📸 Photo-based product input
- 🎙️ Voice-based product description
- 📝 Text-based input
- 🌐 Multilingual interface
- 🤖 AI-powered catalog generation
- 💰 AI-assisted fair pricing
- 📱 Mobile-first artisan interface
- 📋 Digital product catalog
- 📞 Direct buyer inquiries

### For Buyers

- 🛍️ Artisan marketplace
- 🔎 Product discovery
- 👨‍🎨 Artisan profiles
- 📞 Direct contact/inquiry
- 🛒 Shopping and order flow

### For Administrators

- 👤 Artisan management
- 📦 Product management
- 📊 Marketplace statistics
- ✅ Product status management

---

## 🤖 AI Capabilities

ArsAI uses Google's Gemini AI to assist with:

- Craft/product identification
- Product description generation
- Catalog information extraction
- Craft categorization
- Market-aware pricing assistance

The system is designed to avoid fabricating certifications or geographical indications (GI tags).

---

## 🛠️ Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend

- Next.js API Routes
- Prisma ORM
- SQLite

### AI

- Google Gemini API

### Development

- Node.js
- npm
- Git & GitHub

---

## 🏗️ Architecture

```text
Artisan
   │
   ├── Photo
   ├── Voice
   ├── Text
   └── Touch
          │
          ▼
   Multi-Input Processing
          │
          ▼
      AI Processing
      (Gemini)
          │
          ├── Product Analysis
          ├── Catalog Generation
          └── Fair Price Assistance
          │
          ▼
    Digital Catalog
          │
          ▼
   ArsAI Marketplace
          │
          ▼
        Buyers
```

---

## 🚀 Getting Started

To run ArsAI on your local machine:

### 1. Clone the repository

```bash
git clone https://github.com/17suhass/ArsAI.git
cd ArsAI
```

### 2. Install the required packages

```bash
npm install
```

### 3. Set up the Gemini API key

Create a `.env.local` file in the project folder and add your Gemini API key:

```env
GEMINI_API_KEY=your_gemini_api_key
```

**Do not commit your real API key to GitHub.**

### 4. Set up the database

```bash
npx prisma db push
```

### 5. Add the sample data

```bash
node prisma/seed.js
```

### 6. Start the application

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

## 📁 Project Structure

```text
ArsAI/
├── prisma/          Database schema and seed files
├── public/          Images, logos and static assets
├── scripts/          Testing and utility scripts
├── src/
│   ├── app/         Pages and API routes
│   ├── components/  Reusable UI components
│   ├── context/     Application contexts
│   └── lib/         AI, database and utility functions
├── .gitignore
├── package.json
└── README.md
```

---

## 🎓 Smart India Hackathon

ArsAI was developed for **Smart India Hackathon**.

**Problem Statement:** SIH26090

**AI-Driven Market Linkage and Smart Cataloging Mobile Application for Marginalized Artisans**

The project focuses on using AI and digital technology to make it easier for traditional artisans to showcase their work, create digital catalogs, get pricing assistance, and connect with buyers.

---

## 👥 Team

**ArsAI Team**

Built for Smart India Hackathon.

---

## 📄 LICENSE

This project is licensed under the MIT License.
