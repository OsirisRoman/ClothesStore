import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.components';
import CartDropdown from '../cart-dropdown/cart-dropdown.components';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { connect } from 'react-redux';

import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link to='/'>
      <Logo className='logo'></Logo>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='shop'>
        Contact
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    <CartDropdown />
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
