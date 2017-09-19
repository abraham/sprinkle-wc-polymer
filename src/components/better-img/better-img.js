class BetterImg extends HTMLElement {
  constructor() {
    super();
    this.init();
  }

  init() {
    let img = document.createElement('img');
    img.setAttribute('width',  this.width);
    img.setAttribute('height',  this.height);
    img.setAttribute('src',  this.url);
    img.onerror = this.onImgError;
    this.appendChild(img);

    // this.innerHTML = `<img src="${this.url}" width="${this.width}" height="${this.height}" />`;
    // this._img.onerror = this.onImgError;
  }

  get url() {
    return this.getAttribute('url');
  }

  set url(url) {
    this.setAttribute('url', url);
    this._setSrc(url);
  }

  get width() {
    return this.getAttribute('width') || '640';
  }

  get height() {
    return this.getAttribute('height') || '480';
  }

  get fallback() {
    return this.getAttribute('fallback');
  }

  _setSrc(url) {
    this._img.setAttribute('src', url);
  }

  get _img() {
    return this.querySelector('img');
  }

  onImgError(event) {
    let self = event.target.parentElement;
    self.url = self.fallback;
    self.report();
  }

  report() {
    this.log('Image failed to load, reporting to server');

    // TODO: Report error to server
  }

  log(msg) {
    console.log(`[BI] ${msg}`);
  }
}

customElements.define('better-img', BetterImg);
