import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DepartmentList from './DepartmentList';

interface Post {
  id: number;
  title: string;
  body: string;
}

const SecondPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'body', headerName: 'Body', width: 400 },
  ];

  return (
    <div 
    style={{ height: 500,
             width: '100%',
             marginLeft:'250px',
             top: '10%' }}>
      <DataGrid columns={columns} rows={posts} />
      <div style={{
       marginTop:"50px",
       marginBottom:"50px"
    }}>
    <DepartmentList />
    </div>
    </div>
  );
};

export default SecondPage;

