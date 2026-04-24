const express = require("express");
const router = express.Router();
const db = require("../database");


router.post('/',(req,res) =>{
    const {id_usuario,id_jogo,horas_jogadas} = req.body;
    const stat = db.prepare(`INSERT INTO biblioteca(id_usuario,id_jogo,horas_jogadas);
        VALUES (?,?,?) `)
    const info = stat.run(id_usuario,id_jogo,horas_jogadas);
});



router.put('/:id',(req,res)=>{
    const {id_usuario,id_jogo,horas_jogadas} = req.body;
    const stat = db.prepare(`UPDATE biblioteca SET id_usuario?,id_jogo?,horas_jogadas? WHERE id=?`);
    const info =stat.run(id_usuario,id_jogo,horas_jogadas,req.params.id);
});

router.get('/',(req,res)=>{
    const rows = db.prepara(`SELECT * biblioteca  `);
    res.json(rows);
});