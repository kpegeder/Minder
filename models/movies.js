// Create table for the post
module.exports = function (sequelize, DataTypes) {
  // Create Table
  const Movies = sequelize.define("Movies", {
    // Insert the column names
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
