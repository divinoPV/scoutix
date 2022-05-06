import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import style from './_switch_table.module.scss';
import Switch from '../../../Atoms/Buttons/Switch/Switch';
import ScrollContainer from 'react-indiana-drag-scroll';

const SwitchTable = () => {
  return <ScrollContainer horizontal={false} hideScrollbars={false}>
    <Grid style={{ display: 'flex'}}>
      <div style={{ marginRight: '1rem' }}>
        <Row style={{ flexDirection: 'column' }}>
          <Col className={style.box}>Roles</Col>
          <Col className={style.box}>Test</Col>
          <Col className={style.box}>Test</Col>
          <Col className={style.box}>Test</Col>
        </Row>
      </div>
      <ScrollContainer vertical={false} hideScrollbars={false}>
        <div>
          <Row>
            <Col className={style.box}>Calendar</Col>
            <Col className={style.box}>Posts</Col>
            <Col className={style.box}>Categ</Col>
            <Col className={style.box}>Event</Col>
            <Col className={style.box}>Admin</Col>
            <Col className={style.box}>Calendar</Col>
            <Col className={style.box}>Posts</Col>
            <Col className={style.box}>Categ</Col>
            <Col className={style.box}>Event</Col>
            <Col className={style.box}>Admin</Col>
            <Col className={style.box}>Calendar</Col>
            <Col className={style.box}>Posts</Col>
            <Col className={style.box}>Categ</Col>
            <Col className={style.box}>Event</Col>
            <Col className={style.box}>Admin</Col>
            <Col className={style.box}>Calendar</Col>
            <Col className={style.box}>Posts</Col>
            <Col className={style.box}>Categ</Col>
            <Col className={style.box}>Event</Col>
            <Col className={style.box}>Admin</Col>
          </Row>
        </div>
        <div>
          {[...Array(15).keys()].map(() => (<Row>
            <Col className={style.box}>Test</Col>
            <Col className={style.box}>Test</Col>
            <Col className={style.box}>Test</Col>
            <Col className={style.box}>Test</Col>
            <Col className={style.box}>Test</Col>
          </Row>))}
        </div>
      </ScrollContainer>
    </Grid>;
  </ScrollContainer>
  /*<div
    style={{ height: '50vh', overflowY: 'auto' }}>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
    }}>
      <table className="table cell boxshadow" style={{ color: '#fff' }}>
        <colgroup>
          <col span={1} style={{ backgroundColor: '#427176' }}/>
        </colgroup>
        <tr>
          <th>Postes</th>
        </tr>
        {[...Array(50).keys()].map(() => (<tr>
          <td><p>CT</p></td>
        </tr>))}
      </table>
      <ScrollContainer vertical={false}>
        <table className="table cell">
          <tr>
            {[...Array(10).keys()].map(() => <th>Company</th>)}
          </tr>
          {[...Array(50).keys()].map(() => (<tr>
            {[...Array(10).keys()].map(() => <td><Switch
              onChange={() => 'test'}></Switch></td>)}
          </tr>))}
        </table>
      </ScrollContainer>
    </div>
  </div>;*/
};

export default SwitchTable;
