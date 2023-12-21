import React from "react";

class MyForm2 extends React.Component {
    constructor(props){
        super(props);
        this.state = { nomeSelect: '', nomeText: ''};
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChangeSelect(event) {
        this.setState({nomeSelect: event.target.value});
    }

    handleChangeText(event) {
        this.setState({nomeText: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.nomeSelect === ''){
            alert('Non hai inserito il nome')
            return
        }
        document.getElementById('nome2').innerHTML = `È stato inserito il nome ${this.state.nomeSelect}`

        if (this.state.nomeText !== ''){
            document.getElementById('nome3').innerHTML = `È stato scritto il nome ${this.state.nomeText}`
        } else {
            document.getElementById('nome3').innerHTML = ''
        }
    }

    render() {
        return (
            <>
               <form onSubmit={this.handleSubmit}>
                <label htmlFor="scelta">Scegli un nome</label>
                <select onChange={this.handleChangeSelect} name="scelta" id="scelta">
                    <option value="" defaultChecked></option>
                    <option value="Gaetano">Gaetano</option>
                    <option value="Michele">Michele</option>
                    <option value="Francesco">Francesco</option>
                    <option value="Alessandro">Alessandro</option>
                </select>
                <p>&nbsp;</p>
                <label htmlFor="scrivi">Scrivi un nome</label>
                <input type="text" id="scrivi" value={this.state.nomeText} onChange={this.handleChangeText}/>
                <button type="submit" id="manda">INVIA</button>
               </form>
               <h3 id="nome2"></h3>
               <h3 id="nome3"></h3>
            </>
        )
    }
}

export default MyForm2;