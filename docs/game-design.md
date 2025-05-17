# Rogue Vibes – Game Design Document

## Overview
Rogue Vibes is a roguelike management game about running an AI startup, inspired by Game Dev Tycoon and FTL. Players navigate a sequence of random encounters, balancing tokens and money to build a successful company. For an overview of the project structure and navigation, see the [index](./index.md).

## Core Game Mechanics
- **Resource Management:** Tokens (AI compute) and Money (business ops)
- **Random Encounters:** Each turn presents a scenario with choices, outcomes, and resource tradeoffs
- **Permadeath:** Failure means restarting, but unlocks persist
- **Unlockable Content:** New characters, achievements, and bonuses

## Gameplay Loop
1. Select a founder character ([see all characters](./characters.md))
2. Navigate random [encounters](./encounters.md) and make decisions
3. Build product metrics (traction, PMF, revenue, etc.)
4. Succeed or fail, unlocking [achievements](./achievements.md) and new content

## Character System
Characters have unique starting resources, abilities, and traits. See [characters.md](./characters.md) for full details.

| Character             | Starting Resources     | Special Ability                | Trait                   |
|----------------------|-----------------------|-------------------------------|-------------------------|
| Ex-FAANG Engineer    | 5M tokens, $50K       | Token Efficiency (+20%)       | Low Business Acumen     |
| Business School Grad | 2M tokens, $200K      | Negotiation (better deals)    | Poor Technical Skills   |
| Academic Researcher  | 8M tokens, $20K       | Research Boost (breakthrough) | Terrible at Fundraising |
| Self-Taught Dev      | 3M tokens, $100K      | Scrappy Solutions (free solves)| Average stats          |

Unlock more characters by earning [achievements](./achievements.md).

## Encounter System
Encounters are modular events. Each presents:
- A scenario (e.g., technical challenge, market event, opportunity)
- Choices with costs (tokens, money) and outcomes (metrics, unlocks)
- Randomness and consequences

See [encounters.md](./encounters.md) for examples and guidelines.

## Progression and Scoring
- **Metrics:** Product Traction, PMF, Revenue, Valuation, Innovation
- **Phases:** Ideation, MVP, Growth, Maturity, Exit ([see progression](./progression.md))
- **Final Score:** Calculated from metrics at run end

## Achievement System
Achievements grant meta-progression and unlocks.

| Achievement             | Requirement                       | Unlock                          |
|------------------------|-----------------------------------|---------------------------------|
| You Discovered AGI!    | Reach 100% innovation score       | Alignment Researcher character  |
| Production Catastrophe | Major database failure            | Battle-tested SRE character     |
| Bootstrap Champion     | $1M revenue, no fundraising       | Bootstrapper character          |
| Unicorn Status         | $1B valuation                     | Serial Entrepreneur character   |
| Viral Growth Hack      | 1M users in a month               | Growth Hacker character         |
| AI Safety Pioneer      | All ethics challenges completed   | Safety-First bonus              |

See [achievements.md](./achievements.md) for the full list.

## Game Phases and Progression
- **Ideation:** Define product and approach
- **MVP:** Build and find first users
- **Growth:** Scale and secure funding
- **Maturity:** Optimize for profit or growth
- **Exit:** IPO, acquisition, or sustainability

See [progression.md](./progression.md) for details.

## Meta-Progression Elements
- Founder Network: Improved starting conditions
- Knowledge Base: Encounter hints and new options
- Technology Stack: Better infrastructure
- Market Research: More user insight

## Technical Implementation
- **Frontend:** React (Next.js)
- **Visuals:** Minimalist, data-driven
- **Persistence:** Local browser storage
- **Event System:** Modular, extensible
- **Accessibility:** Keyboard/mobile support

See [architecture.md](./architecture.md) for implementation details.

## Expansion Possibilities
- Industry specializations, co-founder system, tech tree, investor relations, competitive landscape

## Inspiration
- Game Dev Tycoon, FTL, Slay the Spire
- For UI/UX, see [ui.md](./ui.md)
