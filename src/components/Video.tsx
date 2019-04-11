import * as React from 'react';
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
  return (
    <HighlightSection backgroundImage={backgroundImage}>
      <div className="row">
        <div className="col-lg-6">
          <div className="section-title text-left">
            <h2 className="text-white">{title}</h2>
          </div>
        </div>
        <div className="col-lg-6">
          <p><img src={image} width="100%" /></p>
          {button && 
            <div className="text-center">
              <a target="_blank" className="site-btn text-white" href={button.url}>{button.label}</a>
            </div>}
        </div>
      </div>
    </HighlightSection>
  )
};

export default Video;
