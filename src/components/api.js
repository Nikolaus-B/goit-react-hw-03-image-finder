import axios from 'axios';

const ApiKey = '39619229-fb57a8f6c3890e7ba1598bedf';

axios.defaults.baseURL = `https://pixabay.com/api/`;

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};
