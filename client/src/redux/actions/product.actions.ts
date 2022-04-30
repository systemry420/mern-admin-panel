
export const getAllProducts = () => async (dispatch: any) => {
    const res = await fetch('http://localhost:8000/api/products')
    const products = await res.json()
    console.log(products);
    dispatch({ type: 'GET_PRODUCTS', payload: products })
}