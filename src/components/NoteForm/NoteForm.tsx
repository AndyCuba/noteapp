import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { addNote, addTag } from '../../redux/reducers/dataReducer/dataReducer';
import './NoteForm.scss';

const NoteForm = () => {
    const dispatch = useAppDispatch();
    const tags = useAppSelector(state => state.data.tags);
    const input = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        
        if(input.current?.value) {
            const formValue = input.current.value;

            dispatch(addNote(formValue));

            const matches = formValue.match(/#\w+/g);
            if(matches) {
                const uniqueInputValues = Array.from(new Set([...matches]));
                // Checks inputed values for matching some existing tag
                const uniqueTags = uniqueInputValues.filter(value => {
                    if(tags.some(tag => tag.name.includes(value))) {
                        return false;
                    } else {
                        return value;
                    };
                });
                // If there is a unique tag, add it as new
                if(uniqueTags[0]) dispatch(addTag(uniqueTags));
            };

            input.current.value = ''; 
        };
    };

    return(
        <div className="noteForm">
            <form onSubmit={handleSubmit} autoComplete="on">
                <input 
                    type="text" 
                    ref={input} 
                    placeholder={'Please, enter your note'}
                    className={'noteForm__input'}
                />
                <button type="submit" className={'noteForm__button'}>Create</button>
            </form>
        </div>
    );
};

export default NoteForm;