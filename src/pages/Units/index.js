import React, { useState } from "react";
import "./Units.scss";
import {
  Slider,
  ToggleButtonGroup,
  ToggleButton,
  Checkbox,
} from "@mui/material";

function Units() {
  const [alignment, setAlignment] = useState("all");
  const [woodCost,setWoodCost]=useState(0);
  const [foodCost,setFoodCost]=useState(0);
  const [goldCost,setGoldCost]=useState(0);
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <div className="units-container">
      <div className="units">
        <label>Ages</label>
        <div className="ages">
          <ToggleButtonGroup
            color="warning"
            style={{ backgroundColor: "#616161" }}
            value={alignment}
            exclusive
            onChange={handleChange}
          >
            <ToggleButton value="all">All</ToggleButton>
            <ToggleButton value="dark">Dark</ToggleButton>
            <ToggleButton value="feudal">Feudal</ToggleButton>
            <ToggleButton value="castle">Castle</ToggleButton>
            <ToggleButton value="imperial">Imperial</ToggleButton>
          </ToggleButtonGroup>
        </div>
        <label>Costs</label>
        <div className="costs">
          <Checkbox />
          <label htmlFor="wood" className="cost-labels">Wood</label> 
          <Slider
            defaultValue={woodCost}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={(e)=>setWoodCost(e.target.value)}
          />
          <span className="cost-spans">{woodCost}</span>
        </div>
        <div className="costs">
          <Checkbox />
          <label htmlFor="food" className="cost-labels">Food</label>    
          <Slider
            defaultValue={foodCost}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={(e)=>setFoodCost(e.target.value)}
          />
          <span className="cost-spans">{foodCost}</span>
        </div>
        <div className="costs">
          <Checkbox />
           <label htmlFor="gold" className="cost-labels">Gold</label>   
          <Slider
            defaultValue={goldCost}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={(e)=>setGoldCost(e.target.value)}
          />
          <span className="cost-spans">{goldCost}</span>
        </div>
      </div>
    </div>
  );
}

export default Units;
