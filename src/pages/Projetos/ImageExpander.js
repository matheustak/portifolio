import React, { useState } from 'react';

import styles from './ImageExpander.module.css'; 



const ImageExpander = ({ src, alt }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`${styles.image-expander} ${expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
      <img src={src} alt={alt} />
    </div>
  );
};

