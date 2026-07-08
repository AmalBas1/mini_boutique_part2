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

    return(
        <div></div>
    )

}