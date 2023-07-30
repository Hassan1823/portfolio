import Image from "next/image";
import Link from "next/link";

const projectsData = [
  {
    bg: "/img1.png",
    src: "https://neu-appliance.vercel.app/",
  },
  {
    bg: "/img2.png",
    src: "https://nike-clone-store-kappa.vercel.app/",
  },
  {
    bg: "/img4.png",
    src: "https://updatedamayama.vercel.app/",
  },
  {
    bg: "/img10.png",
    src: "https://apple-webiste-clone.netlify.app/",
  },
  {
    bg: "/img11.png",
    src: "https://snoopy-frontend-portfolio.netlify.app",
  },
  {
    bg: "/img5.png",
    src: "https://tiny-squirrel-88bdc9.netlify.app",
  },
  {
    bg: "/img7.png",
    src: "https://food-factory-01a2ae.netlify.app",
  },
  {
    bg: "/img9.png",
    src: "https://infinite-scroll-with-hover-picture-an.netlify.app/",
  },
  {
    bg: "/img8.png",
    src: "https://spotify-clone-2b18c7.netlify.app",
  },
  {
    bg: "/img6.png",
    src: "https://cozy-shortbread-d79368.netlify.app",
  },
  {
    bg: "/img3.png",
    src: "https://tech-mart-kappa.vercel.app/",
  },
];

export default function Home() {
  return (
    <main className="w-screen h-full lg:px-24 px-14 ">
      <Image
        src="/snoopy.png"
        alt="logo"
        width={150}
        height={100}
        className="mx-auto"
      />

      <span className="text-2xl font-black border-b-2 border-black">
        Portfolio :
      </span>
      <div className="w-full h-auto py-10 flex flex-wrap gap-8 justify-center items-center mx-auto">
        {/* card */}
        {projectsData?.map((data, index) => {
          return (
            <Link
              key={index}
              href={data.src}
              className="lg:w-96 lg:h-60 w-full h-auto hover:shadow-2xl rounded-md flex items-center hover:scale-105 hover:duration-300"
            >
              <Image
                src={data.bg}
                alt="bg"
                width={500}
                height={300}
                className="object-cover rounded-md"
              />
            </Link>
          );
        })}
      </div>
    </main>
  );
}
