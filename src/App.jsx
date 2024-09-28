import './App.css';
import { useState } from 'react';
import { Toaster } from "react-hot-toast";
import Modal from "react-modal";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import Loader from "./components/Loader/Loader.jsx";
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn.jsx';
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import searchImages from "./searchApi.js";


function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);

  Modal.setAppElement("#root");

  const openModal = (imageURL) => {
    setCurrentImg(imageURL);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImg(null);
  };

  const submitImages = async (newSearch) => {
    try {
      setCurrentPage(1);
      setError(false);
      setLoading(true);
      setSearch(newSearch);

      const data = await searchImages(newSearch, 1);
      setImages(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreImages = async () => {
    try {
      setLoading(true);

      const morePage = currentPage + 1;

      const data = await searchImages(search, morePage);
      setCurrentPage(morePage);
      setImages((prev) => [...prev, ...data]);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <SearchBar onSubmit={submitImages} />
      <Toaster />
      {images.length > 0 && (
        <ImageGallery imagesGallery={images} openModalClick={openModal} />
      )}
      {images.length > 0 && !loading && (
        <LoadMoreBtn loadMoreImages={loadMoreImages} />
      )}
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {isOpen && (
        <ImageModal isOpen={isOpen} onClose={closeModal} currentImg={currentImg} />
      )}
    </>
  );
}

export default App;


