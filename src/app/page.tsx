"use client"


import {InfiniteMovingCard} from "@/components/ui/infinite-moving-cards";
// import Img1 from '@/assets/images/1.jpg';
import Image from "next/image";

// import {
//   Card,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";




import Link from "next/link";
// import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Fade } from "react-awesome-reveal";
// import { BackgroundBeams } from "@/components/ui/background-beams";
// import ServiceComponentHome from "@/components/ServiceComponentHome";
// import Hero from "@/components/Hero/Hero";
import dynamic from "next/dynamic";
// import AboutUs from "@/assets/teckloss.png"
import { Button } from "@/components/ui/button"



import A1 from '@/assets/images/A1.png'
import B1 from '@/assets/images/B1.png'
import C1 from '@/assets/images/C1.png'
import D1 from '@/assets/images/D1.png'
import CTAButton from "@/components/CTAButton";
import React from "react";



import HeroBg from '@/assets/HeroImageBg.png'



const BackgroundBeams = dynamic(() => import('@/components/ui/background-beams'))
// const InfiniteTextMoving = dynamic(() => import('@/components/infinite-moving-text/InfiniteTextMoving'))


import {
  SearchIcon,
  ChartBarIcon,
  ServerIcon,
  AdjustmentsIcon,
  SupportIcon,
  CodeIcon,
} from '@heroicons/react/outline';

const features = [
  {
    title: 'Search Engine Optimization (SEO)',
    icon: SearchIcon, // Represents SEO-related functions well
  },
  {
    title: 'Digital Marketing, Applications Advertising, and Content Strategy',
    icon: ChartBarIcon, // Represents analytics, marketing, or strategy
  },
  {
    title: 'Web Infrastructure and Operations',
    icon: ServerIcon, // Represents servers and infrastructure
  },
  {
    title: 'Integration with Enterprise Systems',
    icon: AdjustmentsIcon, // Represents configuration or integration
  },
  {
    title: 'Support and Maintenance',
    icon: SupportIcon, // Represents customer or technical support
  },
  {
    title: 'Custom Software Development',
    icon: CodeIcon, // Represents coding and software development
  },
];









const testimonials = [
  {
    name: "Java",
    svg: "https://www.vectorlogo.zone/logos/java/java-ar21.svg",
  },
  {
    name: "Kotlin",
    svg: "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
  },
  {
    name: "Swift",
    svg: "https://www.vectorlogo.zone/logos/swift/swift-icon.svg",
  },
  {
    name: "Objective-C",
    svg: "https://www.vectorlogo.zone/logos/apple_objectivec/apple_objectivec-icon.svg",
  },
  {
    name: "Dart",
    svg: "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg",
  },
  {
    name: "JavaScript",
    svg: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
  },
  {
    name: "TypeScript",
    svg: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
  },

  {
    name: "Python",
    svg: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
  },

  {
    name: "Go",
    svg: "https://www.vectorlogo.zone/logos/golang/golang-official.svg",
  },
  {
    name: "Rust",
    svg: "https://www.vectorlogo.zone/logos/rust-lang/rust-lang-icon.svg",
  },
  {
    name: "Ruby",
    svg: "https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-icon.svg",
  },
  {
    name: "PHP",
    svg: "https://www.vectorlogo.zone/logos/php/php-ar21.svg",
  },
  {
    name: "Bash",
    svg: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg",
  },

  {
    name: "SQL",
    svg: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
  },
  {
    name: "MongoDB",
    svg: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
  },
  {
    name: "PostgreSQL",
    svg: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
  },
  {
    name: "Julia",
    svg: "https://www.vectorlogo.zone/logos/julialang/julialang-icon.svg",
  },
];




const links = [
  { name: 'Open Roles', href: '#' },
  { name: 'Internship Program', href: '#' },
  { name: 'Our Values', href: '#' },
  { name: 'Leadership Team', href: '#' },
];
const stats = [
  { name: 'Projects Completed', value: '150+' },
  { name: 'Global Partners', value: '50+' },
  { name: 'Years of Experience', value: '10' },
  { name: 'Satisfied Clients', value: '1000+' },
];




