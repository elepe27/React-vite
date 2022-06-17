import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Gohan']);

    const onAddCategory = (newCategory: never) => {

        if (categories.includes(newCategory)) return;

        /**Función para setear nuestras categories */
        setCategories([newCategory, ...categories]);

    }


    return (
        <>
            <h1>GifExpertApp</h1>


            <AddCategory
                // setCategories={ setCategories }
                /**Enviamos una función como parametro, para poder manipular
                 * desde el hijo hacia al padre.
                 */
                onNewCategory={onAddCategory}
            />


            {
                categories.map((category) =>
                (
                    <GifGrid key={category}
                        category={category} />))
            }


        </>
    )
}
