import React from 'react';

// function TableRow(props) {
//     return (
//         < tr >
//             <th scope="col">{props.id}</th>
//     <th scope="col">{props.name}</th>
//     <th scope="col">{props.salary}</th>
//     <th scope="col">{props.age}</th>
//         </tr >
//     )
// }


function TableRow({id,name,salary,age}) {
    return (
        < tr >
            <th scope="col">{id}</th>
    <th scope="col">{name}</th>
    <th scope="col">{salary}</th>
    <th scope="col">{age}</th>
        </tr >
    )
}

export default TableRow;