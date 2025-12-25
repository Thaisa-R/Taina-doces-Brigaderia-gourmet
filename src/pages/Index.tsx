import Navbar from '@/components/Navbar';
import MobileSidebar from '@/components/MobileSidebar';
import Hero from '@/components/Hero';
import ProductsSection from '@/components/ProductsSection';
import PhotoCarousel from '@/components/PhotoCarousel';
import BudgetForm from '@/components/BudgetForm';
import PaymentMethods from '@/components/PaymentMethods';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <MobileSidebar />

      <main>
        <Hero />
        <ProductsSection />
        <PhotoCarousel />
        <PaymentMethods />
        <BudgetForm />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
