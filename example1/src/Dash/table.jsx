// src/Dash/table.jsx

import { useState } from 'react';

function MyTable() {
    const initialData = [
        { no: 1, name: 'Sonasss', age: 22 },
        { no: 2, name: 'Anu', age: 23 },
        { no: 3, name: 'Fasu', age: 24 },
    ];

    const additionalData = [
        { no: 4, name: 'Haritha', age: 21 },
        { no: 5, name: 'Aishu', age: 22 },
        { no: 6, name: 'nimmi', age: 25 },
    ];

    const [data, setData] = useState(initialData);
    const [index, setIndex] = useState(0);

    const addData = () => {
        if (index < additionalData.length) {
            setData([...data, additionalData[index]]);
            setIndex(index + 1);
        } else {
            alert('No more data to add');
        }
    };

    return (
        <div>
            <table border={2}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.no}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={addData}>Add Data</button>
        </div>
    );
}

export default MyTable;

