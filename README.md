1、npm install selenium-webdriver

2、下載二進制文件 https://www.selenium.dev/documentation/zh-cn/webdriver/driver_requirements/ 

***必須下載匹配自己瀏覽器版本號相對應的文件***

3、配置環境變量
    1、查看環境變量 echo $PATH
    2、設置環境變量 export PATH="$PATH:路徑"
    3、把剛下載的二進制文件放到你指定的路徑下

4、命令行運行下載的二進制文件名稱 結果彈出
Starting ChromeDriver 88.0.4324.27 (6347fe8bf1e48bd0c54d07dc55ca011cf40861c9-refs/branch-heads/4324@{#450}) on port 9515
Only local connections are allowed.
Please see https://chromedriver.chromium.org/security-considerations for suggestions on keeping ChromeDriver safe.
ChromeDriver was started successfully.
證明已經成功

5、編寫js文件 參考官方文檔 編寫完成後使用node運行
https://www.selenium.dev/documentation/zh-cn/webdriver/driver_requirements/