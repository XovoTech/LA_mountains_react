import './header.css'

import logo from '../assets/3.png'
import text_logo from '../assets/2.png'

const header = ({color,color2}) => {
    return (
        <div className="header" style={{backgroundColor: color, color: color2}}>
            <div className='header-logo'>
                <div className='logo-container'>
                    <img src={logo} alt='logo' className='logo'/>
                </div>
                <div>
                    <img src={text_logo} alt='text_logo' className='text-logo'/>
                </div>
            </div>
            <div className='menu-holder'>
                <p>01.history</p>
                <p>02.team</p>
            </div>
        </div>
    )
}

export default header