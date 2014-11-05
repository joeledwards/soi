var menus = [
    {
        title : "Home",
        path : "home"
    },
    {
        title : "Our Mission",
        path : "mission"
    },
    {
        title : "Media",
        path : "media"
    },
    {
        title : "Kenya",
        path : "kenya"
    },
    {
        title : "Faculty & Staff",
        path : "staff"
    },
    {
        title : "Join Our Team",
        path : "team"
    },
    {
        title : "Contact Us",
        path : "contact"
    }
];

var App = React.createClass({
    render: function() {
        return (
        <div>
            <Menu />
            <Content />
        </div>
        );
    }
});

var Menu = React.createClass({
    render: function() {
        return (
        <div name="menu">
            <ul>{
                menus.map(function(item, index) {
                    return <MenuItem title={item.title} path={'#' + item.path} />;
                })
            }</ul>
        </div>
        );
    }
});

var MenuItem = React.createClass({
    render: function() {
        return (
        <li>
            <a href={this.path}>{this.title}</a>
        </li>
        )
    }
});

var Content = React.createClass(
{
    render: function()
    {
        return (
        <div name="content">
            Nothing to see here. Move along.
        </div>
        );
    }
});

React.render(
    <App />,
    document.getElementById('app')
);

