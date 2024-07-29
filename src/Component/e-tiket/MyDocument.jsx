import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeader: {
    width: "50%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: "#f0f0f0",
    padding: 5,
    textAlign: "left",
    fontWeight: "bold",
  },
  tableCol: {
    width: "50%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
    textAlign: "left",
  },
  image: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
});

// Create Document Component
const MyDocument = ({ data }) => (
  <Document>
    <Page size="A5" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>E-Ticket</Text>
        <Text style={styles.subtitle}>Booking Details</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableColHeader}>ID</Text>
            <Text style={styles.tableCol}>{data.id}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableColHeader}>Total Price</Text>
            <Text style={styles.tableCol}>
              {data.total_price.toLocaleString()}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableColHeader}>Start Rent</Text>
            <Text style={styles.tableCol}>
              {new Date(data.start_rent_at).toLocaleDateString()}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableColHeader}>Finish Rent</Text>
            <Text style={styles.tableCol}>
              {new Date(data.finish_rent_at).toLocaleDateString()}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableColHeader}>Status</Text>
            <Text style={styles.tableCol}>
              {data.status ? "Confirmed" : "Pending"}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableColHeader}>User Email</Text>
            <Text style={styles.tableCol}>{data.User.email}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableColHeader}>User Role</Text>
            <Text style={styles.tableCol}>{data.User.role}</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Car Details</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableColHeader}>Name</Text>
            <Text style={styles.tableCol}>{data.Car.name}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableColHeader}>Category</Text>
            <Text style={styles.tableCol}>{data.Car.category}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableColHeader}>Price</Text>
            <Text style={styles.tableCol}>
              {data.Car.price.toLocaleString()}
            </Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
