import React from 'react';
import { Select } from 'antd';

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log('search:', value);
};

// Filter `option.label` match the user type `input`
const filterOption = (input: string, option?: { label: string; value: string }) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const SelectForm: React.FC = () => (
  <Select
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={filterOption}
    options={[
      {
        value: 'เด็กชาย',
        label: 'เด็กชาย',
      },
      {
        value: 'เด็กหญิง',
        label: 'เด็กหญิง',
      },
      {
        value: 'นาย',
        label: 'นาย',
      },
      {
        value: 'นางสาว',
        label: 'นางสาว',
      },
      {
        value: 'นาย',
        label: 'นาย',
      },
    ]}
  />
);

export default SelectForm;