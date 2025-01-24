import { Table } from "antd";
import PropTypes from "prop-types";

const TableComponent = ({ columns, data, ...props }) => {
  return <Table columns={columns} dataSource={data} {...props} />;
};

TableComponent.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      dataIndex: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      render: PropTypes.func,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableComponent;
