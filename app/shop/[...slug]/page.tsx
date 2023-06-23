const Clothes = ({ params }: { params: { slug: string[] } }) => {
	return (
		<>
			{params.slug.map((slug) => (
				<div key={slug}>{slug}</div>
			))}
		</>
	);
};

export default Clothes;
