import NoteForm from '../../components/NoteForm/NoteForm';
import NotesList from '../../components/NoteList/NotesList';
import TagList from '../../components/TagList/TagList';

const HomePage = () => {

    return(
        <div className={'app-wrapper'}>
            <NoteForm />
            <TagList />
            <NotesList/>
        </div>
    );
};

export default HomePage;