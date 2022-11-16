export default function ProductOnSlide() {
  return (
    
    <div className="bg-white group h-1/6 w-44 text-white group rounded relative">
        <div  className="absolute top-0 rounded flex justify-center w-full group-hover:text-indigo-800">
            <span className="group-hover:visible group-hover:text-transparent rounded w-full  invisible opacity-75 bg-gradient-to-b from-black"> --</span>
        </div>
        <img className="w-full h-4/5 rounded-t" src="https://www.nintenderos.com/wp-content/uploads/2021/06/super-mario-nintendo-logo-..jpg" alt="" />
        <div  className="absolute bottom-0 flex justify-center w-full ">
            
            <span className="group-hover:visible group-hover:text-transparent w-full rounded  invisible opacity-75 bg-gradient-to-t from-black"> --</span>
        </div>
        <div className="text-black rounded text-xs absolute bottom-3 flex justify-center right-2 w-1/4 h-1/5  bg-white items-center border-black border ">

        <span>$51000</span>
        </div>
        <div className="text-black text-sm">
            <h5>Nombre producto</h5>
        </div>
    </div>
  )
}
