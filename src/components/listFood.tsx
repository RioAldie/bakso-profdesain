import { foods } from '@/data/foods';
import Image from 'next/image';
import Food from './food';

const ListFood = () => {
  return (
    <div
      id="foods"
      className="flex flex-col w-full  mt-10 justify-center items-center gap-10">
      <div>
        {' '}
        <h1 className="uppercase text-base text-red-400 tracking-wide w-full text-center">
          Menu Andalan Kami
        </h1>
      </div>
      <div className="w-full flex flex-row flex-wrap gap-5 items-center justify-center">
        {foods.map((food, i) => {
          return (
            <Food
              key={i}
              name={food.name}
              price={food.harga}
              image={food.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListFood;
