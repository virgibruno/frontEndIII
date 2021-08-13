const titulo = React.createElement(
    "h2",
    {key: "titulo"},
    "¡Hola Mundo!"
)

const span = React.createElement(
    "span",
    {key: "span"},
    "con React!"
)

const texto = React.createElement(
    "p",
    {key: "parrafo"},
    ["Renderizando ", span]
)

const elDiv = React.createElement(
    "div",
    null,
    [titulo, texto]
)

ReactDOM.render(elDiv, document.getElementById("root"))