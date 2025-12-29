# 🚀 Deployment Guide

## Overview

Your Circle Psychiatry Angular application is production-ready. This guide will walk you through deploying to various platforms.

---

## 📦 Building for Production

### Step 1: Create Production Build
```bash
cd /Users/zain.ahmad/Repos/psychFE/psychfe-app
npm run build
```

This creates an optimized build in the `dist/psychfe-app/` directory.

### Step 2: Verify Build
```bash
# Check the output
ls -la dist/psychfe-app/

# Should contain:
# - browser/ (JavaScript bundles)
# - 3rdpartylicenses.txt
# - prerendered-routes.json
```

---

## 🌐 Deployment Platforms

### Option 1: Firebase Hosting (Recommended)

#### Setup
```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize project in the app directory
cd psychfe-app
firebase init hosting
```

#### Configuration
Create `firebase.json`:
```json
{
  "hosting": {
    "public": "dist/psychfe-app/browser",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

#### Deploy
```bash
npm run build
firebase deploy
```

---

### Option 2: Vercel (Fastest)

#### Setup
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

#### Configuration
Create `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/psychfe-app/browser",
  "routes": [
    {
      "src": "^/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

---

### Option 3: Netlify

#### Setup
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Connect to Netlify
netlify init

# Deploy
netlify deploy --prod
```

#### Configuration
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist/psychfe-app/browser"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### Option 4: AWS S3 + CloudFront

#### Setup
```bash
# Install AWS CLI
brew install awscli

# Configure AWS credentials
aws configure
```

#### Deployment Script
```bash
#!/bin/bash
# build.sh

# Build app
npm run build

# Upload to S3
aws s3 sync dist/psychfe-app/browser s3://your-bucket-name \
  --delete \
  --acl public-read

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id YOUR_DIST_ID \
  --paths "/*"

echo "Deployment complete!"
```

#### Run
```bash
chmod +x build.sh
./build.sh
```

---

### Option 5: Traditional Web Server

#### For Apache
```bash
# Build the app
npm run build

# Copy to web root
sudo cp -r dist/psychfe-app/browser /var/www/html/circle-psych

# Create .htaccess for routing
cat > /var/www/html/circle-psych/.htaccess << 'EOF'
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /circle-psych/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /circle-psych/index.html [L]
</IfModule>
EOF
```

#### For Nginx
```nginx
server {
  listen 80;
  server_name circlepsych.io;

  root /var/www/circle-psych/dist/psychfe-app/browser;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }

  # Cache static assets
  location ~* \.(?:js|css|woff|woff2|png|jpg|jpeg|svg|gif)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
  }
}
```

---

## 🔒 HTTPS Setup

### Let's Encrypt (Free)

#### For Nginx
```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Get certificate
sudo certbot certonly --nginx -d circlepsych.io

# Configure auto-renewal
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer
```

#### For Apache
```bash
sudo apt-get install certbot python3-certbot-apache
sudo certbot --apache -d circlepsych.io
```

---

## 📊 Post-Deployment Checklist

- [ ] Site loads without errors
- [ ] All pages accessible
- [ ] Navigation works correctly
- [ ] Mobile responsive
- [ ] Links functional
- [ ] Booking link works
- [ ] Contact form submits
- [ ] Images load properly
- [ ] CSS/JS loaded correctly
- [ ] Page speed acceptable
- [ ] SEO meta tags present
- [ ] Analytics installed
- [ ] SSL certificate valid
- [ ] Backups configured

---

## 🚨 Monitoring & Analytics

### Add Google Analytics
```html
<!-- Add to src/index.html before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Monitor Performance
- Set up error tracking (Sentry, Rollbar)
- Monitor uptime (Pingdom, UptimeRobot)
- Track performance (PageSpeed Insights)

---

## 🔄 CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Firebase

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: ${{ secrets.GITHUB_TOKEN }}
          firebaseServiceAccount: ${{ secrets.FIREBASE_SERVICE_ACCOUNT }}
          channelId: live
          projectId: your-firebase-project-id
```

---

## 📈 Performance Optimization

### Already Implemented
- ✅ Tree-shaking
- ✅ Code splitting
- ✅ Minification
- ✅ Compression

### Additional Options
```bash
# Enable GZIP compression on your server
# Nginx
gzip on;
gzip_types text/plain text/css text/javascript application/javascript;
gzip_vary on;

# Cache static assets (already configured in build)
# Set appropriate cache headers
```

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### 404 Errors
- Ensure web server rewrites all routes to `/index.html`
- Check base href in `angular.json`

### Styles Not Loading
- Verify CSS files in production build
- Check Content Security Policy headers
- Clear browser cache

### CORS Issues
```bash
# Add CORS headers in web server configuration
# Nginx
add_header 'Access-Control-Allow-Origin' '*';
```

---

## 📞 Domain & DNS

### Update DNS Records
```
Type    Name              Value
A       circlepsych.io    YOUR_IP_ADDRESS
CNAME   www               circlepsych.io
MX      @                 mail.example.com (for email)
```

### Custom Domain Setup
1. Register domain (GoDaddy, NameCheap, etc.)
2. Update DNS to point to your hosting
3. Set up SSL certificate
4. Update links and analytics

---

## 🔐 Security Considerations

- [ ] Enable HTTPS/SSL
- [ ] Set security headers
- [ ] Enable CORS if needed
- [ ] Validate all forms server-side
- [ ] Keep dependencies updated
- [ ] Regular security audits
- [ ] Implement rate limiting
- [ ] Regular backups

### Security Headers
```
Strict-Transport-Security: max-age=31536000
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

---

## 📞 Support & Maintenance

### Regular Updates
```bash
# Check for updates
npm outdated

# Update packages
npm update

# Major version updates
npm install package-name@latest
```

### Backup Strategy
- Daily automated backups
- Version control for all code
- Database backups (if applicable)
- Configuration backups

---

## 🎯 Performance Targets

- **Page Load**: < 3 seconds
- **First Contentful Paint**: < 1.5s
- **Lighthouse Score**: > 90
- **Mobile Score**: > 85

Check with:
```bash
npm install -g lighthouse
lighthouse https://your-site.com
```

---

## 📋 Deployment Checklist

Before going live:

- [ ] Production build created
- [ ] All pages tested
- [ ] Links verified
- [ ] Images optimized
- [ ] Analytics configured
- [ ] Monitoring setup
- [ ] Backups configured
- [ ] SSL certificate valid
- [ ] DNS configured
- [ ] Performance optimized
- [ ] Security headers added
- [ ] Error tracking active

---

## ✅ Post-Deployment

1. Monitor for errors
2. Track user behavior
3. Test on real devices
4. Gather feedback
5. Plan updates and improvements

---

## 📚 Additional Resources

- [Angular Deployment](https://angular.dev/guide/deployment)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [AWS S3 Hosting](https://docs.aws.amazon.com/s3/latest/userguide/WebsiteHosting.html)

---

**Your site is ready to go live!** 🚀
