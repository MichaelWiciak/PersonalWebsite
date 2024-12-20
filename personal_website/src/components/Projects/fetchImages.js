// fetch all images from ../../assets/StanfordData and return the images as an array

const fetchImages = () => {
  const context = require.context(
    "../../assets/StanfordData",
    false,
    /\.(png|jpe?g|svg)$/
  );
  return context.keys().map(context);
};

export default fetchImages;
