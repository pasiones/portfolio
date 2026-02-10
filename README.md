# Portfolio Website

A modern, responsive portfolio website built with React, featuring smooth animations, a clean design, and a comprehensive showcase of skills, projects, and experience.

## 🚀 Technologies Used

- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Framer Motion** - Smooth, professional animations
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library with Font Awesome and Simple Icons

## ✨ Features

- **Responsive Design** - Fully responsive across all device sizes
- **Smooth Animations** - Scroll-triggered animations using Framer Motion
- **Dark Mode Support** - Automatic dark mode based on system preferences
- **Interactive Skills Section** - Filterable skills by category (Frontend, Backend, DevOps & Tools)
- **Project Showcase** - Highlight your best work with project cards
- **Experience Timeline** - Display your professional journey
- **Contact Section** - Easy ways for visitors to reach you
- **Scroll-to-Top Button** - Smooth navigation back to the top
- **Sticky Navigation** - Always-accessible header with smooth scroll

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Sticky navigation header
│   │   ├── HeroSection.jsx      # Landing section
│   │   ├── SkillsSection.jsx    # Filterable skills grid
│   │   ├── ProjectsSection.jsx  # Project showcase
│   │   ├── ExperienceSection.jsx # Career timeline
│   │   ├── ContactSection.jsx   # Contact information
│   │   ├── Footer.jsx           # Footer component
│   │   ├── ScrollToTop.jsx      # Scroll-to-top button
│   │   └── AnimatedSection.jsx  # Reusable animation wrapper
│   ├── constants/
│   │   ├── data.js              # Portfolio content data
│   │   └── animations.js        # Framer Motion variants
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   ├── index.html               # HTML template
│   ├── index.css                # Tailwind directives
│   └── styles.css               # Custom styles
├── package.json
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind configuration
└── postcss.config.js            # PostCSS configuration
```

## 🎨 Customization

### Update Your Information

Edit the content in `src/constants/data.js`:

- **SKILLS_DATA** - Your technical skills with icons
- **PROJECTS_DATA** - Your featured projects
- **EXPERIENCE_DATA** - Your work experience
- **ACCENT_COLOR** - Theme accent color (default: GitHub Green #238636)

### Modify Animations

Edit animation variants in `src/constants/animations.js`:

- `fadeInUp` - Fade in from bottom
- `fadeInDown` - Fade in from top
- `staggerContainer` - Stagger child animations
- `scaleIn` - Scale in animation

### Styling

- **Tailwind utilities** - Modify className props in components
- **Custom CSS** - Edit `src/styles.css` for global styles
- **Colors** - Update accent color in `src/constants/data.js` and `src/styles.css`

## 📧 Contact Information

Update your contact details in `src/components/ContactSection.jsx`:

- Email address
- GitHub profile
- LinkedIn profile

## 🌐 Deployment

This project can be deployed to various platforms:

- **Vercel** - `vercel deploy`
- **Netlify** - Drag and drop the `dist` folder
- **GitHub Pages** - Use `gh-pages` package
- **Any static hosting** - Upload the `dist` folder contents

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

---

Built with ❤️ using React and Vite
