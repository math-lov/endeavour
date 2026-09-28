# -*- coding: utf-8 -*-
"""老師指示（2026-09-28）：
  ① en1-c1 重寫：唔可以斷言「只有三個方法」。改為教本課三個最實用方法 ——
     (a) 因式分解「配計算機」（求根逆推因式，唔硬做十字相乘）；
     (b) 兩邊有相同因式：移項後抽公因式（＝安全的約簡）；
     (c) 二次公式。
     配方法只提存在、不教。標題亦不再寫 "never cancel x"。
  ② en1-c2：第一個例子要先講清楚「求 3+8α−2α² 的值」，才開始解。
"""
import json
import sys

sys.stdout.reconfigure(encoding="utf-8")
P = "data/learn/concepts.json"
d = json.load(open(P, encoding="utf-8"))
cards = {c["id"]: c for c in d["cards"]}

# ── ① en1-c1 ────────────────────────────────────────────────────────────────
c1 = cards["en1-c1"]
c1["title"] = {"zh": "解一元二次方程：三個實用方法",
               "en": "Solving a quadratic equation: three practical methods"}
c1["body"] = {
    "zh": "解一元二次方程的方法不只一種 —— 因式分解、二次公式、配方法，或者兩邊有相同因式時直接約簡。"
          "本課集中三個最實用的：\n"
          "① 因式分解（用計算機求根，再逆推因式）—— 唔需要硬做十字相乘；\n"
          "② 兩邊有相同因式時，移項後抽公因式（＝安全的「約簡」）；\n"
          "③ 二次公式 $x=\\frac{-b\\pm\\sqrt{b^{2}-4ac}}{2a}$ —— 根是根式、或係數唔靚時用。\n"
          "方法一（計算機因式分解）：Casio fx-50FH II 按【FMLA 01】（或 fx-3650P II 執行 Prog 1），"
          "輸入 $a$、$b$、$c$ 求兩根。逆推口訣：分數根 $x=\\frac{p}{q}$ → 因式 $(qx-p)$；"
          "整數根 $x=k$ → 因式 $(x-k)$：\n{{math:0}}\n"
          "方法二（兩邊有相同因式）：最直接就係「約走」它 —— 但約走等於假設它不等於 0，"
          "會漏掉「它 $=0$」那個根。安全做法是把所有項移到一邊，再抽出共同因式：\n"
          "✗ 錯（兩邊直接約走 $x$）：{{math:1}} → 只剩 $x=-8$，$x=0$ 不見了\n"
          "✓ 對（移項、抽公因式）：{{math:2}}\n"
          "本課的 $(x-2t)(x-3t)=(6t-x)(x-3t)$ 就是這種：直接約走 $(x-3t)$ 會漏掉 $x=3t$；"
          "移項後抽公因式得 $(x-3t)(2x-8t)=0$，兩根齊全。\n"
          "方法三（二次公式）：因式分解唔靚（根是根式）時用：{{math:3}}\n"
          "最後：不論用哪個方法，答案一定要寫齊所有根（「or」前後都要）。",
    "en": "There is more than one way to solve a quadratic equation — factorisation, the quadratic formula, "
          "completing the square, or cancelling straight away when both sides share the same factor. "
          "This lesson focuses on the three most useful:\n"
          "(1) factorisation (find the roots with the calculator, then work back to the factors) — no need to "
          "force the cross-method;\n"
          "(2) when both sides share a factor, move everything to one side and factor it out (a safe form of "
          "“cancelling”);\n"
          "(3) the quadratic formula $x=\\frac{-b\\pm\\sqrt{b^{2}-4ac}}{2a}$ — for surd roots or awkward "
          "coefficients.\n"
          "Method 1 (calculator factorisation): on a Casio fx-50FH II press [FMLA 01] (or run Prog 1 on a "
          "fx-3650P II) and enter $a$, $b$, $c$ to get the two roots. Reverse rule: a fraction root "
          "$x=\\frac{p}{q}$ gives the factor $(qx-p)$; an integer root $x=k$ gives $(x-k)$:\n{{math:0}}\n"
          "Method 2 (a factor on both sides): the quickest move is to “cancel” it — but cancelling assumes it "
          "is not 0, so the root “it equals 0” is lost. The safe way is to move every term to one side and "
          "then factor it out:\n"
          "✗ Wrong (cancelling $x$ on both sides): {{math:1}} → only $x=-8$ is left, $x=0$ is gone\n"
          "✓ Right (move to one side, factor out): {{math:2}}\n"
          "This lesson's $(x-2t)(x-3t)=(6t-x)(x-3t)$ is exactly that kind: cancelling $(x-3t)$ loses $x=3t$; "
          "moving everything to one side and factoring gives $(x-3t)(2x-8t)=0$, with both roots kept.\n"
          "Method 3 (quadratic formula): use it when factorisation is not clean (surd roots): {{math:3}}\n"
          "Finally: whichever method you use, always write every root (both sides of “or”).",
}
c1["math"] = [
    "3x^{2}-14x+8=0\n\\Rightarrow x=\\frac{2}{3}\\text{ or }4\n\\Rightarrow (3x-2)(x-4)=0",
    "x(2x+3)=x(x-5)\n\\Rightarrow 2x+3=x-5\n\\Rightarrow x=-8",
    "x(2x+3)=x(x-5)\n\\Rightarrow x^{2}+8x=0\n\\Rightarrow x(x+8)=0\n\\Rightarrow x=0\\text{ or }-8",
    "x^{2}-4x-2=0\n\\Rightarrow x=\\frac{4\\pm\\sqrt{16+8}}{2}=\\frac{4\\pm 2\\sqrt{6}}{2}=2\\pm\\sqrt{6}",
]
c1["warn"] = {
    "zh": "兩邊「約走」相同因式 ＝ 假設它不等於 0，一定會漏一個根 —— 記得補回（或改用「移項＋抽公因式」）。"
          "答案務必寫齊所有根。",
    "en": "“Cancelling” a factor that appears on both sides assumes it is not 0, so a root is always lost — "
          "put it back (or move everything to one side and factor instead). Always write every root.",
}
print("① en1-c1 已重寫：標題、body（4 條公式）、warn")

