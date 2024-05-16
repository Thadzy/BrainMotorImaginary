import Container from 'react-bootstrap/Container';


function Hero() {
    return (
        <section className="hero d-flex align-items-center">
            <Container className="text-center">
                <h1 className="display-4 mb-3">
                    <span className="highlight">Nurturing Minds </span>
                </h1>
                <h1>
                    <span>for Success in Education</span>
                </h1>
                <p className="lead mb-4">
                    EEG technology helps us understand and nurture student mental health, leading to happier, healthier lives.
                </p>
                
            </Container>
        </section>
    );
}

export default Hero;
