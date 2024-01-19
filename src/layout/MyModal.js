import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const MyModal = ({ show, onClose }) => {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Мое модальное окно</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Привет, это содержимое модального окна!</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Закрыть
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MyModal;
