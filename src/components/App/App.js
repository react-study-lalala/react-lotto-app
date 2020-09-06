import React from 'react';
import './App.css';
import LottoNumber from "../LottoNumber/LottoNumber";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numbers: [],
            bonus : null,
        };

        this.lottoInterval = null;

        this.startLotto = this.startLotto.bind(this);
        this.generatorLottoNumber = this.generatorLottoNumber.bind(this);
        this.clearLotto = this.clearLotto.bind(this);
        this.startInterval = this.startInterval.bind(this);
    }

    generatorRandomNumber() {
        return Math.round(Math.random() * 45) + 1;
    }

    generatorLottoNumber() {
        let number = this.generatorRandomNumber();

        while(this.state.numbers.includes(number)) {
            number = this.generatorRandomNumber();
        }
        return number;
    }


    startLotto() {
        if (this.lottoInterval == null) {
            this.lottoInterval = setInterval(this.startInterval, 1000)
        }
    }

    startInterval() {
        const number = this.generatorLottoNumber();
        if(this.checkBasicSize(this.state.numbers)) {
            this.setState({
                bonus : number
            });

            this.endLotto();
            return;
        }

        this.setState({
            numbers : [...this.state.numbers , number]
        });
    }

    checkBasicSize (list) {
        return list.length >= 6;
    }

    endLotto() {
        clearInterval(this.lottoInterval);
        this.lottoInterval = null;
    }

    clearLotto() {
        if (this.lottoInterval != null) {
            this.endLotto();
        }

        this.setState({
            numbers : [],
            bonus : null
        })
    }

    render() {
        const {numbers, bonus} = this.state;
        return (
            <div className="App">
                <button onClick={this.startLotto}>추첨 시작</button>
                <button onClick={this.clearLotto}>초기화</button>

                <div id="lottoContainer" className="lotto-numbers-container">
                    {
                        numbers.map((v,i) => <LottoNumber key={i} number={v}></LottoNumber>)
                    }

                    {
                        bonus ? <div>
                            <p>보너스</p>
                            <LottoNumber number={bonus} />
                        </div> : null
                    }
                </div>
            </div>
        );
    }
}

export default App;
