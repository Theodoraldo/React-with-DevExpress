import React from 'react';
import { employeesTasks } from '../data/Autocomplete';
import { Autocomplete } from 'devextreme-react';

export default function AutoComplete() {
  return (
    <Autocomplete
         label="Search for a task"
            dataSource={employeesTasks}
            valueExpr="Subject"
            labelMode="floating"
            showClearButton={true}
        />
  )
}
