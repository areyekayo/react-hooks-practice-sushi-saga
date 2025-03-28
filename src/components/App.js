import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [displayedSushis, setDisplayedSushis] = useState([])
  const [displaySetCount, setDisplaySetCount] = useState(1)

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((data) => {
        setSushis(data);
      })
  }, [])

  //display initial set of 4 sushis once sushis are loaded in state
  useEffect(() => {
    if (sushis.length > 0){
      handleSushiDisplay()
      handleDisplaySetCount()
    }
  }, [sushis])

  function handleDisplaySetCount(){
    setDisplaySetCount(displaySetCount + 1)
  }

  function handleSushiDisplay(){
    //calculate the min/max range of IDs to display 4 at a time based on displaySetCount
    const maxRange = displaySetCount * 4
    const minRange = maxRange - 3

    const sushiList = sushis.filter((sushi) => {
        return sushi.id <= maxRange && sushi.id >= minRange
    })
    setDisplayedSushis(sushiList)
    handleDisplaySetCount()
  }

  return (
    <div className="app">
      <SushiContainer sushis={displayedSushis} handleSushiDisplay={handleSushiDisplay}/>
      <Table />
    </div>
  );
}

export default App;
