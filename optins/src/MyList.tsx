import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => (
    <div style={style}>
        Row {index + 1}
    </div>
);

const MyList = () => (
    <List
        height={300} // Height of the list container
        itemCount={1000} // Total number of rows
        itemSize={35} // Height of each row
        width={300} // Width of the list
    >
        {Row}
    </List>
);

export default MyList;
