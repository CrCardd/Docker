
import Cat_card from '@/components/cat_card'

const cats: React.FC = () => {

    return(
        <>
            <div className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 w-full min-h-screen h-full flex justify-center gap-[50px] items-center flex-wrap p-[100px]">
                <Cat_card name={"BEBÊ"} age={"2016 | 2024"}  dividcolor={"divide-amber-950"} textcolor={"text-amber-500"}    backcolor={"bg-amber-800"}     bordercolor={"border-amber-950"}/>
                <Cat_card name={"LUA"} age={"2020 | 2021"}   dividcolor={"divide-indigo-950"} textcolor={"text-indigo-500"}   backcolor={"bg-indigo-800"}    bordercolor={"border-indigo-950"}/>
                <Cat_card name={"MARIE"} age={"2018 | 2019"} dividcolor={"divide-red-950"} textcolor={"text-red-500"}      backcolor={"bg-red-800"}       bordercolor={"border-red-950"}/>
            </div>
        </>
    )
}

export default cats;