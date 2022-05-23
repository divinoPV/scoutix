import React, {useEffect, useState} from 'react';


import Container from '../../../../Atoms/Container/Container';
import PageTitle from '../../../../Atoms/Title/Page/PageTitle';
import SwitchTable from '../../../../Organisms/Global/SwitchTable/SwitchTable';
import {
  getActivities,
  getCategories
} from './ApiRequest';

const Category: React.FC = () => {
  const [isFetching, setIsFetching] = useState<boolean>(true);

  const [activities, setActivities] = useState(null);

  const [categories, setCategs] = useState(null);

  const init = async () => {
    try {
      const { data: dataActivities } = await getActivities();
      const { data: dataCategories } = await getCategories();

      setActivities(dataActivities['hydra:member'].reduce((acc, curr) => [...acc, { ...curr, name: curr.title }], []));
      setCategs(dataCategories['hydra:member'].reduce((acc, curr) => [...acc, { ...curr, name: curr.title }], []));
      setIsFetching(false);
    } catch (e) {

    }
  };

  useEffect(() => {
    init();
  }, []);

  return <>
    <Container>
      <PageTitle>Autorisation - Categories</PageTitle>
      { !isFetching ?
        <SwitchTable
                     data={{
                       'body': activities,
                       'header': categories,
                     }}
                     horizontalHeaderLabel="Fonctionnalités"
                     verticalHeaderLabel="Fonctions"
        />
        : 'loading...' }
    </Container>
  </>;
};

export default Category;