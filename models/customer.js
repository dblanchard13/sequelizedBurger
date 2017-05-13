﻿module.exports = function (sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        // Giving the Author model a name of type STRING
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        }
    },
        // Here we'll pass a second "classMethods" object into the define method
        // This is for any additional configuration we want to give our models
        {
            // We're saying that we want our Author to have Posts
            classMethods: {
                associate: function (models) {
                    // Associating Author with Posts
                    // When an Author is deleted, also delete any associated Posts
                    Customer.hasMany(models.SeqBurger, {
                        onDelete: "cascade"
                    });
                }
            }
        }
    );
    return Customer;
};
