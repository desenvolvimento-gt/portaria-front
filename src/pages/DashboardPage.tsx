import { Sidebar, Card, Navbar, CardColumn, MainContent } from 'components';
import { useEffect } from 'react';

export function DashboardPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row gap-2">
        {/* <Sidebar /> */}
        <MainContent>
          <CardColumn title="Avisos" />
          <CardColumn title="Visitantes" />
          <CardColumn title="Mudanças" />
        </MainContent>
      </div>
    </>
  );
}
