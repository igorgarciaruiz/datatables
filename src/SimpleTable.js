
import React from 'react';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';

class SimpleTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: ['Column 1', 'Column 2', 'Column 3'],
            rows: [
                ['One', 'Two', 'Three'],
                ['Four', 'Five', 'Six']
            ]
        };
    }

    render() {
        const { columns, rows } = this.state;

        return (
            <Table caption="Simple Table" cells={columns} rows={rows}>
                <TableHeader />
                <TableBody />
            </Table>
        );
    }
}

export default SimpleTable;
