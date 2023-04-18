import { ICard } from 'interfaces';
import { FaPlus } from 'react-icons/fa';

export function Card({ title, bodyText }: ICard) {
  return (
    <div className="max-w-[470px] w-[97%] rounded shadow-lg bg-white ">
      <div className="flex ">
        <div className="bg-blue-900 text-white w-fit rounded-md px-1 m-1">
          1234
        </div>
        <div className="bg-blue-900 text-white w-fit rounded-md px-1 m-1">
          T
        </div>
      </div>
      <div className="px-6 ">
        <div className="font-bold text-xl">{title}</div>
        <p className="text-gray-700 text-base">01/10/2022 as 11:11 Por ISAAC</p>
        <p className="text-gray-700 text-base">{bodyText}</p>
      </div>
      <button className="btn btn-primary" type="submit">
        <FaPlus className="bg-blue-900 text-white rounded-md text-lg ml-5 p-0.5 w-6 h-6" />
      </button>
    </div>
  );
}
