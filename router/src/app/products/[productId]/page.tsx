import { Metadata } from "next"
interface Params{
    params:{
        productId:string,
    }
}

export const generateMetadata=({params}:Params):Metadata=>{
    return{
        title:`Product ${params.productId}`
    }

}

export default function details({params}:Params){
    return(
        <div>
            <h1>Details Page</h1>
            <p>ID: {params.productId}</p>
        </div>
    )
}