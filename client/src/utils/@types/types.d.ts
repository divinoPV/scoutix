export type activity =  {
  '@id': string;
  id: number,
  uuid: string,
  name: string,
  archived: string,
  deleted: string,
  title: string,
}

export type feature = {
  '@id': string;
  id: number,
  uuid: string,
  name: string,
  archived: string,
  deleted: string,
  title: string
}

export type authorization = {
  '@id': string;
  id: number,
  uuid: string,
  archived: string,
  deleted: string,
  activity: string,
  feature: string
}
