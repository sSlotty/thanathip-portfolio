# 🎨 Portfolio Design System - Neobrutalism meets Glassmorphism

## Overview
This portfolio combines **Neobrutalism** (bold, unapologetic design) with **Glassmorphism** (transparent, frosted glass effects) to create a unique 2026-style web experience.

## 🎯 Design Philosophy

### Neobrutalism Elements
- **Bold Borders**: Thick 3-5px borders in black and neon colors
- **Brutal Shadows**: Hard drop shadows (8px 8px) instead of soft blur
- **Vibrant Colors**: Neon cyan, purple, pink, yellow as primary accents
- **High Contrast**: Strong visual hierarchy with black/white/neon palette
- **Geometric Shapes**: Squares, circles, triangles as decorative elements

### Glassmorphism Elements
- **Frosted Glass Cards**: Semi-transparent backgrounds with backdrop blur
- **Subtle Borders**: 2-3px borders with rgba white
- **Layered Depth**: Multiple glass layers create spatial hierarchy
- **Smooth Gradients**: Multi-color gradients for text and backgrounds

## 🎨 Color Palette

### Neon Accents
```css
--neon-cyan: #00F5FF       /* Primary accent */
--neon-purple: #BD00FF     /* Secondary accent */
--neon-pink: #FF006E       /* Tertiary accent */
--neon-yellow: #FFD60A     /* Warning/highlight */
--neon-green: #39FF14      /* Success/active */
```

### Base Colors
```css
--deep-space: #0A0E27     /* Background primary */
--space-navy: #151B3B     /* Background secondary */
--glass-white: rgba(255, 255, 255, 0.1)
--glass-border: rgba(255, 255, 255, 0.2)
```

## 📦 Component Styles

### Glass Cards
```jsx
// Light glass
className="glass-card"

// Strong glass (more opacity)
className="glass-card-strong"
```

### Brutal Borders
```jsx
// Black border with black shadow
className="brutal-border"

// Colored borders with matching shadows
className="brutal-border-cyan"
className="brutal-border-purple"
className="brutal-border-pink"
className="brutal-border-yellow"
```

### Hover Effects
```jsx
// Brutal hover (lifts with stronger shadow)
className="brutal-hover"

// Glass hover (more opacity + lift)
className="glass-hover"
```

## ✨ Animations

### Entrance Animations
- `animate-slide-up` - Slide in from bottom
- `animate-slide-in-left` - Slide in from left
- `animate-slide-in-right` - Slide in from right
- `animate-scale-in` - Scale up with fade

### Continuous Animations
- `animate-float` - Floating motion (decorative elements)
- `animate-tilt` - Subtle rotation animation
- `animate-glow-pulse` - Pulsing glow effect
- `animate-gradient-shift` - Gradient color shift

## 🔤 Typography

### Font Stack
```css
font-family: 'Space Grotesk', 'Inter', sans-serif;
```

### Text Styles
```jsx
// Gradient text effects
className="gradient-text-cyan"
className="gradient-text-purple"
className="gradient-text-multi"

// Glow effects
className="text-glow-cyan"
className="text-glow-purple"
```

## 🎭 Patterns & Backgrounds

### Background Patterns
```jsx
className="bg-grid-pattern"    // Grid overlay
className="bg-dots-pattern"    // Dots overlay
```

### Geometric Shapes (Decorative)
```jsx
<div className="geometric-shape geometric-circle text-neon-cyan" />
<div className="geometric-shape geometric-square text-neon-purple" />
<div className="geometric-shape geometric-triangle text-neon-yellow" />
```

## 📱 Responsive Design

### Breakpoints
- Mobile: 375px+
- Tablet: 768px+
- Desktop: 1024px+
- Large: 1920px+

### Mobile Considerations
- Simplified animations on mobile
- Stack layouts vertically
- Hide decorative geometric shapes
- Larger touch targets (min 44px)

## 🚀 Performance

- Use `will-change` sparingly
- Lazy load images
- Optimize glass blur effects
- Limit concurrent animations

## 📝 Usage Examples

### Creating a Card
```jsx
<div className="glass-card-strong brutal-border-cyan brutal-hover p-6">
  <h2 className="font-black text-white gradient-text-multi">Title</h2>
  <p className="text-gray-300">Content</p>
</div>
```

### Button with Brutal Style
```jsx
<button className="px-6 py-3 bg-neon-cyan text-black font-bold border-3 border-black shadow-brutal hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg transition-all">
  Click Me
</button>
```

## 🎯 Best Practices

1. **Contrast**: Always ensure text has sufficient contrast
2. **Accessibility**: Maintain WCAG AA standards minimum
3. **Animation**: Keep animations under 0.5s for interactions
4. **Colors**: Use neon colors as accents, not backgrounds
5. **Spacing**: Maintain consistent padding/margins (multiples of 4px)
