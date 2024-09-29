import { ProgressBar } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => {
    return (
    <div className={s.loader}>
        <ProgressBar
    visible={true}
    height="100"
    width="100"
    color="#4fa94d"
    ariaLabel="progress-bar-loading"
    wrapperStyle={{}}
    wrapperClass=""
    />
    </div>
    );
};

export default Loader;