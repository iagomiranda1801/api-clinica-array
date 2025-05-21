const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../config/config.json');
console.log('config:', config.development);
// Initialize Sequelize
console.log(config.development.database, config.development.username, config.development.password, config.development.host);
const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
    host: config.development.host,
    dialect: 'mysql', // or 'postgres', 'sqlite', etc.
});

// Define models
const User = sequelize.define('Usuario', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Add associations if needed
// User.hasMany(Post); // Example of association

// Export models
module.exports = {
    sequelize,
    User,
    // Add other models here
};