import { useCallback, useRef, useState } from "react"

function App() {
  const [items, setItems] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const loadMoreItems = () => {
    setTimeout(() => {
      setItems((prevItems) => [
        ...prevItems,
        ...Array.from({ length: 20 }),
      ]);
      if (items.length >= 100) {
        setHasMore(false); // Stop loading after 100 items
      }
    }, 1000);
  };

  const lastItemRef = useCallback(function (node) {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting & hasMore) {
        loadMoreItems();
      }
    })
    if (node) observer.current.observe(node)
  }, [hasMore])

  return (
    <div>
      <h1>Infinite Scroll</h1>
      {items.map((_, i) => <div key={i} ref={items.length === i + 1 ? lastItemRef : null} >
        Item {i + 1}
      </div>)}
      {!hasMore && <p>Has no more items</p>}
    </div>
  )
}

export default App
