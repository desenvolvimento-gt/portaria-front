export interface ICard {
  onClick?: VoidFunction;
  title: string;
  bodyText: string;
  apresentado: boolean;
  tipo: 'tipo1' | 'tipo2';
}
