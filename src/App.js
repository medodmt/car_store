
import './App.css';
import {useState} from "react";
import CarShap from './carShap';


function App() {
  const [counter,setcounter]=useState(1);
  const [buttonMood,setButtonMood]=useState("add");

  const [car,setCar]=useState({
    id:"",
    name:"",
    model:"",
    prand:""
  });


const [cars,setCars]=useState([]);

const carsList=cars.map((c)=>{
  return(<CarShap key={c.id} id={c.id} name={c.name} model={c.model} prand={c.prand}
    edt={<button className='carButoon' onClick={()=>{
      handelButtonEdit(c.id);
    }} >edit</button>}  dele={<button className='carButoon' onClick={()=>{
      handelButtonDelete(c.id)}
    }>delete</button>}/>
);
})

function handelButtonDelete(id){
    const newCarsList=cars.filter((ca)=>{
      return (ca.id!==id);
    })
    setCars(newCarsList);
}

function handelButtonEdit(id) {
  const carToEdit = cars.find(car => car.id === id);
  if (carToEdit) {
    setButtonMood("edit");
    setCar({
      id: carToEdit.id,
      name: carToEdit.name,
      model: carToEdit.model,
      prand: carToEdit.prand
    });
  }
}


function handelButtonClick(){
  if(buttonMood==="add"){
  setCars([...cars,{id:counter,name:car.name,model:car.model,prand:car.prand}])
  setcounter(counter+1);
  setCar({name:"",model:"",prand:""});
  
  }
  
  else {
      // Update existing car
      setCars(cars.map(c => 
        c.id === car.id ? {
          ...c,
          name: car.name,
          model: car.model,
          prand: car.prand
        } : c
      ));
      setButtonMood("add");
    }
  
  
}


  function ButtonLogic(){
  if(car.name!==""&&car.model!==""&&car.prand!==""){
    return( <button  id='ButtonCar' onClick={handelButtonClick}>{buttonMood}</button>
);}
else{
return( <button disabled id='disButton'>{buttonMood}</button>
);
}
  }

  
return(
  <div className='container'>
    {/* header */}
      <header>
        <h1>CRUDS</h1>
        <p>simple app to manage product</p>
      </header>
{/* manage part */}
<div>
 <div className='inputAndLabel'>
  <label>name</label>
  <input type='text' id='nameIn' placeholder='name...'value={car.name} onChange={(event)=>{
    setCar({...car,name:event.target.value})
  }} className="in"/>
 </div>

<div className='inputAndLabel'>
  <label>model</label>
  <input type='text' placeholder='model...' value={car.model}  onChange={(event)=>{
    setCar({...car,model:event.target.value})
  }}  className="in" />
 </div>

 <div className='inputAndLabel'>
  <label>prand</label>
  <input type='text' placeholder='prand...' value={car.prand} onChange={(event)=>{
    setCar({...car,prand:event.target.value})
  }}  className="in"/>
 </div>
    <ButtonLogic/>
</div>

{/* cars */}

<div id="carsContainer">
  <table>
  <tr id='tableHead'>
    <th>id</th>
    <th>name</th>
    <th>model</th>
    <th>prand</th>
    <th>edit</th>
    <th>delete</th>
  </tr>
   
{carsList}

</table>
</div>

  </div>
  );



}






export default App;
