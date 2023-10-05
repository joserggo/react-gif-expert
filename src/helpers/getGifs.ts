import { Gif } from "../models/gif.model";

export const getGifs = async (category: string): Promise<Gif[]> => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=etwAzy21OBimyhWb6zp3VeH2GztT9YQE&q=${category}&limit=3`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  return data.map(
    ({
      id,
      title,
      images: {
        downsized_medium: { url },
      },
    }: any) => ({ id, title, url })
  );
};
