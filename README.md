# 🛍️ DevStore

A modern e-commerce application built with Next.js 14, Tailwind CSS, and TypeScript, offering a smooth shopping experience.

![DevStore Demo](./public/demo.gif)
<!-- Add your application demo GIF here -->

## ✨ Features

- 🎨 **Modern Design**: Clean and responsive interface with Tailwind CSS
- ⚡ **Optimized Performance**: Fast loading with Next.js 14 and App Router
- 🔍 **Intuitive Navigation**: Dynamic routing system for products
- 💰 **Price Formatting**: Prices formatted in Brazilian Real (BRL)
- 📱 **Mobile First**: Fully responsive for all devices
- 🎭 **Loading States**: Skeleton screens for better UX
- 🧪 **E2E Testing**: Implemented with Cypress

## 🚀 Technologies Used

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Testing**: [Cypress](https://www.cypress.io/)
- **Linting**: [ESLint](https://eslint.org/)
- **Deployment**: [Vercel](https://vercel.com/)

<p align="center">
    <img src="./public/devstore.gif" width="100%" alt="system-working-gif">
</p>

## 🏗️ Project Structure

```
src/
├── app/
│   ├── (store)/
│   │   ├── (home)/           # Home page
│   │   └── product/[slug]/   # Product pages
│   ├── api/
│   │   └── products/         # Products API
│   ├── globals.css           # Global styles
│   └── layout.tsx            # Main layout
├── components/               # Reusable components
└── env.ts                   # Environment configuration
```

## 🛠️ Installation and Setup

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/devstore.git
   cd devstore
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.local.example .env.local
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Access the application**
   
   Open [http://localhost:3000](http://localhost:3000) in your browser

## 🧪 Running Tests

### E2E Tests with Cypress

```bash
# Run tests in headless mode
npm run cypress:run

# Run tests in interactive mode
npm run cypress:open
```

## 📦 Build and Deploy

### Local Build

```bash
npm run build
npm start
```

### Deploy to Vercel

The easiest deployment is through [Vercel Platform](https://vercel.com/new):

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Automatic deployment

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🤝 Contributing

Contributions are always welcome! To contribute:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 👨‍💻 Author

Made with ❤️ by Pedro Olegário (https://github.com/PPedrosouza)

---

⭐ If this project helped you, consider giving it a star!