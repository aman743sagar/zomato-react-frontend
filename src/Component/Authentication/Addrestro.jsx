import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import {createClient} from '@supabase/supabase-js';
const supabaseUrl='https://mcugurnnyvgrvwkvnvgm.supabase.co';
const supabaseKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jdWd1cm5ueXZncnZ3a3ZudmdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwMTM5OTcsImV4cCI6MjAyNjU4OTk5N30.HUOWz0HuytQiGlq03o9nfphckrtnpybuCBUdxRAuaOc'
const supabase = createClient(supabaseUrl, supabaseKey);

const AddRestaurantForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 10% auto;
  border:0.5px solid gray;
  padding:2%;
  border-radius: 4px;
`;

const InputField = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #E03546;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;


const Heading= styled.h1 `
display: flex;
color: #E03546;
margin: 5% auto;
`;

const AddRestaurant = () => {
  const [restaurantData, SetRestaurantData] = useState({
    name: '',
    address: '',
    descriptions: '',
    image: '',
    ContactNo: '',
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    SetRestaurantData({ ...restaurantData, image: file });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetRestaurantData({ ...restaurantData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Upload image to Supabase
      const { data, error } = await supabase.storage.from('zomato').upload('restaurant_images/' + restaurantData.image.name, restaurantData.image);
      if (error) {
        throw error;
      }
      // https://fzdfcdjjbsnwmdvxhfrh.supabase.co/storage/v1/object/public/zomato/restaurant_images/india-flag.jpg
      // Get the URL of the uploaded image
      const imageUrl = `${supabaseUrl}/storage/v1/object/public/zomato/restaurant_images/${restaurantData.image.name}`;
      console.log(imageUrl,"blocking zzzzzzz");
      // Save restaurant data to MongoDB with image URL
      const response = await axios.post('http://localhost:7000/api/restro', { ...restaurantData, image:imageUrl });
      if (response) {
        alert('Restaurant added successfully');
        // Reset form fields
        SetRestaurantData({
          name: '',
          address: '',
          descriptions: '',
          image: '',
          ContactNo: ''
        });
      } else {
        alert('Failed to add restaurant');
      }
    } catch (error) {
      console.error('Error adding restaurant:', error);
      alert('Failed to add restaurant');
    }
  };

  return (
    <AddRestaurantForm onSubmit={handleSubmit}>
      <Heading>Add Restaurant</Heading>
      <InputField
        type="text"
        name='name'
        placeholder="Restaurant Name"
        value={restaurantData.name}
        onChange={handleChange}
        required
      />
      <InputField
        placeholder="Description"
        name='descriptions'
        value={restaurantData.descriptions}
        onChange={handleChange}
        required
      />
      <InputField
        type="text"
        name='ContactNo'
        placeholder="Contact Number"
        value={restaurantData.ContactNo}
        onChange={handleChange}
        required
      />
      <InputField
        type="text"
        name='address'
        placeholder="Address"
        value={restaurantData.address}
        onChange={handleChange}
        required
      />
      <InputField
        type="file"
        name='image'
        accept="image/*"
        onChange={handleImageChange}
        required
      />
      <SubmitButton type="submit">Add Restaurant</SubmitButton>
    </AddRestaurantForm>
  );
};

export default AddRestaurant;
//bFZCd5Y1nW619ufh


///project url
///https://mcugurnnyvgrvwkvnvgm.supabase.co


////api key
/////eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jdWd1cm5ueXZncnZ3a3ZudmdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwMTM5OTcsImV4cCI6MjAyNjU4OTk5N30.HUOWz0HuytQiGlq03o9nfphckrtnpybuCBUdxRAuaO