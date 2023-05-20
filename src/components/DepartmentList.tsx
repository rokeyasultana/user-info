import React from 'react';
import { Box, Button, List, ListItem, ListItemText, Typography } from '@mui/material';

const departmentData = [
  {
    id: 1,
    name: 'Department 1',
    subDepartments: [
      { id: 11, name: 'Subdepartment 1.1' },
      { id: 12, name: 'Subdepartment 1.2' },
      { id: 12, name: 'Subdepartment 1.3' },
      { id: 12, name: 'Subdepartment 1.4' },
      { id: 12, name: 'Subdepartment 1.5' },
      { id: 12, name: 'Subdepartment 1.6' }
    ],
  },
  {
    id: 2,
    name: 'Department 2',
    subDepartments: [
      { id: 21, name: 'Subdepartment 2.1' },
      { id: 22, name: 'Subdepartment 2.2' },
      { id: 22, name: 'Subdepartment 2.3' },
      { id: 22, name: 'Subdepartment 2.4' },
      { id: 22, name: 'Subdepartment 2.5' },
      { id: 22, name: 'Subdepartment 2.6' }
    ],
  },
];

const DepartmentList = () => {
  const [expandedDepartment, setExpandedDepartment] = React.useState<number | null>(null);

  const handleExpand = (departmentId: number) => {
    setExpandedDepartment((prevExpandedDepartment) =>
      prevExpandedDepartment === departmentId ? null : departmentId
    );
  };

  return (
    <Box sx={{ maxWidth: 400, margin: '0 auto' }}>
      <Typography variant="h6" gutterBottom>
        Department List
      </Typography>
      <List component="nav">
        {departmentData.map((department) => (
          <React.Fragment key={department.id}>
            <ListItem disablePadding>
              <Button
                onClick={() => handleExpand(department.id)}
                sx={{ width: '100%', justifyContent: 'flex-start' }}
              >
                <ListItemText primary={department.name} />
              </Button>
            </ListItem>
            {expandedDepartment === department.id && (
              <List component="div" disablePadding>
                {department.subDepartments.map((subDepartment) => (
                  <ListItem key={subDepartment.id} sx={{ pl: 4 }}>
                    <ListItemText primary={subDepartment.name} />
                  </ListItem>
                ))}
              </List>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default DepartmentList;
