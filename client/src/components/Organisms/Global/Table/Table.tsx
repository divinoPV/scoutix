import React, { useRef, useState } from 'react';
import MaterialTable, {
  Action,
  Localization,
  Options
} from '@material-table/core';

import useNotif from '../../../Trumps/Hook/Notif';

type Validator<T> = T extends () => boolean ? T : never;

type Validators<Obj> = {
  [K in keyof Obj]: Validator<Obj[K]>
}

type Col = {
  title: string;
  field: string;
  [key: string]: any;
}

type Index = {
  [key: string]: string;
}

const Table: React.FC<{
  table: {
    actions?: Array<Action<object>>;
    columns: Array<Col>;
    rows: Array<any>;
    title: string;
    localization?: Localization;
    options?: Options<object>;
    editable?: {
      onRowAdd?: (newData: any) => Promise<any>;
      onRowUpdate?: (newData: any, oldData: any) => Promise<any>;
      onRowDelete?: (oldData: any) => Promise<any>;
    };
    validators?: any;
  }
}> = ({ table }) => {
  const {
    actions,
    columns,
    rows,
    title,
    localization,
    options,
    editable = {},
    validators = {},
  } = table;

  const editables = useRef({});

  const [data, setData] = useState<any[]>(rows);

  if (editable) {
    if (editable.onRowDelete) {
      Object.assign(editables.current, {
        onRowDelete: async (oldData: { id: number }) => {
          try {
            editable.onRowDelete && await editable.onRowDelete(oldData);
            const dataDelete: { id: number }[] = [...data];
            dataDelete.splice(
              dataDelete.findIndex(({ id }) => id === oldData.id),
              1
            );
            setData([...dataDelete]);
            useNotif({ message: 'Element supprimée' });
          } catch (e) {
            useNotif({
              message: 'Erreur lors de la suppréssion',
              type: 'error'
            });
          }
        }
      });
    }

    if (editable.onRowUpdate) {
      Object.assign(editables.current, {
        onRowUpdate: async (newData: object, oldData: { id: number }) => {
          try {
            editable.onRowUpdate
            && await editable.onRowUpdate(newData, oldData);
            const dataUpdate = [...data];
            dataUpdate[dataUpdate.findIndex(
              ({ id }) => id === oldData.id
            )] = newData;
            setData([...dataUpdate]);
            useNotif({ message: 'Element modifié' });
          } catch (e) {
            useNotif({
              message: 'Erreur lors de la modification',
              type: 'error'
            });
          }
        }
      });
    }

    if (editable.onRowAdd) {
      Object.assign(editables.current, {
        onRowAdd: async (newData: object) => {
          try {
            editable.onRowAdd && await editable.onRowAdd(newData);
            setData([...data, newData]);
            useNotif({ message: 'Element créer' });
          } catch {
            useNotif({
              message: 'Erreur lors de la création',
              type: 'error'
            });
          }
        }
      });
    }
  }

  return <MaterialTable
    actions={ actions }
    columns={ [...(() => columns.reduce((
      acc: Array<object>,
      curr: { field: string }
    ) => [
      ...acc, curr.field in validators
        ? { ...curr, validate: validators[curr.field] }
        : curr
    ], []))()] }
    data={ data }
    editable={ editables.current }
    localization={ {
      ...{
        body: {
          emptyDataSourceMessage: 'Pas d\'enregistrement à afficher',
          addTooltip: 'Ajouter',
          deleteTooltip: 'Supprimer',
          editTooltip: 'Editer',
          filterRow: {
            filterTooltip: 'Filtrer'
          },
          editRow: {
            deleteText: 'Voulez-vous supprimer cette ligne?',
            cancelTooltip: 'Annuler',
            saveTooltip: 'Enregistrer'
          }
        },
        grouping: {
          placeholder: 'Tirer l\'entête ...',
          groupedBy: 'Grouper par:'
        },
        toolbar: {
          addRemoveColumns: 'Ajouter ou supprimer des colonnes',
          nRowsSelected: '{0} ligne(s) sélectionée(s)',
          showColumnsTitle: 'Voir les colonnes',
          showColumnsAriaLabel: 'Voir les colonnes',
          exportTitle: 'Exporter',
          exportAriaLabel: 'Exporter',
          searchTooltip: 'Chercher',
          searchPlaceholder: 'Chercher'
        },
        pagination: {
          lastTooltip: 'Dernière page',
          nextTooltip: 'Page suivante',
          firstTooltip: 'Première page',
          previousTooltip: 'Page précédente',
          labelRowsSelect: 'lignes',
          labelDisplayedRows: '{from}-{to} sur {count}',
          labelRowsPerPage: 'Lignes par page',
          firstAriaLabel: 'Première page',
          lastAriaLabel: 'Dernière page',
          nextAriaLabel: 'Page suivante',
          previousAriaLabel: 'Page précédente',
        }
      }, ...localization
    } }
    options={ {
      ...{
        actionsColumnIndex: -1
      }, ...options
    } }
    title={ title }
  />;
};

export default Table;
