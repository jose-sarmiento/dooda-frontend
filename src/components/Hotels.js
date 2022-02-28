import React, { useState, useEffect, useRef, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardSkeletonLoading, SectionHeader } from "../components";
import usePaginateFetch from "../hooks/usePaginateFetch";
import { places } from "../mocks/links";

const Hotels = () => {
	const [page, setPage] = useState(1);
	const { results, loading, error, hasNext } = usePaginateFetch("hotel", page, 9);
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

	return (
		<div className="sub-page">
			<SectionHeader/>
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

export default Hotels;
