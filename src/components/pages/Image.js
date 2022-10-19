import React, { useState } from "react";
import "./Image.css" ;
const Image = () => { const [selectedImage, setSelectedImage] = useState(null);
     return ( 
     <div> 
        <h1 className="heading">Post your doubts here..</h1> 
     {selectedImage && ( 
     <div> 
        <img id="image" alt="not found" width={"600px"} height={"500px"}  src={URL.createObjectURL(selectedImage)} /> 
     <br /> <br/><br/>
     <button className="btn btn-info button"onClick={()=>setSelectedImage(null)}>Remove</button> </div> )} 
     <br /> <br /> 
     <input id="input"type="file" name="myImage" onChange={(event) => { console.log(event.target.files[0]);
      setSelectedImage(event.target.files[0]); }} /> </div> ); };

       export default Image;