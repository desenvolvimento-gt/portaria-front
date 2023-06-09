import { Card, Toggle } from 'components';
import { useState } from 'react';
import { ICard } from 'interfaces';
import { ICardColumn } from './interfaces/ICardColumn';

export function CardColumn({ children, title }: ICardColumn) {
  const [presentedState, setPresentedState] = useState(false);

  const [cards, setCards] = useState<ICard[]>([
    {
      title: `teste`,
      bodyText: `Primeiro`,
      presented: false,
      type: 'tipo1',
    },
    {
      title: `teste1`,
      bodyText: `Descrição1: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
          praesentium nihil.`,
      presented: true,
      type: 'tipo2',
    },
    {
      title: `teste2`,
      bodyText: `Descrição2: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
          praesentium nihil.`,
      presented: false,
      type: 'tipo1',
    },
    {
      title: `teste3`,
      bodyText: `Descrição3: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
          praesentium nihil.`,
      presented: false,
      type: 'tipo2',
    },
    {
      title: `teste2`,
      bodyText: `Descrição2: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
          praesentium nihil.`,
      presented: false,
      type: 'tipo1',
    },
    {
      title: `teste3`,
      bodyText: `Descrição3: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
          praesentium nihil.`,
      presented: false,
      type: 'tipo2',
    },
    {
      title: `teste2`,
      bodyText: `Descrição2: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
          praesentium nihil.`,
      presented: false,
      type: 'tipo1',
    },
    {
      title: `teste3`,
      bodyText: `Descrição3: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
          praesentium nihil.`,
      presented: true,
      type: 'tipo2',
    },
    {
      title: `teste2`,
      bodyText: `Descrição2: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
          praesentium nihil.`,
      presented: true,
      type: 'tipo2',
    },
    {
      title: `teste3`,
      bodyText: `Descrição3: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
          praesentium nihil.`,
      presented: true,
      type: 'tipo1',
    },
  ]);
  function toggleColumnPresentedState() {
    setPresentedState(!presentedState);
  }
  return (
    <div className="flex-row w-full rounded-lg ">
      <h3 className="text-xl rounded px-2 self-center font-bold text-center">
        {title}
      </h3>
      <div className=" bg-gray-200 rounded-lg ">
        <Toggle
          title="Mostrar já Apresentados"
          onclick={toggleColumnPresentedState}
        />
        <div className="flex pt-2 flex-col gap-2 items-center md:h-[calc(100vh-146px)] sm:h-[calc(100vh-156px)]  h-[calc(100vh-205px)] rounded-lg bg-white scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400  overflow-y-scroll ">
          {presentedState
            ? cards.map((card, i) => {
                if (card.presented === true) {
                  return (
                    <Card
                      bodyText={card.bodyText}
                      title={card.title}
                      presented={card.presented}
                      type={card.type}
                    />
                  );
                }
              })
            : cards.map((card, i) => {
                if (card.presented === false) {
                  return (
                    <Card
                      bodyText={card.bodyText}
                      title={card.title}
                      presented={card.presented}
                      type={card.type}
                    />
                  );
                }
              })}
        </div>
      </div>
    </div>
  );
}
