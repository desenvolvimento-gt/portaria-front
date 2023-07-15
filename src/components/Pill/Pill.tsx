import { IPill } from 'interfaces';
import { useState, useEffect } from 'react';

export function Pill({ children, type }: IPill) {
  const [style, setStyle] = useState('');
  useEffect(() => {
    switch (type) {
      case 'tipo1':
        setStyle(
          `inline-block bg-red-900 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2`
        );
        break;
      case 'tipo2':
        setStyle(
          `inline-block bg-green-900 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2`
        );
        break;
    }
  }, []);
  return <span className={style}>{children}</span>;
}
