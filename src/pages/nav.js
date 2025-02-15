import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Jeyam</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/home">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/goods">Goods</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/stock">Stock</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/sales">Sales</a>
      </li>
    </ul>
  </div>
</nav>
    );
};

export default Navbar;
