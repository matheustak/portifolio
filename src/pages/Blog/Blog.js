import React from 'react';
import styles from "./Blog.module.css";
import WhatsAppFlutuante from  "../../components/WhatsAppFlutuante.js";

const Blog = () => {
  return (
    <div className={styles.blog}>
    
   
<iframe src="https://mainmatheusdevportifolio.wordpress.com/wp-json/oembed/1.0/embed?url=https://mainmatheusdevportifolio.wordpress.com/2024/04/08/criando-um-componente-flutuante-do-whatsapp-com-animacoes-em-react-usando-css-modules/" 

        title="Blog" 
        className={styles.iframe}
      
        sandbox="allow-same-origin allow-scripts"
      ></iframe>
      <WhatsAppFlutuante />
    </div>
  );
}

export default Blog;
