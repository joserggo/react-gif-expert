import { Gif } from '../models/gif.model'

export const GifItem = ({ url, title }: Gif) => {
    return (
        <div className='card'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
