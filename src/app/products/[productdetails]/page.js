import Show from "@/components/product-list/show";

async function fetchProducDetails(id){
    const response = await fetch(`https://dummyjson.com/products/${id}`,{
        method:'GET'
    });

    const result = await response.json();
    return result;


}
export default async function ProductDetails({params}) {

    const {productdetails} = params;

    const product = await fetchProducDetails(productdetails)
    return <Show product={product}/>
}