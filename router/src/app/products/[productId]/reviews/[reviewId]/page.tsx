import { notFound } from "next/navigation"
interface Params{
    params:{
        reviewId: string
        productId: string
    }
}
export default function Review({params}:Params){
    if(parseInt(params.reviewId)>200){
        notFound()
    }
    return(
        <div>
            <h2>Review</h2>
            <p>This is a review id {params.reviewId} for the product id {params.productId} </p>
        </div>
    )
}