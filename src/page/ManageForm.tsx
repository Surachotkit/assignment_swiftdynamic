import Table from "../components/Table/TableForm";
// import Form from "../components/Form/Form";
import Date from "../components/Input/DateForm";

import { Button, Col, Row } from "antd";
import {
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  TreeSelect,
} from "antd";
import RadioForm from "../components/Input/RadioForm";
import SelectForm from "../components/Input/SelectForm";
import InputForm from "../components/Input/InputForm";
import TableForm from "../components/Table/TableForm";
import { Link } from "react-router-dom";

// const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

export default function ManageForm() {
  const { RangePicker } = DatePicker;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="66">+66</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
      <h2>การจัดการหน้าฟอร์ม</h2>
      <div style={{display:'flex',justifyContent:'center'}}>
      <div style={{position:'absolute', top:40,right:10}}>
      <Select style={{ width: 100 }} defaultValue={"Thai"}>
                <Select.Option value="Thai">Thai</Select.Option>
                <Select.Option value="English">English</Select.Option>
      </Select>
      </div>
      <div style={{position:'absolute', top:80,right:10}}>
      <Link to="/">
      <Button>หน้าหลัก</Button>
      </Link>
      </div>

      <Form {...formItemLayout} style={{ maxWidth: 700, border:'solid 2px' ,borderRadius:'10px', padding:'10px'}}>
        
        <Row>
          <Col span={8}>
            <Form.Item
              label="คำนำหน้า"
              name="คำนำหน้า"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <SelectForm />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="ชื่อจริง"
              name="ชื่อจริง"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="นามสกุล"
              name="นามสกุล"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item
              label="วันเกิด"
              name="วันเกิด"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <DatePicker />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="สัญชาติ"
              name="สัญชาติ"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <Select>
                <Select.Option value="ไทย">ไทย</Select.Option>
                <Select.Option value="อังกฤษ">อังกฤษ</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item 
              label="เลขบัตรประชาชน"
              name="เลขบัตรประชาชน">
            <div style={{display:'flex',alignItems:'center',width:'200px'}}>
              <InputForm />-
              <InputForm />-
              <InputForm />-
              <InputForm />
                </div>

            </Form.Item>
            
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
            name="เพศ"
            label="เพศ"
            rules={[
              { required: true, message: "Please input !" },
            ]}
            >

            <RadioForm />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              name="หมายเลขโทรศัพท์มือถือ"
              label="หมายเลขโทรศัพท์มือถือ"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
            <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
              
            </Form.Item>
            
          </Col>
        </Row>
        <Row>
          <Col span={10} style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
            <Form.Item 
              label="หนังสือเดินทาง"
              name="หนังสือเดินทาง">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
          <Row >
            <Col span={12} style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
            <Form.Item 
              label="เงินเดือนที่คาดหวัง"
              name="เงินเดือนที่คาดหวัง"
              rules={[
                { required: true, message: "Please input your money" },
              ]}>
                
              <Input />
            </Form.Item>
            </Col>
            <div style={{display:'flex', justifyContent:'space-between'}}>

            <Col span={6}>
              <Button htmlType="reset">ล้างข้อมูล</Button>
            </Col>
            <Col span={6}>
              <Button type="default" htmlType="submit">
                ส่งข้อมูล
              </Button>
            </Col>
            </div>
          </Row>
        </Form.Item>
      </Form>
      </div>
      <div>

      <TableForm/>
      </div>
    </div>
  );
}
