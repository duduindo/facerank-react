
import React from 'react';
import { Content, DataTable, TableHeader, Grid, Cell, List, ListItem } from 'react-mdl';


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


class Small extends React.Component {
  render() {
    return <small className="mdl-small--list-locals">{ this.props.children }</small>;
  }
}


class Preferences extends React.Component {

  render() {
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
            <List className="mdl-list--list-locals">
              <ListItem>
                <h6>País -
                  <Small><i>Você está em</i> 1000550º lugar</Small>
                </h6>
                <p>Brasil</p>
              </ListItem>

              <ListItem>
                <h6>Estado -
                  <small className="mdl-small--list-locals">
                    <i>Você está em</i> 78998º lugar
                  </small>
                </h6>
                <p>São paulo</p>
              </ListItem>

              <ListItem>
                <h6>Cidade -
                  <small className="mdl-small--list-locals">
                    <i>Você está em</i> 998º lugar
                  </small>
                </h6>
                <p>Carapicuíba</p>
              </ListItem>

              <ListItem>
                <h6>Escola -
                  <small className="mdl-small--list-locals">
                    <i>Você está em</i> 8º lugar
                  </small>
                </h6>
                <p>Elisabeth dos Santos Silvas</p>
              </ListItem>
            </List>

          </Cell>
        </Grid>
      </Content>
    );
  }
}


Small.propTypes = {
  children: React.PropTypes.element,
};


Small.defaultProps = {
  children: '',
};


export default Preferences;
