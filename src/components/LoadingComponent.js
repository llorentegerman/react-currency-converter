import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Column } from 'simple-flexbox';

const styles = StyleSheet.create({
    containerLoadingFS: {
        backgroundColor: 'rgba(0,0,0,.5)',
        height: '100%',
        minHeight: '100vh',
        width: 'calc(100% - 0px)',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
        '@media (max-width: 1080px)': {
            width: 'calc(100% - 0px)'
        }
    },
    loading: {
        border: '16px solid #f3f3f3',
        borderRadius: '50%',
        borderTop: '16px solid #50c058',
        width: 120,
        height: 120,
        '-webkit-animation': 'spin 2s linear infinite',
        animationName: [
            {
                '0%': {
                    transform: 'rotate(0deg)'
                },
                '100%': {
                    transform: 'rotate(360deg)'
                }
            }
        ],
        animationDuration: '2s',
        animationIterationCount: 'infinite'
    },
    loadingSpan: {
        color: 'white',
        marginTop: 10,
        fontSize: 18
    }
});

function LoadingComponent({ loading }) {
    return (
        <div style={{ position: 'relative' }}>
            {loading && (
                <Column
                    className={css(styles.containerLoadingFS)}
                    horizontal="center"
                    vertical="center"
                >
                    <div className={css(styles.loading)}></div>
                    <span className={css(styles.loadingSpan)}>
                        Loading rates...
                    </span>
                </Column>
            )}
        </div>
    );
}

export default LoadingComponent;
