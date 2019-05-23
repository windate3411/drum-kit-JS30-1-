# drum-kit(JS30-1)
# 學習重點
+ 善用data-* attribute方便後續的元素選取。
+ 利用 http://keycode.info/ 可以查出每個鍵對應的key-code
+ 利用.play()播放audio音訊，但由於連續點擊時會發現每段音訊完整播放完後才能播放下一次音訊，解決的方法便是加入.currentTime = 0 讓每次點擊時該音訊rewind回到開頭。
+ 在每一次點擊時，對應的按鈕會放大(transform:scale)並改變邊框顏色，但我們預期的效果是點擊後要迅速恢復原狀。這時候我們會需要在每一個key上面加上監聽器(利用forEach處理Node List)，此時的事件類型為'transitionend' 也就是每次變換結束後便會觸發接下來的函式，那要如何判定一個元素已經完成轉換? 需要檢查該元素的propertyName == 'transform'。
***
+ 未完成的功能為:建立一個空陣列儲存每次點擊的key-code，點擊播放按鈕後播放出使用者剛剛製作的歌曲，但目前卡在所有音訊會在同一時間播放。
