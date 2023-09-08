import { useEffect, useState } from "react";
import { getPosts } from "../helpers/getPosts";


export const useFetchPosts = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getPosts();
        setImages(newImages);
        setIsLoading(false);
    }
 
 
    useEffect(() => {
    getImages();
  }, []);
  
    return {
        images,
        isLoading
    }
        
  
}