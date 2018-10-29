function reducer(
  state = {
    features: [
      {
        id: 1,
        name: "Open URL",
        inputRequired: true,
        description: "Opens URL in current tab"
      },
      {
        id: 2,
        name: "Wait for DOM element",
        inputRequired: true,
        description: "Wait for an element to be loaded in DOM"
      },
      {
        id: 3,
        name: "Screenshot",
        inputRequired: false,
        description: "Captures screenshot of current tab"
      },
      {
        id: 4,
        name: "Script",
        inputRequired: true,
        multiline:true,
        description: "Executes the script in current context of the tab"
      },
      {
        id: 5,
        name: "Wait",
        inputRequired: true,
        description: "Wait for the mentioned mentioned time"
      }
    ]
  },
  action
) {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;
