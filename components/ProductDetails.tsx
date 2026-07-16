"use client";

import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { useFavorite } from "@/context/FavoriteContext";
import { useToast } from "@/components/Toast";



type Product = {

  id:number;
  name:string;
  price:string;
  brand:string;
  image:string;
  description:string;

  specs:{
    screen:string;
    ram:string;
    storage:string;
    camera:string;
    battery:string;
  };

};



export default function ProductDetails({
  product,
}:{
  product:Product;
}) {



const {
  addToCart
}=useCart();



const {
  toggleFavorite,
  isFavorite
}=useFavorite();



const {
  showToast
}=useToast();





function handleCart(){

  addToCart(product);

  showToast(
    "تمت الإضافة إلى السلة 🛒"
  );

}




function handleFavorite(){

  const active =
  isFavorite(product.id);


  toggleFavorite(product.id);


  showToast(
    active
    ?
    "تمت الإزالة من المفضلة 🤍"
    :
    "تمت الإضافة إلى المفضلة ❤️"
  );

}




return (

<main className="min-h-screen bg-gray-100 py-12 px-6">


<div className="max-w-6xl mx-auto">


<Link
href="/phones"
className="inline-block mb-6 bg-gray-800 text-white px-5 py-2 rounded-xl"
>
← العودة للهواتف
</Link>



<div className="bg-white rounded-3xl shadow-xl p-8 grid md:grid-cols-2 gap-10">



<div className="relative h-96 bg-gray-100 rounded-2xl">

<Image
src={product.image}
alt={product.name}
fill
className="object-contain p-8"
/>

</div>





<div>


<p className="text-blue-700 text-xl font-bold">

{product.brand}

</p>


<h1 className="text-4xl font-bold mt-3">

{product.name}

</h1>



<p className="text-gray-600 mt-5 text-lg">

{product.description}

</p>



<p className="text-green-600 text-4xl font-bold mt-6">

{product.price}

</p>





<div className="flex gap-4 mt-8">


<button

onClick={handleCart}

className="flex-1 bg-blue-700 text-white py-4 rounded-xl font-bold"

>

🛒 أضف للسلة

</button>



<button

onClick={handleFavorite}

className="bg-gray-200 px-6 rounded-xl text-3xl"

>

{isFavorite(product.id) ? "❤️":"🤍"}

</button>


</div>



<a

href={`https://wa.me/9647700000000?text=${encodeURIComponent(
`السلام عليكم

أريد طلب:
${product.name}

السعر:
${product.price}`
)}`}

target="_blank"

className="block mt-5 bg-green-600 text-white text-center py-4 rounded-xl font-bold"

>

📲 طلب واتساب

</a>



</div>


</div>





<div className="bg-white rounded-3xl shadow-xl mt-10 p-8">


<h2 className="text-3xl font-bold text-center mb-6">

📋 المواصفات

</h2>



<div className="grid md:grid-cols-2 gap-4">


<div className="bg-gray-100 p-4 rounded-xl">
📱 الشاشة:
<strong>{product.specs.screen}</strong>
</div>


<div className="bg-gray-100 p-4 rounded-xl">
🧠 الرام:
<strong>{product.specs.ram}</strong>
</div>


<div className="bg-gray-100 p-4 rounded-xl">
💾 التخزين:
<strong>{product.specs.storage}</strong>
</div>


<div className="bg-gray-100 p-4 rounded-xl">
📸 الكاميرا:
<strong>{product.specs.camera}</strong>
</div>


<div className="bg-gray-100 p-4 rounded-xl">
🔋 البطارية:
<strong>{product.specs.battery}</strong>
</div>


</div>


</div>


</div>


</main>

);

}