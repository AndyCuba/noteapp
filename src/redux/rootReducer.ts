import { combineReducers } from 'redux';
import { dataReducer } from './reducers/dataReducer/dataReducer';


const rootReducer = combineReducers({
    data: dataReducer
});

export default rootReducer;