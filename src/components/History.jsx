import './History.css'

import history from '../assets/7.png'

const History = () => {
    return (
        <div className="full-screen-component">
            <div className="top-images">
                <img src={history} alt='history' />
            </div>
            <div className="bottom-slider">
                {/* Place your slider component here */}
            </div>
        </div>
    )
}

export default History