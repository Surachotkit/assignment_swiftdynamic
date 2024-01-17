import { Button, Col, Row } from "antd";
import {
  DatePicker,
  Form,
  Input,
  Select,

} from "antd";
import RadioForm from "../components/Input/RadioForm";
import TableForm from "../components/Table/TableForm";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNote } from "../action/action";


const { Option } = Select;
export default function ManageForm() {
  
  const prefixSelector = (
    <Form.Item name="prefixphonenumber" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="66">+66</Option>
        <Option value="99">+99</Option>
      </Select>
    </Form.Item>
  );


  const dispatch = useDispatch();
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
  const onFinish = (values: any) => {
    console.log("Form values:", values);
    dispatch(addNote(values));
  };
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

      <Form {...formItemLayout} onFinish={onFinish} style={{ width:'80%', border:'solid 2px' ,borderRadius:'10px', padding:'10px'}}>
        
        <Row>
          <Col span={8}>
          <Form.Item
                label="คำนำหน้า"
                name="prefix"
                rules={[{ required: true, message: "Please input!" }]}
              >
                <Select>
                  <Option value="Mr.">Mr.</Option>
                  <Option value="Mrs.">Mrs.</Option>
                </Select>
              </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="ชื่อจริง"
              name="name"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="นามสกุล"
              name="surname"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Form.Item
              label="วันเกิด"
              name="birthday"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <DatePicker />
     
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="สัญชาติ"
              name="nationality"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <Select>
                <Select.Option value="TH">ไทย</Select.Option>
                <Select.Option value="ENG">อังกฤษ</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={10}>
            <Form.Item 
              label="เลขบัตรประชาชน"
              name="idCardNumber">
            <div style={{ display: "flex", alignItems: "center" }}>
                  <Input style={{ width: "80%" }} />
  
                </div>

            </Form.Item>
            
          </Col>
        </Row>
        <Row >

          <Col span={10}  >
            <Form.Item
            name="gender"
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
          <Col span={15}>
            
            <Form.Item
              name="phonenumber"
              label="หมายเลขโทรศัพท์มือถือ"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
           
            <Input addonBefore={prefixSelector} style={{ width: "100%" }}  />
              
            </Form.Item>
            
          </Col>
        </Row>
        <Row>
          <Col span={6} style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
            <Form.Item 
              
              label="หนังสือเดินทาง"
              name="passport">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
          <Row >
            <Col span={6} style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
            <Form.Item 
              label="เงินเดือนที่คาดหวัง"
              name="expectedSalary"
              rules={[
                { required: true, message: "Please input your money" },
              ]}>
                
              <Input />
            </Form.Item>
            </Col>
            <div style={{display:'flex', justifyContent:'end'}}>

            <Col span={14}>
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
