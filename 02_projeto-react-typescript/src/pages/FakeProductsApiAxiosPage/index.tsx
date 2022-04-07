import './styles.css'
import { useEffect, useState } from "react"
import { Button } from '../../components/Button'
import { fakeApi } from '../../services/fakeApi'

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

export function FakeProductsApiAxiosPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [productNameInput, setProductNameInput] = useState('')
  const [productValueInput, setProductValueInput] = useState('')

  async function getProducts() {
    const response = await fakeApi.get('products')

    const fakeProducts = response.data

    setProducts(fakeProducts)
  }

  async function createProduct(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data: CreateProduct = {
      name: productNameInput,
      value: Number(productValueInput),
    }

    if (!data.name || !data.value) {
      alert('Nome ou valor do produto faltando...')
      return
    }

    const response = await fakeApi.post('products', data)

    const fakeProduct = response.data

    setProducts((previousState) => [...previousState, fakeProduct])
    setProductNameInput('')
    setProductValueInput('')
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <h1>Novo Produto</h1>
      
      <form onSubmit={createProduct}>
        <label htmlFor="product-name">Nome do Produto</label>
        <input 
          type="text" 
          id="product-name" 
          value={productNameInput}
          onChange={(event) => setProductNameInput(event.target.value)}
        />

        <label htmlFor="product-value">Valor do produto</label>
        <input 
          type="text" 
          id="product-value"
          value={productValueInput}
          onChange={(event) => setProductValueInput(event.target.value)}
        />

        <Button type='submit'>criar produto</Button>
      </form>

      <h2>Produtos</h2>

      <ul className="products">
        {products.map(product => 
          <li key={product.id}>
            <p>{product.name}</p>
            <p>{product.value}</p>
            <p><strong>id:</strong>{product.id}</p>
          </li>
        )}
      </ul>
    </div>
  )
}