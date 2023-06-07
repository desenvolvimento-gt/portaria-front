import { INavbarItem } from 'interfaces';

export function NavbarItem({ children, onClick }: INavbarItem) {
  return (
    <button
      onClick={onClick}
      className="flex items-center self-center font-semibold px-2 mx-2 h-10 bg-gray-300  rounded-lg "
    >
      <span className="flex whitespace-nowrap">{children}</span>
    </button>
  );
}
