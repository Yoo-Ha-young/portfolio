import React, { useState } from "react";
import { CONTACT } from "../constants";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/.netlify/functions/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            alert(data.message);
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
        } catch (error) {
            console.error('Error:', error);
            alert('이메일 전송에 실패했습니다. 다시 시도해주세요.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="contact">
            <div className="contact__inner">
                <h2 className="contact__title">Contact Me</h2>
                <p className="contact__desc">문의사항이 있으시면 아래 폼을 통해 연락주세요.</p>
                
                <div className="contact__content">
                    <div className="contact__info">
                        <h3>Contact Information</h3>
                        <ul>
                            <li>
                                <strong>Email:</strong>
                                <span>{CONTACT.email}</span>
                            </li>
                            <li>
                                <strong>Phone:</strong>
                                <span>{CONTACT.phone}</span>
                            </li>
                        </ul>
                    </div>

                    <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="form__group">
                            <label htmlFor="name">이름</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form__group">
                            <label htmlFor="email">이메일</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form__group">
                            <label htmlFor="subject">제목</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form__group">
                            <label htmlFor="message">메시지</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="contact__submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? '전송 중...' : '전송하기'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact; 