import React from 'react';
import '../SeccionCategoria/Categorias.css';

function CategorySection() {
  const categories = [
    { id: 1, title: 'Calzado', image: 'https://www.ostu.com/on/demandware.static/-/Sites-storefront_catalog_ostu/default/dw58b0c9ce/images/filters/carrusel-ropa-general-hombre-camisas.jpg' },
    { id: 2, title: 'Mujer', image: 'https://www.ostu.com/on/demandware.static/-/Sites-storefront_catalog_ostu/default/dw58b0c9ce/images/filters/carrusel-ropa-general-hombre-camisas.jpg' },
    { id: 3, title: 'Hombre', image: 'https://www.ostu.com/on/demandware.static/-/Sites-storefront_catalog_ostu/default/dw58b0c9ce/images/filters/carrusel-ropa-general-hombre-camisas.jpg' },
    { id: 4, title: 'Niños', image: 'https://www.ostu.com/on/demandware.static/-/Sites-storefront_catalog_ostu/default/dw58b0c9ce/images/filters/carrusel-ropa-general-hombre-camisas.jpg' },
    { id: 5, title: 'Accessorios', image: 'https://www.ostu.com/on/demandware.static/-/Sites-storefront_catalog_ostu/default/dw58b0c9ce/images/filters/carrusel-ropa-general-hombre-camisas.jpg' },
  ];

  return (
    <section className="category-section">
      {categories.map(category => (
        <div key={category.id} className="category-card">
          <img src={category.image} alt={category.title} className="category-image" />
          <h3>{category.title}</h3>
          <button>Shop Now</button>
        </div>
      ))}
    </section>
  );
}

export default CategorySection;
