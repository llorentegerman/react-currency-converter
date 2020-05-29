import React, { useState } from 'react';
import { Column } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import { useAsync } from 'react-async';
import InputComponent from './components/InputComponent';
import LoadingComponent from './components/LoadingComponent';
import IconDollar from './assets/dollar';
import IconEuro from './assets/euro';
import IconYen from './assets/yen';
import CurrenciesRatesClient from './clients/CurrenciesRatesClient';
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
    const [currentValues, setCurrentValues] = useState({
        dollar: '',
        euro: '',
        yen: ''
    });

    const { data: rates, isPending: loading } = useAsync({
        promiseFn: CurrenciesRatesClient.getRates
    });

    const onChange = (currency, value) => {
        const newDollar =
            currency === 'dollar'
                ? value
                : ((value * rates['dollar']) / rates[currency]).toFixed(2);
        const newEuro =
            currency === 'euro'
                ? value
                : ((value * rates['euro']) / rates[currency]).toFixed(2);
        const newYen =
            currency === 'yen'
                ? value
                : ((value * rates['yen']) / rates[currency]).toFixed(2);
        setCurrentValues({
            dollar: newDollar,
            euro: newEuro,
            yen: newYen
        });
    };

    return (
        <Column
            horizontal="center"
            vertical="center"
            className={css(styles.container)}
        >
            <LoadingComponent loading={loading} />
            <h2 className={css(styles.title)}>CURRENCY CONVERTER</h2>
            <InputComponent
                Icon={IconDollar}
                iconText={'Dollar'}
                onChange={value => onChange('dollar', value)}
                value={currentValues.dollar}
            />
            <InputComponent
                Icon={IconEuro}
                iconText={'Euro'}
                onChange={value => onChange('euro', value)}
                value={currentValues.euro}
            />
            <InputComponent
                Icon={IconYen}
                iconText={'Yen'}
                onChange={value => onChange('yen', value)}
                value={currentValues.yen}
            />
        </Column>
    );
}

export default App;
