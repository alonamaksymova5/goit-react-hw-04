export default function Image ({id, cardImage, description}) {
    return (
        <li key={id}>
            <img src={cardImage} alt={description} />
        </li>
    );
};