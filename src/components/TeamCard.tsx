// components/TeamCard.tsx
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

type TeamCardProps = {
    name: string;
    role?: string;
    image: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
    number?: string;
    location?:string;
};

const TeamCard: React.FC<TeamCardProps> = ({ name, role, image, linkedin, twitter, github, number, location }) => (
    <div className=" rounded p-6 text-center h-80 w-full justify-center flex flex-col hover:shadow-2xl hover:border hover:rounded-2xl hover:bg-blue-950 shadow text-gray-800 hover:text-white transition duration-300">
        <Image width={1000} height={1000}
            className="h-40 w-40 object-center mx-auto   rounded-full   object-cover"
            src={image}
            alt={`${name}'s photo`}
        />
        <h3 className="mt-4 text-2xl font-semibold">{name}</h3>
        <p className="">{role}</p>
        <p className="text-blue-500">{number}</p>
        <p className="text-blue-500">{location}</p>
        <div className="flex justify-center mt-4 space-x-4 text-blue-500 ">
            {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="hover:text-white w-6 h-6" />
                </a>
            )}
            {twitter && (
                <a href={twitter} target="_blank" rel="noopener noreferrer">
                    <FaXTwitter className="hover:text-white w-6 h-6" />
                </a>
            )}
            {github && (
                <a href={github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:text-white  w-6 h-6" />
                </a>
            )}
        </div>
    </div>
);

export default TeamCard;
