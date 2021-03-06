const CHECKSTATUS = 'src/redux/categories/CHECKSTATUS';

export const checkStatus = () => ({
  type: CHECKSTATUS,
});

const checkReducer = (state = [], action) => {
  switch (action.type) {
    case CHECKSTATUS:
      return [
        'Under construction...',
      ];

    default:
      return state;
  }
};

export default checkReducer;
