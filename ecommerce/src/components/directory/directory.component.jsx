import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {} from '../../redux/directory/directory.reducer';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySections } from './directory.selectors';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectios }) => (
      <MenuItem key={id} {...otherSectios}></MenuItem>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
