// Multiple 'Movies' can exist under a single 'Quest' item
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Movie = sequelize.define('Movie', {
    title: {
      type: DataTypes.STRING
    },
    year: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.STRING
    },
    actors: {
      type: DataTypes.STRING
    },
     genre: {
      type: DataTypes.STRING }
    }, 
    {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Movie;
};