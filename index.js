const { Sequelize, DataTypes} = require('sequelize')
const TaskMoldel = require('./models/tasks')
const express = require('express')
const app = express()

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'my-database.db'
})

const tasks = TaskMoldel(sequelize, DataTypes)
/* 
app.get('/tarefas', async (req, res)=>{
 //   const allTasks = await tasks.findAll()

    const allTasks = await sequelize.query('SELECT * FROM Tasks')
    
    res.json({ allTasks })
})

app.get('/tarefa/:id', async (req, res) => {
    const taskId = req.params.id

    const task = await tasks.findByPk(taskId)

    res.render('tarefa', { id: taskId, name: task.name })
})

app.listen(8080, () => {
    console.log('iniciando o servidor express')
})
*/