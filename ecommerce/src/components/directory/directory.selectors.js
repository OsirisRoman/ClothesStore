import { createSelector } from 'reselect';
import directoryReducer from '../../redux/directory/directory.reducer';

const selectDirectory = (state) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
