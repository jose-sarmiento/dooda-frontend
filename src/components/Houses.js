import React, {useState, useEffect, useRef, useCallback} from "react";
import { Card, Loader, CardSkeletonLoading} from "../components";
import { places } from "../mocks/links";
import usePaginateFetch from "../hooks/usePaginateFetch"

const Houses = () => {
	const [page, setPage] = useState(1)
	const {results, loading, error, hasNext} = usePaginateFetch("house", page, 9)
	const observer = useRef()
	const lastElementRef = useCallback(node => {
		if(loading) return;
		if(observer.current) observer.current.disconnect()

		observer.current = new IntersectionObserver(entries => {
			if(entries[0].isIntersecting && hasNext) {
				setPage(prevPage => prevPage + 1)
			}
		})
		if(node) observer.current.observe(node)
	}, [loading, hasNext])

	return (
		<section className="list-items-wrapper">
			<div className="card-wrapper">
				{results.map((data, idx) => {
					if(idx === results.length -1) {
						return <Card ref={lastElementRef} key={data.id} data={data} />
					}
					return <Card key={data.id} data={data} />
				})}
				{loading && <CardSkeletonLoading/>}
			</div>
		</section>
	)
}

export default Houses