import * as React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Section: React.SFC<Props> = ({ className, children }) => {

  return (
    <section className={`spad ${className}`}>
      <div className="container">
        {children}
      </div>
    </section>
  )
};

export default Section;
