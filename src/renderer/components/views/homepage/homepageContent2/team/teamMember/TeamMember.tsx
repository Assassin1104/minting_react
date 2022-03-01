import React from 'react';
import "./index.scss";

export default function TeamMember({
  name,
  role,
  ape,
  description
}: {
  name: string;
  role: string;
  ape: string;
  description: string;
}): JSX.Element {
  return (
    <div className="hp-tm">
      <img src={ape} alt={name} />
      <div className="hp-tm-l">
        <p className="team-name">{name}</p>
        <p className="team-role">{role}</p>
        <p className="team-description">{description}</p>
      </div>
    </div>
  );
}
