import { FormEvent, useState } from 'react';
import Select from 'react-select';
import { DynamicFieldsBuilder } from './DynamicFieldsBuilder';

interface IFieldList {
  [index: string]: object[];
}
export function CreateEventoForm() {
  const [companionNumber, setCompanionNumber] = useState<number>(0);
  const [actualFields, setActualFields] = useState<string>('culto');

  const selectOptions = [{ value: 'culto', label: 'Culto' }];

  const fieldList: IFieldList = {
    culto: [
      {
        fieldName: 'nome',
        fieldType: 'text',
        labelName: 'Nome:',
      },
      {
        fieldName: 'data',
        fieldType: 'datetime-local',
        labelName: 'Data do Culto:',
      },
      {
        fieldName: 'localsetorid',
        fieldType: 'select',
        labelName: 'Selecione a Congregação',
        selectOptions: [{ value: 'alvorada', label: 'Alvorada Sede' }],
      },
    ],
  };
  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {}

  return (
    <form
      className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleFormSubmit}
    >
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Tipo do Evento:
        <Select
          placeholder="Selecione"
          className=" w-full  text-gray-700 rounded leading-tight "
          options={selectOptions}
        />
      </label>
      <DynamicFieldsBuilder actualFields={actualFields} fieldList={fieldList} />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
      >
        Criar Evento
      </button>
    </form>
  );
}
