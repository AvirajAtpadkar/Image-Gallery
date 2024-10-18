import React from 'react';
import { useParams } from 'react-router-dom';

const ImageDetails = ({ images }) => {
  const { id } = useParams();
  const image = images.find((img) => img.id === parseInt(id));

  if (!image) return <div>Image not found!</div>;

  return (
    <div className="image-details">
      <img src={image.url} alt={image.title} />
      <h1>{image.title}</h1>
      <p>{image.description}</p>
    </div>
  );
};

export default ImageDetails;
