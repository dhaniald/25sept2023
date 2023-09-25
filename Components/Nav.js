//Import area
import React from 'react'


//Defenation area
 function Nav() {
  return (
    <ul className="nav justify-content-end">
    <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">We are Hiring</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">Investor Relations</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">Adverties</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" aria-disabled="true">Free Listing</a>
    </li>
</ul>
  )
}


//Export area
export default Nav;