import { useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { editNote } from '../../redux/reducers/dataReducer/dataReducer';
import { AppStateType } from '../../redux/store';

import './NotePage.scss';

type ParamTypes = {
    noteId: string
};

const NotePage = () => {
    const dispatch = useAppDispatch();
    const history = useHistory();
    const { noteId } = useParams<ParamTypes>();
    const tags = useAppSelector(state => state.data.tags);
    const inputArea = useRef<HTMLDivElement | null>(null);
    const noteSelector = (state: AppStateType) => state.data.notes.filter(
        note => note.id === noteId);

    const [note] = useAppSelector(noteSelector);
    
    const handleSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        if(e.target && inputArea.current?.innerText) {
            const target = e.target as HTMLFormElement;
            dispatch(editNote(target.id, inputArea.current.innerText));
            history.push('/');
        };
    };

    const handleEnterPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if(e.key === 'Enter'){
            handleSubmit(e);
        };
    };

    return(
        <div className={"app-wrapper notePage"}>
            <h2>Сlick on your note to edit:</h2>
            <form onSubmit={handleSubmit} id={noteId}>
                <div 
                    contentEditable={true} 
                    suppressContentEditableWarning={true} 
                    ref={inputArea}
                    id={noteId}
                    className={"notePage__input-area"}
                    onKeyPress={handleEnterPress}
                >
                    <Highlighter
                        highlightClassName="highlight"
                        searchWords={tags.map(tag => tag.name)}
                        autoEscape={false}
                        textToHighlight={note.text}
                    />
                    
                </div>
                <button type="submit">Save note</button>
            </form>
        </div>
    );
};

export default NotePage;