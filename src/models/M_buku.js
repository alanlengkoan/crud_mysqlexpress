import {
    DataTypes
} from 'sequelize';

import sequelize from "../configs/database.js";

const Buku = sequelize.define('Buku', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    number_book: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    title: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    author: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    year: {
        type: DataTypes.STRING(5),
        allowNull: true
    },
    type: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    deleted_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'buku',
    timestamps: false
});

Buku.prototype.purge = function () {
    const clean = {};
    for (const key of Object.keys(this.dataValues)) {
        if (!secrets.includes(key)) {
            clean[key] = this.dataValues[key];
        }
    }
    return clean;
};

export {
    Buku
}