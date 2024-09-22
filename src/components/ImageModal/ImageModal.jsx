import Modal from "react-modal";
import s from './ImageModal.module.css';


const ImageModal = ({ isOpen, image: { urls, alt_description } }, onClose) => {
    return (
        <>
            <Modal isOpen={isOpen} onRequestClose={onClose} overlayClassName={s.ovverlay} shouldCloseOnOverlayClick={true} >
                <div>
                    <img src={urls.regular} alt={alt_description} />
                    <div>
                        <p>{alt_description }</p>
                    </div>
                </div>
            </Modal>
            <button onClick={onClose}></button>
        </>
    );
};

export default ImageModal;
