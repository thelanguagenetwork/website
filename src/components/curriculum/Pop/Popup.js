import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import "./Popup.css"
function MyVerticallyCenteredModal(props) {
    return (
        <Modal className="flex items-center"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter flex align-center items-center justify-center">
                    <span>Courses Offered</span>
                    
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="lg:flex flex-col items-center">
                    <div className="pl-16 lg:pl-0 lg:flex flex-row justify-center items-center space-x-28 lg:space-x-80  ">
                        <span className="w-1/2 pr-4">Adults</span>
                        <span className="w-1/2 pr-4">Kids</span>
                    </div>
                    <div className="flex flex-row divide-x">

                        <div className="flex justify-center w-1/2 px-10 lg:px-20 justify-center items-center">
                            <div className="flex flex-col content-center">
                                <a href={props.a1}><img src={props.src1} alt="Img" /></a>
                            </div>
                        </div>

                        <div className="flex justify-center w-1/2 px-[3.5rem] lg:px-32 justify-center items-center">
                            <div className="flex flex-col pb-3">
                                <a href={props.a2}><img src={props.src2} alt="Img" /></a>
                            </div>
                        </div>

                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} className="font-bold text-black">Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Popup(pop) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>  <div className="space-y-2">
            <span onClick={() => setModalShow(true)} class="border-transparent border-0 btn-val hover:cursor-pointer" >
                <div className='p-6 md:w-3/4 flex flex-col items-center'>
                    <img src={pop.im} alt="img" className='w-[9rem] lg:w-[19rem]' />
                    <h3 className='font-medium text-2xl mt-3 text-black text-center'>{pop.sub}</h3>
                </div>
            </span>
        </div>
            <MyVerticallyCenteredModal a1={pop.a1} a2={pop.a2} src1={pop.src1} src2={pop.src2}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default Popup;


