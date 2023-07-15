import * as React from 'react';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ICard } from 'interfaces';

const defaultData: ICard[] = [
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
];

const columnHelper = createColumnHelper<ICard>();

const columns = [
  columnHelper.accessor('title', {
    header: 'Título',
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('bodyText', {
    header: 'Conteúdo',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('presented', {
    header: 'Status',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('type', {
    header: 'Tipo',
    footer: (info) => info.column.id,
  }),
];

export function Table() {
  const [data, setData] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th scope="col" className="px-6 py-3" key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-4" />
    </div>
  );
}
