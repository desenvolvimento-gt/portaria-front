import { INavbarItem } from 'interfaces';

export function NavbarItem({ children, onClick }: INavbarItem) {
  return (
    <button
      onClick={onClick}
      className="flex items-center self-center px-8 mx-2 h-10 bg-gray-400 text-gray-900 rounded-lg "
    >
      <span className="flex whitespace-nowrap">{children}</span>
    </button>
  );
}

