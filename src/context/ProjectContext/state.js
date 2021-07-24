//initial state
const initialState = {
  projects: [],
  projectsLoading: true,
  projectId: null,
  projectDetails: {},
  projectDetailsLoading: true,
  tasks: {
    pending: [],
    progress: [],
    completed: [],
  },
};

export default initialState;
