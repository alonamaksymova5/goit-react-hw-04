import s from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({loadMoreImages}) => {
    return (
        <div>
            <button className={s.btn} onClick={() => loadMoreImages()}>Load more</button>
        </div>
    );
};

export default LoadMoreBtn;