import React,{useState} from 'react'
import { data } from '../customer-data'
import Dashboard from './Dashboard'
import ListingCustomers from './ListingCustomers'
import OrderDistribution from './OrderDistribution'

const DashboardContainer = (props) => {
    const [customers, setCustomers] = useState(data)

    let unique = []
    let flag = {}
    customers.forEach(ele => {
        if (!flag[ele.Phone]) {
            flag[ele.Phone] = true
            unique.push(ele)
        }
    })

    return (
        <div>
            <Dashboard customers={customers} unique={unique} />
            <ListingCustomers customers={customers} unique={unique} />
            <OrderDistribution customers={customers} unique={unique}/>
        </div>
    )
}

export default DashboardContainer;