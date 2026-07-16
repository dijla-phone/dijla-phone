import { getBanners } from "@/lib/banners";
import SliderClient from "./SliderClient";

export default async function Slider() {

  const banners = await getBanners();

  return <SliderClient banners={banners} />;

}