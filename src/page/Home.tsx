import { Button } from "antd";
import Form from "../components/Form/Form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../action/action";
import { NotesState } from "../reducer/notesReducer";
import { NewNoteInput } from "../components/Input/NewNoteInputProps";

export default function Home() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state: { notes: any; }) => state.notes
  );
  console.log("🚀 ~ App ~ notes:", notes)
  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    console.log("🚀 ~ onAddNote ~ note:", note)
    dispatch(addNote(note));
  };
  return (
    <div>
      <Link to="/manage">
        <Button>Manage</Button>
      </Link>
      
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
