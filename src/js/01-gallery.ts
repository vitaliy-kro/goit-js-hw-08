import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { Image } from '../types/gallery.types';
// Change code below this line

const galleryBoxRef = document.querySelector('.gallery')!;
galleryBoxRef.insertAdjacentHTML('beforeend', createImageListMarkup());

function createSimpleLightBox() {
  new SimpleLightbox('.gallery__item', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}
createSimpleLightBox();
function createImageListMarkup() {
  return galleryItems.map(createImageItemMarkup).join('');
}
function createImageItemMarkup({ preview, original, description }: Image) {
  return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a></li>`;
}
