# PersonalWebsite

Deployed at https://michaelwiciak.com/ using Vercel for automated deployment.

This repository contains the code for my personal website, built with React, TypeScript, and Vite. The website features a modern dark theme, smooth animations, and interactive features.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling and development
- **Tailwind CSS 3.x** for styling
- **React Router v7** for client-side routing
- **PostHog** for analytics
- **EmailJS** for contact form
- **Google reCAPTCHA** for spam protection

## Features

- **Fully Responsive Layout**: The website adapts seamlessly to both mobile and desktop screens with a responsive navigation bar.

- **Circular Logo Animation**: A smooth animation applied to the website's logo.

- **Particle Animation**: A custom particle effect with varying depth, sizes, shapes, and colors. Particles fall in 10 different layers, each with unique speeds and properties. (See [How the Particle Animation Works](#how-the-particle-animation-works) for more details.)

- **Hover Highlighting**: Interactive elements such as the navigation bar feature highlighting on mouse hover, enhancing user engagement.

- **Modular Structure**: Each section of the website is modularized, with its own file and folder. This structure makes the website easily modifiable and maintainable.

- **Dynamic SEO**: Each page has custom meta tags and Open Graph tags for social sharing, managed via a custom `useSEO` hook.

- **Working Contact Form**: The contact form is fully functional, powered by EmailJS with Google reCAPTCHA spam protection.

- **Dark Theme**: A custom dark theme with CSS custom properties for consistent theming.

- **And More**: Additional features are in development as I continue to enhance the site.

## How the Particle Animation Works

The particle effect on the website is created using a custom script that generates particles with various characteristics such as size, shape, color, and speed. Here's a brief overview of how it works:

1. **Particle Characteristics**:
   - Particles are created with different colors (shades of white and gray) and shapes (circular, oval, etc.).
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

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `dist` folder.\
The build is minified and the filenames include the hashes.

### `npm run preview`

Preview the production build locally.

## Deployment

The project is configured for deployment on Vercel. The `vercel.json` file ensures all routes are rewritten to `index.html` for client-side routing.

To deploy:

1. Push to a GitHub repository
2. Import the project into Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy

## Contributions

I'm actively working on improving this project and welcome any suggestions or contributions. If you have ideas on how to enhance the website or want to collaborate, feel free to open an issue or submit a pull request.

Thanks for checking out my website project!
