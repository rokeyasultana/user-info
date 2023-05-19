import { useEffect, useState } from 'react';
import { DataGrid, GridColumns } from '@mui/x-data-grid';

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

  const columns: GridColumns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'body', headerName: 'Body', width: 400 },
  ];

  return (
    <div style={{
        position: 'absolute', 
        left: '50%', 
        top: '60%',
        transform: 'translate(-50%, -30%)'
    }}>
     <DataGrid rows={posts} columns={columns} />
 
    </div>
  );
};

export default SecondPage;
