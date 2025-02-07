/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import laptop from "assets/images/surface_laptop.jpg";

// Packages
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function data() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Fetch data from the backend
    const tableName = "ep_customers";
    axios
      .get(`http://localhost:5000/customers?table=${tableName}`)
      .then((response) => {
        setData(response.data);
        console.log("Data fetched successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const Author = ({ name, cus_id }) => (
    <MDBox display="flex" alignItems="left" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{cus_id}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Address = ({
    shipping_address,
    shipping_address_city,
    shipping_address_state,
    shipping_address_zip,
  }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {shipping_address}
      </MDTypography>
      <MDTypography variant="caption">
        {shipping_address_city + " " + shipping_address_state + " " + shipping_address_zip}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Customer ID", accessor: "customerid", align: "left" },
      { Header: "company name", accessor: "company_name", align: "left" },
      { Header: "contact name", accessor: "contact_name", align: "left" },
      { Header: "contact email", accessor: "contact_email", align: "left" },
      { Header: "contact phone", accessor: "contact_phone", align: "left" },
      { Header: "shipping address", accessor: "shipping_address", align: "left" },
      // { Header: "in stock by", accessor: "instock_by", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: data.map((customer) => ({
      key: customer.customer_id,
      customerid: <Author name="" cus_id={customer.customer_id} />,
      company_name: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {customer.company_name}
        </MDTypography>
      ),
      contact_name: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {customer.contact_name}
        </MDTypography>
      ),
      contact_email: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {customer.contact_email}
        </MDTypography>
      ),
      contact_phone: (
        <MDTypography rel="noopener noreferrer" variant="caption" color="text" fontWeight="medium">
          {customer.contact_phone}
        </MDTypography>
      ),
      shipping_address: (
        <Address
          shipping_address={customer.shipping_address}
          shipping_address_city={customer.shipping_address_city}
          shipping_address_state={customer.shipping_address_state}
          shipping_address_zip={customer.shipping_address_zip}
        />
      ),
      action: (
        <MDBox ml={-1}>
          <MDBadge
            component="a"
            // href="/customers/newcustomer"
            href={`/customers/newcustomer/${customer.customer_id}`} // Pass ID in the URL
            badgeContent="Edit"
            color={"primary"}
            variant="gradient"
            size="sm"
          />
        </MDBox>
      ),
    })),
  };
}
