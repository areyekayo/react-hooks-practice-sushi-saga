import React, {useState} from "react";

function Sushi({id, name, image, price, handleEatClick}) {
  const [isEaten, setIsEaten] = useState(false)
  
  function onEatClick(){
    handleEatClick(id)
    setIsEaten(true)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={onEatClick} id={id}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - $ {price}
      </h4>
    </div>
  );
}

export default Sushi;
