import s from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({page}) => {
    return (
        <button className={s.btn} onClick={() => {
            page();
            
        }}>Load more</button>
    );
};

export default LoadMoreBtn;