module.exports = function (sequelize, DataTypes) {
    var SeqBurger = sequelize.define("SeqBurger",
        {
            burger_name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1, 100]
                }
            },
            devoured: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                allowNull: false
            },
            date: {
                type: DataTypes.DATE,
                defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
            },
        }, {
            timestamps: false,

        },
        {
            // We're saying that we want our Author to have Posts
            classMethods: {
                associate: function (models) {
                    // Associating Author with Posts
                    // When an Author is deleted, also delete any associated Posts
                    seqBurger.belongsTo(models.Customer, {
                        onDelete: "cascade"
                    });
                }
            }
        }
    );
    return SeqBurger;
}