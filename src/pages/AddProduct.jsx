import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { productSchema } from "../schemas/productSchema";
import { useNavigate } from "react-router-dom";
import "./AddProduct.css";

const AddProduct = ({ setProducts }) => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(productSchema)
  });

  const onSubmit = (data) => {
    const newProduct = { ...data, id: Date.now() };
    setProducts((prev) => [...prev, newProduct]);
    navigate("/");
  };

  return (
    <div className="add-product">
      <h1 className="add-product__title">Ajouter un produit</h1>
      
      <form className="add-product__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="form-group__label">Nom du produit</label>
          <input className="form-group__input" {...register("nom")} />
          {errors.nom && <p className="form-group__error">{errors.nom?.message}</p>}
        </div>

        <div className="form-group">
          <label className="form-group__label">Prix</label>
          <input className="form-group__input" {...register("prix")} type="number" />
          {errors.prix && <p className="form-group__error">{errors.prix?.message}</p>}
        </div>

        <div className="form-group">
          <label className="form-group__label">Catégorie</label>
          <input className="form-group__input" {...register("categorie")} />
          {errors.categorie && <p className="form-group__error">{errors.categorie?.message}</p>}
        </div>

        <div className="form-group">
          <label className="form-group__label">Image (nom du fichier)</label>
          <input className="form-group__input" {...register("image")} />
          {errors.image && <p className="form-group__error">{errors.image?.message}</p>}
        </div>

        <button className="add-product__button" type="submit">Ajouter le produit</button>
      </form>
    </div>
  );
};

export default AddProduct;