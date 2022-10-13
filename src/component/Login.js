import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import rlogo from "../images/Group 3.svg"
const Login = () => {
    const [show, setShow] = useState(false);
    return (
        <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        
        <p className='m-title'>
                    Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                </p>
                {/* <button class="btn btn-success"
                        onClick={handleClose} style={{ top: "10" }} data-target="#main-modal">
                        c
                    </button> */}



                <Modal.Body>
                    <div className='d-flex justify-content-between align-item-center'>
                        <p className='title'>sign in</p>
                        <p>already have an account?<span>sign in</span></p>
                    </div>
                    <div className='d-flex '>
                        <div>

                            <div className=''>
                                {/* <div className='d-flex !input-div justify-center items-center px-2'>
                                    <div className="">

                                        <input type="name" placeholder='First name' name='first_name' className="  focus:outline-none   py-2 text-base uppercase fin " />
                                    </div>
                                    <div className="">

                                        <input type="text" placeholder="Last name" name='last_name' className="focus:outline-none   py-2 text-base uppercase fin  " required />
                                    </div>
                                </div>
                                <div className="px-2">

                                    <input type="text" placeholder="Last name" name='last_name' className="focus:outline-none block w-full py-2 text-base uppercase input " required />
                                </div> */}
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
                                    <button className='s-button'>
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
      </Modal>
    </>
    );
};

export default Login;