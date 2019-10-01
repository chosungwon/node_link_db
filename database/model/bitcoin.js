const Sequelize = require('sequelize');

module.exports = (Sequelize) => {
    const bitcoin = Sequelize.define('bitcoin', {
        pk: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        naver_pk: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bcode: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        b_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bonbun: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bubun: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        buildingId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        buildingCompletion: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });


    return bitcoin;
}