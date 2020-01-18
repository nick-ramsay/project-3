import React from "react";

import QuicksandFont from "../../fonts/quicksand-v19-latin-600.ttf";

import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { DataTableCell, Table, TableBody, TableCell, TableHeader } from '@david.kucsai/react-pdf-table';

// Create styles


Font.register({
    family: 'Quicksand',
    src: QuicksandFont
});

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        margin: 20,
        paddingRight: 40,
        textAlign: 'center'

    },
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35
    },
    title: {
        fontSize: 16,
        textAlign: 'left',
        fontWeight: 'heavy',
        marginBottom: 5
    },
    address: {
        fontSize: 12,
        textAlign: 'left',
        marginBottom: 2
    },
    billTo: {
        fontSize: 14,
        textAlign: 'left',
        marginTop: 15,
        marginBottom: 5
    },
    footerMessage: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 15,
        color: 'green',
        fontWeight: 'heavy'
    }
});

// Create Document Component
function PDFBill(props) {
    console.log(props);
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.body}>
                    <View style={styles.title}>
                        {props.data.businessInfo && <Text>{props.data.businessInfo && props.data.businessInfo.businessName}</Text>}
                    </View>
                    <View style={styles.address}>
                        {props.data.businessInfo && <Text>{props.data.businessInfo.address}</Text>}
                    </View>
                    {props.data.businessInfo.address2 &&
                        <View style={styles.address}>
                            {props.data.businessInfo && <Text>{props.data.businessInfo.address}</Text>}
                        </View>
                    }
                    <View style={styles.address}>
                        {props.data.businessInfo && <Text>{props.data.businessInfo.city}, {props.data.businessInfo.state} {props.data.businessInfo.postcode}</Text>}
                    </View>
                    <View style={styles.address}>
                        {props.data.businessInfo && <Text>Phone: {props.data.businessInfo.phone}</Text>}
                    </View>
                    <View style={styles.address}>
                        {props.data.businessInfo && <Text>Email: {props.data.businessInfo.email}</Text>}
                    </View>
                    <View style={styles.billTo}>
                        <Text>Bill To:</Text>
                    </View>
                    <View style={styles.address}>
                        {props.data.projectInfo && <Text> {props.data.projectInfo.customer.firstName} {props.data.projectInfo.customer.lastName} </Text>}
                    </View>
                    <View style={styles.address}>
                        {props.data.projectInfo && <Text>{props.data.projectInfo.customer.address}</Text>}
                    </View>
                    {props.data.businessInfo.address2 &&
                        <View style={styles.address}>
                            {props.data.projectInfo && <Text>{props.data.projectInfo.customer.address}</Text>}
                        </View>
                    }
                    <View style={styles.address}>
                        {props.data.projectInfo && <Text>{props.data.projectInfo.customer.city}, {props.data.projectInfo.customer.state} {props.data.projectInfo.customer.postcode}</Text>}
                    </View>
                    <View style={styles.address}>
                        {props.data.projectInfo && <Text>Phone: {props.data.projectInfo.customer.phone}</Text>}
                    </View>
                    <View style={styles.address}>
                        {props.data.projectInfo && <Text>Email: {props.data.projectInfo.customer.email}</Text>}
                    </View>
                </View>
                <Table
                    data={props.data.projectInfo.items}
                >
                    <TableHeader textAlign={'center'}>
                        <TableCell>
                            Item Name
                            </TableCell>
                        <TableCell>
                            Quantity
                            </TableCell>
                        <TableCell>
                            Price
                            </TableCell>
                        <TableCell>
                            Item Total
                            </TableCell>
                    </TableHeader>
                    <TableBody textAlign={'center'}>
                        <DataTableCell getContent={(r) => r.newItemName} />
                        <DataTableCell getContent={(r) => r.newItemQuantity} />
                        <DataTableCell getContent={(r) => "$" + r.newItemPrice} />
                        <DataTableCell getContent={(r) => "$" + r.newItemTotal} />
                    </TableBody>
                </Table>
                <View style={styles.footerMessage}>
                    <Text>Thank you for your business!</Text>
                </View>
            </Page>
        </Document>
    )
};

export default PDFBill;