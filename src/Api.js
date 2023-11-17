// el encargado de hacer la peticion al; api de uinplash

import axios from "axios";

// funct que va a hacer la peticion cuando la invoque
const searchImages = async (term)=>{
    const response = awaitaxios.get("https://api.unsplash.com/search/photos", {
        header:{
            Authorization:"Client-ID cxtZDI19lI0XAcOfjFWV-aS7LlFHlueGFUf6Bg9TO_E"
        }, 
        params:{
            query: term
        }
    })

    
    return response.data.results

}

export default searchImages; 