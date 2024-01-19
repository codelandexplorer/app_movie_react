import React, { useState } from 'react';
import MyModal from '../../layout/MyModal';

const MoreBtn = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button
                onClick={handleButtonClick}
                className="btn btn-success mt-auto">
                Подробнее
            </button>
            <MyModal show={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default MoreBtn;
