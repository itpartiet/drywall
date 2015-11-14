'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('status', {
        name: {
            type: DataTypes.STRING
        },
        pivot: {
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true
    });
};

