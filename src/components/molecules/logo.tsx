import Image from "next/image";

export const Logo = () => {
  return (
    <div className="w-max p-3 flex gap-2 bg-secondary rounded-xl">
      <Image src={"/logo.png"} alt="Logo" width={24} height={24} className="object-contain" />
      <h1>Codeelder</h1>
    </div>
  );
};
