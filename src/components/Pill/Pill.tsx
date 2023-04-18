import { IPill } from 'interfaces';

export function Pill({ children, bgColor }: IPill) {
  const style = `inline-block bg-${bgColor}-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`;
  return <span className={style}>{children}</span>;
}
