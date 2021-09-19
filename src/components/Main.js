import React, { Component } from 'react';
import { Form, Button, Jumbotron, InputGroup, FormControl, Container } from 'react-bootstrap'
import CityLocation from './CityLocation';


class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cityname: '',
            show: false,
            page: 1,
            active: 1,
            cityInfo: {},

        }
    }

    inputChange = (event) => {
        this.setState({ cityname: event.target.value });
    }

    onSubmitCity = (e) => {
        e.preventDefault();
        this.setState({ show: true }, () => { this.getCityInfo() });

    }

    getCityInfo = () => {
        getCityInfo(this.state.cityname).then(data => {
            this.setState({
                cityInfo: data,
            }, () => { this.getWeatherInfo(); });
        });
    }



    render() {

        return (
            <>
                <div className="container">
                    <Header />
                    <br></br>

                    <Jumbotron id="Jumbotron-header" fluid >
                        <h1 style={{ color: "#7eb8da" }}>Explore the City.</h1>
                        <p>
                            New York is the place for me... Whay is Yours?
                        </p>
                        <div className="row justify-content-center">
                            <SearchForm inputChange={this.inputChange} onSubmitCity={this.onSubmitCity} />
                        </div>
                    </Jumbotron>

                    <div className="row justify-content-center">
                        <CityLocation show={this.state.show} cityInfo={this.state.cityInfo} />
                    </div>

                </div>
            </>
        )
    }
}


const SearchForm = (props) => {

    return (
        <div className='form-container'>
            <Form onSubmit={props.onSubmitCity} >
                <Form.Row>
                    <Form.Label id="form-text-color">Enter The City Name</Form.Label>
                    <InputGroup className="mb-3 justify-content-center">
                        <FormControl
                            id="cityname"
                            placeholder="Enter City Name"
                            onChange={props.inputChange}
                        />
                        <InputGroup.Append>
                            <Button type="submit" id="button-search"> Explore! </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Row>
            </Form>
        </div>
    );

}

export default Main;