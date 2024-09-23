# PersonalWebsite

Deployed at https://michaelwiciak.com/ using Vercel for automated deployment.

This repository contains the code for my personal website, designed with a focus on responsive design, smooth animations, and interactive features. Below are some of the key features of the website:

## Features

- **Fully Responsive Layout**: The website is built to adapt seamlessly to both mobile and desktop screens. The navigation bar dynamically changes depending on the screen resolution to provide an optimal user experience on any device.

- **Circular Logo Animation**: A smooth, eye-catching animation applied to the website's logo, which adds a lively touch to the site's design.

- **Snowfall Animation**: A custom snowfall effect with varying depth, sizes, shapes, and colors. The snowflakes fall in 10 different layers, each with unique speeds and properties, creating a visually appealing wintery effect across the site. (See [How the Snowfall Animation Works](#how-the-snowfall-animation-works) for more details.)

- **Hover Highlighting**: Interactive elements such as the navigation bar feature highlighting on mouse hover, enhancing user engagement and providing intuitive navigation.

- **Smooth Scroll Animations**: Navigation through different sections of the website is smooth and fluid, offering a pleasant browsing experience.

- **Modular Structure**: Each section of the website is modularized, with its own file and folder. This structure makes the website easily modifiable and maintainable.

- **Working Contact Form**: The contact form is fully functional, powered by EmailJS. Messages sent through the form are delivered directly to my personal email address.

- **And More**: Additional features are in development as I continue to enhance the site and deepen my knowledge of React.

## How the Snowfall Animation Works

The snowfall effect on the website is created using a custom script that generates snowflakes with various characteristics such as size, shape, color, and speed. Here's a brief overview of how it works:

1. **Snowflake Characteristics**:
   - The snowflakes are created with different colors (shades of white and gray) and shapes (e.g., circular, oval, etc.).
   - Each snowflake is assigned to one of ten different layers. Each layer has a unique falling speed, creating a sense of depth and perspective.

2. **Spawn and Animation**:
   - The script initially spawns 100 snowflakes and continues to add more at regular intervals to maintain a constant snowfall.
   - Snowflakes are positioned randomly across the screen and start falling immediately. They are removed from the DOM once they fall off the screen.

3. **Layer Management**:
   - The script manages the number of snowflakes in each layer, ensuring that the visual effect is consistently dense and evenly distributed.
   - If the number of snowflakes in a layer drops below a certain threshold, new ones are automatically generated to fill the gap.

4. **Performance Considerations**:
   - The useEffect hook ensures that the snowfall effect is efficiently managed, with regular intervals set for adding new snowflakes without overwhelming the browser.

This snowfall effect adds a whimsical touch to the website, especially during winter or festive seasons.

## Contributions

I'm actively working on improving this project and welcome any suggestions or contributions. If you have ideas on how to enhance the website or want to collaborate, feel free to open an issue or submit a pull request. 

Thanks for checking out my website project!
