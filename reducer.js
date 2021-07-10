const init = {
	todos: [
		{
			title: 'Learn Javascript',
			completed: true
		},
		{
			title: 'Learn HTML, CSS',
			completed: false
		}
	]
}

export default function reducer(state = init, action, args) {
	switch (action) {
		case 'add':
			const [title] = args
			return {
				...state,
				todos: [...state.todos, {
					title,
					completed: false
				}]
			}
		default:
			return state
	}
}
