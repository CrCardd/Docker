import Image from "next/image"

import marie from '@/app/assets/marie.png'
import lua from '@/app/assets/lua.png'
import bebe from '@/app/assets/bebe.png'


const Cat_card = ({name, textcolor, backcolor, bordercolor, dividcolor, age}: {name: string, textcolor: string, backcolor: string, dividcolor: string, bordercolor: string, age: string}) => {

    return(
        <>  
            <div className="rounded-[35px] w-[400px] h-[600px] bg-gray-200 hover:scale-110 transition-transform duration-150">
                <Image className="w-full h-[250px] rounded-t-[30px]" src={name === "MARIE" ? marie : name === "LUA" ? lua : bebe} alt='gatuno'/>
                <div className="p-4 flex flex-col items-center justify-around h-[250px]">
                    <p className={`text-[14px] ${textcolor}`}>⭐ {age}  ✝</p>
                    <strong className="text-[30px]">{name}</strong>
                    <p>😺</p>
                </div>
                <div className={`rounded-b-[30px] h-[100px] w-full ${backcolor} flex divide-x ${dividcolor}`}>
                    <div className={`border-t-[3px] h-full w-[133px] ${bordercolor}`}>

                    </div>
                    <div className={`border-t-[3px] h-full w-[133px] ${bordercolor}`}>

                    </div>
                    <div className={`border-t-[3px] h-full w-[133px] ${bordercolor}`}>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Cat_card;