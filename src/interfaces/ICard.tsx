export interface ICard {
  onClick?: VoidFunction;
  title: string;
  bodyText: string;
  presented: boolean;
  type: 'tipo1' | 'tipo2';
}
