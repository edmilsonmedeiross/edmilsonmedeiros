import Image from "next/image";

interface IconProps {
  name: string;
  image: string;
  color: string;
}

const IconList = ({ iconData }: { iconData: IconProps[] }) => {
  return (
    <div className="grid md:grid-cols-5 sm: grid-cols-3 grid-rows-3 gap-2">
      {iconData.map((icon) => (
        <div
          key={icon.name}
          className="flex flex-col items-center justify-center w-20 gap-2"
        >
          <Image src={icon.image} alt={icon.name} width={40} height={40} />
          <p className="text-sm text-cyan-50">{icon.name}</p>
        </div>
      ))}
    </div>
  );
};

export default IconList;
