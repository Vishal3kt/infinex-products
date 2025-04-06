import React, { useState, useEffect } from 'react';
import { ref, onValue, push } from 'firebase/database';
import { db } from '../firebase/config';
import { motion, AnimatePresence } from 'framer-motion';
import './ProductTop.css';
import CallbackForm from './CallbackForm';
import Loader from './Loader';

// Product Skeleton Component
const ProductSkeleton = () => (
    <div className="product-skeleton">
        <div className="skeleton-image"></div>
        <div className="skeleton-content">
            <div className="skeleton-title"></div>
            <div className="skeleton-price"></div>
        </div>
    </div>
);

const ProductCard = ({ product }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [showCallbackForm, setShowCallbackForm] = useState(false);
    const [isCallbackOpen, setIsCallbackOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

    const handleOpenDialog = () => {
        setIsDialogOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when dialog is open
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
        setShowCallbackForm(false);
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    };

    const handleRequestCallback = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setShowCallbackForm(prev => !prev);
    };

    const formatPrice = (price) => {
        const numPrice = typeof price === 'number' ? price : Number(price);
        if (isNaN(numPrice)) return 'Price unavailable';
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR'
        }).format(numPrice);
    };

    const calculateDiscount = (originalPrice, newPrice) => {
        if (!originalPrice || !newPrice) return 0;
        return Math.round(((originalPrice - newPrice) / originalPrice) * 100);
    };

    return (
        <>
            <motion.div
                className="product-card"
                onClick={handleOpenDialog}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                {product.isNew && <div className="new-flag">New</div>}
                <div className="product-image-container">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                        loading="lazy"
                    />
                </div>
                <div className="product-details">
                    <h3 className="product-name">{product.name}</h3>
                    <div className="price-info">
                        <p className="product-price">{formatPrice(product.price)}</p>
                        {product.originalPrice && (
                            <p className="old-price">
                                <span className="strikethrough">{formatPrice(product.originalPrice)}</span>
                                <span className="discount-tag">{calculateDiscount(product.originalPrice, product.price)}% off</span>
                            </p>
                        )}
                    </div>
                </div>
            </motion.div>

            <AnimatePresence>
                {isDialogOpen && (
                    <motion.div
                        className="dialog-overlay"
                        onClick={handleCloseDialog}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.div
                            className="dialog-container"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="dialog-content">
                                <button
                                    className="dialog-close"
                                    onClick={handleCloseDialog}
                                    aria-label="Close dialog"
                                >
                                    &times;
                                </button>

                                <div className="dialog-product-details">
                                    <div className="dialog-grid">
                                        <div className="dialog-image-container">
                                            {product.isNew && <div className="new-flag-dialog">New</div>}
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="dialog-image"
                                            />
                                        </div>
                                        <div className="dialog-info">
                                            <h2 className="dialog-product-name">{product.name}</h2>
                                            <div className="price-info">
                                                <p className="dialog-product-price">{formatPrice(product.price)}</p>
                                                {product.originalPrice && (
                                                    <p className="old-price">
                                                        <span className="strikethrough">{formatPrice(product.originalPrice)}</span>
                                                        <span className="discount-tag">{calculateDiscount(product.originalPrice, product.price)}% off</span>
                                                    </p>
                                                )}
                                            </div>

                                            <div className="dialog-description-container">
                                                <h3 className="description-title">Description</h3>
                                                <p className="dialog-product-description">{product.description}</p>
                                            </div>

                                            {product.keyFeatures && product.keyFeatures.filter(feature => feature.trim()).length > 0 && (
                                                <div className="dialog-key-features">
                                                    <h3 className="features-title">Key Features</h3>
                                                    <ul className="features-list">
                                                        {product.keyFeatures
                                                            .filter(feature => feature.trim())
                                                            .map((feature, index) => (
                                                                <li key={index} className="feature-item">
                                                                    <span className="feature-icon">✓</span>
                                                                    {feature}
                                                                </li>
                                                            ))}
                                                    </ul>
                                                </div>
                                            )}

                                            <div className="dialog-actions">
                                                <button
                                                    className="callback-button"
                                                    onClick={handleRequestCallback}
                                                >
                                                    Request Callback
                                                </button>

                                                <a
                                                    href={`https://wa.me/918088174565?text=Hi, I'm interested in ${encodeURIComponent(product.name)}.`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="whatsapp-button"
                                                >
                                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                                                    </svg>
                                                    WhatsApp
                                                </a>
                                            </div>
                                            <AnimatePresence>
                                                {showCallbackForm && (
                                                    <motion.div
                                                        className="callback-form-container"
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <CallbackForm
                                                            product={product}
                                                            onClose={() => setShowCallbackForm(false)}
                                                            onSubmit={async (data) => {
                                                                try {
                                                                    const callbacksRef = ref(db, 'callbacks');
                                                                    await push(callbacksRef, {
                                                                        ...data,
                                                                        productId: product.id,
                                                                        productName: product.name,
                                                                        timestamp: new Date().toISOString(),
                                                                        status: 'pending'
                                                                    });
                                                                    console.log("Callback request saved:", data);
                                                                    setShowCallbackForm(false);
                                                                } catch (error) {
                                                                    console.error("Error saving callback:", error);
                                                                }
                                                            }}
                                                        />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const ProductTop = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        const productsRef = ref(db, 'products');
        const unsubscribe = onValue(productsRef, (snapshot) => {
            try {
                const data = snapshot.val();
                if (data) {
                    const productsArray = Object.entries(data).map(([id, product]) => ({
                        ...product,
                        id
                    }));
                    setProducts(productsArray);
                }
                setIsLoading(false);
            } catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        }, (error) => {
            setError(error.message);
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (error) {
        return (
            <div className="error-message">
                <p>Error loading products: {error}</p>
                <button onClick={() => window.location.reload()}>Try Again</button>
            </div>
        );
    }

    return (
        <section className="products-section">
            <div className="section-header">
                <h2 className="section-title">Our Products</h2>
                <p className="section-subtitle">High quality solutions for your needs</p>
            </div>

            {isLoading ? (
                <div className="products-grid">
                    {[...Array(6)].map((_, i) => (
                        <ProductSkeleton key={i} />
                    ))}
                </div>
            ) : (
                <motion.div
                    className="products-grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </motion.div>
            )}
        </section>
    );
};

export default ProductTop;