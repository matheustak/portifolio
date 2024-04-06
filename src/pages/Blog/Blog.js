import React from 'react';
import styles from "./Blog.module.css";
import WhatsAppFlutuante from  "../../components/WhatsAppFlutuante.js";

const Blog = () => {
  return (
    <div className={styles.blog}>
    
      <iframe
        src="https://mainmatheusdevportifolio.wordpress.com/2024/04/06/salmos/" 
        title="Blog" 
        className={styles.iframe}
      
        sandbox="allow-same-origin allow-scripts"
      ></iframe>
      <WhatsAppFlutuante />
    </div>
  );
}

export default Blog;
