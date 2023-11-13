// BlogForm.js
import { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreateBlog = () => {
    // Implement logic to create a blog post (e.g., send data to backend)
    console.log("Blog Created:", { title, content });
    // Reset form fields
    setTitle("");
    setContent("");
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Create a New Blog
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Blog Title"
            name="title"
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            multiline
            rows={6}
            id="content"
            label="Blog Content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button
            type="button" // Change to "submit" if you are submitting the form to a backend
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleCreateBlog}
          >
            Create Blog
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default BlogForm;
