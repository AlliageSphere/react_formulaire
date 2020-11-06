import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component
{
	state = {
		inputClient: "",
		inputId: 1,
		clients: [
		]
	};
	
	
	
	handleInputChange = event => {
		console.log("Entrée modifiée.");
		this.setState({inputClient: event.target.value});
	}
	
	handleButton = () => {
		console.log("Bouton cliqué");
		
		const newClients = this.state.clients.slice(); //Copie le tableau.
		newClients.push({id: this.state.inputId, nom: this.state.inputClient});
		this.setState({inputId: this.state.inputId + 1, clients: newClients});
		
		console.log(this.state.inputId);
	}
	
	handleDelete = id => {
		console.log(id);
		
		const newClients = this.state.clients.slice();
		const index = newClients.findIndex(function (client) {
			return client.id === id;
		});
		
		newClients.splice(index, 1);
		
		this.setState({clients: newClients});
	}
	
	render()
	{
		const title = "Liste des clients";
		
		return(
			<div>
				<h1>{title}</h1>
				
				<ul>
					{
					this.state.clients.map(client => (<li>{client.nom} <button value={client.id} onClick={() => this.handleDelete(client.id)}>X</button></li>))
					}
				</ul>
				
				<div>
					<input type="text" placeholder="Ajouter un client" onChange={this.handleInputChange}/>
					<button onClick={this.handleButton}>Confirmer</button>
				</div>
			</div>
		);
		
	}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
