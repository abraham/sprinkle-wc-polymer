class AboutCard extends HTMLElement {
  constructor() {
    super();
    this.initShadowDom();
  }

  initShadowDom() {
    let shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = this.template;
  }

  get template() {
    return `
      <style>
        @import 'css/material.blue-red.min.css';
        .card.mdl-card, .support-card.mdl-card {
          width: 384px;
          margin: 2px;
        }
        .mdl-card__supporting-text {
          height: 110px;
        }
      </style>

      <div class="card mdl-cell mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title">
          <h2 class="mdl-card__title-text">Web Components Demo</h2>
        </div>
        <div class="mdl-card__supporting-text">
          <p>Sprinkle is an example app built with Polymer and native Web Components v1.<br></p>
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="https://github.com/abraham/sprinkle-wc-polymer">
            Source
          </a>
          <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="https://unsplash.com">
            Unsplash
          </a>
          <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="http://webcomponents.org/">
            Components
          </a>
        </div>
        <div class="mdl-card__menu">
          <!-- <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
            <i class="material-icons">share</i>
          </button> -->
        </div>
      </div>`;
  }
}

customElements.define('about-card', AboutCard);
