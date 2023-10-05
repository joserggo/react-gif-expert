import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    // const add = () => setCategories(c => [...c, 'Naruto'])
    const add = (v: string) => {
        if (!categories.includes(v)) {
            setCategories(c => [...c, v])
        }
    }
    // const add = () => setCategories([...categories, 'Naruto'])

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                // onAddCategory={setCategories} 
                onValue={add}
            />
            {/* <button onClick={add}>Agregar</button> */}
            {categories.map((c) => <GifGrid key={c} category={c} />)}
        </>
    )
}