# ── ② en1-c2：例子先講清楚題目要求什麼 ─────────────────────────────────────
c2 = cards["en1-c2"]
c2["body"] = {
    "zh": "卷二最愛考這種題：已知一個根，要求另一條式子的值 —— 做法通常是兩步："
          "① 寫下 $a\\alpha^{2}+b\\alpha+c=0$；② 把目標式砌成 $\\alpha^{2}$（或 $a\\alpha^{2}$）的倍數，"
          "再代入。\n"
          "例：已知 $\\alpha$ 是方程 $x^{2}-4x-2=0$ 的一個根，求 $3+8\\alpha-2\\alpha^{2}$ 的值。{{math:0}}\n"
          "不需要求出 $\\alpha$ 的數值（它通常是無理數）；用「根」這個關係就夠。\n"
          "另一個例子：已知 $\\beta$ 是方程 $3\\beta^{2}-5\\beta-7=0$ 的一個根，"
          "求 $4+10\\beta-6\\beta^{2}$ 的值。{{math:1}}",
    "en": "A Paper 2 favourite: given one root, find the value of another expression — usually two steps: "
          "(1) write down $a\\alpha^{2}+b\\alpha+c=0$; (2) build the target expression as a multiple of "
          "$\\alpha^{2}$ (or $a\\alpha^{2}$) and substitute.\n"
          "Example: given that $\\alpha$ is a root of $x^{2}-4x-2=0$, find the value of "
          "$3+8\\alpha-2\\alpha^{2}$. {{math:0}}\n"
          "You do not need the value of $\\alpha$ itself (it is usually irrational); the root relation is "
          "enough.\n"
          "Another example: given that $\\beta$ is a root of $3\\beta^{2}-5\\beta-7=0$, find the value of "
          "$4+10\\beta-6\\beta^{2}$. {{math:1}}",
}
print("② en1-c2 已重寫：兩個例子都先寫出「已知…求…的值」")

# ── 驗證：每個 {{math:N}} 都要有對應，且每條 math 都被引用 ─────────────────
import re
for cid in ("en1-c1", "en1-c2"):
    c = cards[cid]
    refs = sorted({int(n) for t in c["body"].values() for n in re.findall(r"\{\{math:(\d+)\}\}", t)})
    n = len(c.get("math") or [])
    ok_ref = refs == list(range(n))
    print("  %s：{{math}} 引用 %s / 共 %d 條 → %s" % (cid, refs, n, "✓" if ok_ref else "✗"))
    assert ok_ref, cid

json.dump(d, open(P, "w", encoding="utf-8", newline="\n"), ensure_ascii=False, indent=1)
open(P, "a", encoding="utf-8", newline="\n").write("\n")
print("已寫入", P)
