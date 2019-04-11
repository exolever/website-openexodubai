import * as React from 'react';
import styled from '@emotion/styled';
import HighlightSection from './HighlightSection';

interface Button {
  label: string;
  url: string;
}

interface Props {
  title: string;
  image: any;
  backgroundImage: any;
  button: Button;
}

const Video: React.SFC<Props> = ({ title, image, backgroundImage, button }) => {
  const Row = styled.div`
    background: url(${image});
    background-position: calc(100% + 205px) 100%;
    background-repeat: no-repeat;
    min-height: 470px;
  `;

  return (
    <HighlightSection backgroundImage={backgroundImage}>
      <Row className="row">
        <div className="col-lg-6">
          <div className="section-title text-left">
            <h2 className="text-white">{title}</h2>
          </div>
          {button && 
            <div className="text-center">
              <a target="_blank" className="site-btn text-white" href={button.url}>{button.label}</a>
            </div>}
        </div>
      </Row>
    </HighlightSection>
  )
};

export default Video;
