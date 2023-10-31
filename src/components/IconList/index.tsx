import Image from "next/image";

interface IconProps {
  name: string;
  image: string;
  color: string;
}

const IconList = ({ iconData }: { iconData: IconProps[] }) => {
  return (
    <div className="flex flex-wrap border-2 justify-center border-green-400 w-full">
      {iconData.map((icon) => (
        <div
          key={icon.name}
          className="flex flex-col items-center justify-center gap-2 w-20 p-2 border-2"
        >
          <Image src={icon.image} alt={icon.name} width={40} height={40} />
          <p className="text-sm text-cyan-50 max-sm:text-xs">{icon.name}</p>
        </div>
      ))}
    </div>
  );
};

export default IconList;
