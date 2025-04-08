export const Footer = () =>{
    return(
        <>
        <footer className="bg-secondary py-4 ">
            <div className="md:container mx-auto grid grid-cols-1 md:grid-cols-2">
                <div className="mx-[10px]">
                    <h1 className="saira-stencil text-[1.5rem] text-center sm:text-start color-primary ">Forhad<span className="text-orange-500">.</span></h1>
                </div>
                <div>
                    <p className=" mx-[10px] text-center sm:text-end text-[.8rem] sm:text-[1rem] color-secondary">© 2022 codewithforhad. All rights reserved</p>
                </div>
            </div>
        </footer>
        </>
    )
}