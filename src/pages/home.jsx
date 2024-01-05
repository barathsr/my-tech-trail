import img from '../assets/images/logo.png';
import '../assets/styles/home.css'

const Home = () => {
    return(
        <>
            {/*TODO: Want to change the logo*/}

            <div className="nav-bar">
                <img src={img} alt="Could not able to load the image in your browser" className="nav-logo" />
                <div className="nav-ul-div inline">
                    <ul className='nav-ul'>
                        <li className='nav-li'>Home</li>
                        <li className='nav-li'>Work</li>
                        <li className='nav-li'>Contact</li>
                    </ul>
                </div>
            </div>
        </>
    )
} 


export default Home;