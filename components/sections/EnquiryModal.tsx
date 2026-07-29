'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import { EnquiryForm } from '@/components/sections/EnquiryForm';
import { useModal } from '@/context/ModalContext';

export function EnquiryModal() {
  const { isOpen, closeModal } = useModal();

  return (
    <Modal isOpen={isOpen} onClose={closeModal} title="Enquire for Enterprise Training">
      <EnquiryForm />
    </Modal>
  );
}
