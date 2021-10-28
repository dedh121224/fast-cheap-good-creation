# fast-cheap-good-creation

https://dedh121224.github.io/fast-cheap-good-creation/

靈感是在網上閱讀別人介紹技術文章時，看到一張動圖，上面有三個關閉的按鈕，Fast、Cheap、Good，由上至下，有個鼠標試圖將三個按鈕都點開，可是每次點到第三個總有一個會自動關閉。感覺挺有意思的。

不過該動圖中，看不到該按鈕對應的反面，如Fast對應Slow，而且由上至下無法直接表現出三者的連動性。Google可以看到有人將其做成Venn diagram，不過未發現有人做成動態可點選的模式。

最終以Venn diagram呈現，一開始按鈕全關，以灰色顯示三者，Fast、Cheap、Good，並以黑色顯示三者的對立面，Slow 、Expensive、Bad，點開按鈕時，以Fast為例，則隱藏Slow，並使畫面上黑色變成Fast、Expensive
、Bad。

由於背景全白感覺過於單調，加入了particles.js呈現動態，並會隨著滑鼠移動做出反應的點線組合。
