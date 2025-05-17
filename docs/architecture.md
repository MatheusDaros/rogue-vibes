# Architecture

This document describes the system architecture and design decisions for the Rogue Vibes web game.

---

## High-Level Overview
Rogue Vibes is a browser-based roguelike management game built with Next.js (React). The game simulates the journey of an AI startup through random encounters, resource management, and strategic decision-making.

### Main Components
- **Frontend:** Built with Next.js and React, providing a responsive, minimalist UI.
- **Game Engine:** Modular event and encounter system, character management, and progression logic implemented in TypeScript.
- **Persistence:** Game state is saved in browser local storage for meta-progression and session recovery.
- **Extensibility:** Encounters, characters, and achievements are defined as modular data structures for easy extension.

---

## Folder Structure
```
rogue-vibes/
├── src/
│   └── app/
│       ├── components/          # React UI components (encounter cards, resource bars, etc.)
│       ├── game/                # Core game logic (engine, events, state, scoring)
│       ├── data/                # Definitions for characters, encounters, achievements
│       ├── hooks/               # Custom React hooks for game state
│       ├── utils/               # Utility functions (randomization, persistence)
│       ├── layout.tsx           # App layout
│       └── page.tsx             # Main game page
├── public/                      # Static assets (images, icons)
├── docs/                        # Documentation
```

---

## Core Modules
### 1. Game State Management
- Uses React Context or Zustand for global game state (resources, metrics, current encounter, phase)
- All player actions trigger state updates and are persisted to local storage

### 2. Encounter System
- Encounters are defined as data objects with scenario, options, costs, and outcomes
- Game engine randomly selects encounters based on phase and player state
- Outcomes affect resources, metrics, and progression
- Easily extensible: add new encounters by updating the data files

### 3. Character & Achievement System
- Characters defined in a data module with traits, abilities, and unlock conditions
- Achievements tracked per run and persisted for meta-progression
- Unlocking achievements updates available characters for new runs

### 4. Progression & Scoring
- Metrics tracked: Product Traction, PMF, Revenue, Valuation, Innovation
- Progression through startup phases (Ideation, MVP, Growth, etc.)
- Final score calculated from metrics at run end

### 5. UI/UX
- Modular React components for encounters, resource bars, character selection, achievements
- Data visualizations for metrics
- Responsive and accessible design

### 6. Persistence
- Local storage used for saving current run and meta-progression
- Option to reset or clear progress

---

## Extensibility & Modularity
- Encounters, characters, and achievements defined as JSON or TypeScript objects
- New content can be added without changing core logic
- Event system supports custom scripts for complex scenarios

---

## Future Considerations
- Cloud-based leaderboards or multiplayer (optional)
- API endpoints for sharing scores (if needed)
- Expansion modules for new industries or mechanics

---

For more details, see the [game-design.md](./game-design.md) and related docs.
