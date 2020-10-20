// Create table for the post
module.exports = function (sequelize, DataTypes) {
  // Create Table
  const Movies = sequelize.define("Movies", {
    // Insert the column names
    title: DataTypes.STRING,
    poster: DataTypes.STRING,
    genre: DataTypes.STRING,
    actor: DataTypes.STRING,
    runtime: DataTypes.STRING,
    year: DataTypes.INTEGER,
    metaCritic: DataTypes.STRING,
    rottenTomato: DataTypes.STRING,
    imdb: DataTypes.STRING,
  });

  // Connect Movies with an Account
  Movies.associate = function (models) {
    Movies.belongsTo(models.Account, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Movies;
};
