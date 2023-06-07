import { PropsWithChildren } from 'react';

export function MainContent({ children }: PropsWithChildren) {
  return (
    <div className=" w-full py-2 px-5 bg-gray-200 xm:flex-wrap md:flex justify-between gap-2 lg:gap-4">
      {children}
    </div>
  );
}
