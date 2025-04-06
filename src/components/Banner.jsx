import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase/config';

const Banner = () => {
    const [bannerData, setBannerData] = useState({
        title: '',
        subtitle: '',
        buttonText: ''
    });

    useEffect(() => {
        const bannerRef = ref(db, 'banner');
        const unsubscribe = onValue(bannerRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setBannerData(data);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <section id="banner" className="section-m1">
            <h4>{bannerData.title}</h4>
            <h2>{bannerData.subtitle}</h2>
            <button className="normal">{bannerData.buttonText}</button>
        </section>
    );
};

export default Banner;