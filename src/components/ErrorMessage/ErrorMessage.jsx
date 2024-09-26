import s from './ErrorMessage.module.css';

const ErrorMessage = () => {
    return (
        <div className={s.wrapperText}>
            <div className={s.text}>Sorry, we don`t find images</div>
        </div>
    );
};

export default ErrorMessage;