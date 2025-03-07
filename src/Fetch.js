import {useState, useEffect} from "react";


//Obtener datos----------------------------------------------------------------------------
export function API(url) {
    const[data, setData] = useState([]);
    const[loading, setLoading] = useState(true);

     useEffect (() => {
        fetch(url)
            .then ((response) => response.json())
            .then ((data) => setData(data))
            .finally(() => setLoading(false));
     },[]);
     return {data, loading};
}