import ImageCard from "../ImageCard/ImageCard";


const ImageGallery = ({ images, onImageClick }) => {
    return (
        <ul>
            {images.map((image) => (
                <ImageCard key={image.id} image={image} onImageClick={onImageClick} />
            ))}
        </ul>
    );
};

export default ImageGallery;
