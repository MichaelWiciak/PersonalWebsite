# PersonalWebsite

Deployed at https://michaelwiciak.com/ using Vercel for automated deployment.

This repository contains the code for my personal website, built with React, TypeScript, and Vite. The website features a dark theme and animations

It is a Single-Page Application website. It loads a single HTML page and dynamically updates content as the user interacts with it, without reloading the entire page.

It comes with a main advantage of fast loading times and smooth user experience (hopefully).
However, the initial load time may be longer due to larger bundle sizes.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling and development
- **Tailwind CSS 3.x** for styling
- **React Router v7** for client-side routing
- **PostHog** for analytics
- **EmailJS** for contact form
- **Google reCAPTCHA** for spam protection

## Features

- The website adapts to both mobile and desktop screens with a responsive navigation bar.

- A custom particle effect with varying depth, sizes, shapes, and colors. Particles fall in 10 different layers, each with unique speeds and properties. (See [How the Particle Animation Works](#how-the-particle-animation-works) for more details.)

- Each section of the website is modularised with its own file and folder. This structure makes the website easily modifiable and maintainable.

- Each page has custom meta tags and Open Graph tags for social sharing, managed via a custom `useSEO` hook.

- A contact form powered by EmailJS with Google reCAPTCHA spam protection.

## How the Particle Animation Works

The particle effect on the website is created using a custom script that generates particles with various characteristics such as size, shape, color, and speed.

1. **Particle Characteristics**:
   - Particles are created with different colors (shades of white and gray) and shapes (circular, oval, everything in between).
   - Each particle is assigned to one of ten different layers. Each layer has a unique falling speed, creating a sense of depth and perspective.

2. **Spawn and Animation**:
   - The script spawns particles (200 on desktop, 40 on mobile) and continues to add more at regular intervals to maintain a constant effect.
   - Particles are positioned randomly across the screen and start falling immediately. They are removed from the DOM once they fall off the screen.

3. **Layer Management**:
   - The script manages the number of particles in each layer, ensuring that the visual effect is consistently dense and evenly distributed.
   - If the number of particles in a layer drops below a certain threshold, new ones are automatically generated to fill the gap.

4. **Performance Considerations**:
   - The useEffect hook ensures that the particle effect is efficiently managed, with regular intervals set for adding new particles without overwhelming the browser.

## Environment Variables

Create a `.env` file based on `.env.example` with the following variables:

- `VITE_EMAILJS_SERVICE_ID` - EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID` - EmailJS template ID
- `VITE_EMAILJS_PUBLIC_KEY` - EmailJS public key
- `VITE_RECAPTCHA_SITE_KEY` - Google reCAPTCHA site key
- `VITE_PUBLIC_POSTHOG_PROJECT_TOKEN` - PostHog project token
- `VITE_PUBLIC_POSTHOG_HOST` - PostHog host URL

## Available Scripts

In the `personal_website` directory, you can run:

```bash
npm run dev
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

```bash
npm run build
```

Builds the app for production to the `dist` folder.\
The build is minified and the filenames include the hashes.

```bash
npm run preview
```

Preview the production build locally.

## Deployment

The project is configured for deployment on Vercel. The `vercel.json` file ensures all routes are rewritten to `index.html` for client-side routing.

To deploy:

1. Push to a GitHub repository
2. Import the project into Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy
