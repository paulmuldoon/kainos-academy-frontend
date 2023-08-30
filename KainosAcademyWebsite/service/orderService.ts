const axios = require('axios');

module.exports.getOrders = async function () {
    try {
        const response = await axios.get('http://localhost:8080/api/orders')
        return response.data
    } catch (e) {
        console.log(e)
        return new Error('Could not get orders')
    }
}

module.exports.getOrderById = async function (id:Number) {
    try {
        const response = await axios.get('http://localhost:8080/api/orders/' + id)
        return response.data
    } catch (e) {
        return new Error('Could not get order')
    }
}