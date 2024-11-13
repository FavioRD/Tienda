import React from 'react';
import '../SeccionCategoria/Categorias.css';

function CategorySection() {
  const categories = [
    { id: 1, title: 'Calzado', image: 'Img-Categorias/calzado.jpg' },
    { id: 2, title: 'Mujer', image: 'Img-Categorias/mujer.jpg' },
    { id: 3, title: 'Hombre', image: 'Img-Categorias/hombre.jpg' },
    { id: 4, title: 'Niños', image: 'Img-Categorias/niños.jpg' },
    { id: 5, title: 'Accessorios', image: 'Img-Categorias/acc.jpg' },
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
