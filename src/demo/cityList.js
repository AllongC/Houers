import React, { Component } from "react";
import { List } from 'react-virtualized';


const list = [
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    // And so on...
];

function rowRenderer({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style, // Style object to be applied to row (to position it)
}) {
    return (
        <div key={key} style={style}>
            {list[index]}
        </div>
    );
}

const CityLists = () => <List
    width={window.innerWidth}
    height={window.innerHeight}
    rowCount={list.length}
    rowHeight={50}
    rowRenderer={rowRenderer}
/>

export default CityLists