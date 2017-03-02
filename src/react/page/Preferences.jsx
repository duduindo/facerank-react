
import React from 'react';
import { Grid, Row, Column } from 'react-cellblock';
import { Content, DataTable, TableHeader } from 'react-mdl';


const style = {
  Content: {
    width: '100%',
  },

  DataTable: {
    width: '100%',
  },
};


class Preferences extends React.Component {
  render() {
    return (
      <Content style={style.Content}>
        <Grid>
          <Row>
            <Column width="1/1" gutterWidth="20">
              <DataTable
                selectable
                style={style.DataTable}
                shadow={0}
                rowKeyColumn="id"
                rows={[
                  { id: 1001, sexo: 'Mulheres' },
                  { id: 1002, sexo: 'Homens' },
                ]}
              >
                <TableHeader name="sexo" tooltip="Qual é a sua preferência?">
                  Selecionar tudo
                </TableHeader>
              </DataTable>
            </Column>
          </Row>
        </Grid>
      </Content>
    );
  }
}

export default Preferences;
