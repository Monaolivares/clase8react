import SearchBar from "./components/SearchBar";
import searchImages from "./Api";
import ImageList from "./components/ImageList";
import {useState} from "react"


function App(){
    const[arrImage, setArrImage] = useState([]); 

    const handleSubmit = async (term)=>{
        let resultado= await searchImages(term); 
        setArrImage(resultado); 
    }
    return (
        <div>
            <SearchBar enSubmit={handleSubmit}/>
            <ImageList images={arrImage}/>
        </div>
    ); 
}

export default App; 