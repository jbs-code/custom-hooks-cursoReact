import { useEffect, useRef, useState } from 'react'

const useFetch = (url) => {
    const [state, setState] = useState({data: null, loading: true, error:null});

    //Todo lo referente a isMounted es para evitar errores por
    //realizar acciones sobre este componete cuando no esté montado
    const isMounted = useRef(true);

    useEffect(() => {
        return () =>{
            isMounted.current = false;
        }
    });

    useEffect(() => {

        setState({data: null, loading: true, error:null});
        
        fetch(url)
        .then(resp => resp.json())
        .then(data => {

            if(isMounted) {
                setState({
                    data: data,
                    loading: false,
                    error: null
                })
            }

        }
        ,[]).catch(()=>{
            setState({
                data: null,
                loading: true,
                error: 'No se pudo obtener la información'
            });
        });
    }, [url]);

    return state;
}

export default useFetch;
