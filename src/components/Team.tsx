import * as React from 'react';

interface Props {
  className?: string;
  title?: string;
  members: Array<any>;
}

function TeamMember({ image, name, position }){
  return (
    <div className="col-lg-3 col-md-6">
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
      {members.map((member) => {
        return <TeamMember {...member} key={member.name} />;
      })}
      </div>
				</div>
    </section>
  )
};

export default Team;
