import Modal from "react-modal";
import s from './ImageModal.module.css';


const ImageModal = ({ isOpen, currentImg, onClose }) => {
    return (
            <>
                <Modal isOpen={isOpen} onRequestClose={onClose}
                    style={{
                        content: {
                            top: "50%",
                            left: "50%",
                            right: "auto",
                            bottom: "auto",
                            marginRight: "-50%",
                            transform: "translate(-50%, -50%)",
                            border: "none",
                            backgroundColor: "transparent",
                        },
                        overlay: {
                            backgroundColor: "black",
                        },
                }}>
                    <img  src={currentImg} alt="Large image" className={s.modal} />
                </Modal>
            </>
    );
};

export default ImageModal;
