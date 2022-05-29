import React, {FC, ReactElement} from 'react';

import './Table.scss';

interface IProps {
    headers: string[];
    bodies: {[index: string]: ReactElement}[];
}

const Table: FC<IProps> = ({headers, bodies}) => {
    const headersContent = headers.map((x, i) => <th key={i}>{x}</th>);
    const bodiesContent = bodies.map((x, i) => {
        const values = Object.values(x).map((d, j) => <td key={j}>{d}</td>);
       return (
           <tr key={i}>
               {values}
           </tr>
       )
    });
    return (
        <table className='g--12 card'>
            <thead className="table-header">
                <tr>
                    {headersContent}
                </tr>
            </thead>
            <tbody>
                {bodiesContent}
            </tbody>
        </table>
    );
};

export default Table;