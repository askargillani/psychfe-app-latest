# Circle Psychiatry - Mental Health Webapp

A modern, responsive Angular web application for Circle Psychiatry, featuring a redesigned UI inspired by Rula's design language while maintaining all content from the original Circle Psych website.

## 🎨 Design System

The application uses a modern, clean design system with:
- **Primary Colors**: Blue (#0066cc) and Teal (#00b4a0)
- **Supporting Colors**: Purple, Green, Orange, Red
- **Typography**: System fonts (Inter/Segoe UI) for optimal readability
- **Spacing**: 8px-based scale for consistent layouts
- **Components**: Buttons, Cards, Forms, Alerts, Badges, and more

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Main navigation header
│   │   └── footer/          # Footer with contact info
│   ├── pages/
│   │   ├── home/            # Homepage with hero, services, testimonials
│   │   ├── services/        # Detailed services offerings
│   │   ├── about/           # About us, mission, team
│   │   └── contact/         # Contact form and information
│   ├── app.ts               # Root app component
│   ├── app.routes.ts        # Route configuration
│   └── app.html             # Root template
├── styles/
│   ├── design-tokens.scss   # Color, spacing, typography variables
│   ├── base.scss            # Global styles and typography
│   ├── components.scss      # Reusable component styles
│   └── styles.scss          # Global stylesheet imports
└── main.ts                  # Application bootstrap
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Development server
ng serve
# or
npm start

# Navigate to http://localhost:4200/
```

### Building for Production

```bash
# Build optimized production bundle
npm run build

# Output is in dist/psychfe-app/
```

## 📄 Pages

### Home (/)
- Hero section with compelling headline
- Why Circle Psychiatry section
- Conditions we treat grid
- Telehealth information
- Insurance providers showcase
- Patient testimonials
- Call-to-action section

### Services (/services)
- Psychiatric evaluation
- Medication management
- Follow-up care
- Telehealth services
- Insurance and payment options

### About (/about)
- Mission and values
- Team members with specialties
- Why choose us features
- Contact information

### Contact (/contact)
- Contact form
- Address, phone, email
- Crisis resources
- Directions link

## 🎯 Key Features

### Modern Design
- Gradient backgrounds and modern typography
- Smooth animations and transitions
- Responsive grid layouts
- Clean, intuitive navigation

### User Experience
- Mobile-first responsive design
- Sticky header for easy navigation
- Multiple CTA placements
- Accessibility-focused components

### Content Management
- Organized component structure
- Easy to update content
- Reusable component patterns
- Centralized design tokens

## 🛠️ Customization

### Colors
Edit `src/styles/design-tokens.scss`:
```scss
$primary-blue: #0066cc;
$secondary-teal: #00b4a0;
// ... and more
```

### Typography
Modify font sizes and weights in `design-tokens.scss`:
```scss
$font-size-lg: 1.125rem;
$font-weight-bold: 700;
```

### Components
All component-specific styles are in their respective `.scss` files:
- `src/app/components/header/header.component.scss`
- `src/app/pages/home/home.component.scss`
- etc.

## 📱 Responsive Design

The application is fully responsive with breakpoints at:
- Mobile: 0px - 575px
- Tablet: 576px - 767px
- Desktop: 768px - 991px
- Large Desktop: 992px - 1199px
- Extra Large: 1200px+

## 🔗 External Links

- **Book Appointment**: ZocDoc integration
- **Patient Portal**: Athena Health integration
- **Crisis Support**: National Suicide Prevention Lifeline
- **Insurance**: Multiple major providers accepted

## 📞 Contact

**Circle Psychiatry Group PLLC**
- Address: 2960 North Circle Drive, Suite 200, Colorado Springs, CO 80909
- Phone: 719-208-4027
- Fax: 719-426-2525
- Email: office@circlepsych.io

## 📄 License

All rights reserved © 2025 Circle Psychiatry Group PLLC

## 🚀 Future Enhancements

Potential features to add:
- Blog/resources section
- Patient testimonials with photos
- Online appointment scheduling
- Patient educational materials
- Conditions detailed pages
- Insurance verification tool
- Newsletter signup
- Social media integration
- Multi-language support
- Advanced search functionality

## 🤝 Contributing

This is a production application. Please ensure all changes follow the design system and are tested before deployment.

## 📝 Development Notes

- Uses Angular 19+ with standalone components
- SCSS for styling with variable-based design tokens
- Responsive CSS Grid and Flexbox layouts
- No external UI libraries (custom components)
- SEO-friendly semantic HTML
- Accessible WCAG 2.1 AA compliant components
