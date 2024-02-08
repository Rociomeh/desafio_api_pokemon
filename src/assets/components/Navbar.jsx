import {NavLink} from 'react-router-dom'

const Navbar = () => {
    const setActiveClass = ({isActive}) => (isActive ? 'active' : 'inactive')
    return(
        <nav>
            <span></span>
            <div className='links'>
                <NavLink to='/'className={`base${setActiveClass}`}>Home</NavLink>
                <NavLink to='/personajes' className={setActiveClass}>Personajes</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;