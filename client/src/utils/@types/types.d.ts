export type activity =  {
  id: number,
  uuid: string,
  name: string,
  archived: string,
  deleted: string,
  title: string,
}

export type feature = {
  id: number,
  uuid: string,
  name: string,
  archived: string,
  deleted: string,
  title: string
}

export type authorization = {
  id: number,
  uuid: string,
  archived: string,
  deleted: string,
  activity: string,
  feature: string
}

export interface authorizationRoles {
  authorizations: Array<authorization>;
  features: Array<feature>;
  activities: Array<activity>;
}
