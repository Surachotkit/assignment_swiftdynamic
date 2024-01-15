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
    <div>
      <div>การจัดการหน้าฟอร์ม</div>
      <Form {...formItemLayout} style={{ maxWidth: 600 }}>
        

        <Row>
          <Col span={8}>
            คำนำหน้า:{" "}
            <Form.Item
              label="Select"
              name="Select"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <Select />
            </Form.Item>
          </Col>
          <Col span={8}>
            ชื่อจริง:
            <Form.Item
              label="Input"
              name="Input"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            นามสกุล:{" "}
            <Form.Item
              label="Input"
              name="Input"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            วันเกิด:{" "}
            <Form.Item
              label="DatePicker"
              name="DatePicker"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <DatePicker />
            </Form.Item>
          </Col>
          <Col span={12}>
            สัญชาติ:{" "}
            <Form.Item
              label="Select"
              name="Select"
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
            เลขบัตรประชาชน:
            <div>
              <InputForm />-
            </div>
            <div>
              <InputForm />-
            </div>
            <div>
              <InputForm />-
            </div>
            <div>
              <InputForm />-
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            เพศ: <RadioForm />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            หมายเลขโทรศัพท์มือถือ:
            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
            <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
              
            </Form.Item>
            
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            หนังสือเดินทาง: <InputForm />
          </Col>
        </Row>

        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Row>
            <Col span={8}>
              เงินเดือนที่คาดหวัง: <InputForm />
            </Col>
            <Col span={8}>
              <Button htmlType="reset">Reset</Button>
            </Col>
            <Col span={8}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>

      <Table />
    </div>
  );
}
