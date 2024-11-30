export const products = [
    {
        id: 1,
        name: 'Pienso seco',
        price: 20.000,
        despcription: 'Pedigree Pienso Seco es un alimento completo y equilibrado, especialmente formulado para perros de todas las razas y tamaños. Sus croquetas crujientes están diseñadas para proporcionar todos los nutrientes esenciales que tu mascota necesita para mantenerse sana y activa.',
        stock: 10,
        img: 'https://www.pedigree.cl/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf1511/files/2022-10/7797453001557-product-image-1.png',
        category: 'Pienso',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 2,
        name: 'Premios',
        price: 300,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://www.pedigree.cl/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf1511/files/2022-10/landing-hero-snacks.png',
        category: 'pantalones',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 3,
        name: 'Croquetas',
        price: 310,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://www.pedigree.cl/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf1511/files/2022-10/7797453971799-product-image-1.png',
        category: 'pantalones',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 4,
        name: 'Sobres',
        price: 310,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://www.pedigree.cl/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf1511/files/2022-10/7797453971690-product-image-1.png',
        category: 'pantalones',
        sizes: ['S', 'M', 'L']
    },
   
   
    
];

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products);
        }, 1500);
    });
};

export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 2000);
    });
};

export const getProductByCategory = (category) => {
    return new Promise((res) => {
        const productosFiltrados = products.filter((product) => product.category === category);
        setTimeout(() => {
            res(productosFiltrados);
        }, 2000);
    });
};
