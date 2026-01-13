# 🚀 Web Architecture & Style Guide

This project follows professional development principles to ensure scalability, clean code, and fluid responsive design.

---

### 🏗️ 1. The 3-Layer Architecture (Layout)
Every section of the website must strictly follow this container hierarchy:
1. **BLOCK (`<section>`, `<footer>`):** Defines the semantic context and the background color/image.
2. **CONTAINER (`.container`):** Defines the maximum width (e.g., `1200px`), centers the content (`margin: auto`), and sets horizontal gutters.
3. **CONTENT (`.content` / `.areas`):** Manages the internal distribution of elements using **Flexbox** or **Grid**.

### 🌊 2. Fluid Design with `clamp()`
Avoid fixed pixels for elements that need to adapt to different screens.
- **Typography:** Use `clamp()` so headings scale naturally between mobile and desktop without excessive Media Queries.
- **Spacing:** Define a variable scale (`--space-s`, `--space-m`, `--space-l`) using `clamp` for consistent margins and paddings.

### 🎨 3. Single Source of Truth (`:root`)
Before coding components, define the following in the `:root` selector:
- **Colors:** Primary, secondary, accent, and state variants (`:hover`, `:active`).
- **Layout Constants:** Navbar height, max-container width, and icon sizes.
- *Benefit: Perform global brand changes in seconds.*

### 📱 4. Mobile-First Strategy
1. Write base CSS for small screens first (usually a single-column layout).
2. Use **Media Queries** only to add complexity (switching to rows, adjusting widths) as the viewport grows.
3. **DRY (Don't Repeat Yourself):** Do not redeclare styles in Media Queries that are already inherited from the base code.

### 🏷️ 5. Semantics & Functional Naming
- Use HTML5 tags according to their meaning (`<nav>`, `<main>`, `<aside>`, `<header>`).
- Use descriptive class names: `.hero-title`, `.footer-contact-list`, `.btn-primary`.
- Avoid names based on appearance (e.g., `.red-text-right`).

---
*Best Practices Manual v1.0*