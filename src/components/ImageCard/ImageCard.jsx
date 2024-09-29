import s from './ImageCard.module.css';

const ImageCard = ({ smallImage, largeImage, alt,  openModalClick }) => {
    return (
        <div className={s.card}>
            <img className={s.picture} src={smallImage} alt={alt} onClick={() => openModalClick(largeImage, alt)}/>
        </div>
    );
};

export default ImageCard;