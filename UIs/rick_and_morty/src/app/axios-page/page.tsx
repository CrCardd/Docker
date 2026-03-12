"use client"

import { useEffect } from "react"
import { useState } from "react"
import { Suspense } from "react"

import Image from "next/image"

import { api } from "@/constants/api"

interface IData{
    name: string;
    gender: string;
    status: string;
    species: string;
    image: string;
}


const AxiosPage = () =>{

    const [data, setData] = useState<IData[]>([]);
    const [erro, setErro] = useState<boolean>(false);
    const [errorMsg, setErroMsg] = useState<string>("Não foi possivel buscar os dados");
    const [page, setPage] = useState<string>("");



    useEffect(() =>{
        api.get(`/character/?page=${page}`).then((result) => {
            setData(result.data.results)
        }).catch((error) =>{
            if(error.response.status === 404){
                setErroMsg("Página não encontrada")
            }
            setErro(true);
        })
    }, [page])

    return(
        <>
        <div className="flex flex-col">
        {erro && <h5>{errorMsg}</h5>}

        <div className="">
            <input value={page} type="text" placeholder="Digite a pagina" onChange={(e) => setPage(e.target.value)} />
        </div>
            <h1>
                {data.map((item, index) =>{
                    return(

                        <div key={index}>
                            <h2>{item.name}</h2>
                            <Image className="h-auto w-[200px]" src={item.image} width={300} height={200} priority={true} alt="Imagem do personagem" unoptimized/>
                            <p>{item.species}</p>
                            <p>{item.gender}</p>
                            <p>{item.status}</p>
                        </div>
                    )
                })}
            </h1>
            </div>
        </>
    )
}

export default AxiosPage