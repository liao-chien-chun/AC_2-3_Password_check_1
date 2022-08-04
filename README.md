# Ａ13 選修： 帳密檢查機制
實作簡單的，帳號密碼認證練習版本

## 功能介紹
* 運用資料庫新增種子資料，做簡單的登入認證練習

## 使用版本
* node.js v16.15.1
* Express v4.18.1
* body-parser v1.20.0
* express-handlebars v6.0.6
* mongoose v6.5.0
* nodemon v2.0.19
* MongoDB

## 如何使用該專案(安裝與執行)
1. 確認有node.js 與npm
2. 將專案下載到本地
3. 下載完畢後，使用終端機進入資料夾然後輸入:
  ```properties
    npm install
  ```
4. 修改資料庫連線設定，改成您個人的資料庫
5. 都安裝修改完後，先新增種子資料到資料庫，終端機輸入：
  ```properties
    npm run seed
  ```
6. 會看見以下訊息:
  ```properties
    add seed data
    done
  ```
7. 啟動伺服器：
 ```properties
    npm run dev
  ```
8. 當終端機出現以下字樣代表伺服器啟動成功：
 ```properties
    server is running on localhost:3000
    mongodb connected
  ```