"use strict";Object.defineProperty(exports, "__esModule", {value: true});const readline = require('readline-sync')

function output(){
    console.log("\nAbstraction-CRUD-API\n")
    const table = readline.question("Insira uma tabela: ")
    console.log('\n[1]: CREATE     [2]: READ     [3]: UPDATE     [4]: DELETE     [5]: EXIT\n')
    while (/5/.test(resp) == false){
        var resp = readline.question("Insira uma opção: ")
        if (/1/.test(resp)){ // CREATE
            let columns = readline.question("Insira a(s) coluna(s): ")
            let values = readline.question("Insira o(s) valore(s): ")
            return `INSERT INTO ${table} (${columns}) values (${values})`
        }
        else if (/2/.test(resp)){ // READ
            let columns = readline.question("Insira a(s) coluna(s): ")
            return `SELECT ${columns} FROM ${table}`
        }
        else if (/3/.test(resp)){ // UPDATE
            let column = readline.question("Insira a coluna: ")
            let filter = readline.question("Insira o filtro: ")
            let value = readline.question("Insira o novo valor: ")
            return `UPDATE ${table} set ${column} = ${value} where ${filter}`
        }
        else if (/4/.test(resp)){ // DELETE
            let value = readline.question("Insira o valor: ")
            return `DELETE FROM ${table} where ${value}`
        }
        else if (/5/.test(resp)){} // EXIT
        else{
            console.log('\nValor inválido!')
        }
    }
    console.log("\n\nObrigado, volte sempre!\n\n")
    return '0' // exit return
}

exports. default = output()