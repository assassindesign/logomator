import React from 'react';
import LogoInspirationComponent from '../components/LogoInspirationComponent';
import Navbar from '../../components/common/Navbar';
import ChatComponent from '../../components/common/ChatComponent';
import ProgressBarComponent from '../../components/common/ProgressBarComponent';
import HeaderComponent from '../../components/common/HeaderComponent';
import { selectLogoInspiration } from '../actions';

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const LogoInspiration = withRouter(({ history, inspirations, onClick}) => {

    let logoInspirations = [];

    inspirations.forEach((inspiration) => {
        logoInspirations.push(
            <div>
                <LogoInspirationComponent history={history} inspiration={inspiration} onClick={onClick} />
            </div>
        );
    });

    return (
        <div>
            <Navbar />
            <div className="logomator-base inspiration">
                <div className="container" style={{
                paddingBottom: '70px'}}>

                    <ChatComponent
                        text={<h1><span>Thanks, that helps!</span> Now, let’s figure out how your logo should look. I’ll use the examples below to understand what styles I should incorporate in your logo.</h1>}
                        height="80px"
                    />
                    <div style={{paddingTop: '30px'}}></div>

                            <HeaderComponent headerText={"Choose 1 or more logo examples you like."} />

                            <div className="logo-inspiration-container">
                                {logoInspirations}
                            </div>
                </div>
            </div>

            <ProgressBarComponent history={history} inspirations={inspirations} />
        </div>
    )
});

const mapStateToProps = (state) => ({
    inspirations: state.inspirations
});

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (inspiration) => {
            dispatch(selectLogoInspiration(inspiration))
        }
    }
};

const LogoInspirationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LogoInspiration);

export default LogoInspirationContainer;