import { ref, set } from 'firebase/database';
import { db } from './config.js';

const initializeDatabase = async () => {
    try {
        // Initialize features
        await set(ref(db, 'features'), initialData.features);

        // Initialize banner
        await set(ref(db, 'banner'), initialData.banner);

        // Initialize products
        await set(ref(db, 'products'), initialData.products);

        console.log('Database initialized successfully!');
    } catch (error) {
        console.error('Error initializing database:', error);
    }
};

const initialData = {
    features: [
        {
            id: 1,
            title: 'Quality Products',
            description: 'We offer high-quality industrial products',
            icon: 'quality'
        },
        {
            id: 2,
            title: 'Expert Support',
            description: '24/7 expert technical support',
            icon: 'support'
        },
        {
            id: 3,
            title: 'Fast Delivery',
            description: 'Quick and reliable delivery service',
            icon: 'delivery'
        }
    ],
    banner: {
        title: 'Super value deals',
        subtitle: 'On all products',
        description: 'save more with coupons & up to 70% off!',
        image: '/banner.jpg'
    },
    products: [
        {
            id: 1,
            name: 'Industrial Pump XP-2000',
            features: [
                'Advanced flow control system',
                'Energy-efficient operation',
                'Durable stainless steel construction',
                'Easy maintenance design',
                'Digital control interface'
            ],
            shortDescription: 'High-performance industrial pump',
            description: 'The XP-2000 is a state-of-the-art industrial pump designed for heavy-duty applications. Features advanced flow control and energy-efficient operation.',
            image: '/products/pump.jpg',
            category: 'Pumps',
            price: 24999,
            originalPrice: 29999,
            isNew: true,
            features: [
                'Advanced flow control system',
                'Energy-efficient operation',
                'Durable stainless steel construction',
                'Easy maintenance design',
                'Digital control interface'
            ]
        },
        {
            id: 2,
            name: 'Smart Control Valve CV-500',
            shortDescription: 'Precision control valve with smart features',
            description: 'The CV-500 smart control valve offers precise fluid regulation with IoT connectivity. Perfect for modern industrial automation systems.',
            image: '/products/valve.jpg',
            category: 'Valves',
            price: 18999,
            originalPrice: 21999,
            features: [
                'IoT connectivity',
                'Precise flow control',
                'Remote monitoring capability',
                'Long service life',
                'Compatible with various fluids'
            ]
        },
        {
            id: 3,
            name: 'Digital Pressure Sensor PS-100',
            shortDescription: 'High-accuracy digital pressure sensor',
            description: 'The PS-100 digital pressure sensor provides industry-leading accuracy and reliability. Features digital display and multiple output options.',
            image: '/products/sensor.jpg',
            category: 'Sensors',
            price: 12999,
            originalPrice: 15999,
            isNew: true,
            features: [
                'High-precision measurement',
                'Digital display',
                'Multiple output options',
                'Robust industrial design',
                'Easy calibration'
            ]
        },
        {
            id: 4,
            name: 'Flow Meter FM-300',
            shortDescription: 'Advanced digital flow meter',
            description: 'The FM-300 flow meter combines accuracy with versatility. Perfect for monitoring liquid flow in various industrial applications.',
            image: '/products/flowmeter.jpg',
            category: 'Meters',
            price: 16999,
            features: [
                'High accuracy measurement',
                'Digital display',
                'Multiple fluid compatibility',
                'Low maintenance design',
                'Data logging capability'
            ]
        }
    ]
};

export default initializeDatabase;
