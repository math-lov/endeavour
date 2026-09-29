# Endeavour 研習站（課後研習）

S.5 課後研習的專屬溫習站：**概念卡 → 逐步示範 → MC／短答練習**；題目照原檔（英文）、題解中英對照。

| 項目 | 值 |
|---|---|
| 線上 | `https://math-lov.github.io/endeavour/` |
| Repo | `https://github.com/math-lov/endeavour` |
| 本機 | `C:\Code Buddy\Endeavour` |
| 現有內容 | 課題 `en01`：12 題（MC 8：EN1-M1～M6 ＋ 課後針對練習 M7／M8；短答／長題 4）＋ 3 張概念卡 |
| 進度 | 只存學生瀏覽器（與其他三個站完全分開） |

## 命名與用語（2026-09-28 老師指示）

* 站名：**Endeavour 研習站**（中）／ **After-School Tutorial Session**（英）
* **不使用「補底」及同類標籤字眼**（落後／後進生／基礎較弱…）—— 改為描述做法
* 課程課題名：`S.5 課後研習`

## 檔案結構

| 檔案 | 用途 |
|---|---|
| `index.html` | 首頁（課題卡、統計、其他網站跳轉列） |
| `topic.html?t=en01&p=N` | 課題頁：概念卡（**一頁全部顯示**，頁尾「看完了，開始練習 →」；2026-09-29 前是逐張按「下一張」）→ 示範頁 → MC 練習頁 |
| `wrong.html` | 弱點升級庫（答錯的 MC ＋ 學生自己加入的長／短答） |
| `start.html` | 開始之前（使用指南） |
| `data/learn/*.json` | ✅ **手改**：`bank`／`concepts`／`solutions`／`lessons`／`prompt-templates` |
| `data/*.js` | ❌ 生成檔（勿手改） |
| `tools/make_learn_data.py` | 生成 `data/*.js` ＋ 寫版本戳（內容 hash，內容一變 `?v=` 就變） |
| `tools/learn_check.py` | 結構／雙語／數式規則（I1–I11）**必須 0 錯 0 警** |
| `tools/learn_katex_check.js` | 用真 KaTeX 逐條解析所有數學式 |
| `tools/learn_smoke_test.js` | 學生全流程測試（jsdom ＋ 真 KaTeX） |
| `tools/learn_lang_check.py` | 繁體中文（台灣／大陸字形）檢查 |
| `docs/LEARN-ADD-TOPICS-HANDOFF.md` | 加課題、硬規則、內容契約（與 DSE Pass 共用） |

## 流程

```powershell
cd "C:\Code Buddy\Endeavour"

python -X utf8 tools/make_learn_data.py     # 生成（會更新三個 HTML 的版本戳）
python -X utf8 tools/learn_check.py         # 0 錯 0 警
$env:NODE_PATH = "C:\Code Buddy\DSEPass\node_modules"
node tools\learn_katex_check.js             # all LaTeX renders cleanly
node tools\learn_smoke_test.js              # all Endeavour smoke tests passed

git add -A; git commit -m "…"; git push     # 約 1 分鐘上線
```

## 內容規則（四站共用，2026-09-28 老師指示）

1. **題目**：照原檔（通常全英）；**解說**中英齊全。
2. **數式一律英文** —— `math`／`highlight` 與散文 `$…$` 內不可有中文（「或」寫 `\text{or}`）。
3. **數式分行** —— 一行過長要在 `=`／`\Rightarrow` 前斷行（運算符留續行開頭）。
4. **不標籤學生**（見上）。
5. 概念卡 `body` 用 `{{math:N}}` 插入公式；`math` 逐條分行已支援多行渲染。

> 自動防線：`learn_check` 的 **I9**（`**` 會原樣顯示 → 錯誤）、**I10**（數式內中文 → 錯誤）、
> **I11**（單行過長 → 警告）；`learn_smoke_test.js` 亦會掃 `**` 與數式內中文。

## 與其他站的關係

首頁有「其他網站」跳轉列：每日三題 Daily 3 ／ 自學追上站 DSE Pass ／ 5A 數學溫習站 ／ 本站。
⚠️ **不要連去 `daily.math/learn/`**（該站計劃砍掉重做）。
