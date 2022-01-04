import { clearAlert, showAlert } from '../reducers/alert';

export const setShowAlert = ({ title, description }) => async (dispatch) => {
  dispatch(
    showAlert({
      title,
      description,
      options: [
        {
          title: 'OK',
          action: () => dispatch(clearAlert()),
        },
      ],
    }),
  );
};
