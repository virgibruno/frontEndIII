import ObjList from "./objList";


const List = props => {
    
    let lista = props.lista.map(lista => <ObjList name={lista} key={lista}/>)
    return (
        <>
            <h3>{props.name}</h3>
            <ul>{lista}</ul>
        </>
    )
}

export default List;