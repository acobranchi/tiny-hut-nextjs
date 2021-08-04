import { AppBar, createStyles, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import { Menu, More, Search } from '@material-ui/icons';
import Head from 'next/head';
import React, { ReactElement } from 'react';

const useStyles = makeStyles((theme) =>
    createStyles({
        text: {
            padding: theme.spacing(2, 2, 0),
        },
        main: {
            [theme.breakpoints.down('sm')]: {
                paddingBottom: 50,
            },
            [theme.breakpoints.up('md')]: {
                paddingTop: 50,
            },
        },
        list: {
            marginBottom: theme.spacing(2),
        },
        subheader: {
            backgroundColor: theme.palette.background.paper,
        },
        appBar: {
            [theme.breakpoints.down('sm')]: {
                top: 'auto',
                bottom: 0,
            },
        },
        grow: {
            flexGrow: 1,
        },
        fabButton: {
            position: 'absolute',
            zIndex: 1,
            top: -30,
            left: 0,
            right: 0,
            margin: '0 auto',
        },
    })
);

interface LayoutProps {
    children: ReactElement[] | ReactElement | string;
    title: string;
}

const Layout = ({ children, title }: LayoutProps): ReactElement => {
    const classes = useStyles();

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="open drawer">
                        <Menu />
                    </IconButton>
                    <div className={classes.grow} />
                    <IconButton color="inherit">
                        <Search />
                    </IconButton>
                    <IconButton edge="end" color="inherit">
                        <More />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <main className={classes.main}>{children}</main>
        </>
    );
};

export default Layout;
