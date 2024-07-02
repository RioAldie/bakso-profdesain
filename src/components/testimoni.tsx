import Image from 'next/image';

const Testimoni = () => {
  return (
    <div className="mt-40 w-full flex justify-around flex-row items-center">
      <div className="max-w-[500px]">
        <Image
          src={'/images/founder-image.png'}
          alt="ibu heni"
          width={500}
          height={550}
        />
      </div>
      <div className="max-w-80 flex flex-col gap-3">
        <p className="text-xs text-red-400 tracking-wide">
          FOUNDER BAKSO LAVA
        </p>
        <p className="text-xl font-bold"> HENI SUCIPTO S.Pd</p>
        <p className="text-gray-500 text-sm">
          “Bakso Lava ini telah saya rintis selama lebih dari 10 tahun
          bersama Suami saya, saya selalu mempertahankan rasa pedas
          alami dengan bumbu pilihan.”
        </p>
      </div>
    </div>
  );
};

export default Testimoni;
