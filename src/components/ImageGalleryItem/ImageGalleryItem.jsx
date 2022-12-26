import { GalleryItem } from './ImageGalleryItem.styled';
import { GalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ responseData }) => {
  console.log(responseData);
  return responseData.map(({ id, webformatURL, tags }) => (
    <GalleryItem key={id}>
      <GalleryImage src={webformatURL} alt={tags} />
    </GalleryItem>
  ));
};
