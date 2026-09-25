# Mohammed Rauf — Portfolio

Portfolio site for Mohammed Rauf, Senior Project Planner and Primavera P6 specialist, with a built-in control panel for editing it.

| File | What it does |
|---|---|
| `index.html` | The website. It builds every section from `content.js`. |
| `content.js` | All the text, career data, section order and theme settings. |
| `admin.html` | The control panel: edit everything with a live preview, then publish. |

There is no build step. Open `index.html` to view the site, or `admin.html` to edit it.

## Control panel (`admin.html`)

- **Theme & colours:** six colour presets, full light and dark palette editors with contrast checks, font pairings, corner roundness, and toggles for grain, grid and animation.
- **Sections & menu:** show, hide, rename and reorder sections, and choose which ones appear in the top menu.
- **Content:** editors for the hero, stats, career timeline (Gantt roles, figures and achievements), assurance case study, risk chart, capabilities, milestones, credentials, contact details, and footer/SEO. Lists can be reordered by dragging or with the arrow buttons, and items can be duplicated or deleted.
- **Live preview** in desktop, tablet and mobile sizes, in light or dark mode.
- **Drafts** are saved automatically in your browser. Undo and redo work with Ctrl+Z and Ctrl+Shift+Z.
- **Publish** (Ctrl+S) commits the new `content.js` to GitHub using a fine-grained personal access token. The token needs access to this repository only, with *Contents: read and write*. You can also download `content.js` and upload it yourself.

Text fields support light markup: `*accent colour*`, `_italic serif_`, `**bold**`, and new lines.

## Hosting

Turn on GitHub Pages for the branch you publish to (Settings → Pages → Deploy from branch, root folder). Then set that same branch under **Publishing** in the control panel. The live site updates about a minute after each publish.
