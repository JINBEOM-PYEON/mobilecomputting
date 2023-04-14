import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const MyForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleSubmit = () => {
    fetch('http://34.64.185.101/submit.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`,
  })
    .then((response) => response.text())
    .then((responseText) => {
      console.log(responseText);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <View>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={handleNameChange}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default MyForm;
