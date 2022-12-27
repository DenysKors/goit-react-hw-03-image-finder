import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ responseData, getImageData }) => {
  return (
    <Gallery>
      <ImageGalleryItem
        responseData={responseData}
        getImageData={getImageData}
      />
    </Gallery>
  );
};
