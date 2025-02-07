/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import AlarmIcon from "@mui/icons-material/Alarm";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/customers/data/customersTableData";
// import projectsTableData from "layouts/customers/data/projectsTableData";

function Customers() {
  const { columns, rows } = authorsTableData();
  // const { columns: pColumns, rows: pRows } = projectsTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <br />
      <Stack spacing={1} direction="row">
        {/* <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined" href="#outlined-buttons" color="success">
          Link
        </Button>
        <Button variant="contained" sx={{ color: "white", backgroundColor: "green" }}>
          Secondary
        </Button>
        <Button variant="outlined" sx={{ color: "white", backgroundColor: "green" }}>
          Error
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button> */}
        {/* <IconButton color="secondary" aria-label="add an alarm" href="/customers/newcustomer">
          <GroupAddIcon />
        </IconButton> */}
        <Button
          variant="contained"
          href="/customers/newcustomer"
          startIcon={<GroupAddIcon />}
          // sx={{ color: "white", backgroundColor: "green" }}
          sx={{
            color: "#ffffff",
            backgroundColor: "green",
            "&:hover": { backgroundColor: "darkgreen" },
          }}
        >
          Add Customer
        </Button>
      </Stack>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Customers
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Customers;
