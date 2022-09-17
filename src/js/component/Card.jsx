import React from "react";

export const Card = () =>{
    return(
        <div className="card m-2 p-0 col-sm-12 col-md" style={{width: "18rem"}}>
            <img src="https://zonacaptiva.com/wp-content/uploads/2022/01/perros_Mesa-de-trabajo-1-500x325.jpg" class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-center">Card title</h5>
                    <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="col text-center">
                    <hr></hr>
    				<button className="btn btn-primary"> Find Out More! </button>
    			    </div>
                </div>
        </div>
    )};