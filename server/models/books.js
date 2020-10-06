module.exports = (sequelize,Datatypes)=>{
    const Book = sequelize.define('Book',{
        title : Datatypes.STRING ,
        author: Datatypes.STRING ,
        year : Datatypes.INTEGER 
    });
        Book.associate = (models) => {
            models.Book.belongsToMany(models.User , {as : 'Readers', through : 'ReadingList'})
           
        };
        return Book;
}