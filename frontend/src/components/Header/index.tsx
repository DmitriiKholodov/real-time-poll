import React from 'react';
import './index.scss';

const Header = (): JSX.Element => {
  return (
    <div className="header">
      <div className="header__title">POLLINATOR 9000+</div>
      <div className="header__status-bar"></div>
    </div>
  );
};

export default Header;
