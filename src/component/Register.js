

import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import auth from "../firebase.init"
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import rlogo from "../images/Group 3.svg"
import "./Register.css"
const Register = (props) => {
    const { show, handleClose } = props;
    const [open, setOpen] = useState(false)
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const handleSignIn = () => {

        signInWithGoogle()
        console.log("hello")
    }
    return (
        <>

            <Modal id="main-modal"


                centered show={show} onHide={handleClose}>

                <label htmlFor="main-modal"><button class="btn btn-success abs"
                    onClick={handleClose}

                    data-target="#main-modal">
                    c
                </button></label>

                <div >


                    <Modal.Body>
                        <p className='m-title'>
                            Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                        </p>
                        <div className='d-flex justify-content-between align-item-center'>
                            <p className='title'>sign in</p>
                            <p onClick={() => setOpen(true)}>already have an account?<span>sign in</span></p>
                        </div>
                        <div className='d-flex '>
                            <div>

                                <div className=''>
                                    <div className='d-flex !input-div justify-center items-center px-2'>
                                        <div className="">

                                            <input type="name" placeholder='First name' name='first_name' className="  focus:outline-none   py-2 text-base uppercase fin " />
                                        </div>
                                        <div className="">

                                            <input type="text" placeholder="Last name" name='last_name' className="focus:outline-none   py-2 text-base uppercase fin  " required />
                                        </div>
                                    </div>
                                    <div className="px-2">

                                        <input type="text" placeholder="Last name" name='last_name' className="focus:outline-none block w-full py-2 text-base uppercase input " required />
                                    </div>
                                    <div className="px-2">

                                        <input type="text" placeholder="Last name" name='last_name' className="focus:outline-none block w-full py-2 text-base uppercase input " required />
                                    </div>
                                    <div className="px-2">

                                        <input type="text" placeholder="Last name" name='last_name' className="focus:outline-none block w-full py-2 text-base uppercase input " required />
                                    </div>
                                    <div>
                                        <Button className='c-button my-4 mx-2'>Create account</Button>
                                        <button className='s-button'>
                                            <img src="" alt="" />
                                            Sign up with Facebook
                                        </button>
                                        <button onClick={handleSignIn} className='s-button'>
                                            <img src="" alt="" />
                                            Sign up with Google
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src={rlogo} alt="" />
                            </div>
                        </div>
                    </Modal.Body>
                </div>


            </Modal>
        </>
    );
};

export default Register;