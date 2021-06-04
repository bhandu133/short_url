const { Sequelize, DataTypes } = require('sequelize')
require('dotenv').config()

const db = new Sequelize({
    dialect: 'postgres',
    database: process.env.DB_DATABASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD
})

const URLs = db.define('urls', {
    id: {
        primaryKey: true,
        type: DataTypes.BIGINT
    },
    code: {
        type: DataTypes.STRING(7),
        unique: true
    },
    link: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

module.exports = {
    db,
    URLs
}
