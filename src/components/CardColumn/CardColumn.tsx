import { Card, Toggle } from 'components';
import { PropsWithChildren, useEffect, useState } from 'react';
import { ICard } from 'interfaces';
export function CardColumn({ children }: PropsWithChildren) {
  const [apresentadoState, setApresentadoState] = useState(false);

  let cards: ICard[] = [
    {
      title: `teste`,
      bodyText: `Descrição: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
          praesentium nihil.`,
      apresentado: false,
      tipo: 'tipo1',
    },
    {
      title: `teste1`,
      bodyText: `Descrição1: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
          praesentium nihil.`,
      apresentado: true,
      tipo: 'tipo1',
    },
    {
      title: `teste2`,
      bodyText: `Descrição2: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
          praesentium nihil.`,
      apresentado: false,
      tipo: 'tipo2',
    },
    {
      title: `teste3`,
      bodyText: `Descrição3: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
          praesentium nihil.`,
      apresentado: false,
      tipo: 'tipo2',
    },
    {
      title: `teste2`,
      bodyText: `Descrição2: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
          praesentium nihil.`,
      apresentado: false,
      tipo: 'tipo2',
    },
    {
      title: `teste3`,
      bodyText: `Descrição3: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
          praesentium nihil.`,
      apresentado: true,
      tipo: 'tipo2',
    },
    {
      title: `teste2`,
      bodyText: `Descrição2: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
          praesentium nihil.`,
      apresentado: true,
      tipo: 'tipo2',
    },
    {
      title: `teste3`,
      bodyText: `Descrição3: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
          praesentium nihil.`,
      apresentado: true,
      tipo: 'tipo2',
    },
  ];
  function toggleColumnApresentadoState() {
    console.log('Teste');

    setApresentadoState(!apresentadoState);
  }
  return (
    <div className="flex-row">
      <h3 className="text-xl rounded px-2 self-center font-bold text-center">
        Place Holder
      </h3>
      <div className="px-4 py-2 bg-gray-800">
        <Toggle
          title="Mostrar já Apresentados"
          onclick={toggleColumnApresentadoState}
        />
        <div className="flex pt-2 flex-col gap-2 items-center sm:h-[calc(100vh-108px)]  h-[calc(100vh-205px)] rounded bg-gray-50 dark:bg-gray-800 overflow-y-scroll ">
          {apresentadoState
            ? cards.map((card, i) => {
                if (card.apresentado === false) {
                  return (
                    <Card
                      bodyText={card.bodyText}
                      title={card.title}
                      apresentado={card.apresentado}
                      tipo={card.tipo}
                    />
                  );
                }
              })
            : cards.map((card, i) => {
                if (card.apresentado === true) {
                  return (
                    <Card
                      bodyText={card.bodyText}
                      title={card.title}
                      apresentado={card.apresentado}
                      tipo={card.tipo}
                    />
                  );
                }
              })}
        </div>
      </div>
    </div>
  );
}
