import ImageCard from "../ImageCard/ImageCard";
import s from './ImageGallery.module.css';


const ImageGallery = ({ images, onImageClick }) => {
    return (
        <ul className={s.list}>
            {images.map((image) => (
                <li key={image.id}> <ImageCard image={image} onImageClick={onImageClick} /></li>
            ))}
        </ul>
    );
};

export default ImageGallery;
