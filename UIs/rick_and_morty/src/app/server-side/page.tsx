import Link from "next/link"
import { Suspense } from "react"



type IData = {
    results : {
    name: string,
    id: string,
    status: string
    }[]
}


const ServerSide = async () =>{
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data: IData = await res.json()
    console.log(data);

    return(
        <>
        <div className="flex flex-col">
            <Suspense fallback={<div> Loading...</div>}>
             {data.results.map((item) => {
                return(
                    <div key={item.id}>
                            <h1>{item.name}</h1>
                            <Link href={`/perso/${item.id}`}> Abrir</Link>
                        </div>
                )
             })}
            </Suspense>
            </div>
        </>
    )
}

export default ServerSide;