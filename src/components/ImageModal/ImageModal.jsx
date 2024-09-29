import Modal from "react-modal";
import s from './ImageModal.module.css';


const ImageModal = ({ isOpen, currentImg, currentAlt, onClose }) => {
    return (
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
                            backgroundColor: "lightgray",
                        },
                }}>
                <img src={currentImg} alt={currentAlt} className={s.modal} />
                <p className={s.description}>{currentAlt || "No description available"}</p>
                </Modal>
    );
};

export default ImageModal;
