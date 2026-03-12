import { ROUTES } from '@/constants/routes';
import Link from 'next/link';


interface IMenu{
    op1?: any
}

export const Menu = ({op1, op2, op3, op4, op5, op6}: any) => {
    return(
        <>
            <nav className=' w-screen bg-gray-700 p-2 gap-x-5 flex justify-center align-items flex-row font-karlafont fixed '>
                {/* <Link href={ROUTES.home} className='bg-gray-300 border-8 rounded cursor-pointer' >{op1}</Link>
                <Link href={ROUTES.maths} className='bg-gray-300 border-8 rounded cursor-pointer' >{op2}</Link>
                <Link href={ROUTES.generalFunction} className='bg-gray-300 border-8 rounded cursor-pointer' >{op3}</Link>
                <Link href={ROUTES.cats} className='bg-gray-300 border-8 rounded cursor-pointer' >{op4}</Link>
                <Link href={ROUTES.fetch} className='bg-gray-300 border-8 rounded cursor-pointer' >{op5}</Link> */}
                <Link href={ROUTES.axiosPage} className='bg-gray-300 border-8 rounded cursor-pointer' >{op6}</Link>
                {/* <Link href={ROUTES.serverPage} className='bg-gray-300 border-8 rounded cursor-pointer' >server side</Link> */}
            </nav>
        </>
    )
}