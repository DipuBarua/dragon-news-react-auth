import { BsFacebook, BsGithub, BsGoogle, BsInstagram, BsTwitter } from 'react-icons/bs';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>

            <div className=' p-4 space-y-2 mb-5'>
                <h2 className=' text-2xl font-poppins font-semibold mb-2'>Login With</h2>
                <button className=' btn btn-outline w-full'>
                    <BsGoogle></BsGoogle>
                    Login With Google
                </button>
                <button className=' btn btn-outline w-full'>
                    <BsGithub></BsGithub>
                    Login With Github
                </button>
            </div>

            <div className=' p-4 mb-5'>
                <h2 className=' text-2xl font-poppins font-semibold mb-2'>Find Us On</h2>
                <a className=' flex items-center p-4 text-lg border rounded-t-lg' href="">
                    <div className=' mr-2 border rounded-full p-3 text-blue-700 bg-gray-200'>
                        <BsFacebook></BsFacebook>
                    </div>
                    Facebook
                </a>
                <a className=' flex items-center p-4 text-lg border-x' href="">
                    <div className=' mr-2 border rounded-full p-3 text-blue-500 bg-gray-200'>
                        <BsTwitter></BsTwitter>
                    </div>
                    Twitter
                </a>
                <a className=' flex items-center p-4 text-lg border rounded-b-lg' href="">
                    <div className=' mr-2 border rounded-full p-3 text-pink-600 bg-gray-200'>
                        <BsInstagram></BsInstagram>
                    </div>
                    Instagram
                </a>
            </div>

            <div className=' p-4 space-y-2 mb-5'>
                <h2 className=' mb-2 text-2xl font-poppins font-semibold'>Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>

        </div>
    );
};

export default RightSideNav;