import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushis, handleSushiDisplay, handleEatenSushi, balance }) {

  function handleMoreClick(){
    handleSushiDisplay()
  }

  function handleEatClick(eatenSushi){
    handleEatenSushi(eatenSushi)
  }

  return (
    <div className="belt">
      {sushis.map((sushi) => <Sushi key={sushi.id} id={sushi.id} name={sushi.name} image={sushi["img_url"]} price={sushi.price} handleEatClick={handleEatClick} balance={balance}/>)}
      <MoreButton handleMoreClick={handleMoreClick}/>
    </div>
  );
}

export default SushiContainer;
