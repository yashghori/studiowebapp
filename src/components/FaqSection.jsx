import React from 'react'
import styled from 'styled-components'
import { About } from '../Style'
import Toggle from './Toggle'
import { AnimateSharedLayout } from 'framer-motion'

const FaqSection = () => {
    return (
        <div>
            <FaqStyle>
                <h2>Any  Questions ?<span>FAQ</span> </h2>
                <AnimateSharedLayout>
                    <Toggle title="How do we start ?" >

                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, quae.</p>
                        </div>


                    </Toggle>
                    <Toggle title="Daily schdule" >

                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, quae.</p>
                        </div>

                    </Toggle>
                    <Toggle title="How do we accept payment ?" >

                        <h4></h4>
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, quae.</p>
                        </div>

                    </Toggle>
                    <Toggle title="What product do we offer">

                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, quae.</p>
                        </div>

                    </Toggle>
                </AnimateSharedLayout>

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