import React from 'react';
import FlipCard from '../../component/FlipCard/flipCard'
import './index.css'

function Plains() {
    return (
        <section className="plains_section">
            <h2 className='plain_title'>Plans</h2>
            <h2 className='plain_heading'>Our Monthly Plans</h2>
            <div className="flip-card-container">
                <FlipCard
                    className="flip_card1"
                    planName="Plan A"
                    price="$50/month"
                    description={[
                        "Comprehensive Quranic instruction over 2 days.",
                        "Individualized attention, covering recitation and basic understanding.",
                        "Flexible scheduling for busy learners.",
                        "Cost-effective at $40."
                    ]}
                />
                <FlipCard
                    className="flip_card2"
                    planName="Plan B"
                    price="$40/month"
                    description={[
                        "Deeper Quranic learning over 3 days.",
                        "Detailed guidance on Tajweed and Tafsir.",
                        "Interactive sessions for enhanced comprehension.",
                        "Support for practice and doubt clarification.",
                        "Great value at $50."
                    ]}
                />
                <FlipCard
                    className="flip_card3"
                    planName="Plan C"
                    price="$30/month"
                    description={[
                        "Intensive 5-day Quranic immersion.",
                        "In-depth study of verses, meanings, and context.",
                        "Advanced Tajweed training and personalized feedback.",
                        "Best option for comprehensive education at $55."
                    ]}
                />
            </div>
        </section>
    );
}

export default Plains;
