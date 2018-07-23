/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store } from '../store.js';

// These are the actions needed by this element.
import { increment, decrement } from '../actions/counter.js';

// We are lazy loading its reducer.
import counter from '../reducers/counter.js';
store.addReducers({
  counter
});

// These are the elements needed by this element.
import './counter-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyView2 extends connect(store)(PageViewElement) {

  _click(url) {
      console.log(url)
  }

  _render(props) {
    // return html`
    //   ${SharedStyles}
    //   <section>
    //     <h2>Redux example: simple counter</h2>
    //     <div class="circle">${props._value}</div>
    //     <p>This page contains a reusable <code>&lt;counter-element&gt;</code>. The
    //     element is not built in a Redux-y way (you can think of it as being a
    //     third-party element you got from someone else), but this page is connected to the
    //     Redux store. When the element updates its counter, this page updates the values
    //     in the Redux store, and you can see the current value of the counter reflected in
    //     the bubble above.</p>
    //     <br><br>
    //   </section>
    //   <section>
    //     <p>
    //       <counter-element value="${props._value}" clicks="${props._clicks}"
    //           on-counter-incremented="${() => store.dispatch(increment())}"
    //           on-counter-decremented="${() => store.dispatch(decrement())}">
    //       </counter-element>
    //     </p>
    //   </section>
    // `;
    return html`
      ${SharedStyles}
      <section style="text-align: center;">
        <h3>Lista de Coordinadores</h3>
        <paper-card image="https://scontent.fasu5-1.fna.fbcdn.net/v/t1.0-1/p320x320/33530514_10215077595388586_8757841944685576192_n.jpg?_nc_cat=0&oh=d01c6f64819a2149e2373b9b6c316317&oe=5BD4B73D" heading="Cristhian Parra" alt="Emmental" style="text-align: center;  width: 300px;  margin: 8px;">
          <div class="card-content" style="text-align: left;">
          Cristhian Parra, es colaborador en AppCivist.
          </div>
          <div class="card-actions" style="text-align: right;">
            <paper-button><a href="https://www.facebook.com/cristhian.parra" target="_blank" style="color: #000000; font-size: 17px; text-decoration: none; font-family: Roboto, Arial, sans-serif;
            font-weight: 500;">Ver</a></paper-button>
          </div>
        </paper-card>
        <paper-card image="https://scontent.fasu5-1.fna.fbcdn.net/v/t1.0-1/c73.0.320.320/p320x320/35198996_237698383482015_6506930085424005120_n.jpg?_nc_cat=0&oh=af1ea7fa4611444f14034cafbcba65dd&oe=5BD57AA0" heading="Laura González" alt="Emmental" style="text-align: center; width: 300px;  margin: 8px;">
          <div class="card-content" style="text-align: left;">
            Laura González, es coordinadora en Mil Solidarios.
          </div>
          <div class="card-actions" style="text-align: right;">
          <paper-button><a href="https://www.facebook.com/profile.php?id=100017255658944" target="_blank" style="color: #000000; font-size: 17px; text-decoration: none; font-family: Roboto, Arial, sans-serif;
          font-weight: 500;">Ver</a></paper-button>
          </div>
        </paper-card>
      </section>
      <section>
        <h3>Lista de Voluntarios</h3>
      </section>
    `;
  }

  static get properties() {
    return {
      // This is the data from the store.
      _clicks: Number,
      _value: Number
    }
  }

  // This is called every time something is updated in the store.
  _stateChanged(state) {
    this._clicks = state.counter.clicks;
    this._value = state.counter.value;
  }
}

window.customElements.define('my-view2', MyView2);
