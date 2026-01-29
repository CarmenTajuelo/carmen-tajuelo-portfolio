# Carmen Tajuelo | Portfolio 1.0

A professional, responsive, and scalable personal portfolio website designed to showcase projects, skills, and experience. This project follows strict software engineering principles for CSS architecture and responsive design.

## 🚀 Features

- **Fluid Design**: Typography and spacing scale naturally across devices using `clamp()`, reducing the need for excessive media queries.
- **Dark/Light Mode**: Built-in theme switcher using CSS variables.
- **3-Layer Architecture**: A consistent layout system (Block > Container > Content) ensures maintainability.
- **Interactive UI**:
  - Glassmorphism effects on navigation and cards.
  - Smooth CSS transitions and keyframe animations (floating badges, glowing effects).
  - Responsive navigation with a hamburger menu for mobile devices.
- **Mobile-First Strategy**: Base styles target small screens, with complexity added for larger viewports.

## 🛠️ Tech Stack

- **HTML5**: Semantic markup.
- **CSS3**:
  - CSS Custom Properties (Variables) for theming and configuration.
  - Flexbox & CSS Grid for layout.
  - `clamp()` for fluid responsiveness.
- **JavaScript**: Minimal vanilla JS for UI interactions (theme toggle, mobile menu).

## 📂 Project Structure

The project adheres to a specific style guide defined in `STYLE_GUIDE.md`.

### The 3-Layer Layout System
1. **BLOCK (`.section`, `<footer>`)**: Defines the semantic context and background.
2. **CONTAINER (`.container`)**: Manages max-width and centering.
3. **CONTENT (`.content`)**: Handles internal element distribution.

## 🎨 Customization

The design system is centralized in the `:root` of `css/styles.min.css`. You can easily customize the brand by modifying these variables:

```css
:root {
  /* Brand Colors */
  --color-primary: ...;
  --color-highlight: ...;
  --color-action: ...;

  /* Typography */
  --font-main: ...;
}
```

## 📦 How to Run

Simply clone the repository and open `index.html` in your preferred web browser. No build step is required as this is a static site.
