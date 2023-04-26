import { FormEvent, useState } from 'react';
import Select from 'react-select';
import { DynamicFieldsBuilder } from './DynamicFieldsBuilder';

interface IFieldList {
  [index: string]: object[];
}
export function CreateCardForm() {
  const [companionNumber, setCompanionNumber] = useState<number>(0);
  const [actualFields, setActualFields] = useState<string>('visitanteMembro');

  const selectOptions = [
    { value: 'aviso', label: 'Aviso' },
    { value: 'mudancaExterna', label: 'Carta de Mudança Externa' },
    { value: 'mudancaInterna', label: 'Carta de Mudança Externa' },
    { value: 'visitanteMembro', label: 'Visitante Membro' },
    { value: 'visitanteNaoMembro', label: 'Visitante não Membro' },
  ];
  function handleSelectCardTypeChange(data: any) {
    setActualFields(data.value);
  }

  const fieldList: IFieldList = {
    visitanteNaoMembro: [
      {
        fieldName: 'nome',
        fieldType: 'text',
        labelName: 'Nome:',
      },
      {
        fieldName: 'observacao',
        fieldType: 'text',
        labelName: 'Observação:',
      },
      {
        fieldName: 'denominacao',
        fieldType: 'text',
        labelName: 'Denominacão de Onde Procede:',
      },
    ],
    visitanteMembro: [
      {
        fieldName: 'nome',
        fieldType: 'text',
        labelName: 'Nome:',
      },
      {
        fieldName: 'igrejaDeProcedencia',
        fieldType: 'text',
        labelName: 'Igreja de Pocedência:',
      },
      {
        fieldName: 'observacao',
        fieldType: 'text',
        labelName: 'Observação:',
      },
      {
        fieldName: 'comCarta',
        fieldType: 'checkbox',
        labelName: 'Tem carta?',
      },
    ],
  };
  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {}

  return (
    <form
      className="w-1/2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleFormSubmit}
    >
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Tipo do Card:
        <Select
          placeholder="Selecione"
          className=" w-full  text-gray-700 rounded leading-tight "
          onChange={handleSelectCardTypeChange}
          options={selectOptions}
        />
      </label>
      <DynamicFieldsBuilder actualFields={actualFields} fieldList={fieldList} />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mr-2"
        type="button"
        onClick={() => {
          setCompanionNumber(companionNumber + 1);
        }}
      >
        Adicionar Acopanhante
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={() => {
          setCompanionNumber(companionNumber - 1);
        }}
      >
        Remover Acopanhante
      </button>
      {[...Array(companionNumber)].map((e: undefined, i: number) => (
        <div key={i} className="border-b-2 border-gray-400 pb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nome do Acompanhante:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              name="acompanhante"
              type="text"
            />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Parentesco
            <input
              key={i}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              name="acompanhante"
              type="text"
            />
          </label>
        </div>
      ))}
    </form>
  );
}
