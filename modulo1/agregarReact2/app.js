const crear = React.createElement;
const tituloPrincipal = React.createElement("h1", {key: "tituloPrincipal"}, "Con lo visto hasta ahora");
const titulo2 = crear("h2", {key: "titulo2"}, "Replica este HTML");
const titulo3 = crear("h3", null, "Usando");
const titulo4 = crear("h4", null, "React.js");
const pie = crear("footer", null, "Suerte!");


ReactDOM.render([tituloPrincipal, titulo2, titulo3, titulo4, pie], document.getElementById("root"));