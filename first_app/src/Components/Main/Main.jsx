//Iniciar los documentos con react en Mayusculas
//Css externo 
//css Inline
//css JSon

//Este es un css con JSON
// const titleStyle = {
//     color: 'red', 
//     backgroundColor: 'black',

// style={titleStyle}
// }

function Main (props){
    //Otra forma({name, age}) Forma desestructurada del objaeto 3.0
    // console.log(props);
    const user = props.user; 
    //Forma estructurada

    return (
        <>
            <h1>Bienvenido,  
                {user.name}
                {/* {name} Forma desestructurada del objeto 3.0*/}
            </h1>
            {/* Este es un css inline */}
            <h1 
            // style={{
            //     color: 'red', 
            //     backgroundColor: 'black', 

            // }}
            >
                Edad:  
                    {user.age}    
                    {/* {props.user.age} */}
                </h1>
        </>  
    )
       
}

export default Main; //Linea para exportar este archivo.