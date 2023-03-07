import { useCounter ,useFetch} from "../hooks";


export const Layout = () => {
    

    const {counter,incremental} = useCounter(1);

    const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    const {quote, author} = !!data && data[0];

        



    return (
   
    <>
    
    <h1>Breaking Bad Frases</h1>

    <hr />

    {

        isLoading ? (
            <div className="alert alert-info text-center">
            Cargando...

             </div>
        )
        : (
            <blockquote className="blockquote text-end">

            <p className="mb-1">{quote}</p>
    
            <footer className="blockquote-footer">{author}</footer>
            </blockquote>
        

        )
    }


    <button 
    className="btn btn-primary"
    disable={isLoading}
    onClick={() => incremental()}>

        Proximo Frase
    </button>


 

  
    
    </>
  )
}
