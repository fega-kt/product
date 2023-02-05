import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addSignedDocument state domain
 */

const selectLoginPage = state => state.get('loginPage', initialState);



const makeSelectLoginPage= () => createSelector(selectLoginPage, substate => substate.toJS());
export default makeSelectLoginPage;
export { selectLoginPage };