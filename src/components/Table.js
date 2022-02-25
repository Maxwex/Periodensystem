
import Elemente from "../elementeJSON.json";

 const Table = () =>{
  return( <div className="table">
    {Elemente.elements.map((element =>
      <div id ={element.Zeichen} key={element.Ordnungszahl}>
        <div id = "cell">
          <div id = "number" >{element.Ordnungszahl}</div>
          <div id = "symbol" >{element.Zeichen}</div>
          <div id = "name">{element.Name}</div>
        </div>
      </div>))}

    </div>
  );
};
export default Table;
