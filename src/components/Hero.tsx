import * as React from 'react';
import styled from '@emotion/styled';

interface Props {
  title: string;
  subtitle?: any;
  cta: {
    text: string;
    target: string;
  };
  image?: string;
  backgroundImage: string;
}

const Logo = styled.div`
  position: relative;
`;

const LogoImg = styled.img`
  margin-bottom: 24px;
`;

const LogoLink = styled.a`
  display: block;
  position: absolute;
  right: 147px;
  bottom: 17px;
  width: 134px;
  height: 40px;
  overflow: hidden;
  text-indent: 200%;
  white-space: nowrap;
`;


const Hero: React.SFC<Props> = ({ title, subtitle, cta, image, backgroundImage }) => {

  const ContainerWithBackgroundImage = styled.section`
    background: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
  `;

  return (
    <ContainerWithBackgroundImage className="hero-section set-bg">
      <div className="container h-100">
        <div className="hero-content text-white">
          <div className="row">
            <div className="logo-center text-center">
              <Logo>
                <LogoImg src="/social/logo.svg" alt="exo summit"/>
                <LogoLink href="http://www.openexo.com" target="_blank">OpenExO</LogoLink>
              </Logo>
              <p>{subtitle}</p>
              <a href={cta.target} className="site-btn ghost">{cta.text}</a>
            </div>
          </div>
          {
            image ?
              <div className="hero-rocket">
                <img src={image} alt="" />
              </div> : null
          }
        </div>
      </div>
    </ContainerWithBackgroundImage>
  )
};


export default Hero;
