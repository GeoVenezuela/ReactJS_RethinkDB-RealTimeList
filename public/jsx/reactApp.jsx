"use strict";
var SimpleList = React.createClass({
	getInitialState: function() {
        return {
			simpleList: [
				{
					row: 'cargando	...'
				}
			]
        };
    },
	componentDidMount: function() {
		$.ajax({
			url: '/api/list',
			dataType: 'json',
			success: function(data) {
				console.log('_________________');
				console.log('Simple List data recieved:');
				console.log(data);
				this.setState({simpleList: data});
			}.bind(this),
				error: function(xhr, status, err) {
					console.log('_________________');
					console.log('Data error:');
					console.error(this.props.url, status, err.toString())
			}.bind(this)
		});
		websocket 			= new WebSocket('/api/feed'); 
		websocket.onopen 	= function(evt) { onOpen(evt) }; 
		websocket.onclose 	= function(evt) { onClose(evt) };
	},
	render: function() {
		return (
			<span>
				<p><strong>Pasos para dominar un nuevo lenguaje de programación:</strong></p>
				<SimpleListRow simpleList={this.state.simpleList}/>
			</span>
		);
	}	
});

var SimpleListRow = React.createClass({
	render: function() {
		console.log('_________________');
		console.log('simpleList rows data:');
		console.log(this.props);
		var rows = this.props.simpleList;
		return (
			<ol>
				{rows.map(function(element) {
					return (
						<li>{element.message}</li>
					);
				})}
			</ol>
		);
	}	
});

React.render(
	<SimpleList />,
	document.getElementById('simpleList')
)