type ProductProps = {
    id: number
    title: string
    type: string
    capacity: string
    price: number
}

const productsArray: ProductProps[] = [
    {
        id: 1,
        title: 'iPhone 14 Pro',
        type: 'phone',
        capacity: '256',
        price: 750,
    },
    {
        id: 2,
        title: 'iPhone 13 Pro',
        type: 'phone',
        capacity: '256',
        price: 850,
    },
    {
        id: 3,
        title: 'iPhone 13',
        type: 'phone',
        capacity: '64',
        price: 1250,
    },
]

export default productsArray
