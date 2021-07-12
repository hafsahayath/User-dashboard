import React, { useState } from 'react'
import Modal from 'react-modal';
import SearchComponent from './SearchComponent'
import TableComponent from './TableComponent'
import ModalComponent from './ModalComponent'
import '../styles/ListingCustomers-style.css'

Modal.setAppElement(document.getElementById('root'))

const ListingCustomers = ({ customers, unique }) => {
    const [show, setShow] = useState([])
    const [detail, setDetail] = useState({})
    const [modalIsOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('')
    const [searchTable, setSearchTable] = useState([])
    
    const displayModal = (phone) => {
        let result = []
        customers.forEach(ele => {
            if (phone === ele.Phone) {
                result.push(ele)
                setShow(result)
            }
        })
        setIsOpen(true);
        let obj = {
            Name: result[0].Name,
            Phone: result[0].Phone,
            Orders: result.length,
            Total: result.map(ele => ele.Amount).reduce((a, b) => a + b)
        }
        setDetail(obj)
    }

    const handleSearch = (e) => {
        const input = e.target.value
        let result = []
        unique.forEach(ele => {
            if (ele.Name.trim().toLowerCase().includes(input.toLowerCase())||String(ele.Phone).includes(input)) {
                result.push(ele)
            }
        })
        setSearch(input)
        setSearchTable(result)
    }


    return (
        <div className="listing-customers-components">
            <div className="listing-customers-top">
                <h1>Listing Customers</h1>
                <input type="text" value={search} onChange={handleSearch} placeholder="enter the name or number"/>
            </div>
            { searchTable.length > 0 ? (
                <SearchComponent searchTable={searchTable} displayModal={displayModal}/>
            ) : (
                <TableComponent unique={unique} displayModal={displayModal}/>
            )}
            <ModalComponent show={show} detail={detail} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
        </div>
    )
}


            
export default ListingCustomers