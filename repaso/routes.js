const express = require('express'); // llamado a framework

// llamar a handlers del api
// se presiona control + clic en: './app/handlers/customer.handler' para que nos direccione
const customerHandler = require('./app/handlers/customer.handler');
const productHandler = require('./app/handlers/product.handler');

const router = express.Router();

// registrar las rutas
// rutas de customer
router.get('/customers', customerHandler.listCustomer) // obtener cliente
router.post('/customers', customerHandler.insertCustomer) // insertar cliente
router.patch('/customers/:id', customerHandler.updateCustomer) // actualizar cliente
router.delete('/customers/:id', customerHandler.deleteCustomer) // eliminar cliente

// rutas de product
router.get('/products', productHandler.listProduct) // obtener producto
router.post('/products', productHandler.insertProduct) // insertar producto
router.patch('/products/:id', productHandler.updateProduct) // actualizar producto
router.delete('/products/:id', productHandler.deleteProduct) // eliminar producto

module.exports = router;
//otras rutas