export default function Home() {




  return (
    <main className="">
      {/* <section>
        <div className="flex flex-col overflow-hidden -mt-16   bg-gradient-to-tr   from-[#7240bddd] to-[#00276be3]   ">
          <ContainerScroll
            titleComponent={
              <>
                <div className=" flex flex-col lg:flex-row justify-between md:px-10 gap-6 border-t-2 pt-8  text-start px-5">
                  <div className="w-full md:w-1/4">
                    <h1 className="text-base md:text-2xl font-bold text-white">
                      At Tecklo
                    </h1>
                  </div>
                  <div className="w-full md:w-3/4">
                    <h4 className="text-xl font-bold leading-[28px] md:text-5xl text-white">
                      We Transform Your IT Challenges into Seamless Solutions
                    </h4>
                  </div>
                </div>
              </>
            }
          >
            <Image
              src={Img1}
              alt="hero"
              height={720}
              width={1400}
              className=" rounded-2xl object-cover h-full object-center"
              // draggable={false}
            />
          </ContainerScroll>
        </div>
      </section> */}

      <section className='overflow-hidden     '>
        {/* <Fade direction="down"> */}
          <div className=' h-[90vh] md:h-full lg:h-[90vh] w-full relative flex justify-center items-center px-5'>
            <Image src={HeroBg} alt={"bg img"} width={1000} height={1000} className="w-full h-[90vh] absolute -z-50 top-0 left-0 object-cover lg:object-contain " />
          <div className=" h-[90vh] md:h-[90vh] w-full -z-20 absolute top-0 left-0 bg-black opacity-[.8]">
           </div>
            <div className='flex flex-col-reverse md:flex-col justify-centre  md:justify-evenly text-start max-w-6xl mx-auto  items-center z-20'>
              <div className=" flex flex-col  md:mt-0">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 mt-10 relative text-center text-white max-w-6xl mx-auto ">Transforming Your IT Business <br/> into <span className="relative bg-clip-text text-transparent bg-gradient-to-tr from-blue-500 to-blue-600/[0.8] z-10">Seamless Solutions</span> </h1>
                
                
                <p className="text-base lg:text-xl px-10 text-center mt-3 max-w-3xl mx-auto text-white">
                  IT Consulting who believes in organic and sustainable growth of our clients through strategy, design and technology.
                </p>

<div className="flex justify-center gap-5 mt-8 max-w-5xl mx-auto flex-col lg:flex-row">

                <Button asChild variant="secondary" className="bg-blue-600 text-white hover:bg-blue-500 hover:text-white rounded py-6 text-lg">
                    <Link href="/work">Glimps to our projects</Link>
                  </Button>
                <Button asChild variant="outline" className="hover:bg-gray-800 outline-blue-500 bg-white hover:text-white text-blue-500   rounded py-6 w-56 text-lg">
                    <a href="mailto:">Mail Us Now</a>
                  </Button>
</div>


              </div>

              
            
          </div>
          </div>
      


      </section>
     

      

     


      <Fade direction="down" >
        <section className="py-10  overflow-hidden    ">

          {/* <Hero /> */}
          <InfiniteMovingCard
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </section>
      </Fade>
      <Fade direction="down">
        <section className="overflow-hidden ">
          <div className="relative  overflow-hidden py-24 sm:py-32">

            <Image src={HeroBg} alt={"bg img"} width={1000} height={1000} className="w-full h-full
             absolute -z-50 top-0 left-0 object-cover  object-bottom" />
            <div className=" h-[90vh] md:h-[90vh] w-full -z-20 absolute top-0 left-0 bg-black opacity-[.6]">
            </div>

          
           
            <div className="mx-auto max-w-7xl flex flex-col items-center  px-6 lg:px-8">
              <Fade direction="down">
                <div className="mx-auto text-center max-w-2xl lg:mx-0">
                  <h3 className="text-base/7 font-semibold text-yellow-400 mb-4">Your Trusted Partner in Growth</h3>
                  <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-7xl">About Tecklo</h2>
                  <p className="mt-8 text-lg font-medium text-blue-100 sm:text-xl">
                    We specialize in helping businesses of all sizes enhance their online presence and achieve their goals.
                  </p>
                </div>
              </Fade>
             
            </div>
          </div>
        </section>

        
      </Fade>

    



      
      <section className="py-8 relative flex flex-col items-center bg-gradient-to-tr   from-[#fff] to-blue-500/[.5]">
        <h1 className="z-30 relative text-center font-bold text-2xl lg:text-4xl text-blue-600 py-10">Our Project</h1>
       
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-8 px-5 lg:px-0 justify-center items-center">
          <Fade direction="down">
            <div className="border w-full  hover:scale-105  duration-500 rounded bg-white"> <Image
              src={A1}
              width={1000}
              height={1000}
              alt="about"
              className="w-full  border rounded-t  hover:rounded  object-contain md:object-cover shadow-lg shadow-white transform   z-50 "
            />
              <p className="font-bold text-blue-500 text-lg text-start p-3">Sweepy Maid</p>
            </div>
         </Fade>
          <Fade direction="down">
            <div className="border w-full  hover:scale-105 duration-500 rounded bg-white"> <Image
              src={B1}
              width={1000}
              height={1000}
              alt="about"
              className="w-full  border rounded-t  hover:rounded object-contain md:object-cover shadow-lg shadow-white transform   z-50 "
            />
              <p className="font-bold text-blue-500 text-lg text-start p-3">Pho 68</p>
            </div>
          </Fade>
          <Fade direction="down">
            <div className="border w-full hover:scale-105 duration-500 rounded bg-white"> <Image
              src={C1}
              width={1000}
              height={1000}
              alt="about"
              className="w-full   border rounded-t  hover:rounded object-contain md:object-cover shadow-lg shadow-white transform   z-50 "
            />
              <p className="font-bold text-blue-500 text-lg text-start p-3">HAVELI BISTRO</p>
            </div>
         </Fade>
          <Fade direction="down">
            <div className="border w-full hover:scale-105 duration-500 rounded bg-white"> <Image
              src={D1}
              width={1000}
              height={1000}
              alt="about"
              className="w-full  border rounded-t  hover:rounded object-contain md:object-cover shadow-lg shadow-white transform   z-50 "
            />
              <p className="font-bold text-blue-500 text-lg text-start p-3">PARATHA 2 PASTA</p>
            </div>
          </Fade>
          
         
        </div>
        <Link href="work" className="z-30 bg-white  p-2 rounded px-6 hover:bg-blue-500 hover:text-white duration-500 relative text-center font-bold text-lg  text-blue-600  mt-10">More Project...</Link>
      </section>



    


      <section>

        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base/7 font-semibold text-blue-600">Accelerate Your Deployment</h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                Everything you need to launch your application smoothly
              </p>

            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid  max-w-xl grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:flex-wrap lg:gap-y-12">
                <Fade direction="down">
                  {features.map((feature) => (
                    <div key={feature.title} className=" h-24 flex items-center border border-blue-300 rounded p-4 shadow-md hover:shadow-xl duration-500">
                      <dt className="text-base/7 flex items-center rounded gap-5 font-semibold text-gray-900">
                        <div className="left-0 top-0 flex h-10 w-10 items-center justify-center rounded bg-blue-600">
                          <feature.icon aria-hidden="true" className="h-6 w-10 text-white" />
                        </div>
                        {feature.title}
                      </dt>
                    </div>
                  ))}

                </Fade>
              </dl>
            </div>
          </div>
        </div>


      </section>


    


      

   


      <section>
       <Fade direction="up">
          <CTAButton />
       </Fade>
      </section>

      <section className="overflow-hidden relative bg-blue-950 py-20">
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-around bg-transparent  py-10 animate-border z-30 relative text-white">
          <Fade direction="left" >
            <h2 className="py-10 sm:py-0   text-lg md:text-xl ">Locations</h2>
          </Fade>

          <div className="flex flex-col md:flex-row gap-4">
            <Fade direction="up" >
              <div className=" flex align-center gap-4">
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="CANADA"
                    width={1000}
                    height={1000}
                    loading="eager"
                    className="w-20 aspect-square object-cover rounded-full"
                  />
                </div>
                <div className="flex gap-3">
                  <p className="text-7xl font-bold   ">IND</p>
                  {/* <span className="content__number">01</span> */}
                </div>
              </div>
            </Fade>

            {/* <Fade direction="up" >
              <div className=" flex align-center gap-4">
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1532952626554-d0cace1cd3fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzYXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="USA"
                    width={1000}
                    height={1000}
                    loading="eager"
                    className="w-20 aspect-square object-cover rounded-full"
                  />
                </div>
                <div className="flex gap-4"><p className="text-7xl font-bold   ">USA</p>
                  <span className="content__number">02</span></div>
              </div>
            </Fade> */}
          </div>
        </div>
        <BackgroundBeams className=" w-screen object-cover z-10" />
      </section>



    </main>
  );
}
