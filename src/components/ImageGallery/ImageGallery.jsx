import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
const ImageGallery = ({ picture }) => {
  return (
    <ul className={s.gallery}>
      {picture.map(({ id, webformatURL }) => (
        <ImageGalleryItem key={id} webformatURL={webformatURL} />
      ))}
    </ul>
  );
};
export default ImageGallery;
