# Shubham Kumar Gupta - Portfolio Website

A modern, responsive portfolio website showcasing my professional experience, skills, and projects. Built with HTML, CSS, and JavaScript, ready for GitHub Pages hosting.

## 🚀 Quick Start

### Viewing Locally

Simply open `index.html` in your web browser to view the portfolio locally.

### Customizing Further

1. **Update colors** in `styles.css`:
   - Edit the CSS variables in `:root` to match your preferred color scheme

2. **Add more projects or experience**:
   - Follow the existing HTML structure in `index.html`
   - Copy and modify existing sections as needed

## 📦 Deploying to GitHub Pages

### Method 1: Using GitHub User Pages (Recommended)

1. Create a new repository on GitHub named `shubhamkgupta.github.io`
2. Push your code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/shubhamkgupta/shubhamkgupta.github.io.git
   git push -u origin main
   ```
3. Your site will be automatically available at `https://shubhamkgupta.github.io`

### Method 2: Using a Project Repository

1. Create a new repository with any name (e.g., `portfolio`)
2. Push your code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/shubhamkgupta/portfolio.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Under "Source", select the `main` branch
5. Click Save
6. Your site will be available at `https://shubhamkgupta.github.io/portfolio`

## 📁 File Structure

```
portfolio/
├── index.html                          # Main HTML file with all content
├── styles.css                          # Stylesheet with responsive design
├── script.js                           # JavaScript for interactions and animations
├── Shubham_Kumar_Gupta_Resume.pdf     # Downloadable resume PDF
├── resume.html                         # Resume HTML template (for regenerating PDF)
├── shubhams_updated_resume.pdf        # Original resume (not tracked in git)
├── .gitignore                          # Git ignore file
└── README.md                           # This file
```

## ✨ Features

- Fully responsive design
- Smooth scrolling navigation
- Animated sections on scroll
- Mobile-friendly hamburger menu
- Professional timeline for experience
- Grid layouts for education, skills, and projects
- Social media integration
- Downloadable PDF resume
- Clean and modern design

## 🎨 Customization Tips

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2c3e50;      /* Main text and headings */
    --secondary-color: #3498db;    /* Links and accents */
    --accent-color: #e74c3c;       /* Highlights */
}
```

### Regenerating the Resume PDF
If you update your resume content:
1. Edit `resume.html` with your changes
2. Open `resume.html` in Chrome or Edge
3. Press `Ctrl+P` (or `Cmd+P` on Mac)
4. Select "Save as PDF"
5. Save as `Shubham_Kumar_Gupta_Resume.pdf`

Or use the automated command (requires Chrome):
```powershell
& "C:\Program Files\Google\Chrome\Application\chrome.exe" --headless --disable-gpu --print-to-pdf="Shubham_Kumar_Gupta_Resume.pdf" --no-margins "resume.html"
```

### Adding More Sections
Copy any section from `index.html` and modify the content. Don't forget to:
1. Add a navigation link in the navbar
2. Give the section a unique `id`

### Changing Fonts
Replace the font-family in `styles.css` or add Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

Feel free to use this template for your personal portfolio!

## 🤝 Need Help?

If you encounter any issues or need help customizing your portfolio, feel free to reach out or check GitHub Pages documentation at https://pages.github.com/
