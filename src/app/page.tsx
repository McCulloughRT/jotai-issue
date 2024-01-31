'use client'

import { atom, useAtom } from 'jotai'
import { focusAtom } from 'jotai-optics'

const objectAtom = atom({
	count: 0,
	secondCounter: 0,
})
const counterAtom = focusAtom(objectAtom, (optic) => optic.prop('count'))

export default function Home() {
	const [count, setCount] = useAtom(counterAtom)
	return (
		<div>
			<div>Count {count}</div>
			<button onClick={() => setCount((c) => c + 1)}>Increment</button>
		</div>
	)
}
