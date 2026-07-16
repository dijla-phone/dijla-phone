import { supabase } from "@/lib/supabase";

export default async function TestPage() {
  const { data, error } = await supabase
    .from("products")
    .select("*");

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">
        اختبار الاتصال
      </h1>

      {error && (
        <p className="text-red-600">
          {error.message}
        </p>
      )}

      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}