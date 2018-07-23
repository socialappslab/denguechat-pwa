/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyView1 extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <section>
        <h2>Qué hacemos?</h2>
        <p>Nuestro propósito es mantener a la comunidad informada y activa sobre los temas de dengue en sus respectivos barrios.</p>
        <p>Seguinos en:</p>
        <p style="text-align: center">
          ${this._getLinkToSocialMedia("https://www.facebook.com/topadengue/", "Facebook")}&#160;&#160;/&#160;&#160;${this._getLinkToSocialMedia("https://twitter.com/TopaDengue", "Twitter")}
        </p>
      </section>
      <section>
        <h2>Dónde estamos?</h2>
        <div style="text-align">
          <iframe src=${this._getMapResouce()} width="100%" height="560">
          </iframe>
        </div>
      </section>
      <section>
      </section>
    `;
  }

  _getMapResouce() {
    let latitudLongitud = "-25.32045819021776%2C-57.64595028968813";
    let zoom = "16";
    let mid = "1fVbsTotFIrtS9ypBLI0Ta_kjAAmhVYNY";
    return `https://www.google.com/maps/d/embed?mid=${mid}&ll=${latitudLongitud}&z=${zoom}`;
  }

  _getLinkToSocialMedia(link, name) {
    return html`<a href=${link} target="_blank" style="color: #000000; font-size: 17px; text-decoration: none; font-family: Roboto, Arial, sans-serif;
    font-weight: 500;">${name}</a>`;
  }
}

window.customElements.define('my-view1', MyView1);
