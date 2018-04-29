import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Results } from '../../App/components';


class Score extends Component {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.object).isRequired,
    };

    render() {
        return <Results
            dataWinnerX ={this.props.data[0].X}
            dataWinnerO ={this.props.data[0].O}
        />;
    }
}

const mapStateToProps = state => ({
    data: state.score.data,
});

export default connect(mapStateToProps)(Score);