import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem key={id} webImage={webformatURL} description={tags} />
      ))}
    </ul>
  );
};
