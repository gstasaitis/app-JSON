import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <div id='faq' className="faqsection">
        <div className="faqhead">
            <h1>FAQ</h1>
        </div>
        <div className="faq-content">
            <AnimatePresence>
                {FAQdata.map((faq, index) => (
                    <motion.div
                        key={index}
                        className="faq-item"
                        layout
                        initial={{ borderRadius: 10 }}
                        whileHover={{ borderRadius: 20 }}
                    >
                        <div className="faq-question" onClick={() => toggleQuestion(index)}>
                            <div className="space">
                                <h3>{faq.question}</h3>
                                <span className='expand'>
                                    {expandIcons[index] ? <MdOutlineExpandMore /> : <MdOutlineExpandLess />}
                                </span>
                            </div>
                            <span className={`arrow ${isOpen[index] ? 'open' : ''}`}> </span>
                        </div>
                        <AnimatePresence>
                            {isOpen[index] && (
                                <motion.div
                                    key="answer"
                                    className="faq-answer"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                >
                                    <p>{faq.answer}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    </div>
    );
};

export default FAQSection;
