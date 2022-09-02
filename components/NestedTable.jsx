import React, {
  useRef,
  useState,
} from 'react';

import { Table } from 'antd';

import { getColumnSearchProps } from './ColSearchFilter';

const NestedTable = ({ data }) => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const expandedRowRender = (d) => {
    console.log(">>>>", d);
    const nestedColumns = [
      {
        title: "Item Id",
        dataIndex: "Item_Id",
        key: "Item_Id",
        render: (d) => d || "N/A",
      },
      {
        title: "Item Code",
        dataIndex: "Item_code",
        key: "Item_code",
        render: (d) => d || "N/A",
      },

      {
        title: "Title",
        dataIndex: "Title",
        key: "Title",
        render: (d) => d || "N/A",
      },
      {
        title: "Quantity",
        dataIndex: "Quantity",
        key: "Quantity",
        render: (d) => d || "N/A",
      },
      {
        title: "Unit Price",
        dataIndex: "Unit_Price",
        key: "Unit_Price",
        render: (d) => d || "N/A",
      },
      {
        title: "Tax",
        dataIndex: "Tax",
        key: "Tax",
        render: (d) => d || "N/A",
      },
      {
        title: "Amount",
        dataIndex: "Amount",
        key: "Amount",
        render: (d) => d || "N/A",
      },
    ];

    return (
      <Table columns={nestedColumns} dataSource={d.nested} pagination={false} />
    );
  };

  const columns = [
    {
      title: "Source Vendor",
      dataIndex: "Source_Vendor",
      key: "Source_Vendor",
      width: "30%",
      ...getColumnSearchProps({
        dataIndex: "Source_Vendor",
        searchInput,
        searchText,
        searchedColumn,
        setSearchText,
        setSearchedColumn,
        dataIndexName: "Source Vendor",
      }),
      render: (d) => d || "N/A",
    },
    {
      title: "Invoice Id",
      dataIndex: "Invoice_Id",
      key: "Invoice_Id",
      render: (d) => d || "N/A",
    },
    {
      title: "Invoice Date",
      dataIndex: "Invoice_Date",
      key: "Invoice_Date",
      render: (text) => new Date(text).toDateString(),
    },
    {
      title: "Due Date",
      dataIndex: "Due_Date",
      key: "Due_Date",
      render: (text) => new Date(text).toDateString(),
    },
    {
      title: "Customer Id",
      dataIndex: "Customer_Id",
      key: "Customer_Id",
      render: (d) => d || "N/A",
    },
    {
      title: "Invoice Amount",
      dataIndex: "Invoice_Amount",
      key: "Invoice_Amount",
      render: (d) => d || "N/A",
    },
  ];

  return (
    <>
      <Table
        bordered={true}
        columns={columns}
        rowKey="Invoice_Id"
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: [],
        }}
        dataSource={data}
        size="large"
        tableLayout="fixed"
        pagination={{
          pageSize: 50,
        }}
        scroll={{
          y: 440,
        }}
      />
    </>
  );
};

export default NestedTable;
