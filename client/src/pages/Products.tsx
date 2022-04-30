import React from 'react'
import { connect } from 'react-redux'
import Wrapper from '../components/Wrapper'
import { getAllProducts } from '../redux/actions/product.actions'

const Products = (props: {prods: any, getProducts: any}) => {

    const [products, setproducts] = React.useState([])
  
    React.useEffect(() => {
        props.getProducts()
        setproducts(props.prods)
    }, [props.prods, props.getProducts])
  
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
                  <td>{product.id}</td>
                  <td>
                      <img className='w-60' src={product.image} alt='a' />
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

const mapStateToProps = (state: any) => {
  return {
    prods: state.products
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getProducts: () => dispatch(getAllProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)