import React from 'react';

class Table extends React.Fragment {
    render(){
        return (
            <table>
                <thead>
                    <tr>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a</td>
                        <td>a</td>
                        <td>a</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Table;