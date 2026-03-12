/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [{protocol: "https", hostname: "rickandmortyapi.com"}],
    },

    rewrites: () => {
        return[
            {
                source: "/",
                destination: "/pagina-com-axios"
                
            },
            {
                source: "/maths",
                destination: "/maths"

            },
            {
                source: "/reused-function", //url
                destination: "/general_function" //pasta

            },
            {
                source: "/cats",
                destination: "/cats-page"

            },
            {
                source: "/pagina-com-fetch",
                destination: "/fetch-page"
            },
            {
                source: "/pagina-com-axios",
                destination: "/axios-page"
            },
            {
                source: "/pagina-server-side",
                destination: "/server-side"
            }
        ]
    }
};

export default nextConfig;