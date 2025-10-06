import Header from "../layout/Header";
import Footer from "../layout/Footer";
import PageContent from "../layout/PageContent";
import ProductCard from "../components/ProductCard";

const products = [
  { name: "Product 1", category: "Category A", price: 29.99, image: "/images/product1.jpg" },
  { name: "Product 2", category: "Category B", price: 19.99, image: "/images/product2.jpg" },
  { name: "Product 3", category: "Category C", price: 39.99, image: "/images/product3.jpg" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageContent>
        <h1 className="text-2xl font-bold mb-4">Featured Products</h1>
        <div className="flex flex-col md:flex-row md:space-x-4 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </PageContent>
      <Footer />
    </div>
  );
}
