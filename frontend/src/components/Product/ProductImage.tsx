function ProductImage({ image, name }: ProductImageProps) {
	return (
		<div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
			<img
				src={`${import.meta.env.VITE_API_URL}/images/${image}`}
				alt={name}
				className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
			/>
		</div>
	);
}

export default ProductImage;
