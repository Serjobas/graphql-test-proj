import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import gql from 'graphql-tag';

import Form from './styles/Form';
import Error from './ErrorMessage';
import formatMoney from '../lib/formatMoney';

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
      $title: String!
      $description: String!
      $price: Int!
      $image: String
      $largeImage: String
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ){
      id
    }
  }
`;

class CreateItem extends Component {
  state = {
    title: '',
    description: '',
    image: '',
    largeImage: '',
    price: 0,
  }

  render() {
    return (
      <Mutation mutation={ CREATE_ITEM_MUTATION }>
        { (createItem, { loading, error }) => (
          <Form onSubmit={ this.handleSubmit(createItem) }>
            <Error error={ error }/>
            <fieldset disabled={ loading } aria-busy={ loading }>
              <label htmlFor="title">Title
                <input type="text" id="title" required name="title" placeholder="Title" value={ this.state.title } onChange={ this.handleChange } />
              </label>

              <label htmlFor="description">Description
                <textarea id="description" required name="description" placeholder="Description" value={ this.state.description } onChange={ this.handleChange } />
              </label>

              <label htmlFor="image">Image
                <input type="text" id="image" name="image" placeholder="image" value={ this.state.image } onChange={ this.handleChange } />
              </label>

              <label htmlFor="largeImage">Large Image
                <input type="text" id="largeImage" name="largeImage" placeholder="Large Image" value={ this.state.largeImage } onChange={ this.handleChange } />
              </label>

              <label htmlFor="price">Price
                <input type="number" id="title" name="price" placeholder="Price" value={ this.state.price }  onChange={ this.handleChange }/>
              </label>

              <button type="submit">Submit</button>
            </fieldset>
          </Form>
        ) }
      </Mutation>
    );
  }

  handleChange = (e) => {
    const { name, value, type } = e.target;
    const realValue = type === 'number' ? parseFloat(value) : value;
    this.setState({
      [name]: realValue,
    });
  }

  handleSubmit = (createItem) => async (e) => {
    e.preventDefault();
    const res = await createItem({ variables: this.state });
    Router.push({ pathname: '/item', query: { id: res.data.createItem.id } });
  }
}

export default CreateItem;
export { CREATE_ITEM_MUTATION };
