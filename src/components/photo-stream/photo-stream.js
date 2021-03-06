import { UnsplashApi } from '../../js/unsplash.min.js';

class PhotoStream extends HTMLElement {
  constructor() {
    super();
    this.initShadowDom();
    this.getPhotos()
      .then(photos => this.renderPhotos(photos));
  }

  initShadowDom() {
    let shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = this.template;
  }

  get clientId() {
    this.getAttribute('client-id');
  }

  get collectionId() {
    this.getAttribute('collection-id');
  }

  get template() {
    return `
      <style>
        @import 'css/material.blue-red.min.css';
        .mdl-grid {
          justify-content: center;
        }
        .mdl-card {
          margin: 2px;
        }
      </style>

      <div class="mdl-grid">
        <about-card></about-card>
      </div>`;
  }

  get api() {
    return new UnsplashApi(this.getAttribute('client-id'));
  }

  getPhotos() {
    return this.api.collection(this.getAttribute('collection-id'));
  }

  get grid() {
    return this.shadowRoot.querySelector('.mdl-grid');
  }

  renderPhoto(image) {
    let card = document.createElement('photo-card');
    card.image = image;
    this.grid.appendChild(card);
  }

  renderPhotos(images) {
    images.forEach(image => this.renderPhoto(image));
  }
}

customElements.define('photo-stream', PhotoStream);
