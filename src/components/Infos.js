import React from "react";
import Elemente from "../elementeJSON.json";
import ElementInfos from "../convertcsv.json";
function Infos({ number, v, name }){

var num = 1;
  if(number>0){
    num=number
  }
  const element=ElementInfos.elements[num-1];
  var three = element.phase== "Gas" ? "g/l" : "g/cm³";


  return(
    <div className = "info"
    style={{display:  v ? "block" : "none"
  }}> {}
      <div id = "entries">
        <div className="row"> {name} <span style={{float:"right"}}>
          {number}
          </span>
        </div>
        <div className="column">
         <p>Atommasse: {element.atomic_mass} g/mol</p>
         <p>Dichte: {element.density} {three}</p>
        <p>Elektronegativität: {element.electronegativity_pauling}</p>
        </div>
        <div className="column">
        <p>Siedepunkt: {element.boil==null?" unbekannt ":element.boil}° K</p>
        <p>Schmelzpunkt: {element.melt==null?" unbekannt ":element.melt} ° K</p>
        <p>Elektronenkonfiguration: {element.electron_configuration_semantic} </p></div>
      </div>
    </div>);
};
export default Infos;
