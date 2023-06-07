import Select from 'react-select';
import { IDynamicFieldsBuilder } from './interfaces';

export function DynamicFieldsBuilder({
  actualFields,
  fieldList,
}: IDynamicFieldsBuilder) {
  return (
    <>
      {Object.values(fieldList[actualFields]).map(
        (data: any, index: number) => {
          return (
            <div key={index} className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                {data.labelName}
                {data.fieldType == 'select' ? (
                  <Select
                    placeholder="Selecione"
                    className=" w-full  text-gray-700 rounded leading-tight "
                    options={data.selectOptions}
                  />
                ) : (
                  <input
                    className={
                      data.fieldType === 'checkbox'
                        ? 'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded '
                        : 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight'
                    }
                    name={data.fieldName}
                    type={data.fieldType}
                  />
                )}
              </label>
            </div>
          );
        }
      )}
    </>
  );
}
