import { gql } from '@apollo/client';
import { Button, createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import { useState } from 'react';
import Layout from '../components/layout';
import { usePlayersQuery } from '../gen/graphql-types';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        list: {
            minWidth: theme.breakpoints.values.sm,
            [theme.breakpoints.down('xs')]: {
                width: '100%',
                minWidth: 100,
            },
        },
        root: {
            padding: '2em',
        },
        linkButton: {
            marginLeft: '1em',
        },
    })
);

// export const QUERY_TOOLS = gql`
//     query Tools {
//         tools(orderBy: { name: asc }) {
//             id
//             name
//             description
//             link
//             image
//         }
//     }
// `;

export const QUERY_PLAYERS = gql`
    # Write your query or mutation here
    query Players {
        players {
            playerId
            name
        }
    }
`;

export default function Home() {
    const [dialogOpen, setDialogOpen] = useState(false);
    // CSR(Client-side rendering) example
    const { data } = usePlayersQuery();
    const classes = useStyles();

    return (
        <>
            <Layout title="Next.js example">
                <Grid container spacing={4} direction="column" className={classes.root}>
                    <Grid item container spacing={4} direction="column">
                        <Grid item container spacing={4} alignContent="center" justify="center" direction="column">
                            <Grid item container justify="center">
                                <Typography variant="h5" component="h2">
                                    Players {data?.players.map((player) => `${player.name}, `)}
                                </Typography>
                            </Grid>
                            <Grid item container justify="center">
                                <Button variant="contained" color="primary" onClick={() => setDialogOpen(true)}>
                                    Create
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid item container justify="center"></Grid>
                    </Grid>
                </Grid>
            </Layout>
        </>
    );
}
