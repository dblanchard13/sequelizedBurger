module.exports = function (sequelize, DataTypes) {
    var seqBurger = sequelize.define("seq_burger",
        {
            burger_name: {
                type: DataTypes.STRING,
                validate: {
                    notNull: true,
                    len: [1, 100]
                }
            },
            devoured: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                validate: {
                    notNull: true,
                }
            },
            date: {
                type: DataTypes.DATE,
                defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
            }
        }, {
            timestamps: false
        });
    return seqBurger;
}