import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
  HStack,
  Flex
} from '@chakra-ui/react';



const TaskForm = ({ addTask }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');
  const [state, setState] = useState('New');

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask({ name, description, priority, state });

    setName('');
    setDescription('');
    setPriority('Low');
    setState('New');
  };

  return (
    <VStack spacing={4} width="100%">

    <Box as="form" onSubmit={handleSubmit} width="30%">
      <HStack>
      <FormControl  width ='50%'>
        <FormLabel>Name:</FormLabel>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          bg='white'
        />
      </FormControl>

     
      <FormControl mb={4}width ='25%'>
        <FormLabel>Priority:</FormLabel>
        <Select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          bg='white'
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </Select>
      </FormControl>

      <FormControl mb={4} width ='25%'>
        <FormLabel>State:</FormLabel>
        <Select value={state} onChange={(e) => setState(e.target.value)} bg='white'>
          <option value="New">New</option>
          <option value="In Process">In Process</option>
          <option value="Finished">Finished</option>
        </Select>
      </FormControl>
      </HStack>

      <FormControl mb={4} width ='100%'>
        <FormLabel>Description:</FormLabel>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          bg='white'
        />
      </FormControl>

      <Flex justifyContent='flex-end'>
      <Button type="submit" bg= "#FBDE3F" fontWeight='bold' justifyContent='left'>
        Add Task
      </Button>
      </Flex>
    </Box>
    </VStack>
  );
};

export default TaskForm;
