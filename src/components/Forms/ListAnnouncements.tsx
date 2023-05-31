import { FormEvent, useState } from 'react';
import Select from 'react-select';
import { DynamicFieldsBuilder } from './DynamicFieldsBuilder';

interface IFieldList {
  [index: string]: object[];
}
export function ListAnnouncements() {
  return (
    <div className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"></div>
  );
}
