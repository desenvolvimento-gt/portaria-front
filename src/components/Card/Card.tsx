import { Toggle } from 'components/Toggle';
import { ICard } from 'interfaces';
import { useState, useEffect } from 'react';
import { FaChevronDown, FaMinus } from 'react-icons/fa';

export function Card({ title, bodyText }: ICard) {
  function handlePresented() {
    console.log('Marcado como Apresentado');
  }
  const [showDetails, setShowDetails] = useState(true);
  function handleOnClick() {
    setShowDetails(!showDetails);
  }
  return (
    <div className="max-w-[470px] w-[97%] rounded shadow-lg bg-white ">
      <div className="px-2" onClick={handleOnClick}>
        <div className="flex gap-1 mt-1 w-full">
          <div className="bg-blue-900 text-white w-fit rounded-md px-2">
            1234
          </div>
          <div className="bg-blue-900 text-white w-fit rounded-md px-2">T</div>
          {showDetails ? (
            <div className="ml-auto  mr-1  ">
              <FaMinus />
            </div>
          ) : (
            <div className="ml-auto  mr-1 ">
              <FaChevronDown />
            </div>
          )}
        </div>
        <div className="flex font-bold text-xl ">{title}</div>
      </div>
      <div className="px-2 pb-2">
        {showDetails && (
          <>
            <p className="text-gray-700 text-base mb-1">{bodyText}</p>
            <Toggle title="Marcar como Apresentado" onclick={handlePresented} />
          </>
        )}
      </div>
    </div>
  );
}
