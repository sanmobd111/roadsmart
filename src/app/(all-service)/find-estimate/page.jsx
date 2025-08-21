import Container from '@/components/shared/container/Container';
import React from 'react';

const App = () => {
    return (
        <Container>
            <div className="flex items-center justify-center font-sans">
                <div className="bg-white rounded-lg shadow-lg py-6 sm:py-8 px-6 lg:px-20 text-center max-w-3xl w-full mx-auto">
                    <p className=" sm:text-2xl text-gray-800 mb-6 leading-relaxed">
                        Getting estimates from nearby shops. We'll notify you at{' '}
                        <span className="text-primary font-semibold">john@roadsmartsolutions.com</span> when they're ready
                    </p>
                    <button className="bg-primary text-white font-semibold py-2 px-5 rounded-md shadow-md hover:bg-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-75">
                        Go to requests
                    </button>
                </div>
            </div>
        </Container>
    );
};

export default App;
