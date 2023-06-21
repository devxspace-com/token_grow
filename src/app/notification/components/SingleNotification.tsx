"use client"
import { useState } from "react"

export default function SingleNotification(props:any) {

    const [openMore, setOpenMore] = useState(false)
  return (
    <main>
        <section key={props.id} className={openMore ?"w-[90%] bg-[#000019] mx-auto text-[#FFFFFF] rounded-lg mb-4": "w-[90%] bg-[#000019] mx-auto text-[#AAA7A7] rounded-lg mb-4"}>
            <div className="w-[96%] py-[44px] pl-[20px]">

            <div className="flex justify-between ">
                <h2 className="text-[16px] font-[600] leading-5 tracking-[0.03em] ">{props.title}</h2>
                {
                    openMore ?
                    <img src="../icon/Rectangle 4.svg" alt="" className="cursor-pointer" onClick={()=> setOpenMore(false)}/>
                    :
                <img src="../icon/Rectangle.svg" alt="" className="cursor-pointer" onClick={()=> setOpenMore(true)} />
                }

            </div>
            <div className="mt-[20px]">
                <p className="text-[16px] font-[400]  w-[70%] leading-5">
                    {/* ${text.slice(0, maxLength)} */}
                    {
                        openMore ? props.details :

                props.details.slice(0, 100)+"..."
                    }
                </p>
                <p className="text-[12px] font-[400] leading-4 tracking-[0.03em] mt-[20px]">{props.date}</p>
            </div>
            </div>

        </section>
    </main>
  )
}
