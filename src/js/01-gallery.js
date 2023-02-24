// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  gallery: document.querySelector('.gallery'),
};

const galleryMarkup = createGalleryMarkup(galleryItems);

addGalleryMarkup(galleryMarkup);

function createGalleryMarkup(items) {
  return items
    .map(item => {
      return `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`;
    })
    .join('');
}

function addGalleryMarkup(markup) {
  refs.gallery.innerHTML = markup;
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionType: 'attr',
  captionDelay: 250,
});
