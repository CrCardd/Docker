"use client"

import { useState } from 'react';

interface HandleProps {
    a: string,
    b: string
}

const general_function: React.FC = () => {

    const [num01, setNum01] = useState<string>("")
    const [num02, setNum02] = useState<string>("")
    
    const [respSum, setRespSum] = useState<number | undefined>()
    const [respSub, setRespSub] = useState<number | undefined>()
    const [respDiv, setRespDiv] = useState<number | undefined>()
    const [respMult, setRespMult] = useState<number | undefined>()

    const handleAll = ({a,b}: HandleProps) => {
        const n1 = parseFloat(num01)
        const n2 = parseFloat(num02)

        if(!isNaN(n1) && !isNaN(n2)){
            setRespSum(n1+n2)
            setRespSub(n1-n2)
            setRespDiv(n2 != 0 ? n1/n2 : undefined)
            setRespMult(n1*n2)
        }
        else {
            setRespSum(undefined)
            setRespSub(undefined)
            setRespDiv(undefined)
            setRespMult(undefined)
        }
    }

    const err = "ERROR"
    return(
        <>
            <div>
                <input type="text" placeholder="Num 01" value={num01} onChange={(e) => setNum01(e.target.value)} />
            </div>
            <div>
                <input type="text" placeholder="Num 02" value={num02} onChange={(e) => setNum02(e.target.value)} />
            </div>
            <div>
                <button onClick={() => handleAll({a: num01, b: num02})}>calcular</button>
            </div>

            <div>
                <div>
                    <h2>SUM</h2>
                    <p>{(!isNaN(respSum ?? NaN) ? respSum : err)}</p>
                </div>
                <div>
                    <h2>SUB</h2>
                    <p>{(!isNaN(respSub ?? NaN) ? respSub : err)}</p>
                </div>
                <div>
                    <h2>DIV</h2>
                    <p>{(!isNaN(respDiv ?? NaN) ? respDiv?.toFixed(2) : err)    }</p>
                </div>
                <div>
                    <h2>MULT</h2>
                    <p>{(!isNaN(respMult ?? NaN) ? respMult : err)}</p>
                </div>
            </div>
        </>
    )
}

export default general_function;