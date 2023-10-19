import './ThirdPage.css'

import logo from '../assets/3.png'
import text_logo from '../assets/2.png'

const ThirdPage = () => {
    return (
        <>
        <div className='climb-container'>
            <div className='climb'>
                <div className='climb-number'>
                    <div className='climb-02'>
                        02
                    </div>
                    <div className='climb-climb'>
                        <div className='climb-climb-text'>
                            climb
                        </div>
                    </div>
                </div>
                <div className='climb-text'>
                    <p>Lorem Ipsum Dolor Set Lorem Ipsum Dolor Set Lorem Ipsum Dolor Set Lorem Ipsum Dolor Set </p>
                </div>
            </div>
        </div>
        <div className='mountain-container'>
            <div className='mountain-headings'>
                <p className='mountain-1'>
                    Mountain 1
                </p>
                <p className='mountain-2'>
                    Mountain 2
                </p>
            </div>
        </div>
        <div className="container">
            <div className="background-container">
                {/* Your background content */}
            </div>
            <div className="fixed-box">
                <div className='schedule-container'>
                    <h1>Schedule</h1>
                    <div className='dates-holder'>
                        <div>
                            25 nov 2016
                        </div>
                        <div>
                            Vestibilum Viverra
                        </div>
                    </div>
                    <div className='dates-holder'>
                        <div>
                            28 nov 2016
                        </div>
                        <div>
                            Vestibilum Viverra
                        </div>
                    </div>
                    <div className='dates-holder'>
                        <div>
                            18 dec 2016
                        </div>
                        <div>
                            Vestibilum Viverra
                        </div>
                    </div>
                    <div className='dates-holder'>
                        <div>
                            7 jan 2017
                        </div>
                        <div>
                            Vestibilum Viverra
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="header-t">
            <div className='header-logo-t'>
                <div className='logo-container-t'>
                    <img src={logo} alt='logo' className='logo-t'/>
                </div>
                <div>
                    <img src={text_logo} alt='text_logo' className='text-logo-t'/>
                </div>
            </div>
        </div>
        </>
    )
}

export default ThirdPage