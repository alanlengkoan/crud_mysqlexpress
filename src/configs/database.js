import dotEnv from 'dotenv';
import {
    Sequelize
} from 'sequelize';

dotEnv.config({
    path: './.env',
});

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    dialect: 'mysql',
    port: process.env.DATABASE_PORT,
    host: process.env.DATABASE_HOST,
});

export default sequelize;