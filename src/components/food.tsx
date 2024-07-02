import Image from 'next/image';

interface foodType {
  image: string;
  name: string;
  price: number;
}
const Food = (props: foodType) => {
  const { image, name, price } = props;
  return (
    <div className="w-40 h-48  flex flex-col justify-start items-center rounded-2xl shadow-md gap-5 border-gray-100 border overflow-hidden">
      <Image
        src={`/images/${image}`}
        alt={name}
        width={100}
        height={100}
        className="w-full max-h-24 rounded-md object-cover"
      />
      <div className="flex flex-col text-center ">
        <p className="text-base font-semibold">{name}</p>
        <p className="text-sm font-medium text-gray-400">
          Rp.{price}
        </p>
      </div>
    </div>
  );
};

export default Food;
