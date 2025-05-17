# Product Requirements Document (PRD): Rogue Vibes

## 1. Purpose & Vision
Rogue Vibes is a web-based roguelike management game where players run an AI startup, making strategic decisions through random encounters. The objective is to simulate the chaotic, high-stakes world of AI product development, blending business simulation with roguelike replayability and permanent unlocks. The game is designed for web browsers, targeting developers, tech enthusiasts, and fans of management sims.

## 2. Goals & Success Criteria
- Deliver an engaging, replayable game with meaningful choices and outcomes
- Provide a unique blend of business simulation and roguelike mechanics
- Ensure accessibility, clean UI, and smooth gameplay on both desktop and mobile
- Enable extensibility for new content (encounters, characters, achievements)
- Track and visualize player progression and achievements

## 3. Core Gameplay Features
- **Character Selection:** Players choose from unique founder archetypes with different starting resources and traits
- **Resource Management:** Players manage tokens (AI compute) and money (business ops)
- **Random Encounters:** Each turn presents a scenario with multiple choices and consequences
- **Progression Metrics:** Track Product Traction, PMF, Revenue, Valuation, Innovation
- **Achievements & Unlocks:** Completing milestones unlocks new characters and bonuses
- **Permadeath:** Failure ends the run, but meta-progression persists
- **Phased Progression:** Game advances through startup phases (Ideation, MVP, Growth, Maturity, Exit)

## 4. User Stories
- As a player, I want to pick a founder with unique strengths and weaknesses
- As a player, I want to make decisions in random events that affect my startup's fate
- As a player, I want to see my progress via metrics and visualizations
- As a player, I want to unlock new characters and achievements for future runs
- As a player, I want to play on both desktop and mobile with a clean, accessible UI
- As a developer, I want to easily add new encounters, characters, and achievements

## 5. Game Systems & Mechanics
### 5.1 Characters
- 4 starting archetypes, each with unique stats and abilities
- Unlockable characters via achievements
- Traits influence encounter outcomes and available options

### 5.2 Encounters
- Procedurally generated from a modular data set
- Each encounter includes a scenario, options, resource costs, and outcomes
- New encounters can be added by editing data files

### 5.3 Resources
- Tokens: Used for AI development and technical fixes
- Money: Used for business, hiring, and infrastructure

### 5.4 Progression & Scoring
- Metrics: Product Traction, PMF, Revenue, Valuation, Innovation
- Phases: Ideation → MVP → Growth → Maturity → Exit
- Final score calculated from metrics at run end

### 5.5 Achievements & Meta-Progression
- Achievements tracked per run
- Unlocks persist between runs and affect future play

## 6. Technical Requirements
- **Frontend:** Next.js (React), TypeScript
- **State Management:** React Context or Zustand
- **Persistence:** Local browser storage (current run + meta-progression)
- **Extensibility:** Encounters, characters, and achievements defined as JSON or TypeScript objects
- **Responsive UI:** Works on desktop and mobile
- **Accessibility:** Keyboard navigation, ARIA labels, high-contrast mode

## 7. UI/UX Requirements
- Minimalist, clean interface
- Data visualizations for resources and metrics
- Sidebar or topbar navigation for main sections
- Immediate feedback for player actions
- Accessible and mobile-friendly design

## 8. Content Requirements
- At least 4 starting characters, 5+ unlockable via achievements
- 50+ unique encounters at launch, covering all event types
- 10+ achievements with meaningful unlocks
- Documentation for adding new content

## 9. Out of Scope (MVP)
- Multiplayer or online leaderboards
- Real-money purchases or microtransactions
- Cloud saves (local storage only for MVP)

## 10. Milestones & Timeline (Suggested)
1. **Design & Planning:** Finalize game design, architecture, and documentation
2. **Core Engine:** Implement state management, encounter system, and resource logic
3. **UI/UX:** Build main interface, character selection, encounter cards, and metrics display
4. **Content:** Populate with encounters, characters, achievements
5. **Testing & Polish:** Playtesting, balancing, accessibility, bugfixes
6. **Launch:** Release MVP, gather feedback, plan expansions

## 11. Risks & Mitigations
- **Content Balance:** Playtesting to ensure no dominant strategies
- **Replayability:** Modular event system and unlocks to encourage repeat play
- **Extensibility:** Clear documentation and modular code

## 12. Documentation & References
- [Game Design](./game-design.md)
- [Architecture](./architecture.md)
- [Characters](./characters.md)
- [Encounters](./encounters.md)
- [Achievements](./achievements.md)
- [Progression](./progression.md)
- [UI/UX](./ui.md)

---

This PRD is a living document. Update as design and requirements evolve.
