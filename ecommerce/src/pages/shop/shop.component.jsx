import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
/* import { selectCartItems } from '../../redux/cart/cart.selectors'; */

import { selectCollections } from '../../redux/shop/shop.selectors';

const ShopPage = ({ collections }) => (
  <div className='shop-page'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
