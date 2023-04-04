import React from 'react';
import './css/Card.css';

function Card(props) {
  return (
    <div className="card mb-4 rounded">
      <img src={props.image} className="card-img-top" alt={props.title} style={{maxHeight: "150px", objectFit: "cover"}} />
      <div className="card-body bg-custom" style={{width: "415px", height: "210px", borderRadius: "0 0 10px 10px"}}>
        <h5 className="card-title title-color text-center">{props.title}</h5>
        <p className="card-text" style={{maxHeight: "100px", overflow: "hidden"}}>{props.description}</p>
        <div className="card-links d-flex justify-content-around">
          <a href={props.liveAppUrl} target="_blank" rel="noopener noreferrer" className="btn btn-live btn-dark">Live App</a>
          <a href={props.githubRepoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-github btn-success">GitHub Repo</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
