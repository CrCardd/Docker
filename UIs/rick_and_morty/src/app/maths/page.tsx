"use client"

import React, { useState } from "react"


const Maths: React.FC = () => {

    const [numero1, setNumero1] = useState<string>("");
    const [numero2, setNumero2] = useState<string>("");
    const [respSoma, setResp] = useState<number | undefined>();
    const msgError = "Digite uma operacao valida";

    const handleSoma = (op: string) => {
        const n1 = parseFloat(numero1);
        const n2 = parseFloat(numero2);
        if(!isNaN(n1) && !isNaN(n2))
            operacao(op);
        else
            setResp(undefined)
}

const operacao = (op: string) => {
        const n1 = parseFloat(numero1);
        const n2 = parseFloat(numero2);
        switch(op){
            case "sum":
                setResp(n1 + n2)
                break
            case "sub":
                setResp(n1 - n2)
                break
            case "mult":
                setResp(n1 * n2)
                break
            case "div":
                setResp((n2 != 0) ? n1/n2 : undefined)
                break
        }
    }

    return(
        <>  
            <h1>Use client com controle de estado</h1>
            <div>
                <label>Número 01</label>
                <input type="text" value={numero1} onChange={(e) => setNumero1(e.target.value)}/>

                <label>Número 01</label>
                <input type="text" value={numero2} onChange={(e) => setNumero2(e.target.value)}/>
            </div>

            <div>
                <button onClick={() => handleSoma("sum")}>SOMA</button>
                <br />
                <button onClick={() => handleSoma("sub")}>SUBTRACAO</button>
                <br />
                <button onClick={() => handleSoma("mult")}>MULTIPLICACAO</button>
                <br />
                <button onClick={() => handleSoma("div")}>DIVISAO</button>
                <br />
            </div>
            <br />
            <h1>RESULTADO: {!isNaN(respSoma ?? NaN) ? respSoma : msgError}</h1>
            

        </>
    )
}

export default Maths;