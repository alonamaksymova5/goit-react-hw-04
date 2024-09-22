// import s from './LoadMoreButton.module.css';

export default function LoadMoreButton({page}) {
    return (
        <button onClick={() => {
            page();
            
        }}>Load more</button>
    );
};