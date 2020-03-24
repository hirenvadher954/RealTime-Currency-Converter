import React, {Component} from 'react';


class Converter extends Component {
    state = {
        currencies: ["USD", "INR", "CAD"],
        base: "USD",
        amount: "1",
        convertTo: "INR",
        result: "",
        date: ""
    };

    handleSelect = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleInput = (e) => {
        this.setState({amount: e.target.value})
    };

    render() {

        const {currencies, base, amount, convertTo, result, date} = this.state;
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-7 mx-auto">
                        <div className="card card-body">
                            <h5>{amount} {base} is equivalent to</h5>
                            <h2>{result} {convertTo}</h2>
                            <p>As of now</p>
                            <div className="row">
                                <div className="col-auto">
                                    <form className="form-inline mb-4">
                                        <input
                                            value={amount}
                                            onChange={this.handleInput}
                                            className="form-control form-control-lg mx-3"
                                        />
                                        <select
                                            name="base"
                                            value={base}
                                            onChange={this.handleSelect}
                                            className="form-control form-control-lg">
                                            {
                                                currencies.map(
                                                    currency =>
                                                        <option
                                                            key={currency}
                                                            value={currency}
                                                        >
                                                            {currency}
                                                        </option>
                                                )
                                            }
                                        </select>
                                    </form>

                                    <form className="form-inline mb-4">
                                        <input
                                            className="form-control form-control-lg mx-3"
                                        />
                                        <select
                                            name="convertTo"
                                            value={convertTo}
                                            className="form-control form-control-lg"
                                            onChange={this.handleSelect}
                                        >
                                            {
                                                currencies.map(
                                                    currency =>
                                                        <option
                                                            key={currency}
                                                            value={currency}>
                                                            {currency}
                                                        </option>)
                                            }
                                        </select>

                                    </form>
                                </div>

                                <div className="col-auto">
                                    <div className="m-4">
                                        <h1 className="swap">&#8595;&#8593;</h1>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }


}

export default Converter;
