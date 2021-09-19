import React, { Component } from 'react'
import { Image, Card } from 'react-bootstrap'

class CityLocation extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cityInfo: {}
        }
    }



    render() {

        if (this.props.show) {
            return (
                <>
                    <div className="location-container">
                        <Card>
                            <Card.Header className="card-header-style" as="h5">City Information</Card.Header>
                            <Card.Body id="card-body-container">
                                <div className="location-container-image">
                                    <Image className="figure-img img-fluid rounded float-left" src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.props.cityInfo.lat},${this.props.cityInfo.lon}&zoom=10&scale=2&size=320x150`} />
                                </div>
                                <div className="location-container-info">
                                    <h5>City Name : {this.props.cityInfo.display_name}</h5>
                                    <h5>City Lat Info : {this.props.cityInfo.lat}</h5>
                                    <h5>City lon Info : {this.props.cityInfo.lon}</h5>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <h1></h1>
                </>
            )
        }
    }
}

export default CityLocation;