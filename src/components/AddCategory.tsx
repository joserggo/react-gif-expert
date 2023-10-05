import { ChangeEvent, FormEvent, useState } from "react"

// export const AddCategory = ({ onAddCategory }) => {
export const AddCategory = ({ onValue }: { onValue: (v: string) => void }) => {
    const [inputValue, setInputValue] = useState('')

    const change = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const value = inputValue.trim();
        if (value) {
            // onAddCategory((c: string[]) => [...c, inputValue])
            onValue(value);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={change} />
        </form>
    )
}
