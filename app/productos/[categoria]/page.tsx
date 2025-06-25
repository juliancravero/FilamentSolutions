import { getProductsByCategory } from "@/app/lib/data";

export default async function CategoriaPage({ params }: { params: { categoria: string } }) {
  const productos = await getProductsByCategory(params.categoria);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 capitalize">{params.categoria}</h1>

      {productos.length === 0 ? (
        <p className="text-gray-500">Todavía no hay productos en esta categoría.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productos.map((p: any) => (
            <div key={p.id} className="border rounded p-4 shadow-sm">
              <img src={p.image} alt={p.name} className="w-full h-40 object-cover mb-2" />
              <h2 className="text-lg font-semibold">{p.name}</h2>
              <p className="text-sm text-gray-500">{p.description}</p>
              <p className="text-md font-bold mt-1">${p.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

