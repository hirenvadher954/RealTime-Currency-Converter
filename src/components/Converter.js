import React, {Component} from 'react';
import InputField from "./InputField";


class Converter extends Component {
    state = {
        currencies: [
            "USD",
            "INR",
            "CAD",
            "HKD",
            "ISK",
            "PHP",
            "DKK",
            "HUF",
            "CZK",
            "AUD",
            "RON",
            "SEK",
            "IDR",
            "BRL",
            "RUB",
            "HRK",
            "JPY",
            "THB",
            "CHF",
            "SGD",
            "PLN",
            "BGN",
            "TRY",
            "CNY",
            "NOK",
            "NZD",
            "ZAR",
            "MXN",
            "ILS",
            "GBP",
            "KRW",
            "MYR"
        ],
        base: "USD",
        amount: "1",
        convertTo: "INR",
        result: "",
        date: ""
    };

    constructor(props) {
        super(props);
        this.calculateAmount()
    }

    handleSelect = (e) => {
        this.setState({
                [e.target.name]: e.target.value,
                result: null
            },
            this.calculateAmount
        )
    };

    handleInput = (e) => {
        this.setState({
                amount: e.target.value,
                result: null
            },
            this.calculateAmount
        );
    };

    handleSwap = (e) => {
        const base = this.state.base;
        const convertTo = this.state.convertTo;
        e.preventDefault();
        this.setState({
                base: convertTo,
                convertTo: base,
                result: null
            },
            this.calculateAmount
        );
    };

    calculateAmount = () => {
        const amount = this.state.amount;
        if (amount === isNaN) {
            return
        } else {
            fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
                .then(res => res.json())
                .then(data => {
                    const date = data.date;
                    const result = (data.rates[this.state.convertTo] * this.state.amount).toFixed(4);
                    this.setState({
                        date,
                        result
                    })
                })
        }
    };

    render() {

        const {currencies, base, amount, convertTo, result, date} = this.state;
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-7 mx-auto">
                        <div className="card card-body">
                            <h5>{amount} {base} is equivalent to</h5>
                            <h2>{result === null ? "Calculating..." : result} {convertTo}</h2>
                            <p>As of {date}</p>
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
                                            disabled={true}
                                            value={result === null ? "Calculating..." : result}
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
                                        <h1 onClick={this.handleSwap} className="swap">&#8595;&#8593;</h1>
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
