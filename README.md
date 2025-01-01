<div align="center">

# Birthday Wishes App (Frontend)
![tbday](https://img.shields.io/badge/tbday-react--app-213555?labelColor=ff6f61&style=for-the-badge&logo=react)

</div>

This project is the frontend application for the **Birthday Wishes App**, where users can submit their wishes and prayers. The application is built using **React** and deployed on **Vercel**, connecting to a backend API hosted on **Railway**.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## **Features**

- Submit `wishes and prayers` with validation.
- Displays a `confirmation message` upon successful submission.
- Connects to a `backend API` for storing data in a hosted database.
- `Responsive design` for desktop and mobile users.

---

## **Tech Stack**

- **React** (Frontend Framework)
- **Vercel** (Frontend Deployment)
- **Railway** (Backend Hosting)
- **MySQL** (Database for storing prayers)

---

## **Setup and Installation**

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/birthday-wishes-frontend.git
cd birthday-wishes-frontend
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Configure Environment Variables**
Create a `.env` file in the project root and add the following:
```bash
REACT_APP_API_URL=https://birthday-backend-production-78b3.up.railway.app/api/prayers
```

### **4. Run the Application Locally**
```bash
npm start
```
The application will run on `http://localhost:3000`.

## **Build and Deployment**

### **1. Build for Production**
```bash
npm run build
```
This will generate the build folder containing the optimized production-ready files.

### **2. Deploy to Vercel**
Log in to `Vercel`.
Import the repository and configure it.
Add the environment variables:
`REACT_APP_API_URL: The API URL of your backend. `
Deploy the project.

## **API Documentation**
The frontend communicates with the backend through the following API endpoints:

`Base URL:`
```bash
https://birthday-backend-production-78b3.up.railway.app/api/prayers
```

### **1. Submit Prayer**
**Endpoint:** `POST /api/prayers`
Request Body:
```bash
{
  "prayer_text": "Your prayer or wish (minimum 50 characters)"
}
```
**Response:**
<ul>
<li>200 Created: Prayer submitted successfully</li>

```bash
{
  "status": "success",
  "message": "Doa berhasil disimpan",
  "data": {
    "id": 1,
    "prayer_text": "Your prayer or wish",
    "created_at": "2024-12-26T12:00:00.000Z"
  }
}
```

<li>400 Bad Request: Invalid request body</li>

```bash
{
  "status": "error",
  "message": "Doa harus minimal 50 karakter"
}
```
</ul>

### **2. Get All Prayers**
Endpoint: `GET /api/prayers`

**Response:**
<ul>
<li>200 OK</li>

```bash
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "prayer_text": "Your prayer or wish",
      "created_at": "2024-12-26T12:00:00.000Z"
    },
    ...
  ]
}
```
</ul>

### **Best Practices Implemented**
<ul>
<li>Environment Variables: Sensitive data is stored securely using `.env`.</li>
<li>Error Handling: Comprehensive error handling for both frontend and backend responses.</li>
<li>Validation: Client-side and server-side validations are in place for user inputs.</li>
<li>Responsive Design: Mobile-friendly layout.</li>
</ul>

### **Contributing**
<ol>
<li>Fork the repository.</li>
<li>Create a feature branch: 

```bash
git checkout -b feature-name
```
</li>
<li>Commit your changes: 

```bash
git commit -m "Add feature-name"
```
</li>
<li>Push to the branch: 

```bash
git push origin feature-name
```
</li>
<li>Open a pull request.</li>
</ol>

### **License**
This project is licensed under the MIT License

### **Contact**
<p>For questions or feedback, please contact:</p>

`Wafiy Anwarul Hikam`
<p>Email: wafiyanwarulhikam12@gmail.com</p>

GitHub: [github.com/wafiyanwarul](https://github.com/wafiyanwarul/)

### **Penjelasan**

- **Features & Tech Stack**: Memberikan gambaran singkat mengenai teknologi dan fitur utama.
- **Setup and Installation**: Langkah instalasi hingga deployment.
- **Folder Structure**: Membantu pengembang baru memahami struktur proyek.
- **API Documentation**: Standar untuk integrasi API.
- **Best Practices**: Menunjukkan kualitas kode yang diimplementasikan.
- **Contributing**: Panduan bagi pengembang lain untuk berkontribusi.
- **Contact**: Menambahkan informasi untuk feedback atau kolaborasi.

Semoga membantu! 🚀

