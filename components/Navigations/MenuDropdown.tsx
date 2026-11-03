"use client"
import { Menu } from "lucide-react";
import { useState } from "react"
import HomeNav from "./HomeNav";
import Link from "next/link";
import { Logout } from "@/actions/logout-action";

type MenuDropDownProps = {
    user: any;
    userData: any;
}

const MenuDropdown = ({ user, userData }: MenuDropDownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const workspaceUrl = userData?.roles.name === "Student" ? "/student" : "/teacher"
    return (
        <div className="relative md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
                <Menu className="md:hidden size-10 text-navy bg-orange rounded" />
            </button>
            <div className="bg-orange absolute right-0 top-full mt-2 w-56 rounded">
                {isOpen && (
                    <div>
                        <HomeNav />
                        {user ? (
                            <div className="flex flex-col">
                                <Link className="m-4" onClick={() => { setIsOpen(false) }} href={workspaceUrl}>
                                    Workspace
                                </Link>
                                <button className="m-4 p-1 bg-navy text-orange rounded text-center"
                                    onClick={() => {
                                        setIsOpen(false);
                                        Logout()
                                    }}
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col">
                                <Link className="m-4" href={"/login"} onClick={() => setIsOpen(false)}>Portal</Link>
                                <Link className="m-4" href={"/signup"} onClick={() => setIsOpen(false)}> Signup</Link>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div >
    )
}

export default MenuDropdown