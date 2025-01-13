import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductTop = () => {
    const navigate = useNavigate();

    const products = [
        {
            id: 1,
            img: "https://5.imimg.com/data5/SELLER/Default/2022/8/JI/IO/GT/28525945/fur-remover-brush-500x500.jpg",
            category: "Household Product",
            name: "Fur Remover Brush",
            price: "₹19",
        },
        {
            id: 2,
            img: "https://5.imimg.com/data5/FA/LV/ZB/ANDROID-28525945/product-jpeg-250x250.jpg",
            category: "Kitchen Equipments",
            name: "Automatic Water Dispenser Pump",
            price: "₹120",
        },
        {
            id: 3,
            img: "https://5.imimg.com/data5/SELLER/Default/2022/9/OI/VP/RW/28525945/dead-skin-remover-sponge-250x250.jpeg",
            category: "Accessories",
            name: "Bath Sponge Body Dead Skin Remover",
            price: "₹27",
        },
        {
            id: 4,
            img: "https://5.imimg.com/data5/SELLER/Default/2023/12/368937093/CJ/VC/AU/28525945/whatsapp-image-2023-12-16-at-13-40-55-250x250.jpeg",
            category: "CLOCK",
            name: "Table Alarm Clock",
            price: "₹160",
        },
        {
            id: 5,
            img: "https://5.imimg.com/data5/SELLER/Default/2023/12/371192394/FM/WF/MQ/28525945/3d-wall-sticker-1000x1000.jpeg",
            category: "Wall Stickers",
            name: "3D Wall Sticker",
            price: "₹80",
        },
        {
            id: 6,
            img: "https://5.imimg.com/data5/SELLER/Default/2024/4/409824430/WE/GN/ET/28525945/3-in-1-vacuum-cleaner-250x250.jpeg",
            category: "Mini Vacuum Cleaner",
            name: "3 In 1 Car Vacuum Cleaner",
            price: "₹130",
        },
        {
            id: 7,
            img: "https://5.imimg.com/data5/SELLER/Default/2024/8/446134131/YB/GO/OR/28525945/silicone-dishwashing-gloves-250x250.jpg",
            category: "Silicone Gloves",
            name: "Silicone Dishwashing Gloves",
            price: "₹60",
        },
        {
            id: 8,
            img: "https://5.imimg.com/data5/SELLER/Default/2021/10/TE/BS/TB/28525945/silicone-shoe-cover-250x250.jpg",
            category: "Silicone Shoe Cover",
            name: "Silicone Waterproof Shoe Cover",
            price: "₹75",
        },
    ];

    const openCard = (product) => {
        navigate('/card', { state: { product } });
    }

    return (
        <section id="product1" className="section-p1">
            <h2>Featured Products</h2>
            <p>Summer Collection New Modern Design</p>
            <div className="pro-container">
                {products.map((product) => (
                    <div onClick={() => { openCard(product) }} className="pro" key={product.id}>
                        <img className="shirt" src={product.img} alt={product.name} />
                        <div className="des">
                            <span>{product.category}</span>
                            <h5>{product.name}</h5>
                            <div className="star">
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                            </div>
                            <h4>{product.price}</h4>
                        </div>
                        <a href="#"><i className="bx bx-cart cart"></i></a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductTop;
