import React, {Component, Fragment, useState, useEffect} from "react";
import "./Formulario.css"

const Formulario = () => {
    
    const [datos, setDatos] = useState({
        primernumero: 0,
        segundonumero: 0
    })

    const [suma, setSuma] = useState()

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        const sum = Number(datos.primernumero) + Number(datos.segundonumero)
        setSuma(sum)
    }

    const [mostrar, setMostrar] =useState("")
    
    const [size, setSize] =useState(Number(1))

    const [mostrarArriba, setMostrarArriba] =useState("")

    const [sizeMostrarArriba, setSizeMostrarArriba] =useState(Number(1))

    const [igualdad, setIgualdad] =useState(false)

    const escribir = (event) => {
        if(!igualdad) {

        
        if(size <= Number(15) || event.currentTarget.value == 'DEL' || event.currentTarget.value == 'AC' || event.currentTarget.value == '=' 
           || event.currentTarget.value == '+' || event.currentTarget.value == '*' || event.currentTarget.value == '-' || event.currentTarget.value == '/') {
            switch(event.currentTarget.value) {
                case '0': {
                    if(mostrar[0] == 0 && size == Number(2)) {
                    }
                    else {
                        if(mostrar[0] == "-" && mostrar[1] == "0") {}
                        else {
                        setMostrar(mostrar + event.currentTarget.value)
                        setSize(Number(size) + Number(1))
                        }
                    }
                }
                break;
                case '1': 
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9': {
                    if(mostrar[0] == 0 && size == Number(2)) {                       
                    }
                    else {
                        if(mostrar[0] == "-" && mostrar[1] == "0") {}
                        else{
                        setMostrar(mostrar + event.currentTarget.value)
                        setSize(Number(size) + Number(1))
                        }
                    }
                }
                break;
                case '.': {
                    for (var i = 0; i < size && mostrar[i] != '.'; i++) {}
                    if(mostrar[i] != '.' && size > Number(1)) {
                        if(mostrar[0] == "-" && mostrar.length == 1) {}
                        else {
                        setMostrar(mostrar + '.')
                        setSize(Number(size) + Number(1))
                        }
                    }
                }
                break;
                case '/': 
                case '*':
                case '+':
                case '-':
                {
                    if(size > Number(1) && sizeMostrarArriba == Number(1)) {
                        if(mostrar[0] == "-" && mostrar.length == 1) {}
                        else {
                            setMostrarArriba(mostrar + event.currentTarget.value)
                            setSizeMostrarArriba(Number(size) + Number(1))
                            setMostrar("")
                            setSize(Number(1))
                        }
                    }
                    if(event.currentTarget.value == '-' && size == Number(1) && sizeMostrarArriba == Number(1)) {
                        setMostrar(mostrar + event.currentTarget.value)
                        setSize(Number(size) + Number(1))
                    }
                }
                break;
                case 'DEL': {
                    if(mostrar.length > Number(0)) {
                    setMostrar(mostrar.slice(0,size-2))
                    setSize(size-1)
                    }
                }
                break;
                case 'AC': {
                    setMostrar("")
                    setSize(Number(1))
                    setMostrarArriba("")
                    setSizeMostrarArriba(Number(1))
                }
                break;
                case '=': {
                    if(mostrar.length > Number(0) && mostrarArriba.length > Number(0)) {
                       var pri = Number(mostrarArriba.slice(0,sizeMostrarArriba-2))
                       var seg = Number(mostrar)
                       var sim = mostrarArriba.slice(sizeMostrarArriba-2,sizeMostrarArriba-1)
                       setIgualdad(true)
                       if(sim == "+") { 
                        setMostrar(Number(pri) + Number(seg))
                       } else {
                           if(sim == "-") {
                                setMostrar(Number(pri) - Number(seg))
                            } else {
                                if(sim == "*") {
                                    setMostrar(Number(pri) * Number(seg))
                                } else {
                                    setMostrar(Number(pri) / Number(seg))
                                } 
                            }
                        }
                       setMostrarArriba("")
                    }
                }
                break;
            }
        }
        } else {
            setMostrar("")
            setSize(Number(1))
            setMostrarArriba("")
            setSizeMostrarArriba(Number(1))
            setIgualdad(false)
        }

        
        // if(size <= Number(15)) {   
        //     if(size > Number(2)) {
        //         setMostrar(mostrar + event.currentTarget.value)
        //         setSize(Number(size) + Number(1))
        //     }
        //     else {
        //         if(event.currentTarget.value == 0,1,2,3,4,5,6,7,8,9 && mostrar[0] == 0)
        //         {
        //             if(event.currentTarget.value == '.') {
        //                 setMostrar(mostrar + event.currentTarget.value)
        //                 setSize(Number(size) + Number(1))
        //             }
        //         }else {
        //             setMostrar(mostrar + event.currentTarget.value)
        //             setSize(Number(size) + Number(1))
        //         }
        //     }
        // }

    }

    return (
        <Fragment>
            {/* <form className="Wrapper" onSubmit={enviarDatos}>
                <div className="arriba">
                    <div type="submit" className="Recuadro">
                        <input 
                        name="primernumero"
                        type="number"
                        id="primernumero"
                        placeholder="First num"
                        onChange={handleInputChange}>
                        </input>
                    </div>
                    <div className="Recuadro">
                        <input 
                        name="segundonumero" 
                        type="number"
                        id="segundonumero"
                        placeholder="Second num"
                        onChange={handleInputChange}>
                        </input>
                    </div>
                </div>
                <div className="boton">
                    <button type="submit">Enviar</button>
                </div>
            </form>
            <h3 className="resultado">El resultado es: {suma}</h3> */}
            <div className="Container">
                <div className="wrapper-calculadora">
                    <div className="row">
                        <div className="input">
                            <div className="input-del-input-arriba">  
                                {mostrarArriba}
                            </div>
                            <div className="input-del-input">
                                {mostrar}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <button className="boton-calculadora" onClick={escribir} value="7">
                            <span className="letra-calculadora">
                                7
                            </span>
                        </button>
                        <button className="boton-calculadora" onClick={escribir} value="8">
                            <span className="letra-calculadora">
                                8
                            </span>
                        </button>
                        <button className="boton-calculadora" onClick={escribir} value="9">
                            <span className="letra-calculadora">
                                9
                            </span>
                        </button>
                        <button className="boton-calculadora" onClick={escribir} value="/">
                            <span className="letra-calculadora">
                                /
                            </span>
                        </button>
                        <button className="boton-calculadora" onClick={escribir} value='DEL'>
                            <span className="letra-calculadora letra-especial">
                                DEL
                            </span>
                        </button>
                    </div>
                    <div className="row">
                        <button className="boton-calculadora" onClick={escribir} value="4">
                            <span className="letra-calculadora">
                                4
                            </span>
                        </button>
                        <button className="boton-calculadora" onClick={escribir} value="5">
                            <span className="letra-calculadora">
                                5
                            </span>
                        </button>
                        <button className="boton-calculadora" onClick={escribir} value="6">
                            <span className="letra-calculadora">
                                6
                            </span>
                        </button>
                        <button className="boton-calculadora" onClick={escribir} value="*">
                            <span className="letra-calculadora">
                                *
                            </span>
                        </button>
                        <button className="boton-calculadora" onClick={escribir} value="AC">
                            <span className="letra-calculadora letra-especial">
                                AC
                            </span>
                        </button>
                    </div>
                    <div className="row">
                        <button className="boton-calculadora" onClick={escribir} value="1">
                            <span className="letra-calculadora">
                                1
                            </span>
                        </button>
                        <button className="boton-calculadora" onClick={escribir} value="2">
                            <span className="letra-calculadora">
                                2
                            </span>
                        </button>
                        <button className="boton-calculadora" onClick={escribir} value="3">
                            <span className="letra-calculadora">
                                3
                            </span>
                        </button>
                        <button className="boton-calculadora" onClick={escribir} value="-">
                            <span className="letra-calculadora">
                                -
                            </span>
                        </button>
                        <button className="boton-calculadora" onClick={escribir} value="+">
                            <span className="letra-calculadora">
                                +
                            </span>
                        </button>
                    </div>
                    <div className="row">
                        <button className="boton-calculadora boton-largo" onClick={escribir} value="0">
                            <span className="letra-calculadora">
                                0
                            </span>
                        </button>
                        <button className="boton-calculadora" onClick={escribir} value=".">
                            <span className="letra-calculadora">
                                .
                            </span>
                        </button>
                        <button className="boton-calculadora boton-largo" onClick={escribir} value="=">
                            <span className="letra-calculadora">
                                =
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Formulario