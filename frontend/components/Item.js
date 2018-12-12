import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import formatMoney from '../lib/formatMoney';

import Link from 'next/link';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';

class Item extends Component {

  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string,
      largeImage: PropTypes.string,
    }).isRequired,
  }

  render() {
    const { item } = this.props;
    const { id, title, description, price, image, largeImage } = item;
    return (
      <ItemStyles>
        { image && <img src={ image } alt={ price } /> }
        <Title>
          <Link
            href={{ pathname: '/item', query: { id } }}
          >
            { title }
          </Link>
        </Title>
        <PriceTag>{ formatMoney(price) }</PriceTag>
        <p>{ item.description }</p>
      </ItemStyles>
    );
  }
}

export default Item;
