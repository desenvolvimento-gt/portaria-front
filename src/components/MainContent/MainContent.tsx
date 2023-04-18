import { PropsWithChildren } from 'react';

export function MainContent({ children }: PropsWithChildren) {
  return (
    <div className="h-full mt-2 w-full p-2 bg-gray-400  xm:flex-wrap sm:flex justify-between flex-row gap-4">
      {children}
    </div>
  );
}