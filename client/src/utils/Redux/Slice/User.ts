import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: number,
  addressCity: string,
  addressComplement: string,
  addressCountry: string,
  addressDepartment: string,
  addressNumber: string,
  addressState: string,
  addressStreet: string,
  addressZipCode: string,
  birth: string,
  birthCity: string,
  birthGender: string,
  birthZipCode: string,
  archivedBy: string,
  createdBy: string,
  deletedBy: string,
  updatedBy: string,
  fax: string,
  landline: string,
  mobile: string,
  gender: string,
  firstName: string,
  maidenName: string,
  matronym: string,
  middleName: string,
  patronym: string,
  thirdName: string,
  archivedAt: string,
  createdAt: string,
  deletedAt: string,
  updatedAt: string,
  fileName: string,
  fileMimeType: string,
  filePath: string,
  fileSize: string,
  username: string,
  uuid: string,
  logged: boolean,
}

export const user = createSlice(
  {
    name: 'user',
    initialState: {
      id: 0,
      addressCity: '',
      addressComplement: '',
      addressCountry: '',
      addressDepartment: '',
      addressNumber: '',
      addressState: '',
      addressStreet: '',
      addressZipCode: '',
      birth: '',
      birthCity: '',
      birthGender: '',
      birthZipCode: '',
      archivedBy: '',
      createdBy: '',
      deletedBy: '',
      updatedBy: '',
      fax: '',
      landline: '',
      mobile: '',
      gender: '',
      firstName: '',
      maidenName: '',
      matronym: '',
      middleName: '',
      patronym: '',
      thirdName: '',
      archivedAt: '',
      createdAt: '',
      deletedAt: '',
      updatedAt: '',
      fileName: '',
      fileMimeType: '',
      filePath: '',
      fileSize: '',
      username: '',
      uuid: '',
      logged: false,
    } as User,
    reducers: {
      set: (state, action: PayloadAction<User>) => {
        state.id = action.payload.id;
        state.addressCity = action.payload.addressCity;
        state.addressComplement = action.payload.addressComplement;
        state.addressCountry = action.payload.addressCountry;
        state.addressDepartment = action.payload.addressDepartment;
        state.addressNumber = action.payload.addressNumber;
        state.addressState = action.payload.addressState;
        state.addressStreet = action.payload.addressStreet;
        state.addressZipCode = action.payload.addressZipCode;
        state.birth = action.payload.birth;
        state.birthCity = action.payload.birthCity;
        state.birthGender = action.payload.birthGender;
        state.birthZipCode = action.payload.birthZipCode;
        state.archivedBy = action.payload.archivedBy;
        state.createdBy = action.payload.createdBy;
        state.deletedBy = action.payload.deletedBy;
        state.updatedBy = action.payload.updatedBy;
        state.fax = action.payload.fax;
        state.landline = action.payload.landline;
        state.mobile = action.payload.mobile;
        state.gender = action.payload.gender;
        state.firstName = action.payload.firstName;
        state.maidenName = action.payload.maidenName;
        state.matronym = action.payload.matronym;
        state.middleName = action.payload.middleName;
        state.patronym = action.payload.patronym;
        state.thirdName = action.payload.thirdName;
        state.archivedAt = action.payload.archivedAt;
        state.createdAt = action.payload.createdAt;
        state.deletedAt = action.payload.deletedAt;
        state.updatedAt = action.payload.updatedAt;
        state.fileName = action.payload.fileName;
        state.fileMimeType = action.payload.fileMimeType;
        state.filePath = action.payload.filePath;
        state.fileSize = action.payload.fileSize;
        state.username = action.payload.username;
        state.uuid = action.payload.uuid;
      },
      reset: (state) => {
        state.id = 0;
        state.addressCity = '';
        state.addressComplement = '';
        state.addressCountry = '';
        state.addressDepartment = '';
        state.addressNumber = '';
        state.addressState = '';
        state.addressStreet = '';
        state.addressZipCode = '';
        state.birth = '';
        state.birthCity = '';
        state.birthGender = '';
        state.birthZipCode = '';
        state.archivedBy = '';
        state.createdBy = '';
        state.deletedBy = '';
        state.updatedBy = '';
        state.fax = '';
        state.landline = '';
        state.mobile = '';
        state.gender = '';
        state.firstName = '';
        state.maidenName = '';
        state.matronym = '';
        state.middleName = '';
        state.patronym = '';
        state.thirdName = '';
        state.archivedAt = '';
        state.createdAt = '';
        state.deletedAt = '';
        state.updatedAt = '';
        state.fileName = '';
        state.fileMimeType = '';
        state.filePath = '';
        state.fileSize = '';
        state.username = '';
        state.uuid = '';
        state.logged = false;
      },
      login: (state) => {
        state.logged = true;
      },
      logout: (state) => {
        state.logged = false;
      }
    },
  }
);

export const { set, reset, login, logout } = user.actions;

export default user.reducer;
