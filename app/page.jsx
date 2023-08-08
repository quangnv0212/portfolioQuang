"use client"
import { useState } from "react"

export default function Home() {
  const [darkToggle, setDarkToggle] = useState(false)
  return (
    <>

<button onClick={() => setDarkToggle(!darkToggle)} >abc</button>
      <section className={`w-full min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-homeBg dark:bg-homeTwoBg-dark md:pb-16 ${
        darkToggle && 'dark'
      }`}>
        <div className="container w-full bg-[#F3F6F6] dark:bg-black lg:bg-transparent lg:dark:bg-transparent flex justify-between py-5 lg:px-0 lg:pt-[50px]">header</div>
        <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
          <div className="col-span-12 lg:col-span-4 lg:h-screen lg:sticky top-44">
            <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0 ">
              <div className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]">anh</div>
              <div className="pt-[100px] pb-8">
              <h1 className="mt-6 mb-1 text-5xl font-semibold dark:text-white">Monalisa Ashley</h1>
              <h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6] ">Ui/Ux Designer</h3>
<div className="flex justify-center space-x-3">
  <span>fb</span>
  <span>fb</span>

  <span>fb</span>
  <span>fb</span>

</div>
<div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
<div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]"><span className="flex-shrink-0 socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" /></svg></span><div className="text-left ml-2.5"><p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">Phone</p><p className="break-all dark:text-white"><a className="hover:text-[#FA5252] duration-300 transition" href="tel:+1234567890">+123 456 7890</a></p></div></div>
<div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]"><span className="flex-shrink-0 socialbtn bg-white dark:bg-black text-[#6AB5B9]  shadow-md"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" /></svg></span><div className="text-left ml-2.5"><p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">Location</p><p className="break-all dark:text-white">Hong kong china</p></div></div>
<div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]"><span className="flex-shrink-0 socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z" /></svg></span><div className="text-left ml-2.5"><p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">Email</p><p className="break-all dark:text-white"> <a className="hover:text-[#FA5252] duration-300 transition" href="mailto:ibthemes21@gmail.com">example@mail.com</a></p></div></div>
<div className="flex py-2.5 undefined"><span className="flex-shrink-0 socialbtn bg-white dark:bg-black text-[#C17CEB] shadow-md"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z" /></svg></span><div className="text-left ml-2.5"><p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">Birthday</p><p className="break-all dark:text-white">May 27, 1990</p></div></div>
<button className="inline-flex items-center mx-auto bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6"> Download CV</button>
</div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 ">
            <div className="lg:w-[526px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111] ">
              <nav className="hidden lg:block">

<ul className="flex">
  <a className="w-full h-20 rounded-[10px]  cursor-pointer  font-poppins  bg-[#F3F6F6]  font-medium mx-2.5  text-xtiny text-gray-lite dark:text-[#A6A6A6]    justify-center flex flex-col items-center   transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white   hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] lg:text-white lg:dark:text-white   lg:bg-gradient-to-r from-[#FA5252] to-[#DD2476] ">
  <span class="text-xl mb-1"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path></svg></span>
  Home
  </a>
  <a className="w-full h-20 rounded-[10px]  cursor-pointer  font-poppins  bg-[#F3F6F6]  font-medium mx-2.5  text-xtiny text-gray-lite dark:text-[#A6A6A6]    justify-center flex flex-col items-center   transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white   hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] lg:text-white lg:dark:text-white   lg:bg-gradient-to-r from-[#FA5252] to-[#DD2476] ">
  <span class="text-xl mb-1"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path></svg></span>
  Home
  </a>
  <a className="w-full h-20 rounded-[10px]  cursor-pointer  font-poppins  bg-[#F3F6F6]  font-medium mx-2.5  text-xtiny text-gray-lite dark:text-[#A6A6A6]    justify-center flex flex-col items-center   transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white   hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] lg:text-white lg:dark:text-white   lg:bg-gradient-to-r from-[#FA5252] to-[#DD2476] ">
  <span class="text-xl mb-1"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path></svg></span>
  Home
  </a>
  <a className="w-full h-20 rounded-[10px]  cursor-pointer  font-poppins  bg-[#F3F6F6]  font-medium mx-2.5  text-xtiny text-gray-lite dark:text-[#A6A6A6]    justify-center flex flex-col items-center   transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white   hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] lg:text-white lg:dark:text-white   lg:bg-gradient-to-r from-[#FA5252] to-[#DD2476] ">
  <span class="text-xl mb-1"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path></svg></span>
  Home
  </a>
  <a className="w-full h-20 rounded-[10px]  cursor-pointer  font-poppins  bg-[#F3F6F6]  font-medium mx-2.5  text-xtiny text-gray-lite dark:text-[#A6A6A6]    justify-center flex flex-col items-center   transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white   hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] lg:text-white lg:dark:text-white   lg:bg-gradient-to-r from-[#FA5252] to-[#DD2476] ">
  <span class="text-xl mb-1"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path></svg></span>
  Home
  </a>
</ul>             
 </nav>
            </div>
            <div className="lg:rounded-2xl bg-white dark:bg-[#111111]">
              <div>
<div className="px-2 pt-12 md:py-12 sm:px-5 md:px-10 lg:px-14"><h2 className="after-effect after:left-52">About Me</h2><div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center "><div className="col-span-12 space-y-2.5"><div className="lg:mr-16"><p className="leading-7 text-gray-lite dark:text-color-910">I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p><p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p></div></div></div></div>
<section className="px-2 pb-12 sm:px-5 md:px-10 lg:px-14 ">
<h3 className="text-[35px] dark:text-white font-medium pb-5">What I do!</h3>
<div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2 ">
  <div className="about-box dark:bg-transparent">
    <div className="block object-contain w-10 h-10">anh</div>
<div className="space-y-2 break-all"><h3 className="text-xl font-semibold dark:text-white">Ui/Ux Design</h3><p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p></div>

  </div>
  <div className="about-box dark:bg-transparent">
    <div className="block object-contain w-10 h-10">anh</div>
<div className="space-y-2 break-all"><h3 className="text-xl font-semibold dark:text-white">Ui/Ux Design</h3><p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p></div>

  </div>
  <div className="about-box dark:bg-transparent">
    <div className="block object-contain w-10 h-10">anh</div>
<div className="space-y-2 break-all"><h3 className="text-xl font-semibold dark:text-white">Ui/Ux Design</h3><p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p></div>

  </div>
  <div className="about-box dark:bg-transparent">
    <div className="block object-contain w-10 h-10">anh</div>
<div className="space-y-2 break-all"><h3 className="text-xl font-semibold dark:text-white">Ui/Ux Design</h3><p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p></div>

  </div>
  <div className="about-box dark:bg-transparent">
    <div className="block object-contain w-10 h-10">anh</div>
<div className="space-y-2 break-all"><h3 className="text-xl font-semibold dark:text-white">Ui/Ux Design</h3><p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p></div>

  </div>
  <div className="about-box dark:bg-transparent">
    <div className="block object-contain w-10 h-10">anh</div>
<div className="space-y-2 break-all"><h3 className="text-xl font-semibold dark:text-white">Ui/Ux Design</h3><p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p></div>

  </div>
  <div className="about-box dark:bg-transparent">
    <div className="block object-contain w-10 h-10">anh</div>
<div className="space-y-2 break-all"><h3 className="text-xl font-semibold dark:text-white">Ui/Ux Design</h3><p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p></div>

  </div>
</div>
</section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
