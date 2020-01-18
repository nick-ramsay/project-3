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
        fontFamily: 'Quicksand',
        margin: 20,
        paddingRight: 40

    },
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 16,
        textAlign: 'left',
        fontFamily: 'Quicksand',
        fontWeight: 'bold',
        marginBottom: 5
    },
    address: {
        fontSize: 12,
        textAlign: 'left',
        fontFamily: 'Quicksand',
        marginBottom: 2
    },
    billTo: {
        fontSize: 14,
        textAlign: 'left',
        fontFamily: 'Quicksand',
        marginTop: 15,
        marginBottom: 5
    },

    table: {
        fontFamily: 'Quicksand'
    }
});

// Create Document Component
function PDFBill(props) {
    console.log(props.data);
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.body}>
                    <View style={styles.title}>
                        <Text>{props.data.businessInfo.businessName}</Text>
                    </View>
                    <View style={styles.address}>
                        <Text>{props.data.businessInfo.address}</Text>
                    </View>
                    {props.data.businessInfo.address2 &&
                        <View style={styles.address}>
                            <Text>{props.data.businessInfo.address}</Text>
                        </View>
                    }
                    <View style={styles.address}>
                        <Text>{props.data.businessInfo.city}, {props.data.businessInfo.state} {props.data.businessInfo.postcode}</Text>
                    </View>
                    <View style={styles.address}>
                        <Text>Phone: {props.data.businessInfo.phone}</Text>
                    </View>
                    <View style={styles.address}>
                        <Text>Email: {props.data.businessInfo.email}</Text>
                    </View>
                    <View style={styles.billTo}>
                        <Text>Bill To:</Text>
                    </View>
                    <View style={styles.address}>
                        <Text> {props.data.projectInfo.customer.firstName} {props.data.projectInfo.customer.lastName} </Text>
                    </View>
                    <View style={styles.address}>
                        <Text>{props.data.projectInfo.customer.address}</Text>
                    </View>
                    {props.data.businessInfo.address2 &&
                        <View style={styles.address}>
                            <Text>{props.data.projectInfo.customer.address}</Text>
                        </View>
                    }
                    <View style={styles.address}>
                        <Text>{props.data.projectInfo.customer.city}, {props.data.projectInfo.customer.state} {props.data.projectInfo.customer.postcode}</Text>
                    </View>
                    <View style={styles.address}>
                        <Text>Phone: {props.data.projectInfo.customer.phone}</Text>
                    </View>
                    <View style={styles.address}>
                        <Text>Email: {props.data.projectInfo.customer.email}</Text>
                    </View>
                </View>
                <View>
                    <Table fontFamily={"Quicksand"}
                        data={[
                            { firstName: "John", lastName: "Smith", dob: new Date(2000, 1, 1), country: "Australia", phoneNumber: "xxx-0000-0000" }
                        ]}
                    >
                        <TableHeader textAlign={"center"}>
                            <TableCell weighting={0.3}>
                                Item Name
                        </TableCell>
                            <TableCell weighting={0.3}>
                                Quantity
                        </TableCell>
                            <TableCell>
                                Price
                        </TableCell>
                            <TableCell>
                                Item Total
                        </TableCell>
                        </TableHeader>

                        <TableBody>

                        </TableBody>
                    </Table>
                </View>
            </Page>
        </Document>
    )
};

export default PDFBill;