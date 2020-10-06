const models = require('../db');
const _USER = require('./users.json') ;
const _BOOKS = require('./books.json');

module.exports = {
    insert : ()=> {
        models.User.bulkCreate(_USER)
        .then(()=>{
            models.Book.bulkCreate(_BOOKS)
        .then(res => {
            console.log('Success adding users and books')
        })
    })
    .catch(error => {
        console.log(error)
    })
}
 }