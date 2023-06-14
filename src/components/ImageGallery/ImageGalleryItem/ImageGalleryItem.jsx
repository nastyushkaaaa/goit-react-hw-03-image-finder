export const ImageGalleryItem = ({ webImage, description }) => {
  return (
    <li>
      <img src={webImage} alt={description} />
    </li>
  );
};
