import React, { useState, useEffect } from "react";

import { ImageWrapper, NotFoundText } from "./styles";

interface ImageComponentProps {
  imageUrl: string;
  width?: number;
  height?: number;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  imageUrl,
  ...props
}) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;

    img.onerror = () => setError(true);
  }, [imageUrl]);

  return (
    <ImageWrapper width={props.width} height={props.height}>
      {error ? <NotFoundText>not found</NotFoundText> : <img src={imageUrl} />}
    </ImageWrapper>
  );
};

export default ImageComponent;
