import Image from 'next/image';

interface cardMenuTypes {
  image: string;
  name: string;
  variant: number;
}
const CardMenu = (props: cardMenuTypes) => {
  const { name, image, variant } = props;
  return (
    <div className="w-40 p-4 flex flex-col justify-center items-center rounded-3xl shadow-md border-gray-100 border ">
      <div className="w-20 h-20 rounded-full bg-red-400">
        <Image
          src={`/images${image}`}
          alt={name}
          width={100}
          height={100}
        />
      </div>
      <p className="text-black text-xl font-bold">{name}</p>
      <p className="text-sm text-gray-500">({variant} Variant)</p>
    </div>
  );
};

export default CardMenu;
