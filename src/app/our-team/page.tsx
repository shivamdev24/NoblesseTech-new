// pages/team.js
import TeamCard from "@/components/TeamCard";


import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Our Team | NoblesseTech",
    description: "Meet NoblesseTech dedicated team of IT experts, committed to delivering innovative solutions and exceptional client support.",
};



const teamMembers = [
    {
        name: "Vineet Gautam",
        role: "CO-OWNER",
        image: "https://img.freepik.com/free-vector/young-man-with-glasses-avatar_1308-175763.jpg?semt=ais_hybrid",
        linkedin: "https://www.linkedin.com/in/vineet-gautam-9b3b82141/",
        twitter: "",
        github: "",
        number: "",
        location: ""
    },
    {
        name: "Shivam Sharma",
        role: "Software Development Intern",
        image: "https://img.freepik.com/free-vector/young-man-with-glasses-avatar_1308-175763.jpg?semt=ais_hybrid",
        linkedin: "https://www.linkedin.com/in/shivamdev24/",
        twitter: "https://x.com/shivamdev24",
        github: "https://github.com/shivamdev24",
        number: "",
        location: ""
    },
    {
        name: "Mohammad Sohail",
        role: "Flutter Developer Intern",
        image: "https://img.freepik.com/free-vector/young-man-with-glasses-avatar_1308-175763.jpg?semt=ais_hybrid",
        linkedin: "",
        twitter: "",
        github: "",
        number: "",
        location: ""
    },
    {
        name: "Rajesh",
        role: "UI/UX Intern",
        image: "https://img.freepik.com/free-vector/young-man-with-glasses-avatar_1308-175763.jpg?semt=ais_hybrid",
        linkedin: "",
        twitter: "",
        github: "",
        number: "",
        location: ""
    },
    
    // Add more team members as needed
];

const TeamPage = () => (



    <div>
    <section className=" overflow-hidden h-96 relative pt-10">
            <div className=" ">
                <svg
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-20 -z-10 h-[1000px] w-full fill-blue-500/[0.2] stroke-blue-900/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)] "
                >
                    <rect
                        width="100%"
                        height="100%"
                        fill="url(#:r0:)"
                        strokeWidth="2"
                    ></rect>
                    <svg x="50%" y="-96" strokeWidth="2" className="overflow-visible group-hover:fill-blue-300 transition-all duration-300">
                        <path
                            transform="translate(64 160)"
                            d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                        ></path>
                        <path
                            transform="translate(128 320)"
                            d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                        ></path>
                        <path
                            transform="translate(288 480)"
                            d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                        ></path>
                        <path
                            transform="translate(512 320)"
                            d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                        ></path>
                        <path
                            transform="translate(544 640)"
                            d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                        ></path>
                        <path
                            transform="translate(320 800)"
                            d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                        ></path>
                    </svg>
                    <defs>
                        <pattern
                            id=":r0:"
                            width="96"
                            height="480"
                            x="50%"
                            patternUnits="userSpaceOnUse"
                            patternTransform="translate(0 -95)"
                            fill="none"
                        >
                            <path d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"></path>
                        </pattern>
                    </defs>
                </svg>
            </div>
            <div className="justify-center items-center flex flex-col gap-4 mt-4 h-full max-w-4xl mx-auto bg-transparent">
                    <h1 className="text-gray-700 font-bold text-4xl lg:text-7xl text-center ">
                    Our <span className="text-blue-500">Team</span>
                    </h1>
                    <p className="text-base font-medium text-gray-600 text-center max-w-2xl px-5 mx-auto">
                    We&apos;re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
                    </p>
                
            </div>
        </section>
        <section className="h-full pb-20  py-12">

            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 ">
                    {teamMembers.map((member, index) => (
                        <TeamCard key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
       
    </div>
    
);

export default TeamPage;
