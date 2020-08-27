import React, {Component} from 'react';
import './App.css';

class Calculator extends Component {
    constructor(props) {
        super()
        this.state = {
            num1: '',
            num2: '',
            total: '',
            operator: ''
        }
    }
  
    setNum = (e, num) => {
        this.setState({
            [num]: e.target.value
        })
    }

    setOperator = (e) => {
        this.setState({
            operator: e.target.value
        })
    }

    addition = () => {
        let num1 = parseInt(this.state.num1)
        let num2 = parseInt(this.state.num2)
        this.setState({
            total: num1 + num2
        })
    }
    
    substraction = () => {
        let num1 = parseInt(this.state.num1)
        let num2 = parseInt(this.state.num2)
        this.setState({
            total: num1 - num2
        })
    }

    multiplication = () => {
        let num1 = parseInt(this.state.num1)
        let num2 = parseInt(this.state.num2)
        this.setState({
            total: num1 * num2
        })
    }

    devidation = () => {
        let num1 = parseInt(this.state.num1)
        let num2 = parseInt(this.state.num2)
        this.setState({
            total: num1 / num2
        })
    }

    doArithmatic = () => {
        let operator = this.state.operator;
        console.log(operator);
        if(operator === '+') {
            this.addition()
        } else if(operator === '-') {
            this.substraction()
        } else if(operator === '*') {
            this.multiplication()
        } else if(operator === '/') {
            this.devidation()
        } else {
            alert('Enter allowed arithmatic operators only!')
            this.setState({
                operator: ''
            })
        }
    }

    render() {
      return(
        <div className="container">
            <h2>Addition, Substraction, Multiplication and Devidation with React!</h2>

            <div className="add">
                <input 
                    type="number"  
                    name="num1"
                    placeholder="Enter your first number"
                    value={this.state.num1}
                    onChange={(e) => this.setNum(e, 'num1')}
                />
                
                <input
                    type="text"
                    placeholder="'+' or '-' or '*' or '/'"
                    value={this.state.operator}
                    onChange={(e) => this.setOperator(e) }               
                />
                
                <input 
                    type="number"  
                    name="num2"
                    placeholder="Enter your second number"
                    value={this.state.num2}
                    onChange={(e) => this.setNum(e, 'num2')}
                />
                <br/>
                <button onClick={this.doArithmatic}>=</button>
                <br/>
                <h2>Result:  <span>{this.state.total}</span></h2>
            </div>
        </div>
      )
  }
}

export default Calculator;
