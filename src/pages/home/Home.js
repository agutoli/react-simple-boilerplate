import React from 'react';
import Articles from 'components/articles';
import './Home.less';

export default () => (
  <div className="home">
    <h1>The New York Times Payload Example (using flux/alt)</h1>
    <Articles />
  </div>
);
