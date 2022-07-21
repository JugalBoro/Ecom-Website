const Sequelize=require('sequelize')

const sequelize=new Sequelize('node1','root','12ka442ka1',{
    dialect: 'mysql',
    host:'localhost'
})

module.exports=sequelize;