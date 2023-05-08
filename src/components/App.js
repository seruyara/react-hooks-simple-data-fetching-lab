import React,{useEffect,useState} from "react";

function App(){
const[image,setImage]=useState(null);
 useEffect( ()=> {
    setImage(null);

    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response)=> response.json())
    .then((data)=> setImage(data.message))
 },[]);

return (
    <>
      {image ? (
        <img src={image} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </>
)
}
export default App;