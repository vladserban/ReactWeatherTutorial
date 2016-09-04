var React = require('react');

var ErrorModal = React.createClass({
    componentDidMount: function() {
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    getDefaultProps: () => {
        errorTitle : 'Oopsie!'
    },
    propTypes: {
        errorTitle: React.PropTypes.string,
        errorText: React.PropTypes.string.isRequired
    },
    render: function() {
        var {errorTitle, errorText} = this.props;

        return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{errorTitle}</h4>
                <p>{errorText}</p>
                <p>
                    <button type="button" className="button" data-close="">Okay</button>
                </p>
            </div>
        );
    }
});

module.exports = ErrorModal;
