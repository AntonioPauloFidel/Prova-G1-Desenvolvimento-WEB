const express = require("express");
const router = express.Router();
const db = require("../database");


router.post('/',(req,res) =>{
    const {nome,cpf,email} = req.body;
    const stat = db.prepare(`INSERT INTO usuario(nome,cpf,email)
        VALUES (?,?,?) `);
    const info = stat.run(nome,cpf,email);
});


router.put('/:id',(req,res)=>{
    const {nome,cpf,email} = req.body;
    const stat = db.prepare(`UPDATE usuario SET nome?,cpf?,email? WHERE id?`);
    const info =stat.run(nome,cpf,email,req.params.id);
});


router.get('/',(req,res)=>{
    const rows = db.prepara(`SELECT * usuario jogo WHERE cpf=?`).all(req.params.cpf);
    res.json(rows);
});

router.delete('/',(req,res)=>{
    const info = db.prepare(`DELETE FROM usuario WHERE id =?`).run(req.params.id);
    res.json({deleted: info.changes});
});
