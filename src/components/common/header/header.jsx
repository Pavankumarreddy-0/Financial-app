import React from 'react'
import './header.css'
import LogoImg from '../../../assets/images/PilogCloudRedBlue.gif'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className='header d-flex justify-content-between shadow-sm'>
        <div className='logo'>
          <Link to="/"><img src={LogoImg} alt="loading" /></Link>
        </div>

        <div className='header_right'>
          <ul className='d-flex list-inline'>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><span className='en_dropdown'>EN <i className="bi bi-chevron-down"></i></span></li>
            <li><i className="bi bi-list fs-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"></i></li>
          </ul>
        </div>

        <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <p>Try scrolling the rest of the page to see this option in action.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header