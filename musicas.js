const express = require("express");
const router = express.Router();

let listaMusicas = [{
    musica: "Não Pare",
    cantor: "Midian Lima",
    duracao: 5.07,
    composicao: "Priscila de Paula"
 },
 {
    musica: "Caridade",
    cantor: "Raiz Coral",
    duracao: 3.55,
    composicao: "Raiz Coral"
 },
 {
    musica: "Algo Novo",
    cantor: "Coral Kemuel",
    duracao: 6.53,
    composicao: "David Marx, Heric Tolentino, Beresix"
 },
];

router.get("/", (req,res) => {
    res.status(200).json({message:"Minha API de Musicas, ok!"});
});

router.get("/listar", (req,res) => {
    res.status(200).json(listaMusicas);
});

router.get("/listar/:musica", (req,res) => {
    const musica = req.params.musica;
    const local = listaMusicas.find((item) => item.musica === musica);
    res.status(200).json(local);
});

router.get("/listarindex/:musica", (req,res) => {
    const musica = req.params.musica;
    const index = listaMusicas.findIndex((item) => item.musica === musica);
    if(index == -1){
        res.status(204);
        return;
    }
    res.status(200).json({index:index});
});

router.post("/", (req,res) => {
    const local = req.body;

    if(!local.musica){
        res.status(400).json({message:"musica na requisição esta vazio"});
        return;
    }
    if(!local.cantor){
        res.status(400).json({message:"cantor na requisição esta vazio"});
        return;
    }
    if(!local.duracao){
        res.status(400).json({message:"duracao na requisição esta vazio"});
        return;
    }
    if(!local.composicao){
        res.status(400).json({message:"composicao na requisição esta vazio"});
        return;
    }
    listaMusicas.push(local); 
    res.status(201).json({message:"cadastrado com sucesso"});
});

router.put("/:id", (req,res) => {
    const id = req.params.id;
    const local = req.body;
    
    console.log(local);
    

    if(!local.musica){
        res.status(400).json({message:"musica na requisição esta vazio"});
        return;
    }
    if(!local.cantor){
        res.status(400).json({message:"cantor na requisição esta vazio"});
        return;
    }
    if(!local.duracao){
        res.status(400).json({message:"duracao na requisição esta vazio"});
        return;
    }
    if(!local.composicao){
        res.status(400).json({message:"composicao na requisição esta vazio"});
        return;
    }

    listaMusicas[id] = req.body;
    res.status(200).json(listaMusicas[id]);
});

router.delete("/:id", (req,res) => {
    const id = req.params.id;
    delete listaMusicas[id];
    console.log(listaMusicas[id]);
    res.status(200).json(listaMusicas);
});

router.delete("/deletar/:id", (req,res) => {
    const id = req.params.id;
    listaMusicas.splice(id,1);
    res.json(listaMusicas);
});

module.exports = router;