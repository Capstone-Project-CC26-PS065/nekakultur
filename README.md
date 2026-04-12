1. Prerequisites
   Pastikan tools berikut sudah terpasang sebelum memulai:
   - Git:Untuk clone repository.
   - NVM: Node Version Manager.
   - Node.js 24.14.1: Diinstall via NVM.

2. Install NVM (jika belum ada):
   Linux / macOS
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   Lalu restart terminal, kemudian:
   nvm install 24.14.1

4. Setup & Menjalankan Aplikasi
   - git clone https://github.com/Capstone-Project-CC26-PS065/nekakultur.git
   - cd nekakultur
   - 
5. Menjalankan Front-End\
   Install dependencies:
   - npm install
   Jalankan development server:
   - cd frontend
   - nvm use 24.14.1
   - npm run dev
   Front-End aktif di http://localhost:5173

6. Menjalankan Back-End
   Buka terminal baru:
   - cd backend
   - nvm use 24.14.1
   - node index.js
   Back-End API aktif di http://localhost:5000
