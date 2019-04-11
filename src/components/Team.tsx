import * as React from 'react';

interface Props {
  className?: string;
  title?: string;
  members: Array<any>;
}

function TeamMember({ image, name, position, className }){
  return (
    <div className={className}>
      <div className="team-member">
        <img src={image} alt="#"/>
        <h4>{name}</h4>
        <p>{position}</p>
      </div>
    </div>
  );
}

const Team: React.SFC<Props> = ({ className, title, members }) => {

  return (
    <section className={`spad ${className}`}>
      <div className="container">
			<div className="section-title">
				<h2>{title}</h2>
			</div>
      <div className="row">
        <TeamMember {...members[0]} className="col-md-12" />
        {members.slice(1).map((member) => {
          return <TeamMember {...member} className="col-lg-4 col-md-6" key={member.name} />;
        })}
      </div>
				</div>
    </section>
  )
};

export default Team;
