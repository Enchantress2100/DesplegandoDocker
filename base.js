require('dotenv').config()
const { Pool } = require("pg");
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

//exportar el documento
async function getTareas(){
    try{
        const result = await pool.query(`SELECT * FROM todos;`);
        return result.rows
    }catch(e){
        return e;
    }
}
//insertar nuevas tareas
async function nuevaTarea(nombre, descripcion, fechainicio) {
    try {
        const result = await pool.query(
          `INSERT INTO todos(nombre,descripcion, fechainicio) values('${nombre}', '${descripcion}', '${fechainicio}') RETURNING*;`);
        return result.rows
    } catch (e) {
        return e
    }
}

//borrar tareas del documento
async function deleteTarea(id) {
    try {
        const result = await pool.query(`DELETE FROM todos WHERE id='${id}'`);
        return result.rowCount
    } catch (e) {
        return (e)
    }
}

module.exports = { getTareas, nuevaTarea, deleteTarea };
