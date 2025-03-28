import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushis, handleSushiDisplay }) {
  //const [displayedSushis, setDisplayedSushis] = useState([])

  function handleMoreClick(){
    //console.log("clicked")
    handleSushiDisplay()
  }

  return (
    <div className="belt">
      {sushis.map((sushi) => <Sushi key={sushi.id} name={sushi.name} image={sushi["img_url"]} price={sushi.price} />)}
      <MoreButton handleMoreClick={handleMoreClick}/>
    </div>
  );
}

export default SushiContainer;
