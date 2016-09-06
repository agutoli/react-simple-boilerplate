import React from 'react';

import './Contact.scss';

export default () => (
  <div className="contact">
    <fieldset>
      <div className="contact__row">
        <label>Name: </label>
        <input />
      </div>
      <div className="contact__row">
        <label>Description: </label>
        <textarea></textarea>
      </div>
      <div className="contact__row">
        <button>Save</button>
      </div>
    </fieldset>
  </div>
);
