import mountain from '../assets/1.png'

import text from '../assets/2.png'

const MountainImage = () => {
    return (
        <>
        <div className="full-screen-image">
            <img
                src={mountain} // Replace with the URL of your image
                alt="Full Screen Image"
                className="image"
            />
        </div>
        {/* <img src={text} alt='text' className='text-mountain'/> */}
        </>
    )
}

export default MountainImage