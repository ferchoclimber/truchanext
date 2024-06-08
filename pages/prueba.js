 import { useState, useEffect} from "react";
 import axios from "axios";
 import Image from "next/image";
 import toast from "react-hot-toast";

 export default function Test() {
     const [products, setProducts] = useState();

     const fetchProducts = async () => {
         const response = await axios.get("https://fakestoreapi.com/products");
         console.log(response.data); 
         setProducts(response.data);
        
     };

     useEffect(() => {
         fetchProducts();

     }, []);

     const sendEmail = async ()=>{
         const data ={
            name:"fercho js",
           email:"fernando.solismartinez2@gmail.com",
            message: "hola mundo",
        };

        await axios.post("/api/mail", data);
        toast.success("email sent");
    };

    return (
        <div>
           <input type="email" placeholder="Email"/>
           <button onClick={sendEmail}>sendEmail</button>

        { products &&
            products.length > 0 &&
            products.map ((product) => (
                <div key= {product.id}>
                    <Image
                    unoptimized 
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={300}
                    />
                    {product.title}
                </div>

            ))}
        </div>
        )
}

