# Rogue Vibes – Documentation

Welcome to Rogue Vibes, a roguelike management game where you run an AI startup through random encounters, resource management, and strategic decisions. This documentation covers everything you need to know about the game, its mechanics, and its development.

## 📚 Documentation Index
- [Game Design](./game-design.md): Full game design, mechanics, and inspiration
- [Characters](./characters.md): Playable founders, traits, and unlocks
- [Encounters](./encounters.md): Encounter system, types, and examples
- [Achievements](./achievements.md): Unlocks and meta-progression
- [Progression](./progression.md): Game phases and scoring
- [UI/UX](./ui.md): Visual and accessibility guidelines
- [Architecture](./architecture.md): Technical design and folder structure

---

## Project Folder Structure (Next.js)

This project uses the Next.js framework. Below is an overview of the main folders and their purposes:

```
rogue-vibes/
├── .git/                # Git version control data
├── .gitignore           # Git ignore rules
├── README.md            # Project overview and instructions
├── docs/                # Project documentation (you're here!)
├── eslint.config.mjs    # ESLint configuration for code linting
├── next-env.d.ts        # Next.js TypeScript environment definitions
├── next.config.ts       # Next.js configuration file
├── node_modules/        # Installed npm packages
├── package.json         # Project metadata and dependencies
├── package-lock.json    # Exact versions of installed npm packages
├── postcss.config.mjs   # PostCSS configuration (for CSS processing)
├── public/              # Static files (images, icons, etc.)
├── src/                 # Main source code directory
│   └── app/             # Application routes and global files
│       ├── favicon.ico      # Favicon for the app
│       ├── globals.css      # Global CSS styles
│       ├── layout.tsx       # Root layout component
│       └── page.tsx         # Main page component
├── tsconfig.json        # TypeScript configuration
```

### Key Folders
- **public/**: Static assets served at the root URL (e.g., `/logo.png`).
- **src/app/**: Main application code. Each file or folder here maps to a route. `layout.tsx` defines the root layout, and `page.tsx` is the main page.
- **docs/**: All project documentation.

---

For more details about each aspect of Rogue Vibes, use the navigation above or explore the docs folder.
