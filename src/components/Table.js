import Infos from "./Infos.js"
import Elemente from "../elementeJSON.json";
import App from "../App.js";

 const Table = ({numberChanged}) =>{
   const clicker = (number, name) => {
     console.log("clicr"+number);
     numberChanged(number, name);
   };

  return( <div className="table">
    {Elemente.elements.map((element =>
      <div id ={element.Zeichen} key={element.Ordnungszahl}>
        <div id = "cell" onClick={()=>clicker(element.Ordnungszahl, element.Name)}>
          <div id = "number" >{element.Ordnungszahl}</div>
          <div id = "symbol" >{element.Zeichen}</div>
          <div id = "name">{element.Name}</div>
        </div>
      </div>))}

    </div>
  );
};
export default Table;
