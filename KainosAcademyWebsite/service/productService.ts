import { Product } from "../model/products";

const axios1 = require('axios');

module.exports.getProducts = async function () {
    try {
        const response = await axios1.get('http://localhost:8080/api/products')
        return response.data
    } catch (e) {
        throw new Error('Could not get products')
    }
}

module.exports.getProductById = async function (id:Number) {
    try {
        const response = await axios1.get('http://localhost:8080/api/products/' + id)
        return response.data
    } catch (e) {
        throw new Error('Could not get product')
    }
}

module.exports.createProduct = async function (product: Product) {
    try {
        const response = await axios1.post('http://localhost:8080/api/products/', product)
        return response.data 
    } catch (e) {
        throw new Error('Could not create product')
    }
}