module.exports = (sequelize,Datatypes)=>{
    const User = sequelize.define('User',{
        name: {
            type : Datatypes.STRING,
            allownull : false,
            validate : {
                notEmpty: true
            }
        }
    });
        User.associate = (models) => {
            models.User.belongsToMany(models.Book , {as : 'Reading', through : 'ReadingList'})
            models.User.hasOne(models.Favorite);
        };
        return User;
}