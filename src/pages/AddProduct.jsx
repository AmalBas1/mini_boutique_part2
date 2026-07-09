import React from "react";
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { productSchema } from "../schemas/productSchema";

const AddProduct= () => {

    const {register,handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(productSchema)
    })

    const onSubmit=(data) => {
        console.log("Données du formulaire:", data)
    };

   return (
    <div style={{ padding: '20px' }}>
      <h1>Add New Product</h1>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Product Name</label>
          <input {...register("nom")} />
          <p style={{ color: 'red' }}>{errors.nom?.message}</p>
        </div>

        <div>
          <label>Price</label>
          <input {...register("prix")} type="number" />
          <p style={{ color: 'red' }}>{errors.prix?.message}</p>
        </div>

        <div>
          <label>Category</label>
          <input {...register("categorie")} />
          <p style={{ color: 'red' }}>{errors.categorie?.message}</p>
        </div>

        <div>
          <label>Image URL</label>
          <input {...register("image")} />
          <p style={{ color: 'red' }}>{errors.image?.message}</p>
        </div>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;