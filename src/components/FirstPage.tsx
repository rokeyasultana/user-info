import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Container, TextField, Typography  } from '@mui/material';

//validation schema
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  phoneNumber: Yup.string()
  .matches(/^[0-9]+$/, 'Invalid Phone Number')
  .min(10, 'Phone number must be at least 10 digits')
  .max(15, 'Phone number can have maximum 15 digits')
  .required('Phone number is required'),
  email: Yup.string().email('Invalid Email').required('Email is required'),
});

const FirstPage = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      phoneNumber: '',
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      localStorage.setItem('userDetails', JSON.stringify(values));
      // Redirect to the second page
      window.location.href = '/second-page';
    },
  });

  return (
    <div style={{
      position: 'absolute', 
      left: '50%', 
      top: '20%',
      transform: 'translate(-50%, -30%)'
  }}>

    <Container maxWidth="sm">
    <Typography  variant="h4" component="h1" sx={{ mb: 4,color: 'success.blue', }}>
          Welcome! <br></br>
          Enter Your Details
        </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          fullWidth
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          sx={{ mb: 2 }}
        />

        <TextField
          id="phoneNumber"
          name="phoneNumber"
          label="Phone Number"
          variant="outlined"
          fullWidth
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          sx={{ mb: 2 }}
       />

        <TextField
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{ mb: 2 }}
       />

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
    </div>
  );
};

export default FirstPage;
