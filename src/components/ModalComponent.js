import React from 'react'
import Modal from 'react-modal';
import '../styles/ModalComponent-style.css'

const ModalComponent = ({show, detail, modalIsOpen, setIsOpen}) => {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };
    // function openModal() {
    //     setIsOpen(true);
    // }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className='main-div'>
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='modal-container'>
                    <button className='modal-close-btn' onClick={closeModal}><strong>x </strong></button>
                    <h2>{detail.Name} - {detail.Phone}</h2>
                    <h2>Total Orders - {detail.Orders}, Total Amount - {detail.Total}</h2>
                    <div className='modal-overflow'>
                        <table border='1' className='modal-table' style={{ textAlign: 'center' }}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {show.map((ele, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{ele.Date}</td>
                                            <td>{ele.Amount}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ModalComponent
