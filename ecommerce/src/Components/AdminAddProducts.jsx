import { useState } from "react"
import "../Styles/AdminAddProducts.css"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
export default function AdminAddProducts(){
    let [category, setCategory] = useState("");
    let [name, setName] = useState("");
    let [price, setPrice] = useState("");
    let [image, setImage] = useState("");
    let [rating, setRating] = useState("");
    let [desc, setDesc] = useState("");

let data = {category, rating, price, name, image, desc}
    function addProduct(e){
        // to avoid refressing
        e.preventDefault();
        axios.post("http://localhost:3000/Products",data)
        .then((res)=>{
            console.log(res);
            toast.success("Product Added");
        }).catch((err)=>{
            console.log(err);
            toast.error("Failed to Add Product");
        })
    }
    return(
        <div className="addproducts">
            <form action="" onSubmit={addProduct}>
                <fieldset>
                    <label htmlFor="">
                        Capegory :
                    </label>
                    <select required value={category} onChange={(e)=>{setCategory(e.target.value)}}>
                        <option>Dress Matierials</option>
                        <option>Mobile</option>
                        <option>Mobile Accessories</option>
                        <option>Electroincs</option>
                        <option>Mobile Accessories</option>
                        <option>Groceries</option>
                    </select>
                    <label htmlFor="">
                        Product Name :
                    </label>
                    <input type="text" required value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter the Product"/>
                    
                    <label htmlFor="">
                        Product Price :
                    </label>
                    <input type="text" required value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder="Enter price"/>
                    <label htmlFor="">
                        Desc :
                    </label>
                    <textarea  cols="30" rows="2" required value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="Enter the Description"></textarea>
                    <label htmlFor="">
                        Thumbnail :
                    </label>
                    <input type="text" required value={image} onChange={(e)=>{setImage(e.target.value)}} placeholder="Enter The image address" />
                    <label htmlFor="">
                        Ratings :
                    </label>
                    <input type="number" required value={rating} onChange={(e)=>{setRating(e.target.value)}} placeholder="Ehter the ratings"/>
                    <button className="btn btn-danger">Add item</button>
                </fieldset>
            </form>
        </div>
    )
}