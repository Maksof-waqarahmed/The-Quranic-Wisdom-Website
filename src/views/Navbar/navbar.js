import './navbar.css'
import { useState } from 'react'
import { Link } from 'react-scroll'

import logo from '../../Assesst/mian logo.png'
import hamburder from '../../Assesst/hamburger.png'
export function Navbar() {

    const [showMenu, setShowMenu] = useState(false);

    return (

        <nav className='navbar'>

            <div className='navbar_logo'>
                <img src={logo} alt='logo' className='logo' />
            </div>

            <div className='desktop_menu'>
                <Link activeClass='active' to='intro_secion' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link activeClass='active' to='about_section' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
                <Link activeClass='active' to='tutors_section' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Tutors</Link>
                <Link activeClass='active' to='courses_section' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Courses</Link>
                <Link activeClass='active' to='plains_section' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Plans</Link>
                <Link activeClass='active' to='chooseUs_section' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Why Choose Us</Link>
                <Link activeClass='active' to='reviews_section' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Reviews</Link>
            </div>
            
            <div className='desktop_menu_btn_div'>
                <button onClick={() => {
                    document.getElementById('contact').scrollIntoView({ behaviour: 'smooth' }.offset='-100' ) ;
                }} className='desktop_menu_btn'>
                    <i class="fa-light fa-address-book desktop_menu_img"></i>
                    Contact US
                </button>
            </div>

            <img src={hamburder} alt='Menu' className='mobile_menu' onClick={() => setShowMenu(!showMenu)} />

            <div className='nav_menu' style={{display: showMenu ? 'flex' : 'none'}} >
                <Link activeClass='active' to='intro_secion' spy={true} smooth={true} offset={-100} duration={500} className='list_item' onClick={() => setShowMenu(false) } >Home</Link>
                <Link activeClass='active' to='about_section' spy={true} smooth={true} offset={-100} duration={500} className='list_item' onClick={() => setShowMenu(false) } >About</Link>
                <Link activeClass='active' to='courses_section' spy={true} smooth={true} offset={-100} duration={500} className='list_item' onClick={() => setShowMenu(false) } >Courses</Link>
                <Link activeClass='active' to='plains_section' spy={true} smooth={true} offset={-100} duration={500} className='list_item' onClick={() => setShowMenu(false) } >Plans</Link>
                <Link activeClass='active' to='chooseUs_section' spy={true} smooth={true} offset={-100} duration={500} className='list_item' onClick={() => setShowMenu(false) } >Choose US</Link>
                <Link activeClass='active' to='reviews_section' spy={true} smooth={true} offset={-100} duration={500} className='list_item' onClick={() => setShowMenu(false) } >Reviews</Link>
                <Link activeClass='active' to='contact_section' spy={true} smooth={true} offset={-100} duration={500} className='list_item' onClick={() => setShowMenu(false) } >Contact</Link>
            </div>


        </nav>
    )
}