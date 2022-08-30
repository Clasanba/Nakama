import React from "react";

const Cards = () => {
  return (
    <div className="d-flex">
    <article className="wrapper m-2">
      <div className="card" style={{width: 18+"rem"}}>
        <img src="https://picsum.photos/id/482/300/300" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-info">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-outline-info">
          Leer más
          </a>
        </div>
      </div>
    </article>
       <article className="wrapper m-2">
       <div className="card" style={{width: 18+"rem"}}>
         <img src="https://picsum.photos/id/49/300/300" className="card-img-top" alt="..." />
         <div className="card-body">
           <h5 className="card-title text-info">Card title</h5>
           <p className="card-text">
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </p>
           <a href="#" className="btn btn-outline-info">
             Leer más
           </a>
         </div>
       </div>
     </article>
        <article className="wrapper m-2">
        <div className="card" style={{width: 18+"rem"}}>
          <img src="https://picsum.photos/id/483/300/300" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-info">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-outline-info">
            Leer más
            </a>
          </div>
        </div>
      </article>
      <article className="wrapper m-2">
        <div className="card" style={{width: 18+"rem"}}>
          <img src="https://picsum.photos/id/501/300/300" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-info">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-outline-info">
            Leer más
            </a>
          </div>
        </div>
      </article>
      </div>
  );
};

export default Cards;
