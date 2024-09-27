import ImageCard from "../ImageCard/ImageCard";
import s from './ImageGallery.module.css';


const ImageGallery = ({ imagesGallery, openModalClick }) => {
    return (
        <>
            <ul className={s.list}>
                {imagesGallery.map(({ id, likes, alt_description, urls: { regular, small } }) => (
                    <li key={id} className={s.items}>
                        <ImageCard likes={likes} smallImage={small} largeImage={regular} alt={alt_description} openModalClick={openModalClick} />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ImageGallery;
