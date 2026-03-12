"use client"
import { useEffect, useState } from "react"


interface IData{
    name: string,
    id: string
}

const FetchPage = () =>{
    const [characters, setCharacters] = useState<IData[]>([])

    useEffect(() =>{
        const load = async () =>{
            const res = await fetch("https://rickandmortyapi.com/api/character?page=1");
            const data = await res.json();
            console.log(data);
            setCharacters(data.results);
        }

        load()
    }, [])
return(
    <>
        <div>
            {characters.map((item, index) => {
                return(

                <div key={item.id}>
                    <div>
                    <h2> {item.name}</h2>
                    


                    </div>


                </div>
                )
            })}
        </div>
    </>
)
}

export default FetchPage