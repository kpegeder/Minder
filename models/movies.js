// Create table for the post
module.exports = function (sequilized, DataTypes) {
  // Create Table
  const Movies = sequilize.define("Movies", {
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
