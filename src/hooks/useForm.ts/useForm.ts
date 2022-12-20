import { ChangeEvent, useState } from 'react';

export const useForm = <T>(initState: T) => {
  const [formData, setFormData] = useState(initState);

  const onChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormData({ ...initState });
  };

  return {
    ...formData,
    formData,
    onChange,
    resetForm,
  };
};
