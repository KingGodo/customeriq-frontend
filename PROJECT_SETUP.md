# CustomerIQ - Professional Dashboard Project

A modern, professional customer intelligence dashboard built with Next.js 16, React 19, and TypeScript.

## Project Structure

```
customeriq-frontend/
├── app/
│   ├── splash/              # Splash screen route
│   ├── dashboard/           # Dashboard layout & routes
│   │   ├── overview/        # Overview page
│   │   ├── customers/       # Customers management page
│   │   ├── analytics/       # Analytics page
│   │   ├── reports/         # Reports page
│   │   ├── settings/        # Settings page
│   │   └── layout.tsx       # Dashboard layout with sidebar
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page (splash screen)
│   └── globals.css          # Global styles
├── components/
│   ├── Splash/              # Splash screen component
│   │   ├── SplashScreen.tsx
│   │   └── SplashScreen.module.css
│   └── Sidebar/             # Sidebar navigation component
│       ├── Sidebar.tsx
│       └── Sidebar.module.css
├── styles/
│   ├── Dashboard.module.css # Dashboard layout styles
│   └── pages/               # Individual page styles
│       ├── Overview.module.css
│       ├── Customers.module.css
│       ├── Analytics.module.css
│       ├── Reports.module.css
│       └── Settings.module.css
└── public/                  # Static assets
```

## Features

### 1. **Splash Screen** 🎯
- Beautiful gradient background with animation
- Click anywhere to navigate to dashboard
- Professional loading spinner
- Responsive design for all devices

### 2. **Sidebar Navigation** 📱
- 5 main sections: Overview, Customers, Analytics, Reports, Settings
- Active page highlighting
- Mobile-responsive menu toggle
- Professional dark theme design
- Smooth transitions and hover effects

### 3. **Dashboard Pages**

#### Overview
- Statistics cards showing KPIs
- Total customers, revenue, growth rate, and average value
- Hover animations and smooth transitions

#### Customers
- Table view of all customers
- Search functionality
- Status badges (Active/Inactive)
- Add customer button
- Professional table styling

#### Analytics
- Period filter (7, 30, 90 days)
- 4 chart cards with placeholder areas
- Ready for integration with chart libraries

#### Reports
- List of generated reports
- File type badges (PDF, Excel)
- View and download buttons
- Professional report management

#### Settings
- Account settings form
- Email notifications toggle
- Dark mode preference
- Save and cancel buttons

## Design Principles

### Professional Styling
- **CSS Modules**: Component-scoped styles using CSS Modules
- **Separate Concerns**: Styles kept in `.module.css` files
- **Color Scheme**: Purple gradient theme (#667eea to #764ba2)
- **Consistent Spacing**: Using rem units for scalability
- **Smooth Animations**: Fade-in effects and hover transitions

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 480px
- Sidebar collapses to toggle menu on mobile
- Touch-friendly interactive elements

### Code Organization
- Components properly organized by feature
- Clear separation of layouts and pages
- Reusable component patterns
- TypeScript for type safety

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Getting Started

1. The app loads with a splash screen
2. Click anywhere on the splash screen to enter the dashboard
3. Navigate using the sidebar menu
4. Each page has its own layout and styling

## Customization

### Colors
Update the gradient colors in:
- `components/Splash/SplashScreen.module.css`
- `components/Sidebar/Sidebar.module.css`
- `styles/pages/*.module.css`

### Sidebar Items
Edit the `navItems` array in `components/Sidebar/Sidebar.tsx` to add/remove pages

### Page Content
Each page is in `app/dashboard/[pageName]/page.tsx` with its own styles in `styles/pages/[PageName].module.css`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- CSS Modules for optimized styles
- Next.js code splitting
- Client-side navigation with no full page reloads
- Optimized images and assets

---

**Built with ❤️ using Next.js 16 and React 19**
