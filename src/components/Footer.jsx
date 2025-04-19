import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css'; 


class FooterPage extends React.Component {
    render() {
        return (
            <Footer color="stylish-color-dark" className="page-footer font-small pt-4 mt-4" style={{ marginTop: "-3.5em !important" , display: 'flex', flexDirection:'column', justifyContent: 'space-around', alignItems: 'center' }} >
                <div className="social-icons" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <a href="https://www.instagram.com/the_platypus__/" className="btn-floating btn-lg btn-instagram mx-5" target="_blank" rel="noopener noreferrer"aria-label="Instagram" style={{ fontSize: '24px', marginRight: '30px' }} >
                        <i className="fab fa-instagram fa-2x "></i>
                    </a>
                    <a href="https://www.linkedin.com/in/wen-qing-ong/" className="btn-floating btn-lg btn-li mx-5"  target="_blank" rel="noopener noreferrer"aria-label="Instagram" style={{ fontSize: '24px', marginRight: '30px' }}>
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a href="https://github.com/Perryongwq" className="btn-floating btn-lg btn-github mx-5" target="_blank" rel="noopener noreferrer"aria-label="Instagram" style={{ fontSize: '24px', marginRight: '30px' }}>
                        <i className="fab fa-github fa-2x"></i>
                    </a>

                </div>
                <div className="footer-text">
                    <p>Built with ReactJS</p>
                    <p>© 2024 Perry Ong</p>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;
