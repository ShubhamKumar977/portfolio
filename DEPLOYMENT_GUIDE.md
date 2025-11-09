# Deployment Guide - Shubham Kumar Gupta Portfolio

## 📋 Pre-Deployment Checklist

✅ Portfolio website created with all your information
✅ Resume PDF generated and ready for download
✅ All files properly configured
✅ .gitignore set up to exclude private files

## 🚀 Deploy to GitHub Pages

### Step 1: Initialize Git Repository

Open your terminal in this folder and run:

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named: `shubhamkgupta.github.io`
3. **Do NOT** initialize with README, .gitignore, or license
4. Click "Create repository"

### Step 3: Push to GitHub

```bash
git remote add origin https://github.com/shubhamkgupta/shubhamkgupta.github.io.git
git push -u origin main
```

### Step 4: Access Your Live Site

Your portfolio will be automatically published at:
**https://shubhamkgupta.github.io**

It may take 1-2 minutes for the site to go live after your first push.

## 📝 Making Updates

### Update Portfolio Content

1. Edit `index.html` with your changes
2. Commit and push:
```bash
git add .
git commit -m "Update portfolio content"
git push
```

### Update Resume

1. Edit `resume.html` with your changes
2. Regenerate PDF:
   - Open `resume.html` in Chrome
   - Press `Ctrl+P` → Save as PDF
   - Save as `Shubham_Kumar_Gupta_Resume.pdf`
3. Commit and push:
```bash
git add Shubham_Kumar_Gupta_Resume.pdf
git commit -m "Update resume"
git push
```

## 🔧 Troubleshooting

### Site Not Loading
- Wait 2-3 minutes after first push
- Check GitHub repository Settings → Pages
- Ensure the source is set to "main" branch

### Resume Download Not Working
- Ensure `Shubham_Kumar_Gupta_Resume.pdf` is in the root directory
- Check that the file is committed to git
- Verify the link in `index.html` matches the filename exactly

### Changes Not Appearing
- Clear your browser cache (Ctrl+Shift+R)
- Wait a few minutes for GitHub Pages to rebuild
- Check that you pushed your changes: `git status`

## 📧 Need Help?

If you encounter any issues, check:
1. GitHub Pages documentation: https://pages.github.com/
2. Your repository settings on GitHub
3. Browser console for any errors (F12)

## 🎉 You're All Set!

Your professional portfolio is ready to share with the world. Good luck with your job search and networking!
