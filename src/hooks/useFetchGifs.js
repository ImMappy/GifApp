import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGif";

export const useFetchGifs = (category) => {
    /**
   * @useFetchGifs receives categories from GifGrid component.
   * @data receives the categories from getGif function and @loading init on true when page @data is not loaded. @loading is true when we setState
   * @return state 
   */
    const [state,setState] = useState({
        data:[],
        loading:true
    });

    /**
     * @useEffect to load once the GifGrid grid elements. 
     */
    useEffect(()=> {
        getGif(category)
        .then(gif => {
            setState({
                data:gif,
                loading:false
            })
        });
    },[category]);

    return state;   
}