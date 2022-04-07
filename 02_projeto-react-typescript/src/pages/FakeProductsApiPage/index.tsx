import './styles.css'
import { useEffect, useState } from "react"
import { Button } from '../../components/Button'

type Product = {
  id: number
  name: string
  value: number
}

type CreateProduct = {
  id?: number
  name: string
  value: number
}

export function FakeProductsApiPage() {
  const baseApiUrl = 'http://localhost:3333'
  const [products, setProducts] = useState<Product[]>([])
  // const [products, setProducts] = useState([] as Product[])
  // const [shouldUpdateProducts, setShouldUpdateProducts ] = useState<boolean>(true)

  async function getProducts() {
    const response = await fetch(`${baseApiUrl}/products`)

    const fakeProducts = await response.json()

    setProducts(fakeProducts)
    // setShouldUpdateProducts(false)
  }

  async function createProduct() {
    const data: CreateProduct = {
      name: 'meias',
      value: 8,
    } 

    const response = await fetch(
      `${baseApiUrl}/products`, 
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    const fakeProduct = await response.json()

    setProducts((previousState) => [...previousState, fakeProduct])

    // setShouldUpdateProducts(true)
  }

  // solução pior
  // useEffect(() => {
  //   if(!shouldUpdateProducts) {
  //     return
  //   }
  //   getProducts()
  // }, [shouldUpdateProducts])

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <h1>Produtos</h1>
      <ul className="products">
        {products.map(product => 
          <li key={product.id}>
            <p>{product.name}</p>
            <p>{product.value}</p>
            <p><strong>id:</strong>{product.id}</p>
          </li>
        )}
      </ul>

      <Button onClick={createProduct}>criar produto</Button>
    </div>
  )
}