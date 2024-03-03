
import React, { useState } from 'react';
import Modal from 'react-modal';


export const CustomModal = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
  
    // Função para abrir o modal e definir a imagem selecionada
    const openModal = (image) => {
      setSelectedImage(image);
      setIsOpen(true);
    };
  
    // Função para fechar o modal
    const closeModal = () => {
      setSelectedImage(null);
      setIsOpen(false);
    };
  return (

   <div>
    
    {/* Modal */}
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Imagem em destaque"
      className="modal"
      overlayClassName="overlay"
    >
      <button onClick={closeModal}>Fechar</button>
      {selectedImage && <img src={selectedImage} alt="Imagem em destaque" />}
    </Modal>

    </div>
  )
}


  export default CustomModal ;