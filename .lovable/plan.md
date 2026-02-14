
# Add Glassmorphism Effect to the UI

Glassmorphism is a design trend featuring frosted-glass-like surfaces with semi-transparent backgrounds, blur effects, and subtle borders. Here's the plan to apply it across your portfolio.

## What Will Change

### 1. Sticky Navigation Bar
- Semi-transparent background with backdrop blur (already partially done, will be enhanced)
- Subtle light border for the frosted edge effect

### 2. Process Timeline Cards
- Replace opaque card backgrounds with semi-transparent glass effect
- Add backdrop-blur and a light border to create depth

### 3. Value Cards
- Apply glass effect with translucent background
- Maintain hover color transitions

### 4. Portfolio Cards
- Frosted glass treatment on the card body and overlay

### 5. Modals
- Glass-style modal content panels with blur and transparency

### 6. Contact Section Panel
- Glass effect on the contact panel within the dark footer

### 7. Mobile Navigation Menu
- Frosted glass dropdown background

## Technical Details

### New CSS Utility Classes (src/index.css)
Add reusable glassmorphism classes:
- `.glass` -- base glass: `background: hsla(var(--background), 0.6); backdrop-filter: blur(16px); border: 1px solid hsla(var(--foreground), 0.08);`
- `.glass-dark` -- for dark sections: `background: hsla(var(--footer), 0.5); backdrop-filter: blur(16px); border: 1px solid hsla(var(--footer-foreground), 0.1);`
- `.glass-card` -- enhanced card glass with subtle shadow

### Component Updates
- **StickyNav.tsx**: Update nav background from `hsla(var(--background), 0.95)` to glass effect with stronger blur; update mobile menu similarly
- **ProcessTimeline.tsx**: Apply glass styling to `.process-card` buttons
- **ValuesSection.tsx**: Apply glass styling to `.value-card` buttons and modal
- **PortfolioGallery.tsx**: Apply glass styling to portfolio cards
- **ContactSection.tsx**: Apply dark glass to the contact panel
- **HeroSection.tsx**: Apply glass effect to hero buttons

### CSS Modifications (src/index.css)
- Update `.sticky-nav` background to use glass effect
- Update `.process-card` with glass background
- Update `.value-card` with glass background
- Update `.modal-content` with glass background
- Update `.portfolio-card` with glass background
- Update `.hero-button` with subtle glass tint

All changes are purely visual -- no functionality or content will be affected.
