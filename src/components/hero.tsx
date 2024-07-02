import { MapPinIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex flex-row justify-around items-center">
      <div className="max-w-[500px] flex flex-col gap-4">
        <h1 className="text-5xl font-extrabold max-w-96">
          Bakso <span className="text-red-500">Lava...</span> super
          peda<span className="text-red-500">sss</span>
        </h1>
        <p className="text-xl text-[#4a4a4a] max-w-[400px] ">
          Bakso Lava super pedasss nikmat!! Jalan Doho di depan Lampu
          merah alun-alun Kota Kediri
        </p>
        <button
          type="button"
          className="text-white w-48 bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full justify-center text-sm text-center inline-flex items-center me-2 py-2 px-3 gap-2 ">
          <MapPinIcon className="size-4 text-white" />
          Kunjungi Sekarang
        </button>
      </div>
      <div>
        <Image
          src="/images/bakso-thumbnail.png"
          alt="bakso-thumbnail"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Hero;
