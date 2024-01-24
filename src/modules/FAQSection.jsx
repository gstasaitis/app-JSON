import { useState } from 'react';
import FAQdata from './data/FAQdata';
import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";

const FAQSection = () => {
    const [isOpen, setIsOpen] = useState(Array(10).fill(false));
    const [expandIcons, setExpandIcons] = useState(Array(10).fill(true));

    const toggleQuestion = (index) => {
        const newIsOpen = [...isOpen];
        newIsOpen[index] = !newIsOpen[index];
        setIsOpen(newIsOpen);

        const newExpandIcons = [...expandIcons];
        newExpandIcons[index] = !newExpandIcons[index];
        setExpandIcons(newExpandIcons);
    };

    return (
        <div className="faqsection">
            <div className="faqhead">
                <h1>FAQ</h1>
            </div>
            <div className="faq-content">
                {FAQdata.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => toggleQuestion(index)}>
                            <div className="space">
                                <h3>{faq.question}</h3>
                                <span className='expand'>
                                    {expandIcons[index] ? <MdOutlineExpandMore /> : <MdOutlineExpandLess />}
                                </span>
                            </div>
                            <span className={`arrow ${isOpen[index] ? 'open' : ''}`}> </span>
                        </div>
                        {isOpen[index] && (
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
