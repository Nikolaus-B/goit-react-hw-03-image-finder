import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  if (images.length === 0) {
    return <p>No images to display</p>;
  }

  return (
    <ImageGalleryList>
      {images.map(img => {
        return (
          <ImageGalleryItem
            key={img.id}
            img={img.webformatURL}
            largeImg={img.largeImageURL}
            tag={img.tags}
          />
        );
      })}
    </ImageGalleryList>
  );
};
