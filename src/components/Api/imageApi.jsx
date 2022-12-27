const KEY = '31271672-bfb0d2ac7c61ea0216be79fb4';

export const fetchImages = async (query, page) => {
  const responceQuery = await fetch(
    `https://pixabay.com/api/?key=${KEY}&q=${query}&page=1&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
  );
  return await responceQuery.json();
};
