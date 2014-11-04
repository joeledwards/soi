var App = React.createClass({
    render: function() {
        console.log("Blah!");
        return (
            <h1>Hello, world!</h1>
        );
    }
});

React.render(
    <App />,
    document.getElementById('app')
);

