export const ImageGalleryItem = ({ responseData }) => {
  return responseData.map(({ id, webformatURL, tags }) => (
    <li key={id}>
      <img src={webformatURL} alt={tags} />
    </li>
  ));
};
