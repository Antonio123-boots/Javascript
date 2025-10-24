const express = require("express");
const router = express.Router();
const clientesController = require('../controllers/clientesController');

router.get("/", clientesController.clientes);
router.post("/entrada", clientesController.entrada);
module.exports = router;