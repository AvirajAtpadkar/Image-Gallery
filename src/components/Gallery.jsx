import React, { useEffect, useState } from 'react';
import { fetchImages } from '../api/api';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getImages = async () => {
      try {
        const data = await fetchImages();
        setImages(data);
      } catch (err) {
        setError(err.message);
      }
    };

    getImages();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div className="gallery-container">
      {images.map((image) => (
        <div key={image.id} className="image-item">
          <Link to={`/image/${image.id}`}>
            <img src={image.url} alt={image.title} />
            <p>{image.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
