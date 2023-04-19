import React, {useState} from 'react';
import { VStack, Box, HStack, FormControl, Select, Text } from '@chakra-ui/react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask }) => {

  const [taskState, setState] = useState('all');
  const [priority, setPriority] = useState('all');

  const filteredTasks = tasks.filter((task) => {
    const stateCondition = taskState === 'all' || task.state === taskState;
    const priorityCondition = priority === 'all' || task.priority === priority;

    return stateCondition && priorityCondition;
  });

  console.log('Filtered tasks:', filteredTasks);

  return (
    <VStack spacing={4} width="30%" justifyContent='space-around' >
        <Box width="100%">
          <Text fontSize='3xl' align='center' marginBottom='30px'>
            Filter by:
          </Text>
        <HStack width='100%'>
          <FormControl width='100%'>
            <HStack>
            
            <Select value={taskState} onChange={(e) => setState(e.target.value)} bg='white'>
              <option value="all">State</option>
              <option value="new">New</option>
              <option value="in_process">In Process</option>
              <option value="finished">Finished</option>
            </Select>
         
           
            <Select value={priority} onChange={(e) => setPriority(e.target.value)} bg='white'>
              <option value="all">Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Select>
            </HStack>

          </FormControl>
        </HStack>

        </Box>
        <VStack spacing={4} width="100%" id="task-cards-container" maxH="600px" overflowY="scroll">
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} deleteTask={deleteTask} />
      ))}
      </VStack>
      <Box>

      </Box>
    </VStack>

  );
};

export default TaskList;
