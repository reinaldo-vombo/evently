interface ICategory {
  name: string;
  value: string;
}
export interface IFilter {
  placeholder: string;
  filters: ICategory[];
}
