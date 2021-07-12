import React from 'react'
import PieChart from './PieChart'
import '../styles/OrderDistribution-style.css'

const OrderDistribution = ({customers, unique}) => {
    let obj = {}
    customers.forEach(ele => {
        if (!obj[ele.Phone]) {
            obj[ele.Phone] = 1
        } else {
            obj[ele.Phone] = obj[ele.Phone] +1
        }
    })
    
    let values = Object.values(obj)
    let newObj = { 1: 0, 2:0, 3:0, 4:0, '5+':0 }
    values.forEach(ele => {
        if (ele === 1) {
            newObj[1]=newObj[1]+1
        } else if (ele === 2) {
            newObj[2] = newObj[2] + 1
        } else if (ele === 3) {
            newObj[3] = newObj[3] + 1
        } else if (ele === 4) {
            newObj[4] = newObj[4]+1
        } else {
            newObj['5+'] = newObj['5+'] + 1
        }
    })
    console.log(newObj)

    return (
        <div className='order-distribution-container'>
            <h2>Order Distribution</h2>
            <div>
                <table className='table-style'>
                    <thead>
                        <tr>
                            <th>No. Of Orders</th>
                            <th>No. Of Customers</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(newObj).map((ele, i) => {
                            return (
                                <tr key={i}>
                                    <td>{ele}</td>
                                    <td>{newObj[ele]}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className='pie-div'>
                <h2 style={{textAlign:'center'}}>Pie Chart</h2>
                <PieChart newObj={newObj}/>
            </div>
        </div>
    )
}

export default OrderDistribution
