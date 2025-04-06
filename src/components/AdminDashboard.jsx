import React, { useState, useEffect } from 'react';
import Loader from './Loader';

const AdminDashboard = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                // Your API calls here
                // const response = await fetch('your-api-endpoint');
                // const result = await response.json();
                // setData(result);

                // Simulating API call with timeout
                setTimeout(() => {
                    setData({});
                    setLoading(false);
                }, 2000);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <Loader text="Loading dashboard data..." />;
    }

    return (
        <div className="admin-dashboard">
            {/* Your dashboard content here */}
        </div>
    );
};

export default AdminDashboard; 