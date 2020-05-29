import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#7eb874',
        borderTopLeftRadius: 2,
        borderBottomLeftRadius: 2,
        height: '100%',
        width: 74
    },
    container: {
        marginBottom: 20,
        maxWidth: 790,
        width: '100%'
    },
    errorBorder: {
        border: '1px solid red'
    },
    errorText: {
        color: 'red',
        fontFamily: `sans-serif`,
        position: 'absolute',
        right: 10,
        top: 16,
        whiteSpace: 'no-wrap',
        width: 88
    },
    iconText: {
        color: '#555',
        fontFamily: `sans-serif`,
        fontSize: 12,
        marginTop: 5
    },
    input: {
        border: 'none',
        borderTopRightRadius: 2,
        borderBottomRightRadius: 2,
        color: '#555',
        flex: 1,
        fontFamily: `sans-serif`,
        fontSize: 16,
        fontStretch: '100%',
        fontWeight: 400,
        lineHeight: '18px',
        outlineStyle: 'none',
        padding: '10px 32px 10px 32px'
    },
    inputContainer: {
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,

        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3,
        border: '1px solid #555',
        height: 68
    }
});

function InputComponent({ Icon, iconText }) {
    const showErrorMessage = Math.random() >= 0.5;
    return (
        <Column className={css(styles.container)}>
            <Row
                className={css(
                    styles.inputContainer,
                    showErrorMessage && styles.errorBorder
                )}
            >
                <Column
                    className={css(styles.buttonContainer)}
                    vertical="center"
                    horizontal="center"
                >
                    <Icon width={32} color="#555" />
                    <span className={css(styles.iconText)}>{iconText}</span>
                </Column>
                <input
                    className={css(styles.input)}
                    placeholder="Enter amount"
                    type="text"
                />
                {showErrorMessage && (
                    <div style={{ position: 'relative' }}>
                        <span className={css(styles.errorText)}>
                            Invalid value
                        </span>
                    </div>
                )}
            </Row>
        </Column>
    );
}

export default InputComponent;