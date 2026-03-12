"use client"

import Card from "@/components/card";
import { api } from "@/constants/api";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";

interface IPerso {
    params: {
        id: string;
    }
}

interface IData {
    affiliation: string;
    gender: string;
    image: string;
    ki: string;
    maxKi: string;
    name: string;
    race: string;
  }

interface IDataStaticIndex{
    results: IData[]
}

const Perso = ({params: {id}} : IPerso) => {

    const [data, setData] = useState<IData>({
        affiliation: "",
        gender: "",
        image: "",
        ki: "",
        maxKi: "",
        name: "",
        race: ""
    });

    useEffect(() =>{
        api.get(`https://dragonball-api.com/api/characters/${id}`).then((result) => {
            console.log(result.data)
            setData(result.data)
        }).catch((error) =>{
            // if(error.response.status === 404){
                // setErroMsg("Página não encontrada")
                // }
                // setErro(true);
        })
    })
    
    
    return(
        <div className="flex justify-center items-center mb-[100px]">
            <Suspense fallback={
                <div className="bg-pallete01 p-[40px] text-[30px] font-bold "> Loading...</div>
            }>
                <Card data={data}/>
            </Suspense>
        </div>
    )
}

export default Perso;

// export async function generateStaticParams() {
//     const res = await fetch("https://dragonball-api.com/api/characters");
//     const data: IDataStaticIndex = await res.json()

//     return data.results.map((item) => item.id.toString());
// }