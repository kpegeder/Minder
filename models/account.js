const bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
  const Account = sequelize.define("Account", {
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Account.associate = function (models) {
    // Associating Account with Movies
    // When an Account is deleted, also delete any associated Movies
    Account.hasMany(models.Movies, {
      onDelete: "cascade",
    });
  };

  Account.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  Account.addHook("beforeCreate", function (account) {
    account.password = bcrypt.hashSync(
      account.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  return Account;
};
