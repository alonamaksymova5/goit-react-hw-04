import toast from 'react-hot-toast';
import s from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
    const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const search = form.elements.search.value;

    if (search.trim() === "") {
        toast.error("We can't find something with empty value of search");
        return;
    } else {
        onSubmit(search);
    }

    form.reset();
    };

    return (
    <header className={s.header}>
        <form className={s.form} onSubmit={handleSubmit}>
        <input
        className={s.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        name="search"
        />
        <button className={s.button} type="submit">
            Search
        </button>
        </form>
    </header>
    );
};

export default SearchBar;

