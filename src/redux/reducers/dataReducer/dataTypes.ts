import { 
    ADD_NOTE, 
    REMOVE_NOTE, 
    ADD_TAG, 
    REMOVE_TAG,
    CHANGE_TAG_STATUS,
    EDIT_NOTE
} from './dataReducer';

type AddNoteType = {
    type: typeof ADD_NOTE,
    payload: string,
    id: string
};

type RemoveNoteType = {
    type: typeof REMOVE_NOTE,
    payload: string
};

type AddTagType = {
    type: typeof ADD_TAG,
    payload: string[]
};

type RemoveTagType = {
    type: typeof REMOVE_TAG,
    payload: string
};

type ChangeTagStatusType = {
    type: typeof CHANGE_TAG_STATUS,
    payload: string
};

type EditNoteType = {
    type: typeof EDIT_NOTE,
    id: string,
    text: string
};

type ActionTypes = AddNoteType | RemoveNoteType | AddTagType | 
    RemoveTagType | ChangeTagStatusType | EditNoteType;

type NoteType = {
    text: string,
    id: string
};

type TagType = {
    name: string,
    isActive: boolean
};

type IinitialDataStateType = {
    notes: NoteType[],
    tags: TagType[]
};

export type { 
    AddNoteType, 
    RemoveNoteType,
    AddTagType,
    RemoveTagType,
    EditNoteType,
    ChangeTagStatusType,
    IinitialDataStateType, 
    ActionTypes,
    NoteType,
    TagType 
};