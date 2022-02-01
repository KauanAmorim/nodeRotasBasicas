const http = require('http')

http
    .createServer((req, res) => {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        if(req.url === '/perfil'){
            res.end(JSON.stringify({
                message: 'Você entrou na página imaginária de perfil :)'
            }))
        }

        if(req.url === '/feed'){
            res.end(JSON.stringify({
                message: 'Você entrou na página imaginária de feed :)'
            }))
        }

        res.end(JSON.stringify({
            message: "Página não encontrada"
        }))
    })
    .listen(3333, () => console.log("Server running at http://localhost:3333"))