import React,{useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
function DashboardForm() {
  const [price, setprice] = useState(0);
  const [location, setlocation] = useState("");
  const [category, setcategory] = useState("");
  const [type, settype] = useState("");
  const [house_Image, sethouse_Image] = useState(null);
  
  const listProperty = (e) => { 
    e.preventDefault();
    const url = "http://locahost:8000/api/house-listing"
    const data = new FormData();
    data.append("price",price)
    data.append("location",location)
    data.append("category",category)
    data.append("type",type)
    data.append("house_image", house_Image)
    // console.log(price,location,category);
    axios.post("/api/house-listing", data)
      .then(response => console.log(`response:${response.headers}`))
      .catch(err => console.log(`some error:${err}`))
    setprice(0)
    setcategory("")
   }
  
    return (
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
          <Form.Control
            value={price}  
            onChange={e => setprice(e.target.value)}
            type="number" placeholder="Enter price" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>category</Form.Label>
                <select className="form-control" value={category}  
            onChange={e => setcategory(e.target.value)}>
                    <option >...</option>
                    <option >for Rent</option>
                    <option >for sale</option>
        </select>
            </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>location</Form.Label>
         <select className="form-control" value={location}  
            onChange={e => setlocation(e.target.value)}>
                    <option>...</option>
                    <option>Up Quarter</option>
                    <option>Down Quarter</option>
        </select>
            </Form.Group>
            
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Type</Form.Label>
             <select className="form-control" value={type}  
            onChange={e => settype(e.target.value)}>
                    <option >...</option>
                    <option value={"self-content"} >self-content</option>
                    <option  value={"non self-content"}>non self-content</option>
        </select>
        </Form.Group>
        
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>House Image</Form.Label>
          <Form.Control
            // filename={houseImage} 
            onChange={e => sethouse_Image(e.target.files[0])}
            type="file" accept='image/*'/>
        </Form.Group>
        
      <Button variant="primary" type="submit" onClick={e=>listProperty(e)} >
        List property
      </Button>
    </Form>
    )
    
}

export default DashboardForm;
