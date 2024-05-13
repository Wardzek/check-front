import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { mutationCreateCountry } from '@/graphql/mutationCreateCountry';

const CountryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    emoji: '',
  });

  const [createCountry, { loading, error }] = useMutation(mutationCreateCountry);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createCountry({ variables: formData })
      .then((response) => {
        console.log('Country created successfully:', response.data.mutationCreateCountry);
        setFormData({
          name: '',
          code: '',
          emoji: '',
        });
      })
      .catch((error) => {
        console.error('Error creating country:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Country Name"
      />
      <input
        type="text"
        name="code"
        value={formData.code}
        onChange={handleChange}
        placeholder="Country Code"
      />
      <input
        type="text"
        name="emoji"
        value={formData.emoji}
        onChange={handleChange}
        placeholder="Country Emoji"
      />
      <button type="submit" disabled={loading}>Add Country</button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};

export default CountryForm;
