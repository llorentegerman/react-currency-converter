import React from 'react';
import { Column } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import InputComponent from './components/InputComponent';
import LoadingComponent from './components/LoadingComponent';
import IconDollar from './assets/dollar';
import IconEuro from './assets/euro';
import IconYen from './assets/yen';
import './App.css';

const styles = StyleSheet.create({
    container: {
        minHeight: '100vh',
        height: '100%'
    },
    title: {
        color: 'white',
        fontFamily: `sans-serif`
    }
});

function App() {
    return (
        <Column
            horizontal="center"
            vertical="center"
            className={css(styles.container)}
        >
            <LoadingComponent loading={false} />
            <h2 className={css(styles.title)}>CURRENCY CONVERTER</h2>
            <InputComponent Icon={IconDollar} iconText={'Dollar'} />
            <InputComponent Icon={IconEuro} iconText={'Euro'} />
            <InputComponent Icon={IconYen} iconText={'Yen'} />
        </Column>
    );
}

export default App;
