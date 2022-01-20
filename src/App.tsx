import { Container, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { api } from "./services/api";

function App() {
  const [category, setCategory] = useState("all");
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    async function getPosts(): Promise<void> {
      try {
        await api.get(`news?category=${category}`).then((res) => {
          setPosts(res.data.data);
        });
      } catch (error) {}
    }
    getPosts();
  }, [category]);
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };
  // const posts = await api.get(`${category}`);
  //   console.log(posts);
  return (
    <div>
      <Header />
      <div style={{ margin: 20 }}>
        <text style={{ marginLeft: 20, fontSize: 18 }}>Categoria: </text>
        <Select value={category} onChange={handleChange}>
          <MenuItem defaultChecked value="all">
            Tudo
          </MenuItem>
          <MenuItem value="national">Nacional</MenuItem>
          <MenuItem value="business">Negócios</MenuItem>
          <MenuItem value="sports">Esportes</MenuItem>
          <MenuItem value="world">Mundo</MenuItem>
          <MenuItem value="politics">Política</MenuItem>
          <MenuItem value="technology">Tecnologia</MenuItem>
          <MenuItem value="startup">Startup</MenuItem>
          <MenuItem value="entertainment">Entretenimento</MenuItem>
          <MenuItem value="miscellaneous">Diversos</MenuItem>
          <MenuItem value="hatke">Hakte</MenuItem>
          <MenuItem value="science">Ciência</MenuItem>
          <MenuItem value="automobile">Automóvel</MenuItem>
        </Select>
        <div>
          {posts?.map((post) => (
            <Card
              author={post.author}
              content={post.content}
              id={post.id}
              title={post.title}
              key={post.id}
              date={post.date}
              imageUrl={post.imageUrl}
              readMoreUrl={post.readMoreUrl}
              time={post.time}
              url={post.url}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
