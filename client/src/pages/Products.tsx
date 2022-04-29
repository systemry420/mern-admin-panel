import React from 'react'
import Wrapper from '../components/Wrapper'

const Products = () => {

    const [products, setproducts] = React.useState([])
  
    React.useEffect(() => {
      (async () => {
        const res = await fetch('http://localhost:8000/api/products')
        const products = await res.json()
        console.log(products);
        
        setproducts(products.data)
      })()
    }, [])
  
  return (
    <Wrapper>
        <table className="table table-striped">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Desc</th>
            <th scope="col">Price</th>
            </tr>
        </thead>
        <tbody>
            {products?.map((product: any) => {
            return (
                <tr key={product.id}>
                <td>
                    <img className='w-50' src={product.image} alt='a' />
                </td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                </tr>
            )
            })}
        </tbody>
        </table>
    </Wrapper>
  )
}

export default Products