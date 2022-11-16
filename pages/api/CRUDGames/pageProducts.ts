import getProducts from "./getProduct";
export async function getStaticProps() {
    const products = await getProducts()
    return {
        props:{
            products:products
        }
    }
    
}
