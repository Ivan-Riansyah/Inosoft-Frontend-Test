# Inosoft-Frontend-Test

Panduan Instalasi :

1. Download dan install composer. composer dapat didownload pada link berikut : https://getcomposer.org/
2. Download dan install node.js. node.js dapat didownload pada link berikut : https://nodejs.org/en/
3. Download fresh project laravel 8 menggunakan composer dengan perintah :
   composer create-project laravel/laravel example-app
4. Kemudian install laravel/ui menggunakan composer dengan perintah :
   composer require laravel/ui
5. Setelah package laravel/ui terinstall, gunakan perintah artisan ui untuk menginstall scaffolding Vue :
   php artisan ui vue
6. Kemudian Install pula Vuex sebagai State Management dengan perintah :
   npm install vuex --save
7. Lalu jalankan perintah npm install dan npm run dev untuk meng-compile js dan css :
   npm install

   npm run dev
8. Jalankan project menggunakan perintah :
   php artisan serve
9. Install Json Server menggunakan perintah npm :
   npm install -g json-server
10. Buat folder dan data dummy json yang akan digunakan. Lalu jalankan perintah berikut pada direktori/folder tersebut :
   json-server --watch db.json
11. Buka browser dan ketikkan alamat localhost Anda. Pada kasus project ini menggunakan 
   http://localhost:8000/


Demo Hasil :

video demo hasil test dapat dilihat pada https://drive.google.com/file/d/1uUtZfeSa5oQuEV1wU7w5FXB-eRcj7EIv/view?usp=sharing
