const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
    // CORS 설정
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST'
            },
            body: ''
        };
    }

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed'
        };
    }

    try {
        const { name, email, subject, message } = JSON.parse(event.body);

        // 이메일 전송 설정
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'hy339814@gmail.com',
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const mailOptions = {
            from: 'hy339814@gmail.com',
            to: 'hy339814@gmail.com',
            subject: `[포트폴리오 문의] ${subject}`,
            text: `
                이름: ${name}
                이메일: ${email}
                제목: ${subject}
                메시지: ${message}
            `
        };

        await transporter.sendMail(mailOptions);

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            body: JSON.stringify({ message: '이메일이 성공적으로 전송되었습니다.' })
        };
    } catch (error) {
        console.error('이메일 전송 실패:', error);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            body: JSON.stringify({ message: '이메일 전송에 실패했습니다.' })
        };
    }
}; 