import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { removeNote } from '../../redux/reducers/dataReducer/dataReducer';
import { NoteType } from '../../redux/reducers/dataReducer/dataTypes';

import './NoteList.scss';

const NotesList = () => {
    const dispatch = useAppDispatch();
    const notes = useAppSelector(state => state.data.notes);
    const activeTags = useAppSelector(state => state.data.tags.filter(tag => tag.isActive));
    
    //Removes note by its id
    const handleClick = (e: React.FormEvent<EventTarget>): void => {
        e.preventDefault();
        if(e.target) {
            const target = e.target as HTMLButtonElement;
            dispatch(removeNote(target.id));
        };
    };

    //Checks every active tag and returns notes that include active tags
    const filterByActiveTags = (note: NoteType) => {
        if(activeTags[0]) {
            if(activeTags.every(tag => note.text.includes(tag.name))) {
                return note;
            } else {
                return;
            };
           
        };
        return note;
    };

    // Creates list item for every note
    const mapNotes = (note: NoteType) => {
        return (
            <li key={note.id}>
                <p>{note.text}</p>
                <div>
                    <Link to={`/notes/${note.id}`} className="notesList__edit_link" />
                    <button 
                        id={note.id} 
                        onClick={handleClick} 
                        className="notesList__delete_button"
                    >
                    </button>  
                </div>
                
            </li>
        );
    };

    return(
        <div className="notesList">
            <h2>Your notes:</h2>
            {
                notes[0] ? 
                    (<ul className="notesList__ul">{notes.filter(filterByActiveTags).map(mapNotes)}</ul>) : 
                    <p>You have no notes</p>
            }
        </div>
    );
};

export default NotesList;