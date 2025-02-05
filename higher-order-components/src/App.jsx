import { useState } from "react";
import usePage from "./hooks/usePage";
import { Box, Skeleton, Typography, Button } from "@mui/material";

const numBtn = Array.from({ length: 10 }, (_, i) => i + 1);

function App() {
  const [pageNum, setPageNum] = useState(1);
  const [imgLoaded, setImgLoaded] = useState(false);

  const {
    pageData: {
      email,
      first_name: firstName,
      last_name: lastName,
      avatar: pic,
    },
    error,
    loading,
  } = usePage(`https://reqres.in/api/users/${pageNum}`, pageNum);

  function handleClick(id) {
    setPageNum(id);
    setImgLoaded(false);
  }

  return (
    <div className="app">
      <h1>useRef Hook - API Caching</h1>

      {error && <Typography color="error">{error}</Typography>}
      <Box sx={{ width: 700, padding: 2 }}>
        <div className="card">
          {loading || !imgLoaded ? (
            <>
              <Skeleton
                variant="rectangular"
                width={200}
                height={200}
                animation="wave"
              />
              <Skeleton variant="text" animation="wave" sx={{ padding: 1 }} />
              <Skeleton variant="text" animation="wave" />
            </>
          ) : null}

          <img
            src={pic}
            alt={`${firstName} ${lastName}`}
            onLoad={() => setImgLoaded(true)}
            style={{
              display: imgLoaded ? "block" : "none",
              width: 200,
              height: 200,
              objectFit: "cover",
            }}
          />

          {!loading && imgLoaded && (
            <>
              <Typography variant="h6">
                {firstName} {lastName}
              </Typography>
              <Typography>{email}</Typography>
            </>
          )}
        </div>
      </Box>

      <div className="btns">
        {numBtn.map((btn) => (
          <Button
            key={btn}
            variant={btn === pageNum ? "contained" : "outlined"}
            sx={{ margin: "5px" }}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default App;
