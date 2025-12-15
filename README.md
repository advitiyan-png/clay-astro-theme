# Clay Theme (Astro Edition)

A minimalist, image-centric theme for photographers and artists. Originally a Gatsby theme, now fully ported to **Astro** for superior performance and modern development experience.

## Features

-   **Astro-Powered**: Blazing fast static site generation with zero-JS output by default.
-   **Client Router**: Seamless client-side navigation (formerly View Transitions) for an SPA-like feel.
-   **Responsive Design**: Mobile-friendly layout with a collapsible menu.
-   **Dark Mode**: Native dark mode support with a toggle switch and persistence.
-   **CMS Ready**: Pre-configured with **Decap CMS** (formerly Netlify CMS) for easy content management.
-   **Scoped CSS**: Modular, component-scoped styles replacing legacy monolithic CSS.
-   **Typography**:
    -   **Titles/Menu**: Futura (Small Caps)
    -   **Body**: EB Garamond
-   **Content Collections**: Type-safe Markdown content management for Work, News, Sold items, and Pages.

## Project Structure

```text
/
├── public/                 # Static assets (images, admin config)
│   ├── admin/              # Decap CMS configuration
│   └── img/                # Uploaded images
├── src/
│   ├── components/         # Reusable Astro components (PostCard, etc.)
│   ├── content/            # Content Collections (Markdown/MDX)
│   │   ├── news/
│   │   ├── pages/
│   │   ├── sold/
│   │   └── work/
│   ├── layouts/            # Main layouts (Layout.astro)
│   ├── pages/              # Route definitions
│   │   ├── index.astro     # Home page
│   │   ├── [slug].astro    # Dynamic route for generic pages
│   │   └── work/[slug].astro # Dynamic routes for collections
│   ├── styles/             # Global variables and resets
│   │   ├── content.css     # Typography for markdown content
│   │   └── vars.css        # CSS Variables (Colors, Fonts)
│   └── templates/          # Templates for different content types
└── astro.config.mjs        # Astro configuration
```

## Getting Started

1.  **Install Dependencies**:

    ```bash
    npm install
    ```

2.  **Start Development Server**:

    ```bash
    npm run dev
    ```

    Visit `http://localhost:4321` to see your site.

3.  **Build for Production**:

    ```bash
    npm run build
    ```

    The output will be in the `dist/` directory.

## Customization

### Fonts & Colors
Edit `src/styles/vars.css` to update CSS variables for colors, fonts, and breakpoints.

### Content
-   Add markdown files to `src/content/` folders.
-   Or use the Admin panel at `/admin` (requires local backend or Netlify deployment).

### Navigation
Edit the `<nav>` section in `src/layouts/Layout.astro` to update valid menu links.

## License

MIT
