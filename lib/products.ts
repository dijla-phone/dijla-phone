import { supabase } from "./supabase";

export async function getProducts() {

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("id");

  if (error) {
    throw new Error(error.message);
  }

  return data;

}

export async function getProduct(id: number) {

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;

}