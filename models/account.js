module.exports = function (sequelize, DataTypes) {
  const Account = sequelize.define("Account", {
    // Give the Account model a name
  });

  Account.associate = function (models) {
    // Associating Account with Movies
    // When an Account is deleted, also delete any associated Movies
    Account.hasMany(models.Movies, {
      onDelete: "cascade",
    });
  };

  return Account;
};
