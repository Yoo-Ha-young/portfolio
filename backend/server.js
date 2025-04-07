const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

// 환경 변수 확인
console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD ? '설정됨' : '설정되지 않음');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

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

// 이메일 전송 테스트
transporter.verify((error, success) => {
    if (error) {
        console.log('이메일 서버 연결 실패:', error);
    } else {
        console.log('이메일 서버 연결 성공');
    }
});

app.post('/api/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
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
        res.status(200).json({ message: '이메일이 성공적으로 전송되었습니다.' });
    } catch (error) {
        console.error('이메일 전송 실패:', error);
        res.status(500).json({ message: '이메일 전송에 실패했습니다.' });
    }
});

app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
}); 