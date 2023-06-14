import Link from 'next/link'
import '../app/globals.css'

export default function Footer() {
  return (
    <main className=''>
        <section className='contact_bg pb-[50px]'>

        <section className=" text-[#FFFFFF] mt-[28px] w-[90%] mx-auto flex justify-between mobile:flex-col mobile:gap-[20px] ">

        <div className="">
        <h2 className="text-[28px] leading-5 font-bold text-[#FFFF] logo ">Grow<span className="text-[#F18500]">Token</span></h2>
        </div>
        <div className="flex gap-8 mobile:flex-col mobile:gap-4">
        <div className="flex flex-col">
            <Link href="/" className='font-[500] text-[16px] leading-[21px] tracking-[0.03em]'>Impact</Link>
            <Link href="/" className='font-[500] text-[16px] leading-[21px] tracking-[0.03em] mt-[20px]'>News</Link>
            <Link href="/" className='font-[500] text-[16px] leading-[21px] tracking-[0.03em] mt-[20px]'>About Us</Link>
        </div>
        <div className=" flex flex-col">
            <Link href="/" className='font-[500] text-[16px] leading-[21px] tracking-[0.03em]'>Terms of Services</Link>
            <Link href="/" className='font-[500] text-[16px] leading-[21px] tracking-[0.03em] mt-[20px]'>Privacy Policy</Link>
            <Link href="/" className='font-[500] text-[16px] leading-[21px] tracking-[0.03em] mt-[20px]'>Contact us</Link>
        </div>
        </div>
        
        <div className="flex gap-4 items-end mobile:mx-auto">
            <Link href="/">
                <img src="./svg/Vector.svg" alt="" className='w-[20px] h-[20px]' />
            </Link>
            <Link href="/">
                <img src="./svg/Vector (1).svg" alt="" className='w-[20px] h-[20px]' />
            </Link>
            <Link href="/">
                <img src="./svg/Vector (2).svg" alt="" className='w-[20px] h-[20px]' />
            </Link>
            <Link href="/">
                <img src="./svg/Vector (3).svg" alt="" className='w-[20px] h-[20px]' />
            </Link>
        </div>
        </section>
        </section>
        {/* copyright */}
        <section className='text-[#FFFFFF] mt-[50px] flex gap-2 items-center justify-center pb-[60px]'>
            <p className="font-[500] text-[12px] leading-4 tracking-[0.03em] ">&copy; 2023</p>
            <p className="font-[500] text-[12px] leading-4 tracking-[0.03em] ">GROWTOKEN</p>
            <p className="font-[500] text-[12px] leading-4 tracking-[0.03em] ">All Rights Reserved</p>
        </section>
        </main>
  )
}
