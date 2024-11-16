import React from "react";
import { useNavigate } from "react-router-dom";
import "../SeccionCategoria/Categorias.css";

function CategorySection() {
  const navigate = useNavigate();

  const categories = [
    { id: 1, title: "Mujer", image: "Img-Categorias/mujer.jpg", sectionId: "mujer" },
    { id: 2, title: "Hombre", image: "Img-Categorias/hombre.jpg", sectionId: "hombre" },
    { id: 3, title: "Infantil", image: "Img-Categorias/niños.jpg", sectionId: "infantil" },
    { id: 4, title: "Calzado", image: "Img-Categorias/calzado.jpg", sectionId: "calzado" },
    { id: 5, title: "Accesorios", image: "Img-Categorias/acc.jpg", sectionId: "accesorios" },
  ];

  const handleNavigate = (sectionId) => {
    navigate(`/productos#${sectionId}`); 
  };

  return (
    <section className="category-section">
      {categories.map((category) => (
        <div key={category.id} className="category-card">
          <img src={category.image} alt={category.title} className="category-image" />
          <h3>{category.title}</h3>
          <button onClick={() => handleNavigate(category.sectionId)}>Comprar Ahora</button>
        </div>
      ))}
    </section>
  );
}

export default CategorySection;
