const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
	res.json({msg: "Ola, seja bem vindo"})
})

app.listen(3001, () => console.log("Escutando na porta 3001"))
