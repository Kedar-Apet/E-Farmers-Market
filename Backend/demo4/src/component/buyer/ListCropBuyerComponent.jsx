import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListCropBuyerComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            crops: [],
            message: null
        }
        this.deleteCrop = this.deleteCrop.bind(this);
        this.editCrop = this.editCrop.bind(this);
        this.addCrop = this.addCrop.bind(this);
        this.reloadCropList = this.reloadCropList.bind(this);
    }

    componentDidMount() {
        this.reloadCropList();
    }

    reloadCropList() {
        ApiService.fetchCropsByUserId(sessionStorage.getItem('userId'))
            .then((resp) => {
                this.setState({crops: resp.data})
                console.log(this.state.crops);
            });
            // CropService.getCrops().then(resp => {
            //     this.setState({ Crops: resp.data });
            //     console.log(this.state.Crops);
            // })
    }

    deleteCrop(cropId) {
        ApiService.deleteCrop(cropId)
           .then(res => {
               this.setState({message : 'Crop deleted successfully.'});
               this.setState({crops: this.state.crops.filter(crop => crop.id !== cropId)});
           })

    }

    editCrop(id) {
        window.localStorage.setItem("cropId", id);
        this.props.history.push('/edit-crop');
    }

    addCrop() {
        window.localStorage.removeItem("cropId");
        this.props.history.push('/add-crops');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Crop Details</h2>
                <button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addCrop()}> Add Crop</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>CropName</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Date Of Upload</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.crops.map(
                        crop =>
                                    <tr key={crop.id}>
                                        <td>{crop.cropName}</td>
                                        <td>{crop.quantity}</td>
                                        <td>{crop.price}</td>
                                        <td>{crop.dateOfUpload}</td>
                                       
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteCrop(crop.id)}> Delete</button>
                                            <button className="btn btn-success" onClick={() => this.editCrop(crop.id)} style={{marginLeft: '20px'}}> Edit</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default ListCropBuyerComponent;