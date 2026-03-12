import Link from "next/link";

interface IFooter{
    var1: string;
    var2: string;
}


export const Footer = ({var1, var2}: IFooter) => {

    return(
        <footer>
            {/* <h1>{var1}</h1>
            <h1>{var2}</h1> */}
        </footer>
    )
}