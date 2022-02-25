import logo from './logo.svg';
import './App.css';
import Table from "./components/Table.js";
import Elemente from "./elementeJSON.json";
import React, { useEffect, useState} from "react";

function App(){
  let table = [];


  function createRow(num) {
    let row =[];
    for (var j = 0; j < 18; j++) {
      if(num<2&&j<5){
        row[j] = null;
      }else {
        row[j] = j+num*18;

      }
    }
    return row;
  }

  function createTable() {
    for (var i = 0; i < 10; i++) {
      table[i] = createRow(i);
    }
  }

  createTable();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Periodensystem </h1>
        <Table/>
      </header>
    </div>
  );
}

export default App;
