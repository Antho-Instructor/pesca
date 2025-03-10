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
