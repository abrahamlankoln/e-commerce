import { LucideMenu, LucideSearch, LucideUser, ShoppingCart } from "lucide-react"; // Lucide icons

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="">
          Bandage
        </div>
        <div>
          <LucideUser size={24}/>
          <LucideSearch size={24}/>
          <ShoppingCart size={24}/>
          <LucideMenu size={24}/>
        </div>
        <div><span>Home</span>
        <span>Product</span>
        <span>Pricing</span>
        <span>Contact</span>
        </div>
    </header>
  );
   
}
