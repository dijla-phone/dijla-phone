import { products } from "@/data/products";
import ProductDetails from "@/components/ProductDetails";


export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {


  const { id } = await params;


  const product = products.find(
    (item) => item.id === Number(id)
  );



  if (!product) {

    return (

      <div className="min-h-screen flex items-center justify-center text-2xl">

        المنتج غير موجود

      </div>

    );

  }



  return (

    <ProductDetails product={product} />

  );

}