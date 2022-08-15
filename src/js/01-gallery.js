import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryBoxRef = document.querySelector('.gallery');
const createImages = galleryItems.map(createImgMarkup).join('');
galleryBoxRef.insertAdjacentHTML('beforeend', createImages);

const lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createImgMarkup({ preview, original, description }) {
  return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a></li>`;
}
