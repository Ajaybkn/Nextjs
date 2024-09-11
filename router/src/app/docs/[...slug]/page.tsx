"use client"
interface Params{
    params:{
        slug:string[]
    }
}
export default function Docs({params}:Params) {
    console.log(params.slug)
   if(params.slug.length==2){
    return <h2>feature is {params.slug[0]} and concept is {params.slug[1]}</h2>
   }else if(params.slug.length==1){
    return <h2>concept is {params.slug[0]}</h2>
   }
   return <h1>Docs home page</h1>
}