import "../Styles/AdminAddProducts.css"
export default function AdminAddProducts(){
    return(
        <div className="addproducts">
            <form action="">
                <fieldset>
                    <label htmlFor="">
                        Capegory :
                    </label>
                    <select>
                        <option>Dress Matierials</option>
                        <option>Mobile</option>
                        <option>Mobile Accessories</option>
                        <option>Electroincs</option>
                        <option>Mobile Accessories</option>
                        <option>Groceries</option>
                    </select>
                    <label htmlFor="">
                        ProductName:
                    </label>
                    <input type="text" placeholder="Enter the Product"/>
                    <label htmlFor="">
                        Desc :
                    </label>
                    <textarea cols="30" rows="2" placeholder="Enter the Description"></textarea>
                    <label htmlFor="">
                        Thumbnail :
                    </label>
                    <input type="text" placeholder="Enter The image address" />
                    <label htmlFor="">
                        Ratings :
                    </label>
                    <input type="number" placeholder="Ehter the ratings"/>
                    <button className="btn btn-danger">Add item</button>
                </fieldset>
            </form>
        </div>
    )
}

