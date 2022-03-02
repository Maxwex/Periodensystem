import logo from './logo.svg';
import './App.css';
import Infos from "./components/Infos.js"
import Table from "./components/Table.js";
import Elemente from "./elementeJSON.json";
import React, { useEffect, useState} from "react";

function App(){
  const [number, setNumber] = useState();
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState();

  function numberChanged(numberReceived, name){
    if(number==numberReceived){
      setVisible(!visible);
    }else {
      setVisible(true);
    }
    setNumber([numberReceived]);
    setName([name]);
    console.log(visible);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Periodensystem </h1>
        <Infos
        number={number}
        v={visible}
        name={name}
        />
        <Table numberChanged={numberChanged}/>
      </header>
    </div>
  );
}

export default App;
