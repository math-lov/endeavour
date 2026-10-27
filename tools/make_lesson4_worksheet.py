#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""產生「Endeavour Lesson 4」工作紙（Word）。

版式跟 Lesson 1–3 的文件一致：
  * A4、四邊 1.27 cm（0.5 吋）、Times New Roman 11 pt
  * 頁頂一行：網址（左）＋校名（右）
  * 標題「S.5 After-School Tutorial – Endeavour Lesson 4」
  * 題號、分數（右對齊）、出處（右對齊、粗體 10 pt）、作答空白
  * 最後一張 Notes 表格

數學用 Word 原生公式（OMML）排版：$...$ 內寫 LaTeX 子集，
支援 \\frac、\\dfrac、\\sqrt、^{}、\\text 與常用符號。

用法
    python -X utf8 tools/make_lesson4_worksheet.py
輸出
    docs/worksheets/endeavour-lesson4.docx
"""
from __future__ import annotations

import os
import re
import sys

from docx import Document
from docx.enum.section import WD_SECTION
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_TAB_ALIGNMENT
from docx.oxml import parse_xml
from docx.oxml.ns import nsdecls, qn
from docx.shared import Cm, Pt, RGBColor

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(BASE, "docs", "worksheets", "endeavour-lesson4.docx")

FONT = "Times New Roman"
SZ = 11

# ─────────────────────────────────────────────────────────────────────────────
# 內容
# ─────────────────────────────────────────────────────────────────────────────
QUESTIONS = [
    {
        "num": 1,
        "text": r"Let $a$, $p$ and $q$ be constants. If $(x-3)(px+q) \equiv -2x^{2}+11x+a$, find $p$, $q$ and $a$.",
        "marks": 3,
        "source": "EPH WS06 Q5",
        "space": 5,
    },
    {
        "num": 2,
        "text": r"Find the quotient and the remainder when $2x^{3}-5x^{2}-4x+7$ is divided by $2x-5$.",
        "marks": 3,
        "source": "EPH WS06 Q9",
        "space": 6,
    },
    {
        "num": 3,
        "text": r"Let $f(x)=5x^{3}-kx^{2}+17x-14$, where $k$ is a constant. When $f(x)$ is divided by $5x-2$, the quotient and the remainder are $ax^{2}-x+b$ and $c$ respectively, where $a$, $b$ and $c$ are constants.",
        "parts": [(r"(a)", r"Find $a$, $b$ and $c$.", 3), (r"(b)", r"Find $k$.", 1)],
        "marks": 4,
        "source": "EPH WS06 Q14",
        "space": 7,
    },
    {
        "num": 4,
        "text": r"Let $f(x)=-4x^{3}+ax^{2}+bx+20$, where $a$ and $b$ are constants. When $f(x)$ is divided by $x+1$, the remainder is $25$. When $f(x)$ is divided by $x-2$, the remainder is $10$. Find $a$ and $b$.",
        "marks": 5,
        "source": "EPH WS06 Q21",
        "space": 8,
    },
    {
        "num": 5,
        "text": r"Let $f(x)=3x^{3}+kx^{2}+x-20$, where $k$ is a constant. It is given that $x+5$ is a factor of $f(x)$.",
        "parts": [(r"(a)", r"Find $k$.", 2), (r"(b)", r"Factorize $f(x)$ completely.", 3)],
        "marks": 5,
        "source": "EPH WS06 Q24",
        "space": 7,
    },
    {
        "num": 6,
        "text": r"Consider $f(x)=(x-7)(x^{2}+7x-11)$. How many rational roots does the equation $f(x)=0$ have? Explain your answer.",
        "marks": 4,
        "source": "EPH WS06 Q28",
        "space": 8,
    },
    {
        "num": 7,
        "text": r"Find the H.C.F. and the L.C.M. of $9a^{3}b^{4}$, $6ab^{2}$ and $15b^{6}$.",
        "marks": 4,
        "source": "EPH WS06 Q33",
        "space": 6,
    },
    {
        "num": 8,
        "text": r"Simplify $\dfrac{6x^{2}+12x-18}{x+3} \div \dfrac{12x^{2}-9x-3}{2x-5}$.",
        "marks": 4,
        "source": "EPH WS06 Q40",
        "space": 7,
    },
    {
        "num": 9,
        "text": r"Let $f(x)=x^{2}(4x+a)+b$, where $a$ and $b$ are constants. It is given that $f(x)$ is divisible by $x+3$. When $f(x)$ is divided by $x-2$, the remainder is $a+74$.",
        "parts": [
            (r"(a)", r"Find $a$ and $b$.", 3),
            (r"(b)", r"Someone claims that the equation $f(x)=0$ has two irrational roots. Do you agree? Explain your answer.", 4),
        ],
        "marks": 7,
        "source": "EPH WS06 Practice 1 · Modified from HKDSE 2018 Paper 1 Q12",
        "space": 10,
    },
]

MCS = [
    {
        "num": 10,
        "text": r"$(x-1)(x^{2}-x-1)=$",
        "options": [(r"A.", r"$x^{3}-1$"), (r"B.", r"$(x-1)^{3}$"), (r"C.", r"$x^{3}-2x^{2}+1$"), (r"D.", r"$x^{3}-2x^{2}-2x-1$")],
        "source": "[HKDSE 2015 Paper 2 Q1]",
    },
    {
        "num": 11,
        "text": r"$\dfrac{4}{x+4}-\dfrac{5}{x-5}=$",
        "options": [
            (r"A.", r"$\dfrac{x}{(x+4)(x-5)}$"),
            (r"B.", r"$\dfrac{x}{(x+4)(5-x)}$"),
            (r"C.", r"$\dfrac{x+40}{(x+4)(x-5)}$"),
            (r"D.", r"$\dfrac{x+40}{(x+4)(5-x)}$"),
        ],
        "source": "[HKDSE 2023 Paper 2 Q2, 2021 Paper 2 Q4, 2020 Paper 2 Q3, 2018 Paper 2 Q4]",
    },
    {
        "num": 12,
        "text": r"Let $f(x)=x^{3}+2x^{2}-x+5$. When $f(x)$ is divided by $x+3$, the remainder is",
        "options": [(r"A.", r"$-7$"), (r"B.", r"$-1$"), (r"C.", r"$11$"), (r"D.", r"$47$")],
        "source": "[HKDSE Practice Paper 2 Q5, Sample Paper 2 Q5]",
    },
    {
        "num": 13,
        "text": r"If $k$ is a constant such that $x^{3}+5x^{2}+kx-24$ is divisible by $x-2$, then $k=$",
        "options": [(r"A.", r"$-6$"), (r"B.", r"$-2$"), (r"C.", r"$18$"), (r"D.", r"$26$")],
        "source": "[HKDSE 2019 Paper 2 Q9, 2012 Paper 2 Q4]",
    },
    {
        "num": 14,
        "text": r"Let $h(x)=ax^{3}+3ax^{2}-8$, where $a$ is a constant. If $x+1$ is a factor of $h(x)$, then $h(1)=$",
        "options": [(r"A.", r"$-24$"), (r"B.", r"$0$"), (r"C.", r"$4$"), (r"D.", r"$8$")],
        "source": "[HKDSE 2020 Paper 2 Q6]",
    },
    {
        "num": 15,
        "text": r"Let $f(x)=ax^{3}+bx-2$, where $a$ and $b$ are constants. If $x-3$ is a factor of $f(x)$, find the remainder when $f(x)$ is divided by $x+3$.",
        "options": [(r"A.", r"$-4$"), (r"B.", r"$0$"), (r"C.", r"$2$"), (r"D.", r"$4$")],
        "source": "[HKDSE 2023 Paper 2 Q9]",
    },
    {
        "num": 16,
        "text": r"The L.C.M. of $10y^{3}$, $8xy$ and $6x^{5}y$ is",
        "options": [(r"A.", r"$2y$"), (r"B.", r"$2xy$"), (r"C.", r"$120x^{5}y^{3}$"), (r"D.", r"$120x^{6}y^{5}$")],
        "source": "[HKDSE 2023 Paper 2 Q32, 2016 Paper 2 Q31]",
    },
    {
        "num": 17,
        "text": r"The H.C.F. of $x^{2}-x-2$, $x^{2}-4$ and $x^{2}-4x+4$ is",
        "options": [
            (r"A.", r"$x+2$"),
            (r"B.", r"$x-2$"),
            (r"C.", r"$(x+1)(x+2)(x-2)$"),
            (r"D.", r"$(x+1)(x+2)(x-2)^{2}$"),
        ],
        "source": "[Modified from HKDSE 2013 Paper 2 Q31]",
    },
]

# ─────────────────────────────────────────────────────────────────────────────
# LaTeX（子集）→ OMML
# ─────────────────────────────────────────────────────────────────────────────
SYMBOLS = {
    "pm": "±", "mp": "∓", "times": "×", "cdot": "·", "div": "÷",
    "Rightarrow": "⇒", "Leftarrow": "⇐", "Leftrightarrow": "⇔", "iff": "⇔",
    "equiv": "≡", "approx": "≈", "ne": "≠", "neq": "≠",
    "le": "≤", "leq": "≤", "ge": "≥", "geq": "≥",
    "Delta": "Δ", "alpha": "α", "beta": "β", "theta": "θ", "pi": "π",
    "therefore": "∴", "because": "∵", "deg": "deg", "in": "∈",
    "lbrace": "{", "rbrace": "}",
}

SUP_MAP = str.maketrans("0123456789+-=()n", "⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ⁿ")
SUB_MAP = str.maketrans("0123456789+-=()", "₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎")


def _esc(s: str) -> str:
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def _read_group(s: str, i: int) -> tuple[str, int]:
    """i 指向 '{'，回傳 (內容, 之後的位置)。"""
    if i >= len(s) or s[i] != "{":
        return "", i
    depth = 0
    start = i + 1
    while i < len(s):
        if s[i] == "{":
            depth += 1
        elif s[i] == "}":
            depth -= 1
            if depth == 0:
                return s[start:i], i + 1
        i += 1
    return s[start:], len(s)


def _math_run(text: str, upright: bool = False) -> str:
    if not text:
        return ""
    rpr = '<m:rPr><m:sty m:val="p"/></m:rPr>' if upright else ""
    return '<m:r>%s<m:t xml:space="preserve">%s</m:t></m:r>' % (rpr, _esc(text))


def _math_inner(latex: str) -> str:
    out: list[str] = []
    buf: list[str] = []

    def flush() -> None:
        if buf:
            out.append(_math_run("".join(buf)))
            buf.clear()

    i = 0
    n = len(latex)
    while i < n:
        if latex.startswith("\\dfrac{", i) or latex.startswith("\\frac{", i):
            flush()
            k = i + (6 if latex.startswith("\\dfrac{", i) else 5)
            num, k = _read_group(latex, k)
            den, k = _read_group(latex, k)
            out.append("<m:f><m:num>%s</m:num><m:den>%s</m:den></m:f>"
                       % (_math_inner(num), _math_inner(den)))
            i = k
            continue
        if latex.startswith("\\sqrt{", i):
            flush()
            arg, k = _read_group(latex, i + 5)
            out.append('<m:rad><m:radPr><m:degHide m:val="1"/></m:radPr><m:deg/><m:e>%s</m:e></m:rad>'
                       % _math_inner(arg))
            i = k
            continue
        if latex.startswith("\\text{", i):
            flush()
            txt, k = _read_group(latex, i + 5)
            out.append(_math_run(txt.replace("\\ ", " "), upright=True))
            i = k
            continue
        if latex[i] == "^":
            j = i + 1
            if j < n and latex[j] == "{":
                exp, j = _read_group(latex, j)
            elif j < n:
                exp, j = latex[j], j + 1
            else:
                exp, j = "", j
            # 用 Unicode 上標（指數多為數字，效果與 Word 上標一致）
            buf.append(exp.translate(SUP_MAP))
            i = j
            continue
        if latex[i] == "_":
            j = i + 1
            if j < n and latex[j] == "{":
                sub, j = _read_group(latex, j)
            elif j < n:
                sub, j = latex[j], j + 1
            else:
                sub, j = "", j
            buf.append(sub.translate(SUB_MAP))
            i = j
            continue
        if latex[i] == "-":
            buf.append("\u2212")
            i += 1
            continue
        if latex[i] == "\\":
            m = re.match(r"\\([A-Za-z]+)", latex[i:])
            if m:
                name = m.group(1)
                if name in ("left", "right", "big", "Big", "bigl", "bigr"):
                    i += len(name) + 1
                    continue
                if name in ("quad", "qquad"):
                    buf.append("  " if name == "quad" else "    ")
                    i += len(name) + 1
                    continue
                if name in SYMBOLS:
                    buf.append(SYMBOLS[name])
                    i += len(name) + 1
                    continue
                # 未知命令：原樣輸出（不加反斜線）
                buf.append(name)
                i += len(name) + 1
                continue
            # \, \; \! \ 等
            i += 1
            if i < n and latex[i] == " ":
                buf.append(" ")
                i += 1
            continue
        if latex[i] == "{":
            grp, i = _read_group(latex, i)
            buf.append(grp)
            continue
        buf.append(latex[i])
        i += 1

    flush()
    return "".join(out)


def add_math(paragraph, latex: str) -> None:
    xml = "<m:oMath %s>%s</m:oMath>" % (nsdecls("m", "w"), _math_inner(latex))
    paragraph._p.append(parse_xml(xml))


def add_rich(paragraph, text: str, bold: bool = False, size: int | None = None) -> None:
    """$...$ 之間用 OMML 排數學，其餘用普通文字。"""
    parts = text.split("$")
    for idx, seg in enumerate(parts):
        if not seg:
            continue
        if idx % 2 == 1:
            add_math(paragraph, seg)
        else:
            run = paragraph.add_run(seg)
            run.bold = bold
            run.font.name = FONT
            if size:
                run.font.size = Pt(size)


# ─────────────────────────────────────────────────────────────────────────────
# 版面
# ─────────────────────────────────────────────────────────────────────────────
def set_base_style(doc) -> None:
    st = doc.styles["Normal"]
    st.font.name = FONT
    st.font.size = Pt(SZ)
    rpr = st.element.get_or_add_rPr()
    rfonts = rpr.find(qn("w:rFonts"))
    if rfonts is None:
        rfonts = rpr.makeelement(qn("w:rFonts"), {})
        rpr.append(rfonts)
    for attr in ("w:ascii", "w:hAnsi", "w:cs", "w:eastAsia"):
        rfonts.set(qn(attr), FONT)
    st.paragraph_format.space_before = Pt(0)
    st.paragraph_format.space_after = Pt(0)
    st.paragraph_format.line_spacing = 1.15


def add_page_number_footer(section) -> None:
    p = section.footer.paragraphs[0]
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = p.add_run()
    run.font.name = FONT
    run.font.size = Pt(9)
    fld_begin = parse_xml(r'<w:fldChar %s w:fldCharType="begin"/>' % nsdecls("w"))
    instr = parse_xml(r'<w:instrText %s xml:space="preserve"> PAGE </w:instrText>' % nsdecls("w"))
    fld_end = parse_xml(r'<w:fldChar %s w:fldCharType="end"/>' % nsdecls("w"))
    run._r.append(fld_begin)
    run._r.append(instr)
    run._r.append(fld_end)


def add_header_line(doc, right_tab: Cm) -> None:
    p = doc.add_paragraph()
    p.paragraph_format.tab_stops.add_tab_stop(right_tab, WD_TAB_ALIGNMENT.RIGHT)
    r1 = p.add_run("https://math-lov.github.io/endeavour/")
    r1.font.size = Pt(9)
    r1.font.name = FONT
    p.add_run("\t")
    r2 = p.add_run("S.K.H. Bishop Baker Secondary School")
    r2.font.size = Pt(9)
    r2.font.name = FONT
    p.paragraph_format.space_after = Pt(6)


def _marks_label(n: int) -> str:
    return "(%d mark)" % n if n == 1 else "(%d marks)" % n


def build() -> str:
    doc = Document()
    set_base_style(doc)

    sec = doc.sections[0]
    sec.page_width = Cm(21)
    sec.page_height = Cm(29.7)
    sec.top_margin = Cm(1.27)
    sec.bottom_margin = Cm(1.27)
    sec.left_margin = Cm(1.27)
    sec.right_margin = Cm(1.27)
    add_page_number_footer(sec)

    usable = sec.page_width - sec.left_margin - sec.right_margin
    right_tab = usable

    add_header_line(doc, right_tab)

    # 標題
    t = doc.add_paragraph()
    r = t.add_run("S.5 After-School Tutorial – Endeavour Lesson 4")
    r.bold = True
    r.font.size = Pt(15)
    r.font.name = FONT
    t.paragraph_format.space_after = Pt(2)

    s = doc.add_paragraph()
    rs = s.add_run("More about Polynomials")
    rs.bold = True
    rs.font.size = Pt(12)
    rs.font.name = FONT
    s.paragraph_format.space_after = Pt(2)

    m = doc.add_paragraph()
    rm = m.add_run("Time allowed: 60 minutes     Total: 47 marks")
    rm.font.size = Pt(9)
    rm.font.name = FONT
    m.paragraph_format.space_after = Pt(8)

    # Section A
    h = doc.add_paragraph()
    rh = h.add_run("Section A   Structured Questions  (39 marks)")
    rh.bold = True
    rh.font.size = Pt(12)
    rh.font.name = FONT
    h.paragraph_format.space_before = Pt(4)
    h.paragraph_format.space_after = Pt(2)

    note = doc.add_paragraph()
    rn = note.add_run("Answer ALL questions. Write your answers in the spaces provided.")
    rn.italic = True
    rn.font.size = Pt(9.5)
    rn.font.name = FONT
    note.paragraph_format.space_after = Pt(10)

    for q in QUESTIONS:
        p = doc.add_paragraph()
        p.paragraph_format.tab_stops.add_tab_stop(right_tab, WD_TAB_ALIGNMENT.RIGHT)
        p.paragraph_format.space_before = Pt(8)
        p.paragraph_format.keep_with_next = True
        add_rich(p, "%d.  %s" % (q["num"], q["text"]))
        if not q.get("parts"):
            p.add_run("\t")
            rmk = p.add_run(_marks_label(q["marks"]))
            rmk.bold = True
            rmk.font.size = Pt(10)
            rmk.font.name = FONT

        for label, ptext, marks in q.get("parts", []):
            pp = doc.add_paragraph()
            pp.paragraph_format.left_indent = Cm(0.75)
            pp.paragraph_format.space_before = Pt(2)
            pp.paragraph_format.keep_with_next = True
            add_rich(pp, "%s  %s" % (label, ptext))
            if len(ptext) <= 72:
                pp.paragraph_format.tab_stops.add_tab_stop(right_tab, WD_TAB_ALIGNMENT.RIGHT)
                pp.add_run("\t")
                pm = pp.add_run(_marks_label(marks))
                pm.bold = True
                pm.font.size = Pt(10)
                pm.font.name = FONT
            else:
                # 長分題：分數放到下一行右對齊，避免與文字擠在同一行
                mp = doc.add_paragraph()
                mp.alignment = WD_ALIGN_PARAGRAPH.RIGHT
                pm = mp.add_run(_marks_label(marks))
                pm.bold = True
                pm.font.size = Pt(10)
                pm.font.name = FONT
                mp.paragraph_format.space_after = Pt(3)

        src = doc.add_paragraph()
        src.alignment = WD_ALIGN_PARAGRAPH.RIGHT
        rs2 = src.add_run(q["source"])
        rs2.bold = True
        rs2.font.size = Pt(9)
        rs2.font.name = FONT
        src.paragraph_format.space_after = Pt(q["space"] * 14)

    # Section B
    doc.add_page_break()
    hb = doc.add_paragraph()
    rhb = hb.add_run("Section B   Multiple Choice  (8 marks)")
    rhb.bold = True
    rhb.font.size = Pt(12)
    rhb.font.name = FONT
    hb.paragraph_format.space_before = Pt(2)
    hb.paragraph_format.space_after = Pt(2)

    nb = doc.add_paragraph()
    rnb = nb.add_run("Choose the best answer for each question.")
    rnb.italic = True
    rnb.font.size = Pt(9.5)
    rnb.font.name = FONT
    nb.paragraph_format.space_after = Pt(10)

    for q in MCS:
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(6)
        p.paragraph_format.keep_with_next = True
        add_rich(p, "%d.  %s" % (q["num"], q["text"]))
        opts = q["options"]
        for k in range(0, len(opts), 2):
            op = doc.add_paragraph()
            op.paragraph_format.left_indent = Cm(0.9)
            op.paragraph_format.space_before = Pt(1)
            op.paragraph_format.tab_stops.add_tab_stop(Cm(9.4), WD_TAB_ALIGNMENT.LEFT)
            for j, (label, opt) in enumerate(opts[k:k + 2]):
                if j:
                    op.add_run("\t")
                run = op.add_run(label + "  ")
                run.font.name = FONT
                add_rich(op, opt)
        src = doc.add_paragraph()
        src.alignment = WD_ALIGN_PARAGRAPH.RIGHT
        rs3 = src.add_run(q["source"])
        rs3.bold = True
        rs3.font.size = Pt(9)
        rs3.font.name = FONT
        src.paragraph_format.space_after = Pt(1)

    # Notes 表格（與 Lesson 1–3 一致）
    doc.add_paragraph()
    tbl = doc.add_table(rows=1, cols=1)
    tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl.style = "Table Grid"
    cell = tbl.cell(0, 0)
    cell.width = Cm(18.4)
    p0 = cell.paragraphs[0]
    r0 = p0.add_run("Notes:")
    r0.font.name = FONT
    r0.font.size = Pt(11)
    for _ in range(8):
        cell.add_paragraph()

    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    doc.save(OUT)
    return OUT




if __name__ == "__main__":
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass
    path = build()
    print("wrote %s" % os.path.relpath(path, BASE))
