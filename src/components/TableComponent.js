import React from 'react'
import '../styles/TableComponent-style.css'

const TableComponent = ({unique, displayModal}) => {
    return (
        <div className='table-container'>
            <table className='table-component'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {unique.map((ele, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{ele.Name}</td>
                                <td>{ele.Phone}</td>
                                <td><button onClick={() => displayModal(ele.Phone)}>show</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TableComponent
