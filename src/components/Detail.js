import React from "react"
import PropTypes from 'prop-types';

class Detail extends React.Component {
    render(){
        return (
            <div className="detail">
                {this.props.text}
            </div>
        )
    }
}

Detail.propTypes = {
	text: PropTypes.string
};
Detail.defaultProps = {
	text: ''
};

export default Detail;