import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  FormGroup,
  Label,
} from "reactstrap";

const UpdateCart = ({ item, onSave, onClose }) => {
  const [form, setForm] = useState({ ...item });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(form);
    onClose();
  };

  return (
    <Modal isOpen={true} toggle={onClose}>
      <ModalHeader toggle={onClose}>Update Product</ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label>Name</Label>
          <Input name="name" value={form.name} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Price</Label>
          <Input name="price" type="number" value={form.price} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Sale</Label>
          <Input name="sale" type="number" value={form.sale} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Quantity</Label>
          <Input name="quantity" type="number" value={form.quantity} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Image URL</Label>
          <Input name="img" value={form.img} onChange={handleChange} />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSubmit}>
          Save
        </Button>
        <Button color="secondary" onClick={onClose}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default UpdateCart;
