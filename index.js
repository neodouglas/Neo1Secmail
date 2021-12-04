const {
    link
} = require("fs")
const needle = require("needle")
const parser = require('posthtml-parser')

async function GerarEmail(Quantidade) {
    try {
        return await needle('get', 'https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=' + Quantidade).then(function(respo, error) {
            if (!error && respo.statusCode == 200) {
                return respo.body
            }
        })
    } catch (e) {

    }
}

async function PegarIdDaMensagens(Email) {
    try {
        Email = Email.split('@')
        Dominio = Email[1]
        Email = Email[0]
        return await needle('get', 'https://www.1secmail.com/api/v1/?action=getMessages&login=' + Email + '&domain=' + Dominio).then(function(respo, error) {
            if (!error && respo.statusCode == 200) {
                return respo.body[0].id
            }
        })
    } catch (e) {

    }
}


async function EnviarLinkDoAmino(Email, IdDaMensagem) {
    try {
        Email = Email.split('@')
        Dominio = Email[1]
        Email = Email[0]
        return await needle('get', 'https://www.1secmail.com/api/v1/?action=readMessage&login=' + Email + '&domain=' + Dominio + '&id=' + IdDaMensagem).then(function(respo, error) {
            if (!error && respo.statusCode == 200) {
                var resposta = JSON.stringify(respo.body.htmlBody)
                resposta = resposta.split('\\n')
                resposta = resposta[10].split('>')
                resposta = resposta[2].split('<')
                resposta = resposta[0]
                return resposta
            }
        })
    } catch (e) {

    }
}

module.exports = {
    GerarEmail,
    EnviarLinkDoAmino,
    PegarIdDaMensagens
}