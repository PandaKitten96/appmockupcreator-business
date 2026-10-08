# AppMockupCreator — Creative Simple MVP

**The simplest, most beautiful way to create app mockups. One minute to polished results.**

Creators:
- Amanda Ford (Product Co-Creator)
- GitHub Copilot (AI Co-Creator)

## What is AppMockupCreator?

AppMockupCreator is a creativity-focused mockup tool for founders, designers, and marketers who need polished app previews fast — without learning complex design software.

**Core Philosophy:**
- Dead simple to use
- Beautiful by default
- Export in seconds
- No design skills required

## Key Features

✨ **One-minute mockups**
- Pick a device
- Choose a theme
- Edit text
- Export

🎨 **Beautiful by default**
- Premium themes included
- Perfect color combinations
- Professional spacing and typography
- Every output looks polished

📱 **Multi-device support**
- iPhone (modern)
- Android
- iPad
- Desktop

💾 **Easy export**
- High-resolution PNG
- JPG format
- Ready to share

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

## Usage

1. **Click "Start Creating"** on the home page
2. **Pick a device** from the right panel
3. **Choose a theme** from the color palette
4. **Edit text** in the mockup canvas
   - Click to edit title
   - Click to edit subtitle
   - Click to edit button text
5. **Export** as PNG or JPG

## What Makes This Different?

- **Not a full design tool** — that's what makes it simple
- **A mockup kit** — templates, themes, devices ready to go
- **For non-designers** — zero learning curve
- **Fast output** — seconds to shareable asset
- **Beautiful results** — premium aesthetic baked in

## Tech Stack

- React 18
- Vite
- Zustand (state management)
- html2canvas (export functionality)
- CSS3
- Vitest (testing)

## Project Structure

```
src/
  components/
    HomePage.jsx          — Landing page
    Editor.jsx            — Main editor layout
    MockupCanvas.jsx      — Canvas preview
    EditorToolbar.jsx     — Text editing controls
    QuickSelect.jsx       — Device/theme picker
  lib/
    exportUtils.js        — PNG/JPG export logic
    devicePresets.js      — Device dimensions
  store/
    editorStore.js        — Zustand state management
  App.jsx                 — Root component
  styles.css              — All styling
```

## Testing

```bash
npm test
```

Runs Vitest suite with React Testing Library.

## Build

```bash
npm run build
```

Produces optimized production bundle.

## Roadmap

**Phase 1 (Current):**
- Landing page ✓
- Device selection ✓
- Theme selection ✓
- Text editing ✓
- Export PNG/JPG ✓

**Phase 2:**
- User auth
- Project save/load
- More templates
- Gallery showcase

**Phase 3:**
- Stripe billing
- Team features
- Premium templates
- Analytics

**Phase 4:**
- White-label
- Agency features
- API access
- Advanced layouts

## Creative Design Principles

1. **Simplicity over features** — Every option should be obvious
2. **Beauty by default** — Never show an ugly mockup
3. **Zero learning curve** — Founders, not designers
4. **Fast output** — 60 seconds max
5. **Premium feel** — Every export looks professional

## Legal

- LICENSE: MIT
- docs/legal.md: SaaS legal baseline

## Contributing

Fork and submit PRs. Keep it simple, keep it beautiful.

## Support

Report issues via GitHub issues.

---

**Made with ❤️ for creators who want to launch fast.**
