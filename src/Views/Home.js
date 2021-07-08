import Banner from "../components/Banner";
import CategoriesList from '../components/categoriesList'

export default function Home() {
    return (
        <>
            <div className="head">
              <Banner msj={"Bienvenidos a la mascotienda HG store"} />  
            </div>  
            <div className="body container-fluid bg-ligth">
              <h2 className="text-center mt-4 fw-bold">Categiras</h2>
              <div className="d-flex justify-content-center">                
                  <CategoriesList/>
              </div>
              <div className="row bg-primary pt-5 mb-5 text-light p-4">
                  <h1 className="text-center fw-bold lh-1 inline-block p-3">¿Por Que Elegirnos?</h1>
                  <p className="fs-4 lh-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod at animi adipisci praesentium. Accusamus accusantium dolorem doloribus, autem nam, alias assumenda voluptates quaerat ut, corrupti illo pariatur natus placeat minima.</p>
              </div>
            </div>
            
        </>
    )
}
