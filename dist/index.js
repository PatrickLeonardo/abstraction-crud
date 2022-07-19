"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _crud = require('./crud'); var _crud2 = _interopRequireDefault(_crud);
var _validate = require('./validate'); var _validate2 = _interopRequireDefault(_validate);


const express = require('express')
const app = express()
const mysql = require('mysql')
const db = require('../src/data/db.json')
const port = 3000
const cors = require('cors')

app.use(cors())

if (_validate2.default != 'exit'){
    app.use((req, res, next) => {
        console.time('Request');
        console.log(`\nMétodo: ${req.method}`);
        
        next();
        
        console.timeEnd('Request');
    });
    
    const connection = mysql.createConnection(db)
    connection.connect()
    
    if (_validate2.default == 'post'){
        app.post('/', (rep, res) => {
            
            connection.query(_crud2.default, (err, result) => {
                if (err){
                    return console.log("ERRO: valor(es) inválido(s) ou nulo(s)")
                }
                return res.send(result)
            })
        })
    }

    if (_validate2.default == 'get'){
        app.get('/', (rep, res) => {
            
            connection.query(_crud2.default, (err, result) => {
                if (err){
                    return console.log("ERRO: valor(es) inválido(s) ou nulo(s)")
                }
                return res.send(result)
            })
        })
    }

    if (_validate2.default == 'put'){
        app.put('/', (rep, res) => {
            
            connection.query(_crud2.default, (err, result) => {
                if (err){
                    return console.log("ERRO: valor(es) inválido(s) ou nulo(s)")
                }
                return res.send(result)
            })
        })
    }

    if (_validate2.default == 'delete'){
        app.delete('/', (rep, res) => {
            
            connection.query(_crud2.default, (err, result) => {
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