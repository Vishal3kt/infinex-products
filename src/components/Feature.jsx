import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase/config';

const Feature = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        const featuresRef = ref(db, 'features');
        const unsubscribe = onValue(featuresRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setFeatures(Object.values(data));
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <section id="feature" className="section-p1">
            {features.map((feature) => (
                <div key={feature.id} className="fe-box">
                    <img src={feature.image} alt={feature.title} />
                    <h6>{feature.title}</h6>
                </div>
            ))}
        </section>
    );
};

export default Feature;