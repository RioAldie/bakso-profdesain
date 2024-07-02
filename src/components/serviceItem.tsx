import Image from 'next/image';

interface serviceItemTypes {
  icon: string;
  name: string;
  text: string;
}
const ServiceItem = (props: serviceItemTypes) => {
  const { icon, name, text } = props;
  return (
    <div className="w-36 h-36 p-2 flex flex-col justify-center items-center rounded-3xl shadow-md border-gray-100 gap-2 border ">
      <Image
        src={`/icons/${icon}`}
        alt={name}
        width={40}
        height={40}
      />
      <p className="uppercase text-black text-sm font-bold">{name}</p>
      <p className="text-xs text-center text-gray-500">{text}</p>
    </div>
  );
};

export default ServiceItem;
