const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const bitcoin = sequelize.define('bitcoin', {
        pk: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        naver_pk: {
            type: Sequelize.STRING,
            allowNull: false
        },
        bcode: {
            type: Sequelize.BIGINT,
            allowNull: false
        },
        b_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        bonbun: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        bubun: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        buildingId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        buildingCompletion: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });


    return bitcoin;
}