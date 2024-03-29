import { useEffect, useState } from 'react';


export const useFetch = (url: string) => {

    const [state, setState]:any = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true
        });

        const resp: any = await fetch(url)
        const data: any = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null
        });
    }

    useEffect(() => {

        getFetch();

    }, [url])



    return {
        data : state.data,
        isLoading : state.isLoading,
        hasError : state.hasError
    };
}
