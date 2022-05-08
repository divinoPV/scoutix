import React, { useState } from 'react';
import MaterialTable, { Action, Localization, Options } from '@material-table/core';


type Validator<T> = T extends () => boolean ? T : never;

type Validators<Obj> = {
  [K in keyof Obj]: Validator<Obj[K]>
}

const Table:
  React.FC<{
    table: {
      actions?: Array<Action<object>>;
      columns: Array<object>;
      rows: Array<object>;
      title: string;
      localization?: Localization;
      options?: Options<object>;
      editable?: object;
      validators?: Validators<object>;
    }
  }> = ({ table }) => {
    const { actions, columns, rows, title, localization, options, editable } = table;
    const [data, setData] = useState<Array<object>>(rows);

    return <MaterialTable
      actions={actions}
      columns={columns}
      data={data}
      editable={{
        onRowUpdate: async (newData, oldData) => {
          await editable?.onRowUpdate(newData, oldData);
          const dataUpdate = [...data];
          const index = oldData.tableData.id;
          dataUpdate[index] = newData;
          setData([...dataUpdate]);
        },
        onRowDelete: async (oldData) => {
          await editable?.onRowDelete(oldData);
          const dataDelete = [...data];
          const index = oldData.tableData.id;
          dataDelete.splice(index, 1);
          setData([...dataDelete]);

        },
        onRowAdd: async (newData) => {
          await editable?.onRowAdd(newData);
          setData([...data, newData]);
        }
      }}
      localization={{ ...{
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
      }, ...localization }}
      options={{ ...{
        actionsColumnIndex: -1
      }, ...options }}
      title={title}
    />;
  };

export default Table;
