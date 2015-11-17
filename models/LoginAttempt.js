'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('login_attempt', {
        ip: {
            type: DataTypes.STRING
        },
        user: {
            type: DataTypes.STRING
        },
        time: {
            type: DataTypes.TIMESTAMP,
            defaultValue: DataTypes.NOW
        }
    }, {
        freezeTableName: true
    });
};

