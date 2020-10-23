import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getUserDetail: state.users.getUserDetail,
    errorUserDetail: state.users.errorUserDetail,
  };
};

const DetailUserComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">Nama Depan</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.firstName}</td>
        </tr>
        <tr>
          <td width="200">Nama Belakang</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.lastName}</td>
        </tr>
        <tr>
          <td width="200">Umur</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.age}</td>
        </tr>
        <tr>
          <td width="200">Foto</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.photo}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailUserComponent);
