export interface Node {
  id: number,
  name: string,
  parent_id?: number,
  children?: Node[]
}