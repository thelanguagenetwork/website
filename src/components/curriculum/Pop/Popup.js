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
            <Modal.Header className="flex justify-center mx-0" closeButton>
                <Modal.Title  id="contained-modal-title-vcenter flex align-center items-center justify-center">
                    <span>Select you age group</span>
                    
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="lg:flex flex-col items-center">
                    <div className="flex flex-row divide-x">

                        <div className="flex justify-center w-1/2 justify-center items-center">
                            <div className="flex flex-col content-center justify-center items-center  ">
                                <a className="flex justify-center" href={props.a1}><img className="w-1/2 md: lg: flex justify-center" src="/images/man.jpg" alt="Img" /></a>
                                <span className="flex justify-center py-2 font-semibold text-lg ">Adults</span>
                                <p className="flex justify-center">Age Group: 14+ years</p>
                            </div>
                        </div>

                        <div className="flex justify-center w-1/2 justify-center items-center">
                            <div className="flex flex-col items-center content-center pt-[1.2rem] lg:pt-[2rem]">
                                <a className="flex justify-center" href={props.a2}><img className="w-5/12 md: lg:" src="/images/boy.jpg" alt="Img" /></a>
                                <span className="flex justify-center py-2 font-semibold text-lg">Kids and Teens</span>
                                <p className="flex justify-center">Age Group: 6-13 years</p>

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


