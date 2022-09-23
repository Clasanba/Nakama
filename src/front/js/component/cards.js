import React from "react";
import cards from "../../styles/cards.css"


const Cards = ({articles}) => {
  
  return articles.map((item)=>{
    return (
      <div className="d-flex " key={item.id}>
      <article className="wrapper m-2" >
        <div className="card h-100" style={{width: 18+"rem"}}>
          <img src={item.image} className="card-img-top library" />
          <div className="card-body">
            <h5 className="card-title text-info">{item.title}</h5>
            <p className="card-text">
              {item.description}
            </p>
            <a href={item.url} target="_blank" className="btn btn-outline-info">
            Leer más
            </a>
          </div>
        </div>
      </article>
        
        </div>
    )
  })

  
};

export default Cards;
