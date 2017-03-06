
import React from 'react';
import { Content, DataTable, TableHeader, Grid, Cell } from 'react-mdl';
import BoxLocal from '../includes/Box-local';

const css = {
  content: {
    width: '100%',
  },

  dataTable: {
    width: '100%',
  },

  h2: {
    fontSize: '1.5em',
    margin: '10px 0',
  },
};


class Preferences extends React.Component {

  render() {
    const b = true;

    return (
      <Content style={css.content}>
        <Grid>
          <Cell col={12}>
            <h2 style={css.h2}>Mostrar:</h2>
            <DataTable
              selectable
              style={css.dataTable}
              shadow={0}
              rowKeyColumn="id"
              rows={[
                { id: 1001, gender: 'Mulheres' },
                { id: 1002, gender: 'Homens' },
              ]}
            >
              <TableHeader name="gender" tooltip="Qual é a sua preferência?">
                Selecionar tudo
              </TableHeader>
            </DataTable>
          </Cell>
        </Grid>

        <Grid>
          <Cell col={12}>
            <h2 style={css.h2}> Sorteio por locais: </h2>
            <BoxLocal
              rank={'989464664'}
              views={'55886644'}
              local={'Brasil'}
              typeLocal={'País'}
              indexLocal={'country'}
              config={b}
            />

            <BoxLocal
              rank={'989'}
              views={'808110'}
              local={'São Paulo'}
              typeLocal={'Estado'}
              indexLocal={'state'}
              config={b}
            />

            <BoxLocal
              rank={'121211'}
              views={'40110'}
              local={'Carapicuíba'}
              typeLocal={'Cidade'}
              indexLocal={'city'}
              config={b}
            />

            <BoxLocal
              rank={'546'}
              views={'1001'}
              local={'Elisabeth Silva de Araújo'}
              typeLocal={'Escola'}
              indexLocal={'school'}
              config={b}
            />

          </Cell>
        </Grid>
      </Content>
    );
  }
}


export default Preferences;
