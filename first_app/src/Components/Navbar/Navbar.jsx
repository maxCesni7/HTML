import LoginIcon from '@mui/icons-material/Login'
import { Link } from 'react-router-dom';
import { iconClasses } from '@mui/material';
import './Navbar.css';


const NAV_IMG_URL = 'https://cdn.dribbble.com/users/1769954/screenshots/4216600/media/f1ed192ec1c5300d413fac7fb076f7d0.png'


const Navbar = ({links, isLogged})=>{

    console.log(isLogged);
    
    const navLinks = links.map( link => (
        <Link
            to={link.link}
            key={link.name}
        >
            {link.name}
        </Link>
    ));
    // console.log(props.links)
    // const links = props.links; 
    
    // const navLinks = links.map((text, index) =>(
    //     // <a href="/" key={index}>{text}</a>
    //     <Link to={text} key={index}>{text}</Link>
    // ));

    return(
        <nav className="navbar">
            <div className="nav--container">
                <div className="nav-left">
                    <Link to="/" id='img_logo'>
                    <img src={NAV_IMG_URL} alt="space-logo" />

                    <h1 className="nav--title">
                        Space-App
                    </h1>
                    </Link>
                </div>
                <div className="nav-right">
                    <div className='nav--links'>
                        {
                            isLogged ? navLinks : <LoginIcon />
                        }
                        {/* {navLinks} */}
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar; 