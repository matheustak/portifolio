import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './Projetos.module.css'; 



const Lightbox = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };

  return (
    <div >
      <h2>Lightbox</h2>
      <div className={styles.Ligh}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            onClick={() => openModal(image)}
            style={{ width: '200px', height: '200px', objectFit: 'cover', cursor: 'pointer' }}
          />
        ))}
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Imagem em destaque"
        className={styles.modal}
        overlayClassName="overlay"
      >
        
        <div className={styles.dvimg}>
        <button className={styles.btn} onClick={closeModal}>Fechar</button>
        {selectedImage && <img className={styles.imgselecao} src={selectedImage} alt="Imagem em destaque" />}
        </div>
      </Modal>
    </div>
  );
}

export default Lightbox;
