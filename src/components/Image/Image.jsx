import s from './Image.module.css';

const Image = ({ id, cardImage, description }) => {
    return (
        <li key={id} className={s.item}>
            <img src={cardImage} alt={description} className={s.image} />
        </li>
    );
};

export default Image;