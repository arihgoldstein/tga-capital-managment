# TGA Capital Management - Webflow Design Specs

## Color Palette (Add to Webflow Swatches)

| Name | Hex | Usage |
|------|-----|-------|
| Navy | `#002B49` | Primary brand, headers, footer |
| Navy Light | `#004C80` | Hover states |
| Gold | `#B4975A` | Accents, buttons, highlights |
| Gold Light | `#D4B77A` | Hover states for gold |
| White | `#FFFFFF` | Backgrounds |
| Gray Light | `#F3F4F6` | Section backgrounds |
| Gray 600 | `#4B5563` | Body text |
| Gray 300 | `#D1D5DB` | Borders, muted text |

---

## Typography

### Fonts (Add via Google Fonts in Webflow)
1. **Playfair Display** - Headings (serif)
2. **Lato** - Body text (sans-serif)

### Font Sizes
| Element | Size | Weight | Font |
|---------|------|--------|------|
| H1 | 48-60px | Bold (700) | Playfair Display |
| H2 | 36-48px | Bold (700) | Playfair Display |
| H3 | 24px | Bold (700) | Playfair Display |
| H4 | 20px | Bold (700) | Playfair Display |
| Body | 16-18px | Regular (400) | Lato |
| Body Large | 20-24px | Light (300) | Lato |
| Small/Caption | 14px | Regular (400) | Lato |

---

## Spacing System

| Name | Value |
|------|-------|
| Section Padding | 80px (py-20) |
| Container Max Width | 1280px (max-w-7xl) |
| Container Padding | 16-32px |
| Card Padding | 24px (p-6) |
| Button Padding | 16px 32px |
| Gap Small | 16px |
| Gap Medium | 32px |
| Gap Large | 48px |

---

## Components

### Primary Button (Gold)
- Background: `#B4975A`
- Text: Navy `#002B49` 
- Padding: 16px 32px
- Border Radius: 2px
- Font: Lato Bold
- Hover: `#D4B77A`

### Secondary Button (Outline)
- Background: Transparent
- Border: 2px white or navy
- Text: White or Navy
- Padding: 16px 32px
- Hover: Fill with border color

### Card Style
- Background: White or Gray Light
- Border Radius: 8px
- Shadow: 0 1px 3px rgba(0,0,0,0.1)
- Hover Shadow: 0 4px 6px rgba(0,0,0,0.1)
- Padding: 24px

### Icon Circle
- Size: 64px
- Background: Navy
- Icon Color: Gold
- Border Radius: 50%

---

## Section Layouts

### Hero Section
- Full width
- Background: Navy with image overlay (30% opacity)
- Gradient: Left to right (navy solid → transparent)
- Content max-width: 768px
- Padding: 96-160px vertical

### Features Grid
- 3 columns on desktop
- 1 column on mobile
- Gap: 48px

### Footer
- Background: Navy
- 4 column grid on desktop
- Padding: 64px top, 32px bottom

