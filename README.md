# EventEase - Modern Event Booking Website 🎉

## ✨ Redesign Improvements

### Visual Enhancements
- **Gradient Backgrounds**: Modern gradient color schemes with animated transitions
- **Smooth Animations**: 20+ different keyframe animations for every element
  - Fade In/Out animations
  - Slide and bounce effects
  - Floating and pulsing animations
  - Gradient rotations
  
### Color Scheme (CSS Variables)
- Primary: `#ff006e` (Hot Pink)
- Secondary: `#8338ec` (Purple)
- Tertiary: `#3a86ff` (Blue)
- Accent: `#fb5607` (Orange)

### Key Features Added

#### 1. **Advanced Animations**
- Hero section with particle effects and floating backgrounds
- Card hover animations with scale and glow effects
- Button animations with ripple effects
- Scroll-triggered animations for elements
- Smooth transitions on all interactive elements

#### 2. **Interactive Elements**
- Particle effects on button clicks
- Ripple animation on button interactions
- Parallax scrolling effects
- Smooth scroll navigation
- Scroll-to-top button with rotation effects
- Hamburger mobile menu

#### 3. **Enhanced Modal**
- Smooth backdrop blur effect
- Animated form inputs with icon indicators
- Success message animation
- Form validation feedback

#### 4. **Search Functionality**
- Real-time event filtering
- Category and text search support
- Animated display/hide of results

#### 5. **Form Improvements**
- Styled form groups with icons
- Input focus animations
- Visual feedback on submission
- Error/success state handling

#### 6. **Responsive Design**
- Mobile-friendly hamburger menu
- Tablet and mobile breakpoints
- Flexible grid layouts
- Optimized touch targets

#### 7. **Performance Features**
- Backdrop blur effects
- Hardware-accelerated transforms
- Intersection Observer for lazy animation loading
- Smooth 60fps animations

### Animation List
1. `fadeInDown` - Elements fade in from top
2. `fadeInUp` - Elements fade in from bottom
3. `slideInLeft` - Slide from left side
4. `slideInRight` - Slide from right side
5. `bounce` - Bouncing effect
6. `pulse` - Pulsing scale animation
7. `float` - Floating effect
8. `glow` - Glowing shadow effect
9. `shimmer` - Shimmer effect
10. `rotateGradient` - Rotating gradient
11. `particles` - Particle animation
12. `gradient` - Animated gradient
13. `ripple-animation` - Button ripple effect

### Interactive Features
- **Particle Effects**: Click buttons to see particle bursts
- **Ripple Effect**: Smooth ripple waves on button clicks
- **Parallax Scrolling**: Background moves with scroll
- **Custom Alerts**: Styled notification system
- **Smooth Scrolling**: All navigation links use smooth scroll
- **Keyboard Shortcuts**: Press ESC to close modal

### Browser Compatibility
- Modern browsers with CSS Grid, Flexbox, and CSS Variables
- Backdrop-filter support for blur effects
- Intersection Observer API for scroll animations

### File Sizes
- HTML: ~10KB
- CSS: ~17KB (includes all animations)
- JavaScript: ~11KB (interactive features)

## Usage Instructions

1. Open `index.html` in a modern web browser
2. Navigate using the header menu or scroll
3. Search for events using the search bar
4. Click "Book Now" on any event card
5. Fill in the booking form and confirm
6. Contact form and social links available

## Customization

To modify colors, update CSS variables in `style.css`:
```css
:root {
  --primary-color: #ff006e;
  --secondary-color: #8338ec;
  /* etc... */
}
```

## Features Summary

✅ Modern gradient UI with smooth animations
✅ 20+ keyframe animations
✅ Responsive mobile design
✅ Interactive particle effects
✅ Search filtering
✅ Modal booking system
✅ Smooth scrolling
✅ Contact form
✅ Social media links
✅ Accessibility features

Enjoy your modern event booking website! 🚀

---

## 📤 Push Code to GitHub

Follow these steps to upload your project to GitHub:

### Step 1: Create a GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Log in to your GitHub account
3. Click the **"+"** icon in the top-right corner
4. Select **"New repository"**
5. Enter repository name: `Event-booking-project`
6. Add description: `A modern, animation-heavy event booking website built with HTML, CSS, and JavaScript`
7. Choose **Public** (to make it visible to others)
8. **Do NOT** initialize with README, .gitignore, or license (we'll do this locally)
9. Click **"Create repository"**

### Step 2: Initialize Git Locally (If Not Already Done)

Open terminal in your project directory and run:

```bash
# Navigate to project folder
cd /Users/mac/Documents/TestPro/Event-booking-project

# Initialize git repository
git init

# Add all files to staging area
git add .

# Create initial commit
git commit -m "Initial commit: EventEase - Modern event booking website with animations"
```

### Step 3: Add Remote Repository

Copy the repository URL from GitHub and run:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/Event-booking-project.git

# Verify the remote was added
git remote -v
```

### Step 4: Push Code to GitHub

```bash
# Rename branch to main (GitHub's default)
git branch -M main

# Push code to GitHub
git push -u origin main
```

### Step 5: Verify on GitHub

1. Go to your GitHub repository URL: `https://github.com/YOUR_USERNAME/Event-booking-project`
2. You should see all your files (index.html, style.css, script.js, README.md)
3. Your code is now live on GitHub! 🎉

---

## 📝 Common Git Commands

### View Git Status
```bash
git status
```

### View Commit History
```bash
git log --oneline
```

### Make Changes and Push Updates
```bash
# After making changes, add them
git add .

# Commit with a message
git commit -m "Description of changes"

# Push to GitHub
git push origin main
```

### Clone This Repository
```bash
git clone https://github.com/YOUR_USERNAME/Event-booking-project.git
```

---

## 🔐 GitHub Security Tips

1. **Never commit sensitive data** (API keys, passwords, tokens)
2. **Use .gitignore** to exclude files:
   ```
   node_modules/
   .env
   .DS_Store
   *.log
   ```

3. **Use SSH keys** for secure authentication (recommended over HTTPS)

---

## 🚀 Deploy Your Website

### Option 1: GitHub Pages (Free)
1. Go to your repository settings
2. Scroll to **"GitHub Pages"** section
3. Select **"main"** branch as source
4. Your site will be live at: `https://YOUR_USERNAME.github.io/Event-booking-project/`

### Option 2: Netlify (Free Deployment)
1. Go to [Netlify.com](https://netlify.com)
2. Click **"New site from Git"**
3. Connect your GitHub account
4. Select your repository
5. Click **"Deploy"**
6. Your site will be live in minutes!

### Option 3: Vercel (Free Deployment)
1. Go to [Vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Import your GitHub repository
4. Click **"Deploy"**
5. Your site will be live instantly!

---

## 📋 Troubleshooting

### Authentication Error
```bash
# Use GitHub token instead of password
git remote set-url origin https://YOUR_TOKEN@github.com/YOUR_USERNAME/Event-booking-project.git
```

### Branch Mismatch Error
```bash
# Set default branch
git push -u origin main
```

### Want to Change Commit Message
```bash
# Amend the last commit
git commit --amend -m "New commit message"
git push origin main --force
```

---

## ✨ Next Steps

After pushing to GitHub:
1. ⭐ Add a **Star** to make it a favorite
2. 🔗 Share your **repository link**
3. 📝 Update the README with your improvements
4. 🐛 Create **Issues** for bug tracking
5. 🔀 Accept **Pull Requests** from contributors

Happy coding! 💻
