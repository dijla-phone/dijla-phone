import ProductDetails from "@/components/ProductDetails";
import { getProducts } from "@/lib/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const products = await getProducts();

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

  const productData = {
    ...product,
    specs: {
      screen: product.screen,
      ram: product.ram,
      storage: product.storage,
      camera: product.camera,
      battery: product.battery,
    },
  };

  return <ProductDetails product={productData} />;
}