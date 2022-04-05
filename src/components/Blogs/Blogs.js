import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <h2 className='review-title'>HTML Concepts</h2>
            <Accordion defaultActiveKey="0" flush className='blog'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is Semantic Tag?</Accordion.Header>
                    <Accordion.Body>
                        Semantic tag in html5 is used to make the website more meaningful. It makes the code easier to understand by those tags. By seeing the tag one can easily understand what part fo the website it will be. Suppose the header tag is used in the upper side of the website and normally the website title and nav bar is kept in this tag. Then in the main all the section of the website is kept. In section tag many article tag can be used. Also there are audio and video tag are available in html5. Overall semantic are are very useful to organize the website beautifully.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Difference between inline, block and inline-block?</Accordion.Header>
                    <Accordion.Body>
                        The main main difference between inline,inline-block and block element is height - width. In inline element it takes the fixed height and width. We can not set height and width in inline element .The inline elements stay beside one another they don't create a new line. The inline-block element is like inline element but it act like block element. They also go beside one another but we can set height width in them. The block element takes the full width of the line and one specific element take one single line . We can set height width margin padding everything in block element.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;