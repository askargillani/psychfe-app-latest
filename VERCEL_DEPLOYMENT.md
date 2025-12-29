# Vercel Deployment Guide - Circle Psychiatry App

## Quick Deploy (Recommended Method)

### Prerequisites
1. A GitHub account
2. Code pushed to GitHub repository
3. A Vercel account (free tier available at https://vercel.com)

### Step 1: Push Code to GitHub (if not already done)

```powershell
# Initialize git if needed
git init

# Add all files
git add .

# Commit changes
git commit -m "Ready for Vercel deployment"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/ZainAhmad33/psychfe-app.git

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy to Vercel

#### Option A: Using Vercel Website (Easiest)

1. Go to https://vercel.com and sign up/login with GitHub
2. Click "Add New Project"
3. Import your GitHub repository: `ZainAhmad33/psychfe-app`
4. Vercel will auto-detect Angular settings
5. Configure build settings (should be auto-filled):
   - **Framework Preset:** Angular
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist/psychfe-app/browser`
   - **Install Command:** `npm install`
6. Click "Deploy"
7. Wait 2-3 minutes for deployment to complete
8. Your app will be live at `https://[project-name].vercel.app`

#### Option B: Using Vercel CLI

1. Install Vercel CLI globally:
```powershell
npm install -g vercel
```

2. Login to Vercel:
```powershell
vercel login
```

3. Deploy from project directory:
```powershell
cd c:\Users\zain4\GitProjects\psychfe-app
vercel
```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N** (first time)
   - What's your project's name? **circle-psychiatry** (or your choice)
   - In which directory is your code located? **./** (press Enter)
   - Want to override settings? **N**

5. For production deployment:
```powershell
vercel --prod
```

## Configuration Details

### Files Created

1. **vercel.json** - Vercel configuration
   - Configures Angular routing (SPA redirects)
   - Sets up caching for static assets
   - Specifies build output directory

2. **.vercelignore** - Files to exclude from deployment
   - Reduces deployment size
   - Excludes unnecessary files

### Build Configuration

- **Framework:** Angular
- **Build Command:** `npm run build`
- **Output Directory:** `dist/psychfe-app/browser`
- **Node Version:** 18.x or higher (auto-detected)
- **Install Command:** `npm install`

## Environment Variables (Optional)

If you need to add environment variables:

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add variables as needed:
   - Example: `API_URL`, `GOOGLE_ANALYTICS_ID`, etc.

## Custom Domain Setup

### Add Your Custom Domain (circlepsychiatry.com)

1. Go to your Vercel project dashboard
2. Navigate to Settings → Domains
3. Click "Add" and enter your domain: `circlepsychiatry.com`
4. Vercel will provide DNS records
5. Update your domain registrar's DNS settings:
   - Add A record pointing to Vercel IP
   - Add CNAME record for `www` subdomain
6. Wait for DNS propagation (5-30 minutes)
7. SSL certificate will be automatically provisioned

### DNS Configuration Example

**For Root Domain (circlepsychiatry.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For WWW Subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Automatic Deployments

### GitHub Integration Benefits
- **Automatic deployments** on every push to `main` branch
- **Preview deployments** for pull requests
- **Instant rollbacks** to previous versions
- **Built-in CI/CD** - no extra setup needed

### Deployment Workflow
1. Push code to GitHub
2. Vercel automatically detects changes
3. Builds and deploys new version
4. Notifies you when deployment is complete
5. Old versions remain accessible for rollback

## Monitoring & Analytics

### Built-in Features (Free)
- **Real-time logs** - View build and runtime logs
- **Performance insights** - Core Web Vitals tracking
- **Analytics** - Page views and performance metrics
- **Error tracking** - Automatic error detection

### Access Monitoring
1. Go to your Vercel project dashboard
2. Check "Analytics" tab for traffic insights
3. Check "Deployments" for build history
4. Check "Logs" for runtime information

## Troubleshooting

### Common Issues

**1. Build Fails**
```
Error: Build failed
```
**Solution:** Check build logs in Vercel dashboard. Usually npm dependencies or Angular build errors.

**2. 404 on Refresh**
```
404 Page Not Found
```
**Solution:** Ensure `vercel.json` has rewrite rules (already configured).

**3. Environment Variables Not Working**
**Solution:** Add them in Vercel dashboard → Settings → Environment Variables, then redeploy.

**4. Long Build Times**
**Solution:** First build takes 3-5 minutes. Subsequent builds are faster with caching.

### Get Build Logs
```powershell
vercel logs [deployment-url]
```

### Force Fresh Deployment
```powershell
vercel --force
```

## Performance Optimization

### Already Configured
✅ Asset caching headers
✅ Angular production build optimization
✅ Tree-shaking and minification
✅ Lazy loading for routes
✅ Gzip compression (automatic)

### Additional Optimizations
1. **Enable Vercel Analytics** (free tier available)
2. **Set up Web Vitals monitoring**
3. **Configure CDN caching** (automatic)
4. **Enable Speed Insights** in Vercel dashboard

## Cost Breakdown

### Free Tier Includes
- **100 GB bandwidth** per month
- **100 builds** per month
- **Unlimited projects**
- **Automatic HTTPS**
- **Global CDN**
- **Preview deployments**
- **Git integration**
- **Web analytics**

### When You Might Need Pro ($20/month)
- High traffic (>100 GB/month)
- Team collaboration features
- Password protection
- Advanced analytics
- Priority support

## Deployment Checklist

Before deploying to production:
- [ ] Push all code to GitHub
- [ ] Test build locally: `npm run build`
- [ ] Update environment variables in Vercel
- [ ] Configure custom domain (if applicable)
- [ ] Test all routes after deployment
- [ ] Verify SEO meta tags are working
- [ ] Check mobile responsiveness
- [ ] Test contact form functionality
- [ ] Verify all images load correctly
- [ ] Test blog posts and navigation
- [ ] Check Google Analytics integration
- [ ] Submit sitemap to Google Search Console

## Post-Deployment Steps

### 1. Update Google Search Console
```
Submit new sitemap URL:
https://circlepsychiatry.com/sitemap.xml
```

### 2. Test Social Media Sharing
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator

### 3. Monitor Performance
- Google PageSpeed Insights: https://pagespeed.web.dev/
- Vercel Analytics Dashboard

### 4. Set Up Monitoring
- Enable Vercel Analytics
- Configure uptime monitoring (e.g., UptimeRobot)
- Set up Google Analytics

## Useful Commands

```powershell
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# View deployment logs
vercel logs

# List all deployments
vercel list

# Remove a deployment
vercel remove [deployment-url]

# Pull environment variables
vercel env pull

# Check Vercel CLI version
vercel --version

# Get help
vercel --help
```

## Support & Resources

- **Vercel Documentation:** https://vercel.com/docs
- **Angular on Vercel:** https://vercel.com/guides/deploying-angular-with-vercel
- **Vercel Community:** https://github.com/vercel/vercel/discussions
- **Vercel Status:** https://vercel-status.com

## Quick Links

- **Vercel Dashboard:** https://vercel.com/dashboard
- **GitHub Repository:** https://github.com/ZainAhmad33/psychfe-app
- **Domain Management:** https://vercel.com/dashboard → Settings → Domains
- **Environment Variables:** https://vercel.com/dashboard → Settings → Environment Variables
- **Analytics:** https://vercel.com/dashboard → Analytics

---

**Last Updated:** December 5, 2025
**Deployment Status:** Ready for Production ✅
