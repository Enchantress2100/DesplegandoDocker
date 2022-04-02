const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

//importar funciones de base.js
const { getTareas, nuevaTarea, deleteTarea } = require("./base");

//middleware de bodyParser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//integrar handlebars como motos de plantillas
app.set("view engine", "handlebars");

//configurar el motor de plantilla con el metodo engine
app.engine(
  "handlebars",
  exphbs.engine({
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views/componentes",
  })
);

//creacion de parcial menu que se renderice antes que dashboard
app.get("/", async (req, res) => {
  const todos = await getTareas();
  res.render("inicio", {
    layout: "inicio",
    todos,
  });
});

//middleware para cargar las librerias de bootstrap y jquery
app.use(
  "/bootstrap",
  express.static(__dirname + "/node_modules/bootstrap/dist/css")
);
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));
app.use(
  "/BootstrapJs",
  express.static(__dirname + "/node_modules/bootstrap/dist/js/")
);

//ruta para visualizar las tareas
app.get("/", async (req, res) => {
  const todos = await getTareas();
  res.render("inicio", {
    layout: "inicio",
    todos,
  });
});
app.get("/todos", async (req, res) => {
  const respuesta = await getTareas();
  res.send(respuesta);
});

//ruta para crear nuevas tareas
app.post("/todos", async (req, res) => {
  const { nombre, descripcion, fechainicio } = req.body;
  await nuevaTarea(nombre, descripcion, fechainicio);
  res.redirect("/");
});

app.get("/todo-create", async (req, res) => {
  res.render("agregar", {
    layout: "agregar",
  });
});

//ruta para borrar tareas
app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  let id1 = id.slice(3)
  const respuesta = await deleteTarea(id1);
  respuesta > 0
    ? res.send(`la tarea de id ${id} fue eliminado con exito`)
    : res.send("no existe una tarea con ese id");
});

app.get("/todo-delete/:id", async (req, res) => {
  const { id } = req.params;
  let id1 = id.slice(3);
  const respuesta = await deleteTarea(id1);
  res.render("eliminar", {
    layout: "eliminar",
    respuesta,
  });
});

app.listen(4000, () => {
  console.log(`Server on and working OK`);
});
