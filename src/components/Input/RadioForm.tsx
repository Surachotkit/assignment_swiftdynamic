import { Radio } from 'antd';

interface RadioProps {
  onChange: (value:any) => void
  value: any
}
const RadioForm: React.FC<RadioProps> = ({onChange,value}) => {

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={"ผู้ชาย"}>ผู้ชาย</Radio>
      <Radio value={"ผู้หญิง"}>ผู้หญิง</Radio>
      <Radio value={"ไม่ระบุ"}>ไม่ระบุ</Radio>
    </Radio.Group>
  );
};

export default RadioForm;