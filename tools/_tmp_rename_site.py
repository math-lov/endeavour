# -*- coding: utf-8 -*-
"""老師指示（2026-09-28）：改名 ＋ 清走「補底」及同義的標籤字眼（唔想同學覺得自己係「底」）。
   新名：中文「課後研習站 / S.5 課後研習」；英文「After-School Tutorial Session」。
   本檔只改「文字字串」，逐條 assert 對得上（免得靜靜跳過）；跑完可刪。"""
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8")
BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# ── 逐檔的字串替換（old → new）────────────────────────────────────────────
REPL = [
    ("index.html", [
        ("<title>Endeavour · S.5 課後補底（Lesson 1）</title>",
         "<title>Endeavour · S.5 課後研習 After-School Tutorial（Lesson 1）</title>"),
        ("Endeavour 是 S.5 課後補底班的專屬溫習站",
         "Endeavour 是 S.5 課後研習（After-School Tutorial Session）的專屬溫習站"),
        ("Endeavour 補底站<small>S.5 課後補底 · 逐課擊破</small>",
         "Endeavour 研習站<small>課後研習 · 逐題拆解</small>"),
        ("Endeavour<small>S.5 after-school tutorial · one lesson at a time</small>",
         "Endeavour<small>After-School Tutorial Session · one lesson at a time</small>"),
        ("課後補底（本站）", "課後研習（本站）"),
    ]),
    ("start.html", [
        ("寫在開始之前：由現在的位置追上去", "寫在開始之前：由這裡開始，一課一課"),
        ("Before you start: catch up from where you are",
         "Before you start: one lesson at a time, starting here"),
        ("無論你之前因為甚麼原因在數學科落後了進度，只要你今天打開這個網站，就代表你已經踏出追上來最重要的一步。",
         "無論你之前在哪裡停下來，只要你今天打開這個網站，就已經踏出最重要的一步。"),
        ("""Whatever kept you behind in Maths before, opening this site today already
      means you have taken the most important step towards catching up.""",
         """Wherever you stopped before, opening this site today already means
      you have taken the most important step."""),
        ("你不需要為過去落後的課堂焦慮。我們由最核心、最穩陣能拿分的 DSE 課題開始，一課一課把基礎重新搭好。",
         "你不需要為過去未跟上的部分焦慮。我們由最核心、最穩陣能拿分的 DSE 課題開始，一課一課把基礎搭穩。"),
        ("""You do not need to feel anxious about the lessons you missed. We start from
      the most central DSE topics, the ones that reliably earn marks, and rebuild the foundations
      one worksheet at a time.""",
         """You do not need to feel anxious about anything you missed. We start from the
      most central DSE topics — the ones that reliably earn marks — and build the foundations
      one worksheet at a time."""),
    ]),
    ("data/learn/lessons.json", [
        ("Endeavour（S.5 課後補底班）：只收課堂討論過的題目，內容與 DSE Pass 可以重複。",
         "Endeavour（S.5 課後研習 After-School Tutorial Session）：只收課堂討論過的題目，內容與 DSE Pass 可以重複。"),
        ('"zh": "S.5 課後補底"', '"zh": "S.5 課後研習"'),
        ('"en": "S.5 After-school Tutorial"', '"en": "S.5 After-School Tutorial Session"'),
    ]),
    ("data/learn/prompt-templates.json", [
        ("你是一位香港中學文憑試（DSE）數學科的補底老師，專門幫助基礎較弱的學生。",
         "你是一位香港中學文憑試（DSE）數學科的研習導師，擅長把題目拆成小步驟，幫學生一步一步建立信心。"),
        ("我是香港 DSE 數學科考生，正在用「自學追上站」自學。",
         "我是香港 DSE 數學科考生，正在用「Endeavour 課後研習站」自學。"),
        ("remedial", "tutorial"),
    ]),
    ("docs/LEARN-ADD-TOPICS-HANDOFF.md", [
        ("Endeavour 是「S.5 課後補底班」專屬站",
         "Endeavour 是「S.5 課後研習（After-School Tutorial Session）」專屬站"),
    ]),
    ("tools/learn_smoke_test.js", [
        ("/補底老師|考生/", "/研習導師|導師|考生/"),
    ]),
]

print("── 逐條替換 ──")
for rel, pairs in REPL:
    p = os.path.join(BASE, rel)
    txt = open(p, encoding="utf-8").read()
    for old, new in pairs:
        if old not in txt:
            print("  ⚠ %s：找唔到 → %s" % (rel, old[:40]))
            continue
        txt = txt.replace(old, new)
        print("  ✓ %s：%s → %s" % (rel, old[:26], new[:26]))
    open(p, "w", encoding="utf-8", newline="\n").write(txt)

# ── 補漏：任何「補底／落後／後進／remedial」字眼 ────────────────────────────
print("── 掃尾（應該 0 處）──")
pat = re.compile(r"補底|補救|墊底|落後|後進|弱底|remedial")
hits = 0
for root, dirs, files in os.walk(BASE):
    dirs[:] = [d for d in dirs if d not in (".git", "node_modules", "vendor", "__pycache__", "raw")]
    for f in files:
        if not f.endswith((".html", ".js", ".json", ".md")):
            continue
        p = os.path.join(root, f)
        try:
            for i, line in enumerate(open(p, encoding="utf-8"), 1):
                if pat.search(line):
                    print("  ⚠ %s:%d  %s" % (os.path.relpath(p, BASE), i, line.strip()[:90]))
                    hits += 1
        except Exception:
            pass
print("  剩餘 %d 處" % hits)

# ── verify：JSON 仍然有效 ──────────────────────────────────────────────────
for rel in ("data/learn/lessons.json", "data/learn/prompt-templates.json"):
    json.load(open(os.path.join(BASE, rel), encoding="utf-8"))
    print("  JSON 有效：%s ✓" % rel)
