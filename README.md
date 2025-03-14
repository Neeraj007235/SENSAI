# SensAI: AI-Powered Career Development SaaS

## 📝 Description

SensAI is an AI-powered SaaS platform designed to provide users with personalized career development insights, tools, and content generation. The platform includes interactive onboarding, industry insights, personalized career dashboards, and AI-driven tools for resume building, cover letter generation, and interview preparation.

## 🔮 Features

- 🌐 **Landing Page**: Interactive UI with Clerk authentication (Google, GitHub, email) to enable smooth sign-ups and logins.
- 📊 **Industry Insights**: Users can view personalized industry insights and salary charts, refreshed weekly using the Inngest and Gemini APIs.
- 📝 **Onboarding**: Streamlined onboarding process with form validation using React Hook Form and Zod.
- 📈 **Dashboard**: Personalized career insights refreshed weekly via the Gemini API for up-to-date career guidance.
- 💼 **Career Tools**: AI-powered tools for resume building, cover letter generation, and interview preparation.
- 🎨 **UI**: A consistent and modern design powered by ShadCN UI and Luciad React icons to ensure a smooth user experience.

## 🚀 Live Preview

You can view the live preview of the project [here](https://sensai-indol.vercel.app/).

## 💻 Tech Stack

![Next JS](https://img.shields.io/badge/Next_JS-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Neon PostgreSQL](https://img.shields.io/badge/Neon-010101?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-22A7F0?style=for-the-badge&logo=clerk&logoColor=white)
![Inngest](https://img.shields.io/badge/Inngest-000000?style=for-the-badge&logo=inngest&logoColor=white)
![Gemini API](https://img.shields.io/badge/Gemini%20API-FF4F00?style=for-the-badge&logo=huggingface&logoColor=white)
![ShadCN UI](https://img.shields.io/badge/ShadCN%20UI-000000?style=for-the-badge&logo=react&logoColor=white)
![React Hook Form](https://img.shields.io/badge/react%20hook%20form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![Zod](https://img.shields.io/badge/zod-274d82?style=for-the-badge&logo=zod&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-00A9D1?style=for-the-badge&logo=react&logoColor=white)

### ⚙️ Installation

1. **Fork this repository:** Click the Fork button located in the top-right corner of this page.
2. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/SENSAI.git

3. **Create .env file:**
   Inside the root directory create `.env` and set:


   ```bash
    DATABASE_URL=

    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=

    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

    GEMINI_API_KEY=
   ```

4. **Install dependencies:**
   ```bash
   npm install     # Run in root directory
   ```
5. **Start the server:**
   ```bash
   npm run dev
   ```
6. **Access the application:**
   ```bash
   http://localhost:3000/
   ```
   
## 🌟 Support Us

If you find this helpful or valuable, please consider 🌟 starring the repository. It helps us gain visibility and encourages further development. We appreciate your support!

## 📧 Contact Information

For questions or inquiries, please contact [Neeraj Gupta](mailto:guptaneeraj2811@gmail.com).
