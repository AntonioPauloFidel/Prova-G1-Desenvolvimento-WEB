const express = require("express");
const router = express.Router();
const db = require("../database");


router.post('/',(req,res) =>{
    const {nome,cnpj,website} = req.body;
    const stat = db.prepare(`INSERT INTO produtora(nome,cnpj,website)
        VALUES (?,?,?) `);
    const info = stat.run(nome,cnpj,website);
});
router.get('/',(req,res)=>{
    const rows = db.prepara(`SELECT * FROM produtora`);
    res.json(rows);
});
