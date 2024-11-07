import axios from "axios";
import { useEffect, useState } from "react";
import '../Styles/UpdateProducts.css'
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function UpdateProducts() {
    let [category, setCategory] = useState("");
    let [name, setName] = useState("");
    let [price, setPrice] = useState("");
    let [image, setImage] = useState("");
    let [rating, setRating] = useState("");
    let [desc, setDesc] = useState("");

    let data = { category, name, price, image, rating, desc };

    function updateItem(e) {
        e.preventDefault();
        axios.put(`http://localhost:3000/Products/${param.id}`, data)
            .then((res) => {
                console.log(res.data);
                toast.success("item updated successfully")
            })
            .catch((err) => {
                console.log(err);
                toast.err("invalid data Fromat")
            })
    }

    let param = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/Products/${param.id}`)
            .then((res) => {
                console.log(res.data)
                setCategory(res.data.category);
                setName(res.data.name);
                setPrice(res.data.price);
                setImage(res.data.image);
                setRating(res.data.rating);
                setDesc(res.data.desc);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className="updateproducts addproducts">
            <form onSubmit={updateItem} action="">
                <fieldset>
                    <label htmlFor="">
                        Capegory :
                    </label>
                    <select required value={category} onChange={(e) => { setCategory(e.target.value) }}>
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
                    <input type="text" required value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter the Product" />

                    <label htmlFor="">
                        Product Price :
                    </label>
                    <input type="text" required value={price} onChange={(e) => { setPrice(e.target.value) }} placeholder="Enter price" />
                    <label htmlFor="">
                        Desc :
                    </label>
                    <textarea cols="30" rows="2" required value={desc} onChange={(e) => { setDesc(e.target.value) }} placeholder="Enter the Description"></textarea>
                    <label htmlFor="">
                        Thumbnail :
                    </label>
                    <input type="text" required value={image} onChange={(e) => { setImage(e.target.value) }} placeholder="Enter The image address" />
                    <label htmlFor="">
                        Ratings :
                    </label>
                    <input type="number" required value={rating} onChange={(e) => { setRating(e.target.value) }} placeholder="Ehter the ratings" />
                    <button className="btn btn-danger">Update Item</button>
                </fieldset>
            </form>
        </div>
    )
}