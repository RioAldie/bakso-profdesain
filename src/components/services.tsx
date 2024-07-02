import { PhoneIcon } from '@heroicons/react/24/solid';
import ServiceItem from './serviceItem';

const Services = () => {
  return (
    <div
      id="services"
      className="mt-40 flex flex-row w-full items-center justify-center">
      <div className="w-1/2 flex flex-col gap-5">
        <p className="text-xs text-red-400 tracking-wide">
          LAYANAN KAMI
        </p>
        <p className="text-xl font-bold">
          Kami Juga Melayani Online Customer{' '}
        </p>
        <p className="text-gray-500 text-sm">
          Bakso Lava sekarang dapat dipesan melalui GrabFood, GoFood
          dan ShopeeFood.
        </p>
        <button
          type="button"
          className="text-white w-48 bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full justify-center text-sm text-center inline-flex items-center me-2 py-2 px-3 gap-2 ">
          <PhoneIcon className="size-4 text-white" />
          Pesan Sekarang
        </button>
      </div>
      <div className="flex flex-row items-center justify-center flex-wrap max-w-96 gap-5">
        <ServiceItem
          icon={'icon-food.svg'}
          name="catering"
          text="Kami melayani pesanan katering"
        />
        <ServiceItem
          icon={'icon-time.svg'}
          name="Cepat"
          text="Makanan disajikan dengan cepat"
        />
        <ServiceItem
          icon={'icon-order.svg'}
          name="ONLINE"
          text="Dapat dipesan di aplikasi "
        />
        <ServiceItem
          icon={'icon-gift.svg'}
          name="Jumat Berkah"
          text="Minuman gratis dihari Jum'at"
        />
      </div>
    </div>
  );
};

export default Services;
