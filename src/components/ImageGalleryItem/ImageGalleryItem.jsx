import { GalleryItem } from './ImageGalleryItem.styled';
import { GalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ responseData }) => {
  return responseData.map(({ id, webformatURL, largeImageURL, tags }) => (
    <GalleryItem key={id}>
      <GalleryImage src={webformatURL} alt={tags} />
    </GalleryItem>
  ));
};
