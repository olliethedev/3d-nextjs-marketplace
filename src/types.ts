export interface Author {
    name: string;
    description: string;
    image: string;
}

export interface Product {
    id: string;
    name: string;
    author: string;
    price: string;
    image: string;
    description: string;
}

export interface CartProduct extends Product {
    quantity: number;
}

export interface Account {
    firstName: string,
    lastName: string,
    email: string,
    billingStatus: string,
    profileImage: string
}