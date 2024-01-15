import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const DateForm: React.FC = () => (
  <Space direction="vertical">
    <DatePicker onChange={onChange} />
  </Space>
);

export default DateForm;