import s from './ErrorMessage.module.css';

const ErrorMessage = () => {
    return (
        <div className={s.wrapperText}>
            <div className={s.text}>Sorry, there was an error, please try again</div>
        </div>
    );
};

export default ErrorMessage;