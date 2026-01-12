# LTP Website - Let's Turf Play

A futuristic, informative website showcasing the LTP Turf Owner App and its revolutionary approach to turf management.

## 🎨 Design Features

- **Modern Futuristic Design** with smooth animations
- **3-Color Scheme:**
  - Primary: #00D9FF (Cyan)
  - Secondary: #6C5CE7 (Purple)
  - Accent: #FF6B6B (Red)
- **Framer Motion** animations for smooth transitions
- **Boxicons** for beautiful icons
- **Responsive** design for all devices

## 🚀 Quick Start

### Install Dependencies

```bash
cd ltp-website
npm install
```

### Run Development Server

```bash
npm run dev
```

Visit: http://localhost:3000

### Build for Production

```bash
npm run build
```

The build will be in the `dist` folder.

## 📋 Sections

1. **Hero** - Eye-catching introduction with stats
2. **Problem** - Current challenges turf owners face
3. **Solution** - How LTP Turf Owner App solves these problems
4. **Features** - Key features of the app
5. **How It Works** - 3-step process to get started
6. **Benefits** - Impact and transformation metrics
7. **CTA** - Call to action with download links
8. **Footer** - Links and social media

## 🎯 Key Highlights

### Problem Section
- Manual booking chaos (30% revenue loss)
- Payment tracking nightmare (40% payment delays)
- No real-time visibility (4+ hours wasted daily)
- Poor customer experience (50% drop-off)

### Solution Features
- Automated booking system
- Seamless payment management
- Real-time dashboard
- Mobile-first design

### Benefits
- 3x more bookings
- Save 4+ hours daily
- 100% payment tracking
- Zero double bookings

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Framer Motion** - Animations
- **Boxicons** - Icon library
- **CSS3** - Styling with gradients and animations

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🎨 Color Palette

```css
--primary: #00D9FF    /* Cyan - Innovation */
--secondary: #6C5CE7  /* Purple - Technology */
--accent: #FF6B6B     /* Red - Urgency/Problems */
--dark: #0A0E27       /* Background */
--light: #F8F9FA      /* Text */
--gray: #8B92A7       /* Secondary text */
```

## 📦 Dependencies

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "framer-motion": "^11.0.0",
  "boxicons": "^2.1.4"
}
```

## 🌐 Deployment

### Deploy to Netlify

```bash
npm run build
# Upload dist folder to Netlify
```

### Deploy to Vercel

```bash
npm run build
# Upload dist folder to Vercel
```

### Deploy to Server

```bash
npm run build

# Copy to server
scp -r dist/* user@server:/var/www/ltp-website/

# Nginx config
server {
    listen 80;
    server_name playltp.in www.playltp.in;
    root /var/www/ltp-website;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 📄 License

© 2024 Let's Turf Play. All rights reserved.

## 🤝 Support

For support, email support@playltp.in or call +91 98765 43210
