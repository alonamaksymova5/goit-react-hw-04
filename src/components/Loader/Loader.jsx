// import { MagnifyingGlass } from "react-loader-spinner";
// import s from "./loader.module.css";

export default function Loader() {
    return (
    <div>
        <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
        />
    </div>
    );
}