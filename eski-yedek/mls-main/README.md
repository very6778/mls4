# MillerSan - Next.js Industrial Website

A modern, responsive industrial website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 14** with App Router for optimal performance
- **TypeScript** for type safety and better development experience
- **Tailwind CSS** for modern, responsive styling
- **Radix UI** components for accessible UI elements
- **Next.js Image** optimization for better performance
- **SEO optimized** with proper meta tags and structured data
- **Responsive design** that works on all devices
- **Modern industrial design** with professional aesthetics

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image
- **Fonts**: Google Fonts (Manrope, Inter)

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd millersan-nextjs
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── components/
│   ├── sections/          # Page sections
│   │   ├── IntroductionSection.tsx
│   │   └── ProductShowcaseSection.tsx
│   └── ui/                # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── navigation-menu.tsx
│       └── ...
└── lib/
    └── utils.ts           # Utility functions
```

## 🎨 Design System

The project uses a comprehensive design system with:

- **Custom CSS Variables** for consistent theming
- **Typography Scale** with Manrope and Inter fonts
- **Color Palette** with primary, secondary, and semantic colors
- **Spacing System** based on 8px grid
- **Component Variants** using class-variance-authority

## 📱 Responsive Design

The website is fully responsive with:

- **Mobile-first approach**
- **Flexible grid layouts**
- **Optimized images** with Next.js Image component
- **Touch-friendly interactions**
- **Accessible navigation**

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌟 Key Features

### Performance Optimizations
- **Next.js Image** for automatic image optimization
- **Font optimization** with Google Fonts
- **Code splitting** with App Router
- **Static generation** where possible

### SEO & Accessibility
- **Semantic HTML** structure
- **Meta tags** for social sharing
- **Alt text** for all images
- **Keyboard navigation** support
- **Screen reader** compatibility

### Modern Development
- **TypeScript** for type safety
- **ESLint** for code quality
- **Tailwind CSS** for rapid styling
- **Component-based** architecture

## 🚀 Deployment

The application can be deployed to any platform that supports Next.js:

### Vercel (Recommended)
```bash
npm run build
```

### Other Platforms
1. Build the application: `npm run build`
2. Start the production server: `npm run start`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, please contact the development team or create an issue in the repository.

---

Built with ❤️ using Next.js and modern web technologies.