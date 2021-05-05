import React from 'react'

const NavBar = (props) => {
    return(
        <div className=" bg-gray-500 p-6">
            <div className=" text-center text-white ">
                <span className="font-semibold text-3xl tracking-tight">{props.title}</span>
            </div>
      </div>
    )
    
}
export default NavBar;
