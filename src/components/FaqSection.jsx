import React from 'react'
import styled from 'styled-components'
import { About } from '../Style'

const FaqSection = () => {
    return (
        <div>
            <FaqStyle>
                <h2>Any  Questions ?<span>FAQ</span> </h2>
                <div className="question">
                    <h4>How do we start ?</h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, quae.</p>
                    </div>
                    <div className="faq_line"></div>
                </div>
                <div className="question">
                    <h4>Daily schdule</h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, quae.</p>
                    </div>
                    <div className="faq_line"></div>
                </div>
                <div className="question">
                    <h4>How do we accept payment ?</h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, quae.</p>
                    </div>
                    <div className="faq_line"></div>
                </div>
                <div className="question">
                    <h4>What product do we offer </h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, quae.</p>
                    </div>
                    <div className="faq_line"></div>
                </div>

            </FaqStyle>
        </div>
    )
}

const FaqStyle = styled(About)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .question{
        cursor: pointer;
        padding: 1rem 0;
    }
    .answer{
        padding : 2rem 0;
        p{
            padding: 1rem 0;
        }
    }
    .faq_line{
        background: #cccccc;
        height:0.2rem;
        margin : 2rem 0;
        width: 100%;
    }

`

export default FaqSection