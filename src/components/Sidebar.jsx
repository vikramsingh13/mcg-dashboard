import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";

import { links } from "../data/links";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
    const {activeMenu, setActiveMenu, screenSize} = useStateContext();

    const handleCloseSideBar = () => {
        if(activeMenu && screenSize <= 900){
            setActiveMenu(false);
        }
    }

    const activeLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-blue-500 text-md m-2";
    const normalLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
    

    return (
        <div className=" ml-3 h-screen overflow-auto">
            {activeMenu && (
                <>
                    <div className="flex justify-between items-center">
                        <Link
                            to="/"
                            onClick={handleCloseSideBar}
                            className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
                        >
                            <SiShopware className="" /> <span>MCG</span>
                        </Link>
                        <button
                            type="button"
                            onClick={() => setActiveMenu(!activeMenu)}
                            title="menu"
                            className=" text-xl rounded-full p-3 hover:bg-light-gray mt-4  block md:hidden"
                        >
                            <MdOutlineCancel />
                        </button>
                    </div>
                    <div className="mt-10">
                        {links.map((item) => (
                            <div key={item.title}>
                                <p className=" text-gray-400 m-3 mt-4 uppercase">
                                    {item.title}
                                </p>
                                {//linkss from dummy is an array
                                //of objs which also have an array of actual links
                                item.links.map((link) => (
                                    <NavLink
                                        to={`/${link.name}`}
                                        key={link.name}
                                        onClick={handleCloseSideBar}
                                        className={({ isActive }) => 
                                        isActive ? activeLink : normalLink
                                    }
                                    >
                                        {link.icon}
                                        <span className=" capitalize">{link.name}</span>
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Sidebar;
