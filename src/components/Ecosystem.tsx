import * as React from 'react';
import HighlightSection from './HighlightSection';

const Ecosystem = ({ title, description, backgroundImage }) =>
  <HighlightSection title={title} backgroundImage={backgroundImage} className="ecosystem">
    <div className="text-center">
      {description}
    </div>
  </HighlightSection>;

export default Ecosystem;
