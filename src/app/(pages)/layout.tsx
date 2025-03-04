import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    
      <div className="flex flex-col w-full h-screen overflow-hidden">
          <main className="flex-1 overflow-y-auto bg-white" >
           <Navbar />
            {children}
          <Footer/>
          </main>
      </div>
  );
};

export default Layout;
