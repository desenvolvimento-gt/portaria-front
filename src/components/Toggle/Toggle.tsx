import { IToggle } from 'interfaces';

export function Toggle({ title, onclick, checked }: IToggle) {
  return (
    <label className="relative inline-flex items-center cursor-pointer ">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={checked}
      />
      <div
        onClick={onclick}
        className="w-11 min-w-[44px] h-6 bg-gray-200    rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"
      ></div>
      <span className="ml-3 text-sm font-medium whitespace-nowrap ">
        {title}
      </span>
    </label>
  );
}
