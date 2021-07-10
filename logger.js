export default function logger(reducer) {
	return (state, action, args) => {
		const nextState = reducer(state, action, args)
		console.group(action)
		console.log('Prev State:', state)
		console.log('Action arguments:', args)
		console.log('Next State:', nextState)
		console.groupEnd()

		return nextState
	}
}