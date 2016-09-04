var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
    componentDidMount: function() {

        var {errorTitle, errorText} = this.props;
        var modalHtml = (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{errorTitle}</h4>
                <p>{errorText}</p>
                <p>
                    <button type="button" className="button" data-close="">Okay</button>
                </p>
            </div>
        );

        var $modal = $(ReactDOMServer.renderToString(modalHtml));
        $(ReactDOM.findDOMNode(this)).html($modal);

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

        return (
          <div>
          </div>
        );
    }
});

module.exports = ErrorModal;
