import { useEffect, useRef, useState } from "react";
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
  } = usePage(`https://reqres.in/api/users/${pageNum}`);

  const numClicks = useRef(0);

  function handleClick(id) {
    numClicks.current += 1;
    setPageNum(id);
    setImgLoaded(false); // Reset image loading state
  }

  return (
    <div className="app">
      <h1>useRef Hook</h1>

      {error && <Typography color="error">{error}</Typography>}
      <Box sx={{ width: 700, padding: 2 }}>
        <div className="card">
          {/* Show skeleton while loading */}
          {loading || !imgLoaded ? (
            <>
              <Skeleton
                variant="rectangular"
                width={200}
                height={200}
                animation="wave"
              />
              <Skeleton variant="text" animation="wave" />
              <Skeleton variant="text" animation="wave" />
            </>
          ) : null}

          {/* Image should always be in the DOM */}
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

          {/* Show text only when data is available and image has loaded */}
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
