<!--
 * @Author: findnr
 * @Date: 2024-12-03 09:50:12
 * @LastEditors: findnr
 * @LastEditTime: 2024-12-03 10:26:05
 * @Description: 
-->
##### 后台进程相关优化 
- 可以禁用的windows 16 个系统服务：按下 Win + R 组合键打开 “运行” 窗口。 在运行窗口中输入 “services.msc”，然后点击 “确定” 按钮。同时有一款开源的优化软件：https://github.com/rayenghanmi/RyTuneX
- 1、Windows Update：负责系统更新，但有时更新可能导致电脑出现各种问题，且自动更新会占用网络和系统资源。如果您不需要自动更新功能，可以禁用它，在需要时手动更新。
- 2、Windows Search：提供文件搜索功能，但搜索速度慢且占用大量系统资源。建议禁用并使用第三方搜索工具代替。
- 3、Superfetch（SysMain）：用于优化内存管理，不过该服务常驻后台占用系统资源，对于现在的 SSD 硬盘使用场景，其优化效果微乎其微，可以释放大量系统资源。
- 4、Remote Desktop Services（TermService）：如果您不需要使用远程桌面功能，可以禁用它以提高系统安全性和减少资源占用。
- 5、Print Spooler（Spooler）：打印机管理服务，如果您的电脑不连接打印机，可以禁用掉此服务。
- 6、Windows Error Reporting：在系统出现崩溃或系统错误的时候，这个服务会把错误的信息发送给微软，但发送之后也不一定能得到解决，建议禁用。
- 7、Windows Biometric Service：指纹和面部识别服务，如果您的电脑只是日常家用，几乎用不到这个功能，可以考虑禁用。
- 8、Connected User Experiences and Telemetry：会收集和传输诊断及使用信息给微软，以改进其产品的性能和稳定性，但会占用系统资源，可根据个人需求禁用。
- 9、Retail Demo Service：零售演示服务，一般用户用不到，建议禁用。
- 10、家长控制：如果不需要对 Windows 子账户强制执行家长控制，可以禁用。
- 11、Xbox Live：如果您的电脑不玩 Xbox 游戏，可以禁用此服务，减少系统资源占用。
- 12、Edge 浏览器更新服务：该服务会在后台一直运行占用系统资源，您可以使用第三方工具对浏览器进行更新，从而禁用此服务。
- 13、Windows Media Player：一般用户会下载解码能力更强、支持格式更多的第三方媒体播放器，可以禁用 Windows 系统自带的媒体播放器。
- 14、Windows Image Acquisition：为扫描仪、相机提供图像采集服务，如果电脑没有连接这些设备，不需要采集图像，可以禁用。
- 15、windows备份：一方面可以释放磁盘空间，因为该功能会占用一定磁盘存储空间保存备份文件，对于硬盘容量小的设备尤为重要；另一方面能提高系统性能，备份过程占用系统资源可能导致系统变慢，禁用后可减少资源占用使系统更流畅；
- 16、windows推送通知系统服务：能减少干扰，避免通知打断工作娱乐；可提升性能、节省资源，降低系统和网络资源占用；还能增强隐私保护，减少隐私风险。

#### 系统设置中的优化
- windows更新-->高级选项-->传递优化-->允许从其它设备下载（关）：可节省系统盘的空间
- 系统-->多任务处理-->贴靠窗口（关）
- 辅助功能-->视觉效果-->（透明效果、动画效果）（关）