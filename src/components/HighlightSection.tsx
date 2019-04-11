import * as React from 'react';
import styled from '@emotion/styled';

interface Props {
  children?: React.ReactNode;
  title?: any;
  tagline?: string;
  icon?: string;
  backgroundImage?: string;
  className?: string;
}

const HighlightSection: React.SFC<Props> = ({ title, tagline, icon, backgroundImage, children, className }) => {

  const BackgroundImage = styled.section`
    background-image: url(${backgroundImage});
  `;

  return (
  <BackgroundImage className={`domain-search-section set-bg sc-about-page ${className}`}>
      <div className="container">
        <div className="section-title">
          <h2 className="text-white">{title}</h2>
          {tagline ? <p className="text-white">{tagline}</p> : null}
        </div>
        {children}
      </div>
    </BackgroundImage>
  )
};

export default HighlightSection;
