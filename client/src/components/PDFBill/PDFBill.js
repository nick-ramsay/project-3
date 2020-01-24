import React from "react";

import QuicksandFont from "../../fonts/quicksand-v19-latin-600.ttf";

import { Page, Text, View, Document, StyleSheet, Font, Section } from '@react-pdf/renderer';
import { DataTableCell, Table, TableBody, TableCell, TableHeader } from '@david.kucsai/react-pdf-table';

// Create styles

var inventoryTotal = 0;

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
    invoiceTitle: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'heavy',
        marginBottom: 5,
        color: 'blue'
    },
    invoiceHeader: {
        fontWeight: 900,
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 5
    },
    hourlySection: {
        borderTop: "1 solid black",
        borderLeft: "1 solid black",
        borderBottom: "1 solid black",
        borderRight: "1 solid black",
        marginBottom: 10
    },
    hourlyDetails: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 2
    },
    invoiceTotals: {
        fontSize: 14,
        textAlign: 'right',
        marginTop: 5,
        marginBottom: 5
    },
    totalAmountDue: {
        fontSize: 16,
        textAlign: 'right',
        fontWeight: 'heavy',
        marginTop: 5, 
        marginBottom: 5,
        color: 'blue',
        borderTop: '1px solid',
        borderLeft: '1px solid',
        borderBottom: '1px solid',
        borderRight: '1px solid'
    },
    footerMessage: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 15,
        color: 'blue',
        fontWeight: 'heavy'
    }
});

var calculateInventoryTotal = (itemsArray) => {
    var inventoryTotal = 0;
    for (var i = 0; i < itemsArray.length; i++) {
        inventoryTotal += itemsArray[i].newItemTotal
    }

    return inventoryTotal;
}

// Create Document Component
function PDFBill(props) {
    
    var billInventoryTotal = calculateInventoryTotal(props.data.projectInfo.items);
    console.log(props.data)
    console.log("Function PDF called for bill")
    if (props.data) {
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
                                {props.data.businessInfo && <Text>{props.data.businessInfo.address2}</Text>}
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
                        {props.data.projectInfo.customer.address2 &&
                            <View style={styles.address}>
                                {props.data.projectInfo && <Text>{props.data.projectInfo.customer.address2}</Text>}
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
                        <View style={styles.invoiceTitle}>
                            <Text>Invoice</Text>
                        </View>
                        <View>
                            <Text style={styles.invoiceHeader}>Hourly Fees</Text>
                        </View>
                        <View>
                            <Text style={styles.hourlyDetails}>{props.data.projectInfo.hours} hours were billed for this project at a rate of ${props.data.projectInfo.hourlyRate} per hour.</Text>
                        </View>
                        <View>
                            <Text style={styles.invoiceHeader}>Inventory Fees</Text>
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
                        <View>
                        </View>
                        <View>
                            <Text style={styles.invoiceHeader}>Totals</Text>
                            <Text style={styles.invoiceTotals}>Inventory Total: ${billInventoryTotal.toFixed(2)}</Text>
                            <Text style={styles.invoiceTotals}>Hourly Total: ${(props.data.projectInfo.hours * props.data.projectInfo.hourlyRate).toFixed(2)}</Text>
                            <Text style={styles.totalAmountDue}>Amount Due: ${((props.data.projectInfo.hours * props.data.projectInfo.hourlyRate) + billInventoryTotal).toFixed(2)}</Text>
                        </View>
                        <View style={styles.footerMessage}>
                            <Text>Thank you for your business!</Text>
                        </View>
                    </View>
                </Page>
            </Document>
        )
    };
}
export default PDFBill;