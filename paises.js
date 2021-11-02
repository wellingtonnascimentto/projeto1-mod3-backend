const express = require("express");
const router = express.Router();

let listaPaises = [{
    pais: "Brasil",
    capital: "Brasilia",
    idioma: "Português",
    Moeda: "Real",
    imagemUrl: "https://static.todamateria.com.br/upload/ba/nd/bandeiradobrasil-cke.jpg"
},
{
    pais: "Estados Unidos da America",
    capital: "Washington",
    idioma: "Inglês",
    Moeda: "Dólar Americano",
    imagemUrl: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/bandeira-dos-eua.jpg"
},
{
    pais: "França",
    capital: "Paris",
    idioma: "Francês",
    Moeda: "Euro",
    imagemUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png"
},
];

router.get("/", (req,res) => {
    res.status(200).json({message:"Minha API de Países, ok!"});
});

router.get("/listar", (req,res) => {
    res.status(200).json(listaPaises);
});

router.get("/listar/:pais", (req,res) => {
    const pais = req.params.pais;
    const local = listaPaises.find((item) => item.pais === pais);
    res.status(200).json(local);
});

router.get("/listarindex/:pais", (req,res) => {
    const pais = req.params.pais;
    const index = listaPaises.findIndex((item) => item.pais === pais);
    if(index == -1){
        res.status(204);
        return;
    }
    res.status(200).json({index:index});
});

router.post("/", (req,res) => {
    const local = req.body;

    if(!local.pais){
        res.status(400).json({message:"pais na requisição esta vazio"});
        return;
    }
    if(!local.capital){
        res.status(400).json({message:"capital na requisição esta vazio"});
        return;
    }
    if(!local.idioma){
        res.status(400).json({message:"idioma na requisição esta vazio"});
        return;
    }
    if(!local.moeda){
        res.status(400).json({message:"moeda na requisição esta vazio"});
        return;
    }
    if(!local.imagemUrl){
        res.status(400).json({message:"imagemUrl na requisição esta vazio"});
        return;
    }

    listaPaises.push(local); 
    res.status(201).json({message:"cadastrado com sucesso"});
});

router.put("/:id", (req,res) => {
    const id = req.params.id;
    const local = listaPaises[id];
    
    console.log(local);
    
    listaPaises[id] = req.body;

    if(!local.pais){
        res.status(400).json({message:"pais na requisição esta vazio"});
        return;
    }
    if(!local.capital){
        res.status(400).json({message:"capital na requisição esta vazio"});
        return;
    }
    if(!local.idioma){
        res.status(400).json({message:"idioma na requisição esta vazio"});
        return;
    }
    if(!local.moeda){
        res.status(400).json({message:"moeda na requisição esta vazio"});
        return;
    }
    if(!local.imagemUrl){
        res.status(400).json({message:"imagemUrl na requisição esta vazio"});
        return;
    }

    res.status(200).json(listaPaises[id]);
});

router.delete("/:id", (req,res) => {
    const id = req.params.id;
    delete listaPaises[id];
    console.log(listaPaises[id]);
    res.status(200).json(listaPaises);
});

router.delete("/deletar/:id", (req,res) => {
    const id = req.params.id;
    listaPaises.splice(id,1);
    res.json(listaPaises);
});

module.exports = router;