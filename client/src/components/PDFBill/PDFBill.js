import React from "react";

import QuicksandFont from "../../fonts/quicksand-v19-latin-600.ttf";

import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

// Create styles

Font.register({
    family: 'Quicksand',
    src: QuicksandFont
  });

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: 'white',
        fontFamily: 'Times-Roman'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        paddingTop: 10,
        fontFamily: 'Quicksand'
    },
    author: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 40,
    },
    subtitle: {
        fontSize: 18,
        margin: 12,
        fontFamily: 'Times-Roman'
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    }
});

// Create Document Component
function PDFBill(props) {
    console.log(props.data);
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.title}>
                    <Text>{props.data.businessInfo.businessName}</Text>
                </View>
            </Page>
        </Document>
    )
};

export default PDFBill;