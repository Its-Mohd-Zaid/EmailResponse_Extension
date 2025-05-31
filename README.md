
# 🤖 AI Email Response Generator

> AI-powered email responses for Gmail using Google Gemini

[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white)](https://spring.io/projects/spring-boot)
[![Gmail API](https://img.shields.io/badge/Gmail%20API-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](https://developers.google.com/gmail/api)
[![Gemini AI](https://img.shields.io/badge/Gemini%20AI-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)

## ✨ Features

- 🚀 **AI-powered responses** using Google Gemini
- 📧 **Gmail integration** via Chrome extension
- ⚡ **Real-time generation** - instant responses
- 🎯 **Context-aware** - understands email content
- 🔒 **Secure** - your data stays private

## 🚀 Quick Start

### Backend Setup

1. **Clone & Run**
   ```bash
   git clone https://github.com/yourusername/ai-email-response-generator.git
   cd ai-email-response-generator
   mvn spring-boot:run
   ```

2. **Environment Variables**
   ```bash
   export GEMINI_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent
   export GEMINI_KEY=your-gemini-api-key
   ```

### Chrome Extension

1. Open `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked" → select `extension` folder
4. Open Gmail and start using!

## 📁 Project Structure

```
├── backend/               # Spring Boot API
│   └── src/main/java/
├── extension/             # Chrome Extension
│   ├── manifest.json
│   └── content.js
└── README.md
```

## ⚙️ Configuration

**Application Properties:**
```properties
spring.application.name=EmailGenerator
gemini.api.url=${GEMINI_URL}
gemini.api.key=${GEMINI_KEY}
```

## 🔌 API Endpoints

```http
POST /api/generate-response
{
  "emailContent": "Original email text",
  "responseStyle": "professional|casual|friendly"
}
```

## 🛠️ Tech Stack

- **Backend:** Spring Boot, Java 17
- **Frontend:** Chrome Extension, JavaScript
- **AI:** Google Gemini API
- **Integration:** Gmail API

## 📸 Screenshots
*Original Email*
![Image](https://github.com/user-attachments/assets/2b7119f0-a7fd-4371-9af9-adf5ebdddefe)

*AI response button in Gmail compose*
![Image](https://github.com/user-attachments/assets/bad56561-68d2-4855-b83f-46f42cdff8fd)

*Generating AI response*
![Image](https://github.com/user-attachments/assets/dfd0702c-ed7b-4259-81ad-3798aa60f7c7)

*Generated AI response*
![Image](https://github.com/user-attachments/assets/3b6e5754-6030-4ca5-88e7-0922fca4e588)


## 🤝 Contributing

1. Fork the repo
2. Create feature branch
3. Make changes
4. Submit pull request

⭐ **Star this repo if helpful!**
