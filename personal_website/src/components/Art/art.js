import React from "react";
import "./art.css"; // Optional for custom styling

export const Art = () => {
  return (
    <section id="artworkPage">
      <div id="artwork">
        <h1 className="artworkTitle">My Artwork</h1>
        <span className="artworkDesc">Check out my creations on Reddit!</span>

        {/* Embed Reddit Subreddit */}
        <div className="redditEmbed">
          <iframe
            src="https://www.reddit.com/r/randimageMW"
            width="100%"
            height="600px"
            title="Reddit Artwork"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Art;
