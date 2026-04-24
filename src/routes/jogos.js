const express = require("express");
const router = express.Router();
const db = require("../database");




router.post('/',(req,res) =>{
    const {titulo,preco,id_produtora} = req.body;
    const stat = db.prepare(`INSERT INTO jogo(titulo,preco,id_produtora)
        VALUES (?,?,?) `);
    const info = stat.run(titulo,preco,id_produtora);

});

router.put('/:id',(req,res)=>{
    const {titulo,preco,id_produtora} = req.body;
    const stat = db.prepare(`UPDATE jogo SET titulo?,preco?,id_produtora? WHERE id?`);
    const info =stat.run(titulo,preco,id_produtora,req.params.id);
});

router.get('/',(req,res)=>{
    const rows = db.prepara(`SELECT * FROM jogo`);
    res.json(rows);
});

router.get('/',(req,res)=>{
    const rows = db.prepara(`SELECT * FROM jogo WHERE preco < ?`).all(req.params.valor);
    res.json(rows);
});

