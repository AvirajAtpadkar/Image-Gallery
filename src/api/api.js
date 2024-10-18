import axios from 'axios';

const API_URL = 'https://api.slingacademy.com/v1/sample-data/photos';

// Fetch images from API
export const fetchImages = async () => {
  try {
    const response = await axios.get(`${API_URL}?limit=20`);
    return response.data.photos; // Assuming 'photos' key has the images array
  } catch (error) {
    throw new Error('Error fetching images');
  }
};
