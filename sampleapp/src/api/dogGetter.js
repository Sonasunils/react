import axios from "axios";
const url = import.meta.env.VITE_API_URL

const instance = axios.create({
    baseURL: url,
});

export const getGalleryData = ()=>{
    return instance.get('image/random').then(
        (res)=>{ 
            console.log("res",res)
            return res
        }
        ,
        (error)=>{
         console.log(error,"Error fetching cat image!");
         throw error;
        }
    );
};