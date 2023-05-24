import { FormEvent, useEffect, useState } from 'react';
import Select from 'react-select';
import { DynamicFieldsBuilder } from './DynamicFieldsBuilder';

interface IFieldList {
  [index: string]: object[];
}
interface ICompanion {
  name: string;
  obs: string;
}
export function CreateCardForm() {
  const [companions, setCompanions] = useState<ICompanion[]>([]);
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

  const addNewCompanion = () => {
    setCompanions([...companions, { name: '', obs: '' }]);
  };
  const removeCompanion = (index: number) => {
    setCompanions(companions.filter((item, i) => i !== index));
  };
  const handleCompanionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = event.target;
    setCompanions((prevCompanions) => {
      const updatedCompanions = [...prevCompanions];
      updatedCompanions[index] = {
        ...updatedCompanions[index],
        [name]: value,
      };
      return updatedCompanions;
    });
  };
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
      <div className="flex gap-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded "
          type="button"
          onClick={addNewCompanion}
        >
          Adicionar Acopanhante
        </button>
      </div>
      {companions.map((e, i) => (
        <div key={i} className="border-b-2 border-gray-400 pb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nome do Acompanhante:
            <input
              onChange={(event) => handleCompanionChange(event, i)}
              value={e.name}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              name="name"
              type="text"
            />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Parentesco
            <input
              onChange={(event) => handleCompanionChange(event, i)}
              value={e.obs}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              name="obs"
              type="text"
            />
          </label>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
            type="button"
            onClick={() => {
              removeCompanion(i);
            }}
          >
            Remover Acopanhante
          </button>
        </div>
      ))}
    </form>
  );
}
