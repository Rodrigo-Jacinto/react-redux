import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/formatBr';

export default class Home extends Component {
  state = { products: [] };

  async componentDidMount() {
    const response = await api.get('/products');
    this.setState({ products: response.data });
  }

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{formatPrice(product.price)}</span>

            <button type="button">
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />
              </div>
              <span>ADICIONAR CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}
