'use strict';

module.exports = (sequelize, Datatypes) => {
  const Favorite = sequelize.define('Favorite', {
    title: Datatypes.STRING
  });

  return Favorite;
};
