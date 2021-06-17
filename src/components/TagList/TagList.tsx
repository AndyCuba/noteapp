import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { changeTagStatus, removeTag } from '../../redux/reducers/dataReducer/dataReducer';
import './TagList.scss';

const TagList = () => {
    const dispatch = useAppDispatch();
    const tags = useAppSelector(state => state.data.tags);

    const handleClick = (e: React.FormEvent<EventTarget>): void => {
        if(e.target) {
            let target = e.target as HTMLButtonElement;
            if(target.tagName === 'BUTTON') {

                dispatch(removeTag(target.id));

            } else {
                let target = e.target as HTMLDivElement;
                dispatch(changeTagStatus(target.id));
                };
            };   
    };

    return(
        <div className="tagList">
            <h3>Find note by hashtag:</h3>
            <ul>
            {
                tags[0] ? 
                    tags.map(
                        (tag, index)=> 
                        <li 
                            key={index} 
                            id={tag.name} 
                            onClick={handleClick} 
                            className={tag.isActive ? 'active tagList__tag' : 'not-active tagList__tag'}
                        >
                            {tag.name}
                            <button id={tag.name}></button>
                        </li>
                    ) : 
                    <h2>You have no tags</h2>
            }
            </ul>
        </div>
    );
};

export default TagList;