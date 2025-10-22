import Header from "../layout/Header";
import Footer from "../layout/Footer";
import PageContent from "../layout/PageContent";
import ProductCard from "../components/ProductCard";
import photo0 from "../photo/photo0.jpg";
import photo1 from "../photo/photo1.jpg";
import photo2 from "../photo/photo2.jpg";
import photo3 from "../photo/photo3.jpg";
import photo4 from "../photo/photo4.jpg";
 
const products = [
  { name: "Product 1", category: "Category A", price: 29.99, image: photo0 },
  { name: "Product 2", category: "Category B", price: 19.99, image: photo1 },
  { name: "Product 3", category: "Category C", price: 39.99, image: photo2 },
  { name: "Product 3", category: "Category C", price: 39.99, image: photo3 },
  { name: "Product 3", category: "Category C", price: 39.99, image: photo4 },
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
