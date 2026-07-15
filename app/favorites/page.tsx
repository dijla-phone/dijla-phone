import FavoritesList from "@/components/FavoritesList";

export default function FavoritesPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-12">

      <h1 className="text-4xl font-bold text-center mb-10">
        ❤️ المفضلة
      </h1>

      <FavoritesList />

    </main>
  );
}