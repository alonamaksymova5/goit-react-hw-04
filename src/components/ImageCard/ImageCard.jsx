// import s from './ImageCard.module.css';

export default function ImageCard({ image, onImageClick }) {
    return (
        <li onClick={() => onImageClick(image)}>
            <img src={image.urls.small} alt={image.alt.description} />
        </li>
    );
};