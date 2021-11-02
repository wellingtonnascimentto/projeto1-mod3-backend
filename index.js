const express = require("express");

const app = express();

const port = 3000;

app.use(express.json());


app.get("/", (req,res) => {
    res.status(200).json({message:"bem vindos a nossa API"});
});

const pessoasRouter = require("./paises");
app.use("/paises",pessoasRouter);

const musicasRouter = require("./musicas");
app.use("/musicas",musicasRouter);

const filmesRouter = require("./filmes");
app.use("/filmes",filmesRouter);

app.listen(port, () => {
    console.log(`App rodando em: http://localhost:${port}`);
});