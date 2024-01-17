export type Action = { type: "ADD_NOTE"; payload: string };

export const addNote = (note: any): Action => ({
  type: "ADD_NOTE",
  payload: note,
});

