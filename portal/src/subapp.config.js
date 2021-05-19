const configSubApp = [
  {
    name: 'first',
    entry: process.env.VUE_APP_FIRST_URL,
    container: '#first'
  },
  {
    name: 'second',
    entry: process.env.VUE_APP_SECOND_URL,
    container: '#second'
  }
]

export default configSubApp
