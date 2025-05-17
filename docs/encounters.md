# Encounter System

Encounters are procedurally generated events that challenge your decision-making and shape your startup's journey. Each encounter offers choices that affect your resources, metrics, and future options.

See [game-design.md](./game-design.md) for the role of encounters in the gameplay loop.

## Encounter Types
- **Resource Opportunities:** Promotions, discounts, VC meetings
- **Technical Challenges:** Outages, bugs, scaling issues
- **Market Events:** Competition, regulations, viral moments
- **Special Opportunities:** Partnerships, acquisitions, hiring

## Example Encounters
- "A BlurbAI promotion offers 2M tokens at 50% discount. Purchase?"
- "Database corrupted! Spend 5M tokens to fix or lose 50% traction."
- "Competitor raised $10M. Spend $20K on marketing or lose share?"
- "Viral TikTok! Spend 2M tokens to scale or miss opportunity?"

## Encounter Structure (for Contributors)
An encounter is defined as a data object:
```json
{
  "id": "blurbai-promo",
  "type": "resource-opportunity",
  "description": "A BlurbAI promotion offers 2M tokens at 50% discount.",
  "options": [
    { "label": "Buy tokens", "tokenCost": 1000000, "moneyCost": 5000, "effect": "+2M tokens" },
    { "label": "Ignore", "effect": "No change" }
  ]
}
```
- **id:** Unique identifier
- **type:** Encounter category
- **description:** Scenario text
- **options:** Player choices, with costs and effects

## Adding New Encounters
- Encounters are modular. Add new ones by defining scenario, options, resource costs, and outcomes in the data folder ([see architecture.md](./architecture.md)).

## Outcomes
- Each choice impacts metrics: traction, PMF, revenue, innovation, etc.
- Some outcomes can unlock achievements ([see achievements.md](./achievements.md))
