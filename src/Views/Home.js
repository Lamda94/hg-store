import ItemList from "../components/ItemList";
import CategoriesList from '../components/categoriesList'

export default function Home() {
    return (
        <>
            <ItemList msj={"Welcome to HG pet store"} />  
            <div className="d-flex justify-content-center">
                <CategoriesList/>
            </div>
        </>
    )
}
