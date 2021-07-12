import React from 'react'
import '../styles/DashboardItem-style.css'

const DashboardItem = ({calc, text}) => {
    return (
        <div className='top-three-items'>
            <h2>{calc} {text}</h2>
        </div>
    )
}

export default DashboardItem;