import ImageCard from "../ImageCard/ImageCard";
import s from './ImageGallery.module.css';


const ImageGallery = ({ images, onImageClick }) => {
    return (
        <ul className={s.list}>
            {images.map((image) => (
                <ImageCard key={image.id} image={image} onImageClick={onImageClick} />
            ))}
        </ul>
    );
};

export default ImageGallery;
