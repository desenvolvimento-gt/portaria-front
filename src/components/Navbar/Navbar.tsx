import { HamburgerIcon, NavbarItem } from 'components';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useNavMobileContext } from 'contexts';

export function Navbar() {
  const { isVisible, setIsVisible } = useNavMobileContext();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  return isTabletOrMobile ? (
    <nav className="flex top-0 left-1/5 w-full h-14 bg-slate-300">
      <span className="pl-5 w-1/6 self-center text-center text-xl font-semibold whitespace-nowrap dark:text-white">
        IEAD-Portaria
      </span>

      <div className="flex self-center justify-end pr-10 w-full text-center">
        <button onClick={() => setIsVisible((prev) => !prev)}>
          {isVisible ? (
            <span className="font-bold text-2xl">X</span>
          ) : (
            <HamburgerIcon />
          )}
        </button>
      </div>
      {isVisible && (
        <div className="z-50 w-full h-auto absolute top-14 left-0 bg-slate-300">
          <div className="flex flex-col items-stretch justify-center">
            <Link to="/">
              <h1 className="font-bold text-xl text-center">
                Quadro de Avisos
              </h1>
            </Link>
            <Link to="/adm">
              <h1 className="font-bold text-xl text-center">
                Área Administrativa
              </h1>
            </Link>
          </div>
        </div>
      )}
    </nav>
  ) : (
    <nav className="flex top-0 left-1/5 w-full h-14 bg-slate-300">
      <span className="w-1/6 ml-14 self-center text-center text-xl font-semibold whitespace-nowrap dark:text-white">
        IEAD-Portaria
      </span>
      <div className="flex self-center justify-end pr-10 w-full text-center">
        <Link to="/">
          <NavbarItem>Quadro de Avisos</NavbarItem>
        </Link>
        <Link to="/adm">
          <NavbarItem>Área Administrativa</NavbarItem>
        </Link>
      </div>
    </nav>
  );
}
