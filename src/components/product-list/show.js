export default function Show({product}){
    return <>
        <h2>{product?.title}</h2>
        <p>
            {product?.description}
        </p>
        <p>{product?.price}</p>
    </>
}