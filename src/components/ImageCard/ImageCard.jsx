import s from './ImageCard.module.css';

const ImageCard = ({ image, onImageClick }) => {
    return (
        <div className={s.card} onClick={() => onImageClick(image)}>
            <img src={image.urls.small} alt={image.alt.description} />
        </div>
    );
};

export default ImageCard;