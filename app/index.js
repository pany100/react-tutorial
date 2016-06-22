var USER_DATA = {
	name: 'Luis Paniagua',
	username : 'pany100',
	image : 'https://pbs.twimg.com/profile_images/530549291366903808/hy2rrf66_400x400.jpeg'
}

var React = require('react');
var ReactDom = require('react-dom');

var ProfilePic = React.createClass({
	render: function() {
		return <img src={this.props.imageUrl} style={{ height: 100, width: 100 }}/>
	}
});

var Link = React.createClass({
	render: function() {
		return (
			<span>
				<a href={this.props.href}>
					{this.props.children}
				</a>
			</span>
		)
	}
});

var ProfileLink = React.createClass({
	render: function() {
		return (
			<div>
				<Link href={'https://www.github.com/' + this.props.username}>
					{this.props.username}
				</Link>
			</div>
		)
	}
});

var ProfileName = React.createClass({
	render: function() {
		return (
			<div>{this.props.name}</div>
		)
	}
});

var Avatar = React.createClass({
	render: function() {
		return (
			<div>
				<ProfilePic imageUrl={this.props.user.image} />
				<ProfileName name={this.props.user.name} />
				<ProfileLink username={this.props.user.username} />
			</div>
		)
	}
});

ReactDom.render(
	<Avatar user={USER_DATA}/>,
	document.getElementById('app')
);