import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Card.css";
import { Dialog, DialogTitle, DialogContent, TextField, Button, DialogActions } from "@mui/material";

const Card = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const product = location.state?.product;

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit = () => {
        alert("Number submitted!");
        setOpen(false);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="product-card">
            <button className="back-button" onClick={() => navigate("/")}>
                <i className="bx bx-arrow-back"></i> Back
            </button>
            <img src={product.img} alt={product.name} className="product-image" />
            <div className="product-content">
                <h2>{product.name}</h2>
                <p>Category: {product.category}</p>
                <h3>Price: {product.price}</h3>
                <button className="callback-button" onClick={handleOpen}>
                    <i className="bx bxs-phone-call"></i> Request a Callback
                </button>
                <div className="separator">
                    <span>OR</span>
                </div>
                <a
                    href="https://wa.me/9739750841"
                    className="whatsapp-contact"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="bx bxl-whatsapp"></i> Contact us on WhatsApp (9739750841)
                </a>
            </div>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Request a Callback</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Enter your phone number"
                        type="text"
                        fullWidth
                        variant="outlined"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Card;
