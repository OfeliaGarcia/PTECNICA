import {useState, useEffect} from "react";


//Obtener datos----------------------------------------------------------------------------
export function API(url) {
    const[data, setData] = useState([]);

     useEffect (() => {
        fetch(url)
            .then ((response) => response.json())
            .then ((data) => setData(data));
     },[]);
     return {data};
}