import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Benefits from './components/Benefits';
import Header from './components/Header';
import Card from './components/Cards';
import { fetchProducts } from './services/api';
import type { Product } from './containers/CardContainer';
import SectionInstitutional from './components/SectionInstitutional';

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
      fetchProducts().then(data => setProducts(data));
  }, []);

  return (
    <>
      <Header/>
      <Banner/>
      <Benefits/>
      {products.length >= 8 && (
        <>
          <Card title="Novidades" product={products.slice(0, 4)} />
          <Card title="Mais Vendidos" product={products.slice(4, 8)} />
        </>
      )}
      <SectionInstitutional/>
    </>
  )
}

export default App
