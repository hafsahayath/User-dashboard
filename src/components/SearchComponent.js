import React from 'react'
import '../styles/SearchComponent-style.css'

const SearchComponent = ({searchTable, displayModal}) => {

    return (
        <div className='search-container'>
                <table className='search-component'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchTable.map((ele, i) => {
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

export default SearchComponent