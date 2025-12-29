# Quick Start Guide

## 🎯 Project Overview

This is a brand-new Angular web application for Circle Psychiatry - a mental health practice in Colorado Springs. The site has been redesigned with a modern, clean interface inspired by Rula's design language while maintaining all content from the original Circle Psych website.

## ⚡ Quick Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Lint code
ng lint
```

## 📍 Pages at a Glance

| Page | Path | Purpose |
|------|------|---------|
| Home | `/` | Main landing page with services overview |
| Services | `/services` | Detailed service descriptions |
| About | `/about` | Mission, team, and company info |
| Contact | `/contact` | Contact form and information |

## 🎨 Design System Files

All design tokens are centralized in one file for easy updates:

**`src/styles/design-tokens.scss`** - Contains:
- Color palette
- Typography settings
- Spacing scale
- Border radius
- Shadows
- Transitions
- Z-index values
- Breakpoints

## 🔧 How to Make Changes

### Update Colors
```scss
// In src/styles/design-tokens.scss
$primary-blue: #0066cc;      // Main brand color
$secondary-teal: #00b4a0;    // Accent color
```

### Add a New Page
1. Create a new component: `ng generate component pages/new-page`
2. Add route in `src/app/app.routes.ts`
3. Update navigation in `src/app/components/header/header.component.html`

### Modify Content
- Edit HTML in component `.html` files
- Update component data in `.ts` files
- Styling in `.scss` files

## 📱 Responsive Design

The site is fully responsive. Test at different breakpoints:
```scss
@media (max-width: $breakpoint-md) { ... }    // Tablet
@media (max-width: $breakpoint-sm) { ... }    // Mobile
```

## 🚀 Deployment

### Build Optimized Production Bundle
```bash
npm run build
```

This creates a `dist/psychfe-app/` folder ready for deployment.

### Deploy to Hosting
- Firebase Hosting
- Vercel
- Netlify
- AWS S3 + CloudFront
- Traditional web server (Apache, Nginx)

## 📝 Component Structure

Each page/component follows this pattern:
```
component-name/
├── component-name.component.ts      // Logic
├── component-name.component.html    // Template
├── component-name.component.scss    // Styles
└── component-name.component.spec.ts // Tests
```

## 🎯 Key Features Implemented

✅ Modern responsive design
✅ All Circle Psych content integrated
✅ Rula-inspired UI design language
✅ Mobile-first approach
✅ Performance optimized
✅ Accessibility compliant
✅ SEO friendly
✅ Smooth animations

## 🔗 Important Links

- **Circle Psychiatry**: https://circlepsych.io (original site)
- **Rula**: https://www.rula.com (design inspiration)
- **Angular Docs**: https://angular.dev
- **SCSS Guide**: https://sass-lang.com

## 💡 Tips

1. **Use design tokens**: Always reference `design-tokens.scss` instead of hardcoding colors
2. **Mobile first**: Style mobile version first, then add media queries for larger screens
3. **Accessibility**: Use semantic HTML and ARIA labels
4. **Performance**: Keep bundle size small; avoid unnecessary imports
5. **Testing**: Test on real devices, not just browser DevTools

## ❓ Common Questions

**Q: How do I add a new section to the home page?**
A: Edit `src/app/pages/home/home.component.html` - just add new sections with the existing `.container` structure.

**Q: How do I change the logo?**
A: Update the logo text in `src/app/components/header/header.component.html` and adjust styling as needed.

**Q: How do I add insurance logos?**
A: Add them to the insurance section in `home.component.html` or create an `InsuranceComponent`.

**Q: Can I add a blog?**
A: Yes! Create a new `blog` page component and add route to `app.routes.ts`.

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails | Run `npm install` to ensure dependencies are installed |
| Styles not applied | Check SCSS import paths and file locations |
| Routes not working | Verify routes in `app.routes.ts` and component imports |
| Mobile menu not working | Check `isMenuOpen` binding in header component |

## 📞 Support

For changes or questions about the application:
- Check `PROJECT_README.md` for detailed documentation
- Review component TypeScript files for data structures
- Check SCSS files for styling patterns

---

**Happy coding!** 🎉
