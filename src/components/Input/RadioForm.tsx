import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';

const RadioForm: React.FC = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>ผู้ชาย</Radio>
      <Radio value={2}>ผู้หญิง</Radio>
      <Radio value={3}>ไม่ระบุ</Radio>
    </Radio.Group>
  );
};

export default RadioForm;