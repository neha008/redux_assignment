import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import image from '../assets/LAB_Icon.png';
import Navbar from '../navbar/Navbar';
import Sidenav from '../sidenav/Sidenav';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import BreadCrumb from '../breadcrumb/Breadcrumb';
import './Layout.css';
import EquipmentDetail from '../equipmentdetail/EquipmentDetail';
import data from "../data/data";
import actionCreators from '../services/equipmentActionCreator'
class TitleComponent extends Component {

    state = {
        showDevices: false,
    }

    handleViewDevice = () => {
        this.setState(p => {
            return {
                showDevices: !p.showDevices,
            }
        })
    }
    handleSelectEquipment = (equipment) => {
        this
            .props
            .equipmentActions
            .selectEquipmentActionCreators(equipment);    }
    render() {
        const {selectedEquiment , data } = this.props.devices
         const {showDevices, equipment} = this.state;
  console.log(data)
  console.log(selectedEquiment)
        return (

            <div>
                <Navbar/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-1 Sidenav">
                            <Sidenav/>
                        </div>
                        <div className="col-lg-11">
                            <div className="row">
                                <BreadCrumb
                                    name={showDevices
                                    ? selectedEquiment.Equipment
                                    : ''}/>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <EquipmentDetail
                                        equipment={showDevices
                                        ? selectedEquiment
                                        : ''}
                                        data={data}
                                        handleViewDevice={this.handleViewDevice}
                                        showDevices={showDevices}
                                        selectEquipment={(equipment) => this.handleSelectEquipment(equipment)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {devices: state.equipment}
}

const mapDispatchToProps = (dispatch) => {
    return {
        equipmentActions: bindActionCreators(actionCreators, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TitleComponent);