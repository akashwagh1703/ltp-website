# LTP Website - Let's Play Turf (Turf Owner App)

A professional website showcasing the LTP Turf Owner App - helping turf owners transform from manual to digital management.

## 🎯 Target Audience

**Turf Owners** who want to:
- Replace manual registers with digital booking system
- Login and access their registered turfs
- Create offline bookings for walk-in customers
- Calculate revenue automatically
- Track business performance digitally

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

## 📋 Key Features Highlighted

1. **Login System** - Secure access to turf owner dashboard
2. **Registered Turfs** - View all your turfs in one place
3. **Offline Booking Creation** - Create bookings for walk-in customers
4. **Revenue Calculation** - Automatic daily/weekly/monthly calculations
5. **Digital Register** - Replace physical register completely
6. **Business Analytics** - Track performance and trends

## 🎯 Key Messages

### Problem Section
- Manual walk-in booking process (5-10 minutes per booking)
- Daily register management (1-2 hours daily)
- Manual revenue calculation (1-2 hours daily)
- No real-time business insights

### Solution Features
- Login & access your registered turfs
- Create offline bookings in 1-2 minutes
- Auto revenue calculation in real-time
- Digital register accessible from phone

### Benefits
- Save 3-5 hours daily
- Manage from your phone
- Auto revenue calculation
- Digital register system

## 📱 Download

- **APK Download**: Google Drive link (replace with actual link)
- **Target**: Android turf owners
- **Focus**: Offline booking creation and revenue tracking

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
