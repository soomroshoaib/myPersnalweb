import React from 'react'
import { NavLink } from 'react-router-dom';


function Card(props) {
    return (
     <>
         <div className="col-md-4  col-10 mx-auto" style={{}}>
                <div class="card">
                   <img src={props.imgsrc}  className="card-img-top" alt={props.imgsrc}/>
                      <div class="card-body">
                         <h5 class="card-title font-weight-bold">{props.title}</h5>
                           <p class="card-text">Some quick example text to build on the card title .</p>
                               <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
                        </div>
                 </div>
                  
             </div>
      </>  
    )
}

export default Card;
