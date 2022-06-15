import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import "./Popup.css"
import styled from 'styled-components';
function MyVerticallyCenteredModal(props) {
   

    return (
        <Modal className=" flex items-center justify-center"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/* <button onClick={props.onHide} type="button" class="close btn-val" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button> */}
            <div className="flow-root px-8 items-end">
                <button onClick={props.onHide} className="btn-val border-0 focus:outline-none  pt-2 float-right w-1/8 font-bold text-black bg-[#fffff]  hover:bg-white hover:text-black border-white"><span className="text-2xl" aria-hidden="true">×</span>
                </button>
            </div>
            <Modal.Header className="flex mx-0 " closeButton>
                <Modal.Title id="contained-modal-title-vcenter  w-full self-center">
                    <div className="text-lg lg:text-2xl text-left  ">Interested in learning a foreign language? </div>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className='flex flex-col place-content-center'>
                <img src='/images/popupm.jpg' className='w-1/3 self-center'></img>
                <div className=' self-center'> 
                <span className="text-base lg:text-base text-left w-full  place-content-center">Sign up for our demo class today!</span>
                </div>
                <div className='self-center pt-3 grid grid-cols-2 gap-2'>
                    <div className=''>
                        <a href="/getstarted">
                            <button className='gs'>Get Started</button>
                        </a>
                    </div>
                    <div className='se'>
                        <a href="tel:91 83691 23184">
                            <button className='gs'>Call us</button>

                        </a>

                    </div>
                </div>

                </div>

            </Modal.Body>
        </Modal >

    );
}

function Popupm() {
    const [modalShow, setModalShow] = React.useState(true);

    return (
        <>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default Popupm;


