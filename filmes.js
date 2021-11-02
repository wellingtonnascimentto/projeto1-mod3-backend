const express = require("express");
const router = express.Router();

let listaFilmes = [{
    filme: "Click",
    ano: 2006,
    imagemUrl: "http://soderbi.com.br/wp-content/uploads/2021/03/click.jpg"
   
 },
 {
    filme: "300",
    ano: 2006,
    imagemUrl: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/d5cf153c036c1b288eb615e2030d899b9905ac14d8233260e6895edb6108420e._RI_V_TTW_.jpg"
 },
 {
    filme: "Velozes e Furiosos 9",
    ano: 2021,
    imagemUrl: "https://www.universalpics.com.br/tl_files/content/movies/fast9/posters/03.jpg"
 },
];

router.get("/", (req,res) => {
    res.status(200).json({message:"Minha API de Filmes, ok!"});
});

router.get("/listar", (req,res) => {
    res.status(200).json(listaFilmes);
});

router.get("/listar/:filme", (req,res) => {
    const filme = req.params.filme;
    const local = listaFilmes.find((item) => item.filme === filme);
    res.status(200).json(local);
});

router.get("/listarindex/:filme", (req,res) => {
    const filme = req.params.filme;
    const index = listaFilmes.findIndex((item) => item.filme === filme);
    if(index == -1){
        res.status(204);
        return;
    }
    res.status(200).json({index:index});
});

router.post("/", (req,res) => {
    const local = req.body;

    if(!local.filme){
        res.status(400).json({message:"filme na requisição esta vazio"});
        return;
    }
    if(!local.ano){
        res.status(400).json({message:"ano na requisição esta vazio"});
        return;
    }
    if(!local.imagemUrl){
        res.status(400).json({message:"imagemUrl na requisição esta vazio"});
        return;
    }
    
    listaFilmes.push(local); 
    res.status(201).json({message:"cadastrado com sucesso"});
});

router.put("/:id", (req,res) => {
    const id = req.params.id;
    const local = listaFilmes[id];
    
    console.log(local);

    if(!local.filme){
        res.status(400).json({message:"filme na requisição esta vazio"});
        return;
    }
    if(!local.ano){
        res.status(400).json({message:"ano na requisição esta vazio"});
        return;
    }
    if(!local.imagemUrl){
        res.status(400).json({message:"imagemUrl na requisição esta vazio"});
        return;
    }
    
    listaFilmes[id] = req.body;

    res.status(200).json(listaFilmes[id]);
});

router.delete("/:id", (req,res) => {
    const id = req.params.id;
    delete listaFilmes[id];
    console.log(listaFilmes[id]);
    res.status(200).json(listaFilmes);
});

router.delete("/deletar/:id", (req,res) => {
    const id = req.params.id;
    listaFilmes.splice(id,1);
    res.json(listaFilmes);
});


module.exports = router;