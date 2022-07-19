import output from "./crud"
import validation from "./validate"
import { Request, Response } from "express"
import { MysqlError } from "mysql"
const express = require('express')
const app = express()
const mysql = require('mysql')
const db = require('../src/data/db.json')
const port: number = 3000
const cors = require('cors')

app.use(cors())

if (validation != 'exit'){
    app.use((req, res, next) => {
        console.time('Request');
        console.log(`\nMétodo: ${req.method}`);
        
        next();
        
        console.timeEnd('Request');
    });
    
    const connection = mysql.createConnection(db)
    connection.connect()
    
    if (validation == 'post'){
        app.post('/', (rep: Request, res: Response) => {
            
            connection.query(output, (err: MysqlError, result) => {
                if (err){
                    return console.log("ERRO: valor(es) inválido(s) ou nulo(s)")
                }
                return res.send(result)
            })
        })
    }

    if (validation == 'get'){
        app.get('/', (rep: Request, res: Response) => {
            
            connection.query(output, (err: MysqlError, result) => {
                if (err){
                    return console.log("ERRO: valor(es) inválido(s) ou nulo(s)")
                }
                return res.send(result)
            })
        })
    }

    if (validation == 'put'){
        app.put('/', (rep: Request, res: Response) => {
            
            connection.query(output, (err: MysqlError, result) => {
                if (err){
                    return console.log("ERRO: valor(es) inválido(s) ou nulo(s)")
                }
                return res.send(result)
            })
        })
    }

    if (validation == 'delete'){
        app.delete('/', (rep: Request, res: Response) => {
            
            connection.query(output, (err: MysqlError, result) => {
                if (err){
                    return console.log("ERRO: valor(es) inválido(s) ou nulo(s)")
                }
                return res.send(result)
            })
        })
    }

    app.listen(port, () => {
        console.log(`\nOnline in: http://localhost:${port}/\nCtrl + C para finalizar`)
    })
}
process.on('SIGINT', function() {
    console.log("\nServidor finalizado!\n");
    process.exit();
});