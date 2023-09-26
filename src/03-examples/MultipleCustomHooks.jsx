import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {
    
    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`);
    const { quote, author } = !!data && data[0];


    //console.log(data);

    return (
        <>
            <h1>Breaking bad quotes</h1>
            <hr />

            {
                ( isLoading ) ? 
                    <LoadingQuote /> 
                : 
                    <Quote
                        quote={ quote }
                        author= {author }
                    />                        
                    
            } 
            
            <button 
                className="btn btn-primary" 
                onClick={ () => increment() }
                disabled= { isLoading }
            >Next Quote</button>

        </>
    )
}
