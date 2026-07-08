import * as yup from "yup"

export const productSchema = yup.object().shape({
    nom:yup
    .string()
    .required("product name is required")
    .min(3, "name must be at least 3 characters"),


    prix:yup
    .number()
    .typeError("price must be a number")
    .positive("price must be greater than 0")
    .required("price is required"),

    categorie:yup
    .string()
    .required("categorie is required"),

    image:yup
    .string()
    .url("please enter a valid url")
    .required('image URL is required '),
})