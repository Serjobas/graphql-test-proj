import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

class Items extends Component {
  state = {  }
  render() {
    return (
      <Query query={ ALL_ITEMS_QUERY }>
        { ({ data, error, loading }) => {
          console.log(payload);
          return(<h1>Items</h1>);
        } }
      </Query>
    );
  }
}

export default Items;
