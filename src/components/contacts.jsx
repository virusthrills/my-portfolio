
function Contacts(){

    return(
        <main className=" bg-gray-100 p-8  pb-5 "> 
            
            <h2 className="text-gray-400   uppercase text-center pt-8 ">Contacts</h2>
            <h1 className="  capitalize text-center font-bold text-4xl mb-6 "> Get in touch </h1>

            <div className=" grid place-items-center gap-5 md:flex md:justify-center md:items-center md:space-x-10">

            <div className=" bg-[white] p-10  px-10 lg:px-20 w-fit flex-col justify-center items-center rounded-md shadow-md ">
            <img src="src/assets/linkedin-svgrepo-com.svg" className="h-[2rem] ml-6  " />
            <h2 className="capitalize text-xl font-bold  ">linkedin</h2>
            </div>

            <div className=" bg-[white] p-10 px-10 lg:px-20 w-fit flex-col justify-center items-center rounded-md shadow-md ">
            <img src="src/assets/phone-svgrepo-com.svg" className="h-[2rem] ml-6  " />
            <h2 className="capitalize text-xl font-bold  ">phone </h2>
            </div>

            <div className=" bg-[white] p-10 px-10 lg:px-20 w-fit flex-col justify-center items-center rounded-md shadow-md ">
            <img src="src/assets/whatsapp-logo-variant-svgrepo-com.svg" className="h-[2rem] ml-6  " />
            <h2 className="capitalize text-xl font-bold  ">whatsapp</h2>
            </div>

            </div>
   </main>
    );
}

export default Contacts;