import React from "react";
const Image = props => ( 
      <main className="MainContainer">
        {props.image.map(img => {
          return (
            <div
              role="img"
              id={img.id}
              onClick={()=>{props.shuffle(img.id,props.image)}}
              aria-label="click item"
              key={img.id}
              className="click-item"
              style={{ backgroundImage: `url(${img.link})` }}
            />
          );
        })}
      </main>
);
export default Image;
