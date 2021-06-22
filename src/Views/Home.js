import Banner from "../components/Banner";
import CategoriesList from '../components/categoriesList'

export default function Home() {
    return (
        <>
            <Banner msj={"Welcome to HG pet store"} />  
            <h2 className="text-center mt-4 fw-bold">Categories</h2>
            <div className="d-flex justify-content-center">                
                <CategoriesList/>
            </div>
            <div className="row bg-secondary mt-5 mb-5 text-light p-4">
                <h1 className="text-center fw-bold lh-1 inline-block p-3">¿Why choose us?</h1>
                <p className="fs-4 lh-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod at animi adipisci praesentium. Accusamus accusantium dolorem doloribus, autem nam, alias assumenda voluptates quaerat ut, corrupti illo pariatur natus placeat minima.</p>
            </div>
        </>
    )
}