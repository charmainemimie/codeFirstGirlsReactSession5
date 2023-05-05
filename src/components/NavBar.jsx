import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
        <nav>
            <ul style={{display:'flex'}}>
                <Link style={{marginRight:'10px',textDecoration:'none', listStyle:'none'}} to="/"><li>Home</li></Link>
                <Link style={{marginRight:'10px',textDecoration:'none', listStyle:'none'}} to="/about"><li>About</li></Link>
                <Link style={{marginRight:'10px',textDecoration:'none', listStyle:'none'}} to="/services"><li>Services</li></Link>
                <Link style={{marginRight:'10px',textDecoration:'none', listStyle:'none'}} to="/contact"><li>Contact</li></Link>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar;