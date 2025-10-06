export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col border rounded-lg p-4 shadow-sm hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded-md" />
      <h3 className="mt-2 font-semibold">{product.name}</h3>
      <p className="text-gray-500">{product.category}</p>
      <p className="mt-1 font-bold">${product.price}</p>
    </div>
  );
}
