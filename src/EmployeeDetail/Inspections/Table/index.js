import React from 'react';
import uuid from 'uuid/v4';

import classes from './style.module.scss';

const EmployeeDetailInspectionsTable = ({ data }) => {
  return (
    <div className={classes['inspections-table']}>
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th>Checklist</th>
            <th>Date</th>
            <th>Durations</th>
          </tr>
          {data.map(item => (
            <tr key={uuid()}>
              <td>{item.ID}</td>
              <td>{item.Checklist}</td>
              <td>{item.Date}</td>
              <td>{item.Durations}s</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeDetailInspectionsTable;
