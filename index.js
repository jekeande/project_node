const { Sequelize, DataTypes} = require('sequelize')
const TaskMoldel = require('./models/tasks')
const express = require('express')
const app = express()

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'my-database.db'
})

const tasks = TaskMoldel(sequelize, DataTypes)

/*-----------------------------------------------
-----------------------POST-----------------------
-------------------------------------------------*/
app.post('/tasks', async (req, res) =>{
    const Tasks = await sequelize.query("INSERT INTO tasks (description,done) VALUES (?,?)",
    [req.body.description, req.body.done],)
    res.json({ Tasks })
    /*
    ----------------------------------------
    const attributes = ([description, done], req.body);
    const Tasks = Tasks.create(attributes);
    res.json({ Tasks })
    ----------------------------------------
    const Tasks = await tasks.create({
        description: req.body.description,
        done: req.body.done 
      })
    res.json({ Tasks })*/
})
/*-----------------------------------------------
------------------------GET-----------------------
-------------------------------------------------*/
app.get('/tasks', async (req, res)=>{
 const allTasks = await tasks.findAll()
// const allTasks = await sequelize.query('SELECT * FROM Tasks')
    res.json({ allTasks })
})
/*-----------------------------------------------
------------------------GET/ID------------------
-------------------------------------------------*/
app.get("/tasks/:id", async (req, res) => {
    const id = req.params.id
    const idTasks = await tasks.findByPk(id)
   //const idTasks = await sequelize.query(`SELECT * FROM Tasks WHERE id = ${id}`, [])
    res.json({ idTasks })
});
/*-----------------------------------------------
------------------------PUT/ID-----------------------
-------------------------------------------------*/
app.put("/tasks/:id", async (req, res) => {
    const id = req.params.id;
    const idTasks = await tasks.update[req.body.Description, req.body.Done, { where: { id:id } }] 
    res.json({ idTasks })
   /*const idTasks = await sequelize.query
   (`UPDATE Tasks SET description, done WHERE id = ${id}`,
   [req.body.description, req.body.done])
   res.json({ idTasks })*/
});
/*-----------------------------------------------
------------------------DELETE/ID--------------------
-------------------------------------------------*/
app.delete("/tasks/:id", async (req, res) => {
    const id = req.params.id
    const idTasks = await tasks.destroy({where:{id}})
   //const idTasks = await sequelize.query(`DELETE FROM Tasks WHERE id = ${id}`, [])
   res.send({ message: `${id} Tasks were deleted successfully!` });
});
/*-----------------------------------------------
----------------------PORT-----------------------
-------------------------------------------------*/
app.listen(3000, () => {
    console.log('Iniciando o ExpressJS na porta 3000')
})
