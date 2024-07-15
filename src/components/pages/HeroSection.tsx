import Image from "next/image";
import { Button } from "../atoms/button";

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center">
      <Image
        src={"/bg-hero-sections.png"}
        alt="Hero Image"
        fill
        priority
        className="absolute object-cover -z-10 w-full h-full"
      />
      <div className="max-w-4xl text-center">
        <h1 className="text-6xl lg:text-9xl font-bold font-crimson">
          Create <br /> High-Quality Product
        </h1>
        <p className="py-6 text-sm md:text-base font-poppins">
          Pintu gerbang Anda menuju solusi website inovatif. Mari wujudkan{" "}
          <br /> ide Anda menjadi pengalaman online yang Berkesan. 💻✨
        </p>
        <Button className="text-text bg-orangePrimary rounded-xl">Selengkapnya</Button>
      </div>
    </div>
  );
};
