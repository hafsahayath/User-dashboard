import React from 'react'
import DashboardItem from './DashboardItem'
import '../styles/Dashboard-style.css'

const Dashboard = ({ customers, unique }) => {
    
    const totalOrders = customers.length
    const orderAmount = customers.map(ele => ele.Amount).reduce((a, b) => a + b)
    const totalCustomers = unique.length

    return (
        <div className="dashboard-items">
            <DashboardItem calc={totalOrders} text='Orders'/>
            <DashboardItem calc={orderAmount} text='Amount' />
            <DashboardItem calc={totalCustomers} text='Customers'/>
        </div>
    )
}

export default Dashboard;