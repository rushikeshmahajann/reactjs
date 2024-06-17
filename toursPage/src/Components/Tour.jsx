import React, { useState } from "react";
import Tours from "./Tours";

function Tour({ id, image, info, name, price, removeTour }) {

    const [readMore, setReadMore] = useState(false)
  return (
    <article>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name} ~ ${price}</h4>
        </div>
        <p>
            {
                readMore ? info : `${info.substring(0,200)}...`
            }
            <button className="show-more"onClick={()=> setReadMore(!readMore)}>
                {readMore ? 'show less' : 'show more'}
            </button>
        </p>
        <button className="ni" onClick={() => removeTour(id)}>not interested</button>
      </footer>
    </article>
  );
}

export default Tour;
