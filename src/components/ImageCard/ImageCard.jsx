import s from './ImageCard.module.css';

const ImageCard = ({ image, onImageClick }) => {
    console.log(image);
    
    return (
        <li className={s.card} onClick={() => onImageClick(image)}>
            
            <img src={image.urls.small} alt={image.alt.description} />
        </li>
    );
};

export default ImageCard;