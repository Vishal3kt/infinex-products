import React, { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../firebase/config';
import './ProductTop.css';

const CallbackForm = ({ product, onSubmit, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
            newErrors.phone = 'Invalid phone number';
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        
        if (Object.keys(newErrors).length === 0) {
            setIsSubmitting(true);
            try {
                const productInfo = product ? { productId: product.id, productName: product.name } : {};
                const callbackData = {
                    ...formData,
                    ...productInfo,
                    timestamp: new Date().toISOString(),
                    status: 'pending'
                };
                
                const callbackRef = ref(db, 'callbacks');
                await push(callbackRef, callbackData);
                
                onSubmit(callbackData);
                setFormData({ name: '', phone: '', message: '' });
            } catch (error) {
                console.error('Error saving callback request:', error);
                setErrors({ submit: 'Failed to submit request. Please try again.' });
            } finally {
                setIsSubmitting(false);
            }
        } else {
            setErrors(newErrors);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    return (
        <form className="callback-form-small" onSubmit={handleSubmit}>
            <div className="form-header">
                <h3>Request Callback</h3>
                {onClose && (
                    <button type="button" className="close-btn" onClick={onClose}>
                        ×
                    </button>
                )}
            </div>
            <div className="form-content">
                <input
                    type="text"
                    name="name"
                    className={`form-field ${errors.name ? 'error' : ''}`}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                />
                {errors.name && <div className="field-error">{errors.name}</div>}
                
                <input
                    type="tel"
                    name="phone"
                    className={`form-field ${errors.phone ? 'error' : ''}`}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                />
                {errors.phone && <div className="field-error">{errors.phone}</div>}
                
                <textarea
                    name="message"
                    className="form-field"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message (Optional)"
                    rows="2"
                ></textarea>
                
                {errors.submit && <div className="field-error">{errors.submit}</div>}
                
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </div>
        </form>
    );
};

export default CallbackForm;
