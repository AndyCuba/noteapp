import { 
    AddNoteType, 
    RemoveNoteType, 
    AddTagType,
    RemoveTagType,
    EditNoteType,
    ChangeTagStatusType,
    IinitialDataStateType, 
    ActionTypes
} from './dataTypes';

//ACTIONS
const ADD_NOTE = 'ADD_NOTE';
const REMOVE_NOTE = 'REMOVE_NOTE';
const ADD_TAG = 'ADD_TAG';
const REMOVE_TAG = 'REMOVE_TAG';
const CHANGE_TAG_STATUS = 'CHANGE_TAG_STATUS';
const EDIT_NOTE = 'EDIT_NOTE';

const addNote = (note: string): AddNoteType => ({
    type: ADD_NOTE,
    payload: note,
    id: Date.now().toString()
});

const removeNote = (id: string): RemoveNoteType => ({
    type: REMOVE_NOTE,
    payload: id
});

const addTag = (tag: string[]): AddTagType => ({
    type: ADD_TAG,
    payload: tag
});

const removeTag = (tag: string): RemoveTagType => ({
    type: REMOVE_TAG,
    payload: tag
});

const changeTagStatus = (name: string): ChangeTagStatusType => ({
    type: CHANGE_TAG_STATUS,
    payload: name
});

const editNote = (id: string, text: string): EditNoteType => ({
    type: EDIT_NOTE,
    id,
    text
});

// INITIAL STATE
const initialDataState: IinitialDataStateType = {
    notes: [],
    tags: []
};

// REDUCER
const dataReducer = (state = initialDataState, action: ActionTypes): IinitialDataStateType => {
    switch (action.type) {
        case ADD_NOTE:
            return {
                ...state,
                notes: [
                    ...state.notes,
                    { 
                        text: action.payload,
                        id: action.id
                    }
                ]
            };
        case REMOVE_NOTE:
            return {
                ...state,
                notes: [
                    ...state.notes.filter(note => note.id !== action.payload)
                ]
            };
        case ADD_TAG:
            return {
                ...state,
                tags: [
                    ...state.tags, 
                    ...action.payload.map(tag => ({ name: tag, isActive: false }))
                ]
            };
        case REMOVE_TAG:
            return {
                ...state,
                tags: [
                    ...state.tags.filter(tag => tag.name !== action.payload)
                ]
            };
        case CHANGE_TAG_STATUS:
            return {
                ...state,
                tags: [
                    ...state.tags.map(tag => {
                        if(tag.name.includes(action.payload)) {
                            return { name: tag.name, isActive: !tag.isActive }
                        } else return tag;
                    })
                ]
            };
        case EDIT_NOTE:
            return {
                ...state,
                notes: [
                    ...state.notes.map(note => {
                        if(note.id.includes(action.id)) {
                            return { text: action.text, id: action.id }
                        } else return note;
                    })
                ]
            };
        default:
            return { ...state };
    };
};

export {
    dataReducer, 
    ADD_NOTE, 
    REMOVE_NOTE,
    ADD_TAG,
    REMOVE_TAG,
    CHANGE_TAG_STATUS,
    EDIT_NOTE,
    addNote, 
    removeNote,
    addTag,
    removeTag,
    changeTagStatus,
    editNote
};
