import { Button, Select } from "antd";
import Form from "../components/Form/Form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../action/action";
import { NotesState } from "../reducer/notesReducer";
import { NewNoteInput } from "../components/Input/NewNoteInputProps";
import { Col, Row } from 'antd';
import "./Home.css";

export default function Home() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state: { notes: any }) => state.notes
  );
  console.log("🚀 ~ App ~ notes:", notes);
  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    console.log("🚀 ~ onAddNote ~ note:", note);
    dispatch(addNote(note));
  };
  return (
    <div >
      <h2>การจัดการหน้าเว็บ</h2>
      <div style={{ position: "absolute", top: 40, right: 10 }}>
        <Select style={{ width: 100 }} defaultValue={"Thai"}>
          <Select.Option value="Thai">Thai</Select.Option>
          <Select.Option value="English">English</Select.Option>
        </Select>
      </div>
      <div style={{ position: "absolute", top: 80, right: 10 }}>
        <Link to="/manage">
          <Button>Manage</Button>
        </Link>
      </div>
      <div style={{padding:'20px'}}>

      <Row>
      <Col span={6}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',background:'#fff', width:'100%', height:'180px'}}>
          <div className="control-left"></div>
          <div style={{position:'absolute', bottom:-15, background:'#6eda78', borderRadius:'20px', padding:'5px'}}>

          เลื่อนรูปแบบ
          </div>
        </div>
      </Col>


      <Col span={6}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',background:'#fff', width:'100%', height:'180px'}}>
          <div className="control-top"></div>
        </div>
      </Col>
      <Col span={6}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',background:'#fff', width:'100%', height:'180px'}}>
          <div className="control-bottom"></div>
        </div>
      </Col>
    
 
      <Col span={6}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',background:'#fff', width:'100%', height:'180px'}}>
          <div className="control-right"></div>
        </div>
      </Col>
    </Row>
    <br/>
    <hr/>
    <br/>
    <Row>
      <Col span={8}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',background:'#fff', width:'100%', height:'180px'}}>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',background:'gray',color:'gray', position:'relative', width:'50%',height: '50%'}}> </div>
        </div>
      </Col>
      <Col span={8}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',background:'#fff', width:'100%', height:'180px'}}>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',background:'gray',color:'gray', position:'relative', width:'50%',height: '50%'}}> </div>
        </div>
      </Col>
      <Col span={8}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',background:'#fff', width:'100%', height:'180px'}}>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',background:'gray',color:'gray', position:'relative', width:'50%',height: '50%'}}> </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col span={8}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',background:'#fff', width:'100%', height:'180px'}}>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',background:'gray',color:'gray', position:'relative', width:'50%',height: '50%'}}> </div>
        </div>
      </Col>
      <Col span={8}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',background:'#fff', width:'100%', height:'180px'}}>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',background:'gray',color:'gray', position:'relative', width:'50%',height: '50%'}}> </div>
        </div>
      </Col>
      <Col span={8}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',background:'#fff', width:'100%', height:'180px'}}>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',background:'gray',color:'gray', position:'relative', width:'50%',height: '50%'}}> </div>
        </div>
      </Col>
    </Row>
    
      </div>
    

      <NewNoteInput addNote={onAddNote} />
      <hr />
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
    </div>
  );
}
