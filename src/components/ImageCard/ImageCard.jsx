import s from './ImageCard.module.css';

const ImageCard = ({ likes, smallImage, largeImage, alt,  openModalClick }) => {
    return (
        <div className={s.picture}>
            <img className={s.card} src={smallImage} alt={alt} onClick={() => openModalClick(largeImage)}/>
            <span>
                <p>Likes: {likes}</p>
                <p>{alt}</p>
            </span>
        </div>
    );
};

export default ImageCard;