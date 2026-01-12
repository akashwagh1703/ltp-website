# LTP Website Deployment Guide

## 🚀 Quick Setup

### 1. Install Dependencies

```bash
cd ltp-website
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit: http://localhost:3000

### 3. Build for Production

```bash
npm run build
```

## 🌐 Deploy to playltp.in

### Option 1: Deploy to Root Domain

**Nginx Configuration:**

```bash
sudo nano /etc/nginx/sites-available/playltp.in
```

```nginx
server {
    listen 80;
    server_name playltp.in www.playltp.in;
    root /var/www/ltp/ltp-website/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

**Deploy:**

```bash
# Build
cd /var/www/ltp/ltp-website
npm run build

# Enable site
sudo ln -sf /etc/nginx/sites-available/playltp.in /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Option 2: Deploy to Subdomain (www.playltp.in)

Same as above, just use `www.playltp.in` as server_name.

## 📦 What's Included

### Sections:
1. ✅ Hero with animated stats
2. ✅ Problem section (4 major pain points)
3. ✅ Solution section (LTP Turf Owner App)
4. ✅ Features grid (6 key features)
5. ✅ How It Works (3-step process)
6. ✅ Benefits with impact metrics
7. ✅ CTA with download buttons
8. ✅ Footer with links

### Design Elements:
- ✅ Futuristic gradient backgrounds
- ✅ Smooth Framer Motion animations
- ✅ Boxicons throughout
- ✅ 3-color scheme (Cyan, Purple, Red)
- ✅ Phone mockup with app preview
- ✅ Floating cards animation
- ✅ Responsive design

### Icons Used:
- Cricket ball (logo)
- Dashboard, wallet, calendar (features)
- Phone, error, time, user (problems)
- Zap, credit card, mobile (solutions)
- Social media icons (footer)

## 🎨 Customization

### Change Colors:

Edit `src/App.css`:

```css
:root {
  --primary: #00D9FF;    /* Change cyan */
  --secondary: #6C5CE7;  /* Change purple */
  --accent: #FF6B6B;     /* Change red */
}
```

### Update Content:

Edit `src/App.jsx` - All text is in the component.

### Add More Sections:

Copy any section structure and modify content.

## 📱 Mobile Responsive

- Automatically adapts to all screen sizes
- Hamburger menu for mobile (can be added)
- Touch-friendly buttons
- Optimized images

## ⚡ Performance

- Lazy loading animations
- Optimized bundle size
- Fast page load
- Smooth 60fps animations

## 🔗 Links to Update

Before going live, update these in `App.jsx`:

1. Download links (Google Play)
2. Contact phone number
3. Email address
4. Social media links

## ✅ Pre-Launch Checklist

- [ ] Update contact information
- [ ] Add real download links
- [ ] Test all animations
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Optimize images
- [ ] Setup SSL certificate
- [ ] Test form submissions (if added)
- [ ] Add Google Analytics (if needed)
- [ ] Test page speed

## 🎯 Next Steps

1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Review and customize content
4. Build: `npm run build`
5. Deploy to server
6. Setup SSL with Certbot
7. Test live site

**Your futuristic LTP website is ready!** 🚀
