"use client"
import Dashboard from "../components/Home";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";


export default function Home() {
  return (
    <div className=" flex  w-[100vw] bg-slate-200 fixed">
    <SideBar />
     <div className=" flex w-[100vw] h-[100vh] flex-col">
         <Navbar />
         <div className=" flex overflow-auto bg-gradient-to-bl from-red-500 to-green-400  gap-36 p-10 h-[100vh] flex-col ">
             <Dashboard />
         </div>
     </div>
 </div>
  );
}


