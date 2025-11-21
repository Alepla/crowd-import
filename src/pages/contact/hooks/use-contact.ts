import { useState } from 'react';
import { useIntl } from 'react-intl';
import { FORM_STATUS, FormStatus } from '../types';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const useContact = () => {
  const { formatMessage } = useIntl();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<FormStatus>(FORM_STATUS.IDLE);

  const intl = {
    title: formatMessage({ id: 'contact.title' }),
    subtitle: formatMessage({ id: 'contact.subtitle' }),
    name: formatMessage({ id: 'contact.name' }),
    namePlaceholder: formatMessage({ id: 'contact.namePlaceholder' }),
    email: formatMessage({ id: 'contact.email' }),
    emailPlaceholder: formatMessage({ id: 'contact.emailPlaceholder' }),
    subject: formatMessage({ id: 'contact.subject' }),
    subjectPlaceholder: formatMessage({ id: 'contact.subjectPlaceholder' }),
    message: formatMessage({ id: 'contact.message' }),
    messagePlaceholder: formatMessage({ id: 'contact.messagePlaceholder' }),
    sendButton: formatMessage({ id: 'contact.sendButton' }),
    sending: formatMessage({ id: 'contact.sending' }),
    successMessage: formatMessage({ id: 'contact.successMessage' }),
    errorMessage: formatMessage({ id: 'contact.errorMessage' }),
    required: formatMessage({ id: 'contact.required' }),
    contactInfo: formatMessage({ id: 'contact.contactInfo' }),
    emailLabel: formatMessage({ id: 'contact.emailLabel' }),
    phoneLabel: formatMessage({ id: 'contact.phoneLabel' }),
    addressLabel: formatMessage({ id: 'contact.addressLabel' }),
    subjectGeneral: formatMessage({ id: 'contact.subjectGeneral' }),
    subjectProduct: formatMessage({ id: 'contact.subjectProduct' }),
    subjectSupport: formatMessage({ id: 'contact.subjectSupport' }),
    subjectPartnership: formatMessage({ id: 'contact.subjectPartnership' }),
    address: formatMessage({ id: 'contact.address' })
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(FORM_STATUS.IDLE);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus(FORM_STATUS.SUCCESS);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus(FORM_STATUS.ERROR);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isSuccess = submitStatus === FORM_STATUS.SUCCESS;
  const isError = submitStatus === FORM_STATUS.ERROR;
  const submitButtonText = isSubmitting ? intl.sending : intl.sendButton;

  const subjectOptions = [
    { value: '', label: intl.subjectPlaceholder },
    { value: 'general', label: intl.subjectGeneral },
    { value: 'product', label: intl.subjectProduct },
    { value: 'support', label: intl.subjectSupport },
    { value: 'partnership', label: intl.subjectPartnership }
  ];

  return {
    formData,
    isSubmitting,
    submitStatus,
    intl,
    handleChange,
    handleSubmit,
    isSuccess,
    isError,
    submitButtonText,
    subjectOptions
  };
};

