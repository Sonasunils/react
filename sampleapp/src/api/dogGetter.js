import axios from "axios";

const instance = axios.create({
    baseURL: 'https://dog.ceo/api/breeds',
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