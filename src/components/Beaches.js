import React, { useState, useRef, useCallback } from "react";
import { Card, CardSkeletonLoading, SectionHeader, FilterDraggable } from "../components";
import usePaginateFetch from "../hooks/usePaginateFetch";

const Beaches = () => {
	const [isOpen, setIsOpen] = useState(false)

	const [page, setPage] = useState(1);
	const { results, loading, hasNext } = usePaginateFetch("beach", page, 12);
	const observer = useRef();
	const lastElementRef = useCallback(
		(node) => {
			if (loading) return;
			if (observer.current) observer.current.disconnect();

			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasNext) {
					setPage((prevPage) => prevPage + 1);
				}
			});
			if (node) observer.current.observe(node);
		},
		[loading, hasNext]
	);

	const close = (e) => setIsOpen(false)
	const toggle = (e) => {
		setIsOpen(prev => !prev)
	}

	return (
		<div className="sub-page">
			<FilterDraggable isOpen={isOpen} close={close} />
			<SectionHeader toggle={toggle} />
			<section className="list-items-wrapper container">
				<div className="card-wrapper">
					{results.map((data, idx) => {
						if (idx === results.length - 1) {
							return <Card ref={lastElementRef} key={data.id} data={data} />;
						}
						return <Card key={data.id} data={data} />;
					})}
					{loading && <CardSkeletonLoading />}
				</div>
			</section>
		</div>
	);
};

export default Beaches;
