"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";


type FavoriteContextType = {
  favorites: number[];
  toggleFavorite: (id:number)=>void;
  isFavorite:(id:number)=>boolean;
  totalFavorites:number;
};



const FavoriteContext =
createContext<FavoriteContextType | null>(null);



export function FavoriteProvider({
  children,
}:{
  children:React.ReactNode;
}){


const [favorites,setFavorites]=useState<number[]>([]);



useEffect(()=>{

const saved =
localStorage.getItem("favorites");


if(saved){

setFavorites(JSON.parse(saved));

}

},[]);



useEffect(()=>{

localStorage.setItem(
"favorites",
JSON.stringify(favorites)
);

},[favorites]);





function toggleFavorite(id:number){


setFavorites(prev=>{

if(prev.includes(id)){

return prev.filter(
(item)=>item!==id
);

}


return [
...prev,
id
];


});


}





function isFavorite(id:number){

return favorites.includes(id);

}




return(

<FavoriteContext.Provider

value={{

favorites,

toggleFavorite,

isFavorite,

totalFavorites:favorites.length

}}

>

{children}

</FavoriteContext.Provider>


);


}




export function useFavorite(){


const context =
useContext(FavoriteContext);


if(!context){

throw new Error(
"useFavorite must be inside FavoriteProvider"
);

}


return context;


}