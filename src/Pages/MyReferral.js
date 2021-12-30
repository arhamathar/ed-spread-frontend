import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button, Card } from 'reactstrap'
import { AuthContext } from '../context/authContext'

const MyReferrals = () => {
    const auth = useContext(AuthContext);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(auth.referralCode);
        toast.success('Code copied to clipboard successfully');
    };

    return (
        <div className='routes-height text-white'>
            {!auth.isLoggedIn ? (
                <div>
                    <h1 className='top-margin text-center'>
                        Share a better way of Learning!!!
                    </h1>
                    <p className='p-5 text-center'>
                        Refer our courses to friends and get 100 points when your 
                        referral successfully purchases our course with your
                        referral code.
                    </p>
                    <ul className='px-5 mx-5'>
                        <li>Start Sharing & Start Earning</li>
                        <li>100 points = 100/-</li>
                        <li>Minimum points to withdraw is 100.</li>
                        <li>Referral applies only for the paid course.</li>
                    </ul>
                    <div className='text-center'>
                        <Link to='/login'>
                            <Button color='primary' className=' font-weight-bold'>
                                Log In to get referral Code
                            </Button>
                        </Link>
                    </div>
                </div>
            ) : (
                <Card className='bg-transparent px-4 referralCard'>
                    <h1 className='top-margin text-center'>
                        My Referral Points & Code
                    </h1>
                    <div className='mt-5 mx-auto h4'>
                        <p className=''>
                            My Points: <b>{auth.referralPoints}</b>
                        </p>
                        <div className=''>
                            <p>
                                My Code: {auth.referralCode}{' '}
                                <i
                                    className='far fa-copy fa-lg ml-4 pointer'
                                    onClick={copyToClipboard}
                                ></i>
                            </p>
                        </div>
                    </div>
                    <div className='text-center my-3'>
                        <Button color='primary' className='font-weight-bold'>
                            <a
                                href='https://forms.gle/KeMR5PyMCviJQxN96'
                                target='_blank'
                                rel='noreferrer'
                                className='text-light'
                            >
                                Redeem Now
                            </a>
                        </Button>
                    </div>
                </Card>
            )}
        </div>
    )
}

export default MyReferrals;