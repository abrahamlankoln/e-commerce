import { LucideMenu } from "lucide-react"; // Lucide icons

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="text-xl font-bold">E-Shop</div>
      <nav className="hidden md:flex space-x-4">
        <a href="/" className="hover:text-blue-500">Home</a>
        <a href="/shop" className="hover:text-blue-500">Shop</a>
        <a href="/contact" className="hover:text-blue-500">Contact</a>
      </nav>
      <div className="md:hidden">
        <LucideMenu size={24} />  
      </div>
    </header>
  );
   
}
