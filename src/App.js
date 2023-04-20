
import React, { useState, useEffect } from 'react';
import { Box, VStack, Text, Flex, Image, Button} from '@chakra-ui/react';
import TaskForm from './TaskForm';
import TaskList from './TaskList'; // You will create this component in the next step
import logo from './logo.png';
import { jsPDF } from "jspdf";
import "jspdf-autotable" 
function App() {

  const exportTasksToPdf = () => {
    const columns = ["Name", "Description", "Priority", "State"];
    const data = tasks.map((task) => [task.name, task.description, task.priority, task.state]);
  
    const pdf = new jsPDF();
    pdf.autoTable({
      head: [columns],
      body: data,
    });
    pdf.save("task-list.pdf");
  };
  
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    console.log('Stored tasks:', storedTasks);
    console.log('Parsing stored tasks:', JSON.parse(storedTasks));

    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    } else {
      setTasks([]);
    }
  }, []);

  useEffect(() => {
    console.log('Saving tasks:', tasks);
    setTimeout(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
      console.log('Tasks saved:', JSON.stringify(tasks));
    }, 100);
  }, [tasks]);


  const addTask = (task) => {
    console.trace('addTask called with:', task);
    setTasks((prevTasks) => [...prevTasks, { ...task, id: Date.now() }]);
  };

  const deleteTask = (taskId) => {
    console.trace('deleteTask called with:', taskId);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <Box minH='100vh' className="App"  backgroundColor ='#F8F8F1'>
      <Flex
      height="60px"
      // as="nav"
      // align="center"
      // justify="space-between"
      // wrap="wrap"
      // padding={4}
     
      boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      // zIndex={2}
      // position="sticky"
      // top={0}
      > 
      <Image src={logo}/>
      </Flex>
      <Flex  justifyContent="center" alignItems="center" flexDirection='column'>
      <Text fontSize="6xl">To-do List</Text>
      <Text fontWeight='extrabold' fontSize='3xl' marginBottom='30px' style={{textDecoration: 'underline', textUnderlinePosition: 'under', 
      textDecorationColor: '#FBDE3F', textDecorationThickness: '0.5em',  textUnderlineOffset: '-0.22em'}}>COR TECHNICAL CHALLENGE
     
      </Text>
    </Flex>
      <TaskForm addTask={addTask} />
      <VStack spacing={4} mt={4} id="task-list-container">
        <TaskList tasks={tasks} deleteTask={deleteTask} />
        <Button colorScheme='blue' onClick={exportTasksToPdf}>Export to PDF</Button>
      </VStack>
    </Box>
  );
}

export default App;
