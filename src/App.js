import React, { useState, useEffect } from "react";
import { Search } from "./components/Search";

function App() {
 

  // const { name, weight, height, abilities } = pokemonObj;
  // const ability = abilities.map((ability) => <li>{ability.ability.name}</li>);
  return (
    <div className="App">
      <Search />
      {/* <h1>{name}</h1>
      <div>{height}</div>
      <div>{weight}</div> */}
      {/* <ul>{ability}</ul> */}
    </div>
  );
}

export default App;
