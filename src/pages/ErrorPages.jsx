export const ErrorPage=()=>{
    return(
            <div className="text-center my-[30vh]">
                <p className=" text-indigo-600 font-semibold roboto ">404</p>
                <h1 className="text-[3rem] color-primary font-bold poppins">Page not found</h1>
                <p className="color-secondary roboto">Sorry, we couldn't find the page you're looking for.</p>
                <div className="roboto flex justify-center gap-[20px]  my-4">
                    <a href="/" className="text-white font-semibold w-[150px] h-[40px] py-[8px] rounded bg-indigo-600">Go back home</a>
                    <a href="/Contact" className="color-secondary w-[160px] h-[40px] pt-[5px] rounded border-0 hover:border-1 ">Contact support<span>&rarr;</span></a>
                </div>
            </div>
    )
};