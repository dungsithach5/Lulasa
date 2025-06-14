import React, { useEffect, useState } from 'react';
import Layout from "../../layout/Layout.jsx";
import CardProducts from '../../components/Card/CardProducts.jsx';
import Breadcrumbs from '../../components/BreadCrumb.jsx';
import Checkbox from '../../components/CheckboxLabels.jsx';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../service/api/productApi.js';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        getProducts();
    }, []);

    return (
        <Layout>
            <div className='relative bg-[#ecf8f3] w-full mt-16 pb-20'>
                <img src="/public/img/banner-shop.jpg" alt="banner shop" className='absolute w-full h-72 object-cover' />
                <div className="absolute top-0 left-0 w-full h-72 bg-black opacity-50"></div>
                <div className='relative px-4 md:mx-20 lg:mx-52 flex flex-col justify-center items-center text-center space-y-4 text-white'>
                    <h1 className='font-medium text-3xl md:text-4xl mt-28'>SHOP OUR COLLECTION</h1>
                    <Breadcrumbs />
                </div>
            </div>

            {/* Filter */}
            <section className="py-20">
                <div className="px-4 md:mx-20 lg:mx-52 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <h2 className='text-xl md:text-2xl font-medium'>All Products</h2>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <select className="border border-gray-300 rounded px-3 py-2">
                            <option value="default">Default Sorting</option>
                            <option value="price-low-high">Price: Low to High</option>
                            <option value="price-high-low">Price: High to Low</option>
                        </select>
                        <select className="border border-gray-300 rounded px-3 py-2">
                            <option value="all">Show All</option>
                            <option value="featured">Featured</option>
                            <option value="new-arrivals">New Arrivals</option>
                        </select>
                    </div>
                </div>

                <div className="px-4 md:mx-20 lg:mx-52 flex flex-col lg:flex-row gap-6 mt-6">
                    {/* Filter */}
                    <div className="w-full lg:w-[250px] space-y-6">
                        <div className="pb-4 border-b border-gray-300">
                            <h4 className="font-medium text-xl mb-4 pl-4 border-l-4 border-black">Category</h4>
                            <ul className="space-y-2 pl-2">
                                <li><Link to="">Essential Oils</Link></li>
                                <li><Link to="">Diffusers</Link></li>
                                <li><Link to="">Accessories</Link></li>
                            </ul>
                        </div>
                        <div className="pb-4 border-b border-gray-300">
                            <h4 className="font-medium text-xl mb-4 pl-4 border-l-4 border-black">Price</h4>
                            <Checkbox />
                        </div>
                    </div>

                    {/* Products */}
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <Link to={`/detail/${product.id}`} key={product.id}>
                                <CardProducts
                                    name={product.name}
                                    image={
                                        <div className=''>
                                            <img src={product.main_image_url} alt={product.name} className='object-cover w-full h-48' />
                                        </div>
                                    }
                                    price={`$${product.price}`}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Shop;
