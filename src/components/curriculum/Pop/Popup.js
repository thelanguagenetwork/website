import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import "./Popup.css"
function MyVerticallyCenteredModal(props) {
    return (

        <Modal className="flex items-center justify-center rounder-xl"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className="flex justify-center bg-[#13bfab] mx-0 border-black" closeButton>
                <Modal.Title  id="contained-modal-title-vcenter flex align-center items-center justify-center">
                    <span>Courses Offered</span>
                    
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="lg:flex flex-col items-center">
                    <div className="pl-16 lg:pl-0 lg:flex flex-row justify-center items-center space-x-28 lg:space-x-80 pb-3 ">
                        <span className="w-1/2 pr-4 font-semibold underline decoration-sky-500 underline-offset-4 text-2xl">Adult</span>
                        
                        <span className="w-1/2 pr-4 font-semibold  underline decoration-sky-500 underline-offset-4 text-2xl">Kid</span>
                    </div>
                    <div className="flex flex-row divide-x">

                        <div className="flex justify-center w-1/2 px-10 lg:px-20 justify-center items-center">
                            <div className="flex flex-col content-center">
                                <a href={props.a1}><img src="/images/man.jpg" alt="Img" /></a>
                            </div>
                        </div>

                        <div className="flex justify-center w-1/2 px-[3.4rem] mt-10 lg:px-[6rem] justify-center items-center">
                            <div className="flex flex-col pb-3">
                                <a href={props.a2}><img src="/images/boy.jpg" alt="Img" /></a>
                            </div>
                        </div>

                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} className="font-bold text-black bg-[#13bfab] border-1 hover:bg-white border-black  hover:text-black">Close</Button>
            </Modal.Footer>
        </Modal>

    );
}

function Popup(pop) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>  <div className="space-y-2">
            <span onClick={() => setModalShow(true)} class="border-transparent border-0 btn-val hover:cursor-pointer" >
                
                <div className='p-6 md:w-1/2 lg:w-3/4 flex flex-col items-center'>
                    <img src={pop.im} alt="img" className='w-[9rem] lg:w-[19rem]' />
                    <h3 className='font-medium text-2xl mt-3 text-black text-center'>{pop.sub}</h3>
                </div>
            </span>
        </div>
            <MyVerticallyCenteredModal a1={pop.a1} a2={pop.a2}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default Popup;


