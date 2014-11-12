var Button = ReactBootstrap.Button;
var NavBar = ReactBootstrap.NavBar;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;

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
            <NavBar>
                <Nav>
                {
                    menus.map(function(item, index) {
                        return <NavItem key={item.title} href={'#' + item.path}>{item.title}</NavItem>;
                    })
                }
                </Nav>
            </NavBar>
            <Content />
        </div>
        );
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

