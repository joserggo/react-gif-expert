import { useEffect, useState } from "react";
import { Gif } from "../models/gif.model";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (
  category: string
): { images: Gif[]; loading: boolean } => {
  const [images, setImages] = useState(new Array<Gif>());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGifs(category).then((i: Gif[]) => {
      setImages(i);
      setLoading(false);
    });
  }, []);

  return {
    images,
    loading,
  };
};
