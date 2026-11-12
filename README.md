# Dreamora

**Build Your Dream City. Create. Build. Explore.**

Dreamora is an online isometric city-building and simulation game. Build a city your way, shape neighborhoods, manage resources, and watch a living world of vehicles, trains, planes, and pedestrians come to life.

Dreamora preserves the original open-source game's city-building and theme-park experiences while presenting them under a new brand and with a five-language interface.

## Play

- Website: https://aipctool.com
- City builder: https://aipctool.com/
- Theme park builder: https://aipctool.com/coaster

## Languages

- English (United States): `en`
- 한국어: `ko`
- Deutsch: `de`
- 日本語: `ja`
- Português (Brasil): `pt-BR`

The language selector is available on the game landing screen.

## Game features

- Isometric HTML5 Canvas rendering with depth sorting and layered sprites.
- City simulation with autonomous cars, buses, trains, planes, seaplanes, and pedestrians.
- Roads, railways, bridges, buildings, parks, utilities, and zoning.
- Residential, commercial, and industrial development, resources, and city growth.
- Save and load multiple cities.
- Multiplayer/co-op city sessions.
- Responsive desktop and touch-friendly mobile controls.
- A separate theme-park building mode with rides, roller coasters, and guests.

## Technology

- Next.js 16, React 19, TypeScript
- HTML5 Canvas
- Tailwind CSS and Radix UI
- General Translation (gt-next)

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

For automatic translation updates during production builds, add a General Translation API key as the `GT_API_KEY` environment variable. Without this key, the build continues using translation snapshots already committed to the repository.

## Deployment

The project can be deployed to a Next.js-compatible host. Configure the production domain as `aipctool.com` and ensure the host has the required environment variables for optional multiplayer services before launch.

## Credits and license

Dreamora is a modified and rebranded distribution of [IsoCity & IsoCoaster](https://github.com/amilich/isometric-city) by its original author and contributors. The upstream project is distributed under the MIT License. The original copyright and license notice is retained in the `LICENSE` file. Third-party assets and services remain subject to their respective licenses and terms.

Dreamora branding and website modifications are maintained in this repository; they do not imply authorship of the original game engine.
