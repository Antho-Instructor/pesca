interface Product {
	id: string;
	name: string;
	description: string;
	price: number;
	image: string;
	stock: number;
	category: string;
}

interface ProductPriceProps {
	price: number;
	stock: number;
}

interface ProductCardProps {
	product: Product;
	isBuy?: boolean;
}

interface ProductImageProps {
	image: string;
	name: string;
}

interface Author {
	name: string;
	handle: string;
	imageUrl: string;
	logoUrl?: string;
}

interface Testimonial {
	body: string;
	author: Author;
}

interface CardProps {
	category: string;
	title: string;
	description: string;
	id: number;
	isBestSeller?: boolean;
}
