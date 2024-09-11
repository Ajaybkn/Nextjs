interface Params{
    params:{
        productId:string,
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