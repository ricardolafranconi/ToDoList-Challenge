import React, { useState } from 'react';
import {
  Box,
  Button,
  HStack,
  
  Text,
  VStack,
  Spacer,
 
} from '@chakra-ui/react';



const Task = ({ task, deleteTask }) => {
  const [priority, setPriority] = React.useState(task.priority);
  const [state, setState] = React.useState(task.state);
  const [isDone, setIsDone] = useState(false);
  return (
    <Box
      border="1px solid"
      borderColor="gray.200"
      borderRadius="md"
      width="100%"
      p={4}
      bg="#54595F"
    >
      <VStack align="start" spacing={2}>
      <HStack width='80%'>
    <Text color="#F8F8F1" fontWeight='bold' fontSize='l'>Priority: {priority}</Text>
    <Spacer />
    <Text color="#F8F8F1" fontWeight='bold' fontSize='l'>State: {state}</Text>
  </HStack>
  <Text fontWeight="bold" color="#F8F8F1" fontSize="2xl"  textDecoration={isDone ? 'line-through' : 'none'}
  opacity={isDone ? 0.5 : 1}>
    {task.name}
  </Text>
  <Text color="#F8F8F1" fontSize='xl'>{task.description}</Text>
        
        {/* <Select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          mb={2}
          bgColor='white'
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </Select>
        <Select
        
          value={state}
          onChange={(e) => setState(e.target.value)}
          mb={2}
          bgColor='white'
        >
          <option value="new">New</option>
          <option value="in_process">In Process</option>
          <option value="finished">Finished</option>
        </Select> */}
        <HStack width='100%' justifyContent='space-around'>
        
        <Button onClick={() => setIsDone(!isDone)} colorScheme="green" size="sm">
  Done
</Button>
<Button size="sm" colorScheme="red" onClick={() => deleteTask(task.id)}>
          Delete
        </Button>
</HStack>
      </VStack>
    </Box>
  );
};

export default Task;
