// 自動生成，請勿手改（來源：data/learn/；重新生成：python tools/make_learn_data.py）
window.LEARN_TOPIC_EN05 = {
 "id": "en05",
 "stage": 1,
 "unit": 5,
 "subtopic": "quadratic-equations",
 "source": "S.K.H. Bishop Baker Secondary School · S.5 After-School Tutorial · Endeavour Lesson 5（EPH WS05：Quadratic Equations in One Unknown and Complex Numbers）",
 "name": {
  "zh": "Lesson 5 · 一元二次方程與複數（全章重溫）",
  "en": "Lesson 5 · Quadratic equations and complex numbers (chapter review)"
 },
 "intro": {
  "zh": "這一課是「一元二次方程與複數」的整章重溫，題目照工作紙 WS05 的編排分四組：\n① 解方程：因式分解、兩邊開平方、二次公式；兩邊有同一個括號時，先移項再令每個因式 $=0$；\n② 判別式 $\\Delta=b^{2}-4ac$：判斷根的性質，並求 $k$ 的範圍；\n③ 根與係數 $\\alpha+\\beta=-\\frac{b}{a}$、$\\alpha\\beta=\\frac{c}{a}$：把對稱式化成和與積，或者消去未知的 $p$；\n④ 複數：$i^{2}=-1$、$i$ 的冪、加減乘與除法（分母乘共軛）。\n卷一有 6 條長題，步驟照官方評分寫上 1M／1A；卷二有 12 題 MC，每頁 3 題。",
  "en": "This lesson reviews the whole chapter on quadratic equations and complex numbers, following the four groups in worksheet WS05:\n(1) solving equations: factorisation, taking square roots, the quadratic formula; when the same bracket appears on both sides, move everything to one side and set each factor to $0$;\n(2) the discriminant $\\Delta=b^{2}-4ac$: decide the nature of the roots and find the range of $k$;\n(3) sum and product of roots $\\alpha+\\beta=-\\frac{b}{a}$ and $\\alpha\\beta=\\frac{c}{a}$: turn symmetric expressions into the sum and the product, or eliminate an unknown $p$;\n(4) complex numbers: $i^{2}=-1$, powers of $i$, the four operations, and division by multiplying by the conjugate.\nThere are 6 Paper 1 questions with the official 1M / 1A marks written out, and 12 Paper 2 multiple-choice questions, three per page."
 },
 "cmdHints": [
  {
   "en": "Solve the equation",
   "zh": "解方程（「or」前後所有根都要寫）"
  },
  {
   "en": "has no real roots",
   "zh": "無實根 → $\\Delta<0$（解不等式，方向不要倒轉）"
  },
  {
   "en": "has equal roots",
   "zh": "有等根 → $\\Delta=0$"
  },
  {
   "en": "The roots of ... are $\\alpha$ and $\\beta$",
   "zh": "兩根是和與積 → 不要解方程，寫 $\\alpha+\\beta$、$\\alpha\\beta$"
  },
  {
   "en": "in the form $a+bi$",
   "zh": "寫成 $a+bi$：實部、虛部分開寫，不可留下 $i^{2}$"
  },
  {
   "en": "the real part / the imaginary part of ...",
   "zh": "實部＝不含 $i$ 的部分；虛部＝$i$ 的係數（連符號）"
  }
 ],
 "lessons": [
  {
   "id": "en05-1",
   "title": {
    "zh": "Lesson 5（卷一 6 題 ＋ 卷二 12 題）",
    "en": "Lesson 5 (6 Paper 1 questions + 12 Paper 2 questions)"
   },
   "cards": [
    {
     "id": "en5-c1",
     "topic": "en05",
     "title": {
      "zh": "解一元二次方程：先看形狀，再選方法",
      "en": "Solving a quadratic equation: read the shape, then choose a method"
     },
     "body": {
      "zh": "先整理成 $ax^{2}+bx+c=0$（右邊是 $0$），再選方法。\n① 可以分解就分解：$x^{2}+10x+25=(x+5)^{2}=0$，得 $x=-5$（重根）。\n② 形狀是「括號平方 $=$ 正數」時，兩邊開平方，記得有正負兩個：\n{{math:0}}\n③ 兩邊有同一個括號：不可以直接約走（會漏根），先移項令右邊是 $0$，再令每個因式各自為 $0$：\n{{math:1}}\n④ 分解不到（根是根式）才用二次公式：\n{{math:2}}\n無論用哪一招，答案要寫齊所有根（「or」前後都要）。",
      "en": "First write it as $ax^{2}+bx+c=0$ (with $0$ on the right), then choose a method.\n(1) Factorise when possible: $x^{2}+10x+25=(x+5)^{2}=0$ gives $x=-5$ (a repeated root).\n(2) When the shape is “a squared bracket equals a positive number”, take the square root of both sides and keep both signs:\n{{math:0}}\n(3) When the same bracket appears on both sides, never cancel it (that loses a root). Move everything to one side so the right-hand side is $0$, then set each factor to $0$:\n{{math:1}}\n(4) Use the quadratic formula only when factorisation is not clean:\n{{math:2}}\nWhichever method you use, write every root (both sides of “or”)."
     },
     "math": [
      "(x+3)^{2}=9\n\\Rightarrow x+3=\\pm 3\n\\Rightarrow x=0\\text{ or }x=-6",
      "(x+3c)(x-c+1)=(x+3c)\n\\Rightarrow (x+3c)(x-c+1-1)=0\n\\Rightarrow (x+3c)(x-c)=0\n\\Rightarrow x=-3c\\text{ or }x=c",
      "x=\\frac{-b\\pm\\sqrt{b^{2}-4ac}}{2a}"
     ],
     "vocab": [
      {
       "en": "factorisation",
       "zh": "因式分解"
      },
      {
       "en": "take the square root",
       "zh": "兩邊開平方"
      },
      {
       "en": "quadratic formula",
       "zh": "二次公式"
      },
      {
       "en": "repeated root",
       "zh": "重根"
      }
     ],
     "warn": {
      "zh": "兩邊有相同括號時直接「約走」，等於假設它 $\\ne 0$，那個根就漏了。做法：先移項令右邊是 $0$，抽公因式，再令每個因式 $=0$。另外，開平方時一定寫 $\\pm$，只寫正數就少一個根。",
      "en": "Cancelling a bracket that appears on both sides assumes it is not $0$, so that root disappears. Move everything to one side, factorise, then set each factor to $0$. When taking square roots, always keep the $\\pm$ sign or one root is lost."
     }
    },
    {
     "id": "en5-c2",
     "topic": "en05",
     "title": {
      "zh": "判別式 $\\Delta=b^{2}-4ac$：一句話決定根的性質",
      "en": "The discriminant $\\Delta=b^{2}-4ac$: one number decides the nature of the roots"
     },
     "body": {
      "zh": "先寫成 $ax^{2}+bx+c=0$，再算判別式：\n{{math:0}}\n題目字眼對照：\n· 「有兩個相異實根」→ $\\Delta>0$\n· 「有等根／重根」→ $\\Delta=0$\n· 「無實根」→ $\\Delta<0$\n· 「有實根」→ $\\Delta\\ge 0$（等根也算有實根，所以有等號）\n判別式不含 $x$，所以最常用來求方程裡的未知係數 $k$：\n{{math:1}}\n兩個常見變化：① 先搬成 $=0$ 才讀出 $a$、$b$、$c$（例如 $kx^{2}-30x+9=0$ 的 $a=k$）；② 問「兩個等正根」時，除了 $\\Delta=0$ 還要看兩根之和為正。",
      "en": "Write the equation as $ax^{2}+bx+c=0$ first, then compute the discriminant:\n{{math:0}}\nMatch the wording:\n· “two distinct real roots” → $\\Delta>0$\n· “equal (repeated) roots” → $\\Delta=0$\n· “no real roots” → $\\Delta<0$\n· “real roots” → $\\Delta\\ge 0$ (equal roots count, so the equality is included)\nThe discriminant contains no $x$, so it is used to find an unknown coefficient $k$:\n{{math:1}}\nTwo common variations: (1) rearrange into the standard form before reading off $a$, $b$ and $c$ (for example $kx^{2}-30x+9=0$ has $a=k$); (2) for “two equal positive roots”, $\\Delta=0$ alone is not enough — the sum of the roots must also be positive."
     },
     "math": [
      "\\Delta=b^{2}-4ac",
      "15x^{2}+6x-k=0\\ \\text{no real roots}\n\\Rightarrow \\Delta=6^{2}-4(15)(-k)<0\n\\Rightarrow 36+60k<0\n\\Rightarrow k<-\\frac{3}{5}"
     ],
     "vocab": [
      {
       "en": "discriminant",
       "zh": "判別式"
      },
      {
       "en": "distinct real roots",
       "zh": "相異實根"
      },
      {
       "en": "range of values",
       "zh": "取值範圍"
      }
     ],
     "warn": {
      "zh": "最常見的錯是忘記先搬成「$=0$」：$x^{2}-4x+k=1$ 的常數項是 $k-1$，不是 $k$。另一個是解不等式時方向倒轉 —— 除以負數要變號；「無實根」只有 $<$，少了等號就錯了。",
      "en": "The commonest slip is forgetting to rearrange into the “$=0$” form: for $x^{2}-4x+k=1$ the constant term is $k-1$, not $k$. The other is flipping the inequality the wrong way — dividing by a negative number reverses it, and “no real roots” uses $<$ only."
     }
    },
    {
     "id": "en5-c3",
     "topic": "en05",
     "title": {
      "zh": "根與係數：用「和」與「積」代替解方程",
      "en": "Sum and product of roots instead of solving the equation"
     },
     "body": {
      "zh": "若 $\\alpha$、$\\beta$ 是 $ax^{2}+bx+c=0$ 的兩個根：\n{{math:0}}\n不必解方程（根通常是無理數）—— 把所有目標式化成「和」與「積」就夠：\n{{math:1}}\n{{math:2}}\n例（本課卷一第 5 題）：$x^{2}+rx+s=0$ 的根是 $3p$ 與 $4p$，求證 $12r^{2}=49s$：\n{{math:3}}\n關鍵是「目標式不含 $p$」，所以由 (1) 把 $p$ 寫成 $r$ 的式子，代入 (2) 消去 $p$。",
      "en": "If $\\alpha$ and $\\beta$ are the roots of $ax^{2}+bx+c=0$:\n{{math:0}}\nThere is no need to solve the equation (the roots are usually irrational) — turn every target expression into the sum and the product:\n{{math:1}}\n{{math:2}}\nExample (Paper 1 question 5 of this lesson): the roots of $x^{2}+rx+s=0$ are $3p$ and $4p$; prove that $12r^{2}=49s$:\n{{math:3}}\nThe target contains no $p$, so make $p$ the subject of (1) and substitute it into (2) to eliminate it."
     },
     "math": [
      "\\alpha+\\beta=-\\frac{b}{a},\\ \\alpha\\beta=\\frac{c}{a}",
      "\\alpha^{2}+\\beta^{2}=(\\alpha+\\beta)^{2}-2\\alpha\\beta",
      "\\alpha^{2}+\\alpha\\beta+\\beta^{2}=(\\alpha+\\beta)^{2}-\\alpha\\beta",
      "3p+4p=-r\\ \\Rightarrow\\ 7p=-r\\ \\ldots(1)\n3p(4p)=s\\ \\Rightarrow\\ 12p^{2}=s\\ \\ldots(2)\np=-\\frac{r}{7}\n\\Rightarrow 12\\left(\\frac{r^{2}}{49}\\right)=s\n\\Rightarrow 12r^{2}=49s"
     ],
     "vocab": [
      {
       "en": "sum of roots",
       "zh": "兩根之和"
      },
      {
       "en": "product of roots",
       "zh": "兩根之積"
      },
      {
       "en": "in terms of",
       "zh": "以…表示"
      },
      {
       "en": "eliminate",
       "zh": "消去"
      }
     ],
     "warn": {
      "zh": "常見三個錯：① 硬解方程求根，再逐個平方相加；② 忘記和是 $-\\frac{b}{a}$（負號漏了）；③ 用了 $\\alpha^{2}+\\beta^{2}=(\\alpha+\\beta)^{2}-2\\alpha\\beta$ 之後，把 $2\\alpha\\beta$ 的符號寫錯 —— $\\alpha\\beta$ 本身是負數時，$-2\\alpha\\beta$ 會變加。",
      "en": "Three common errors: (1) solving the equation and squaring each root; (2) dropping the minus sign in $-\\frac{b}{a}$; (3) mishandling the sign of $2\\alpha\\beta$ — when $\\alpha\\beta$ is negative, $-2\\alpha\\beta$ becomes a plus."
     }
    },
    {
     "id": "en5-c4",
     "topic": "en05",
     "title": {
      "zh": "複數：實部、虛部與 $i$ 的冪",
      "en": "Complex numbers: the real part, the imaginary part and powers of $i$"
     },
     "body": {
      "zh": "複數寫成 $a+bi$，其中 $a$、$b$ 是實數，$i=\\sqrt{-1}$。\n· 實部（real part）＝ $a$，即不含 $i$ 的部分；\n· 虛部（imaginary part）＝ $b$，即 $i$ 的係數，連符號一起寫。\n例：$4-ki$（$k$ 是實數）的實部是 $4$，虛部是 $-k$（不是 $k$）。\n化簡時只需要一條規則：\n{{math:0}}\n任何 $4$ 的倍數次方都是 $1$：\n{{math:1}}\n高次冪不要硬乘，看餘數（見下面的重點框）。\n「$z$ 是實數」＝ 虛部 $=0$；「$z$ 是純虛數」＝ 實部 $=0$ 且虛部 $\\ne 0$。",
      "en": "A complex number is written as $a+bi$, where $a$ and $b$ are real numbers and $i=\\sqrt{-1}$.\n· the real part is $a$, the part without $i$;\n· the imaginary part is $b$, the coefficient of $i$, together with its sign.\nExample: for $4-ki$ ($k$ real), the real part is $4$ and the imaginary part is $-k$ (not $k$).\nOnly one rule is needed when simplifying:\n{{math:0}}\nEvery power that is a multiple of $4$ equals $1$:\n{{math:1}}\nDo not multiply out high powers; use the remainder (see the key box below).\n“$z$ is real” means the imaginary part $=0$; “$z$ is purely imaginary” means the real part $=0$ and the imaginary part $\\ne 0$."
     },
     "math": [
      "i^{2}=-1",
      "i^{4k}=1"
     ],
     "box": {
      "tag": {
       "zh": "重點",
       "en": "Key"
      },
      "title": {
       "zh": "$i$ 的冪：除以 $4$ 看餘數",
       "en": "Powers of $i$: divide by $4$ and look at the remainder"
      },
      "zh": "把次方除以 $4$，餘數直接決定答案：\n{{math:0}}\n例：$18\\div 4$ 餘 $2$，所以 $i^{18}=-1$；$23\\div 4$ 餘 $3$，所以 $i^{23}=-i$。\n{{math:1}}",
      "en": "Divide the power by $4$; the remainder decides the answer:\n{{math:0}}\nExamples: $18\\div 4$ leaves remainder $2$, so $i^{18}=-1$; $23\\div 4$ leaves remainder $3$, so $i^{23}=-i$.\n{{math:1}}",
      "math": [
       "\\text{remainder }1\\rightarrow i,\\ 2\\rightarrow -1\n\\text{remainder }3\\rightarrow -i,\\ 0\\rightarrow 1",
       "i^{18}=i^{4(4)+2}=-1\ni^{23}=i^{4(5)+3}=-i"
      ]
     },
     "vocab": [
      {
       "en": "real part",
       "zh": "實部"
      },
      {
       "en": "imaginary part",
       "zh": "虛部"
      },
      {
       "en": "power",
       "zh": "冪"
      }
     ],
     "warn": {
      "zh": "虛部是「$i$ 的係數」連符號：$4-ki$ 的虛部是 $-k$；$a+bi$ 的虛部是 $b$，不是 $bi$。另外 $i^{n}$ 只看 $n\\div 4$ 的餘數，逐次乘很易錯。",
      "en": "The imaginary part is the coefficient of $i$ with its sign: for $4-ki$ it is $-k$; for $a+bi$ it is $b$, not $bi$. For $i^{n}$, use the remainder of $n\\div 4$; multiplying step by step is error-prone."
     }
    },
    {
     "id": "en5-c5",
     "topic": "en05",
     "title": {
      "zh": "複數的加減乘：最後一定要寫成 $a+bi$",
      "en": "Adding, subtracting and multiplying complex numbers: always end with $a+bi$"
     },
     "body": {
      "zh": "加減：實部歸實部、虛部歸虛部；減號要分配給後面每一項：\n{{math:0}}\n乘：照分配律展開，遇到 $i^{2}$ 就換成 $-1$，最後整理：\n{{math:1}}\n高次冪先化簡，再做四則運算：\n{{math:2}}\n題目要求「express in the form $a+bi$」時，實部與虛部要分開寫：$\\frac{3+i}{10}$ 寫成 $\\frac{3}{10}+\\frac{1}{10}i$。",
      "en": "For addition and subtraction, group the real parts and the imaginary parts; the minus sign must multiply every term that follows:\n{{math:0}}\nFor multiplication, expand as usual, replace $i^{2}$ by $-1$, then tidy up:\n{{math:1}}\nSimplify high powers before doing the four operations:\n{{math:2}}\nWhen a question says “express in the form $a+bi$”, write the two parts separately: $\\frac{3+i}{10}$ becomes $\\frac{3}{10}+\\frac{1}{10}i$."
     },
     "math": [
      "(4+5i)-(6-7i)\n=4+5i-6+7i\n=-2+12i",
      "(1-2i)(3+4i)\n=3+4i-6i-8i^{2}\n=3-2i+8\n=11-2i",
      "3i^{18}+2i^{19}-3i^{20}-5i^{21}\n=3(-1)+2(-i)-3(1)-5(i)\n=-6-7i"
     ],
     "vocab": [
      {
       "en": "expand",
       "zh": "展開"
      },
      {
       "en": "simplify",
       "zh": "化簡"
      },
      {
       "en": "like terms",
       "zh": "同類項"
      }
     ],
     "warn": {
      "zh": "兩個最常見的錯：① 減號只乘第一項（$-(6-7i)=-6+7i$，不是 $-6-7i$）；② 忘記 $i^{2}=-1$，把 $8i^{2}$ 留在答案裡。答案最後一定不可以有 $i^{2}$。",
      "en": "Two common errors: (1) applying the minus sign to the first term only ($-(6-7i)=-6+7i$, not $-6-7i$); (2) leaving $i^{2}$ in the answer instead of replacing it by $-1$. A finished answer never contains $i^{2}$."
     }
    },
    {
     "id": "en5-c6",
     "topic": "en05",
     "title": {
      "zh": "複數除法：分母乘共軛，把 $i$ 趕出分母",
      "en": "Dividing complex numbers: multiply by the conjugate to clear the denominator"
     },
     "body": {
      "zh": "分子、分母同時乘分母的共軛（$a+bi$ 的共軛是 $a-bi$），分母就變成實數 $a^{2}+b^{2}$：\n{{math:0}}\n分母是純虛數 $ni$ 時，乘 $\\frac{i}{i}$ 最快（$i\\cdot i=i^{2}=-1$）：\n{{math:1}}\n同一題常常要接著做下一部分，所以務必整理成 $a+bi$（實部、虛部分開寫）：\n{{math:2}}\n記住：共軛只是「換掉中間的符號」，兩項都要照抄。",
      "en": "Multiply the numerator and the denominator by the conjugate of the denominator ($a-bi$ for $a+bi$); the denominator becomes the real number $a^{2}+b^{2}$:\n{{math:0}}\nWhen the denominator is purely imaginary, $ni$, multiply by $\\frac{i}{i}$ (because $i\\cdot i=i^{2}=-1$):\n{{math:1}}\nThese questions usually continue into the next part, so always tidy the result into $a+bi$:\n{{math:2}}\nRemember: the conjugate only flips the sign in the middle; both terms stay the same."
     },
     "math": [
      "\\frac{1}{1+7i}=\\frac{1-7i}{(1+7i)(1-7i)}\n=\\frac{1-7i}{1-49i^{2}}\n=\\frac{1-7i}{50}\n=\\frac{1}{50}-\\frac{7}{50}i",
      "\\frac{2k-3i}{i}=\\frac{(2k-3i)(-i)}{i(-i)}\n=-3-2ki",
      "\\frac{100}{1+7i}=100\\left(\\frac{1}{50}-\\frac{7}{50}i\\right)\n=2-14i"
     ],
     "vocab": [
      {
       "en": "conjugate",
       "zh": "共軛"
      },
      {
       "en": "denominator",
       "zh": "分母"
      },
      {
       "en": "rationalise",
       "zh": "分母實數化"
      }
     ],
     "warn": {
      "zh": "只乘分子不乘分母，或者共軛只乘一項 —— 要「分子分母整塊乘」。另外 $(1+7i)(1-7i)=1^{2}-(7i)^{2}=1-49(-1)=50$：最後那個負號最容易漏，漏了整個答案都錯。",
      "en": "Some students multiply only the numerator, or apply the conjugate to one term only — the whole numerator and denominator must be multiplied. Also $(1+7i)(1-7i)=1^{2}-(7i)^{2}=1-49(-1)=50$: the last minus sign is the one most often dropped."
     }
    }
   ],
   "long": [
    {
     "id": "eph-en05-q1",
     "type": "long",
     "kind": "short",
     "topic": "en05",
     "unit": 5,
     "subtopic": "quadratic-equations",
     "difficulty": 2,
     "code": "EN5-Q1",
     "source": "EPH WS05 P1 Q1 · 長方形對角線（同款：HKDSE 2019 Paper 1 Q3）",
     "stem": {
      "en": "The breadth and the length of a rectangle are $(26+2r)$ cm and $(10-4r)$ cm respectively. If the length of a diagonal of the rectangle is 34 cm, find $r$.",
      "zh": "一個長方形的闊與長分別為 $(26+2r)$ cm 與 $(10-4r)$ cm。若長方形的一條對角線長 34 cm，求 $r$。"
     },
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 對角線是直角三角形的斜邊",
         "en": "Step 1 · The diagonal is the hypotenuse"
        },
        "math": "(26+2r)^{2}+(10-4r)^{2}=34^{2}",
        "zh": "長方形的長與闊互相垂直，所以「長、闊、對角線」組成一個直角三角形，而對角線是最長的一邊（斜邊）。用畢氏定理就可以列式：$(26+2r)^{2}+(10-4r)^{2}=34^{2}$。",
        "en": "The length and the breadth of a rectangle meet at a right angle, so they form a right-angled triangle whose hypotenuse is the diagonal. By Pythagoras' theorem, $(26+2r)^{2}+(10-4r)^{2}=34^{2}$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 展開並整理成 $ar^{2}+br+c=0$",
         "en": "Step 2 · Expand and rearrange into $ar^{2}+br+c=0$"
        },
        "math": "676+104r+4r^{2}+100-80r+16r^{2}=1156\n\\Rightarrow 20r^{2}+24r-380=0\n\\Rightarrow 5r^{2}+6r-95=0",
        "zh": "逐項展開：$(26+2r)^{2}=676+104r+4r^{2}$，$(10-4r)^{2}=100-80r+16r^{2}$。合併同類項並把 $1156$ 搬到左邊，得 $20r^{2}+24r-380=0$；全式除以 $4$ 之後是 $5r^{2}+6r-95=0$，數字細一點就易分解。",
        "en": "Expand each square: $(26+2r)^{2}=676+104r+4r^{2}$ and $(10-4r)^{2}=100-80r+16r^{2}$. Collect like terms and move $1156$ to the left: $20r^{2}+24r-380=0$. Dividing every term by $4$ gives $5r^{2}+6r-95=0$, with smaller numbers that factorise more easily.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 分解、寫兩個根，再檢查邊長",
         "en": "Step 3 · Factorise, write both roots, then check the side lengths"
        },
        "math": "(r+5)(5r-19)=0\n\\Rightarrow r=-5\\text{ or }r=\\frac{19}{5}",
        "zh": "分解得 $(r+5)(5r-19)=0$，所以 $r=-5$ 或 $r=\\frac{19}{5}$。兩個都要代回檢查：$r=\\frac{19}{5}$ 時闊 $10-4r=-5.2$，邊長不可以是負數，所以捨去；$r=-5$ 時三邊是 $16$、$30$、$34$，而 $16^{2}+30^{2}=1156=34^{2}$，成立。所以 $r=-5$。",
        "en": "Factorising gives $(r+5)(5r-19)=0$, so $r=-5$ or $r=\\frac{19}{5}$. Check both: when $r=\\frac{19}{5}$, the breadth $10-4r=-5.2$ is negative, which is impossible, so it is rejected. When $r=-5$, the sides are $16$, $30$ and $34$, and $16^{2}+30^{2}=1156=34^{2}$. Hence $r=-5$.",
        "marking": "(1A)",
        "highlight": [
         "r=-5"
        ]
       }
      ],
      "traps": [
       {
        "label": "兩個根都保留",
        "labelEn": "Keeping both roots",
        "zh": "$r=\\frac{19}{5}$ 會令闊 $10-4r$ 變成負數 —— 邊長不可能是負數，所以一定要寫 rejected。做完方程不等於做完題目，最後要檢查每個根合不合理。",
        "en": "$r=\\frac{19}{5}$ makes the breadth $10-4r$ negative, and a length cannot be negative, so it must be rejected. Solving the equation is not the end of the question — always check each root."
       },
       {
        "label": "對角線當成邊",
        "labelEn": "Treating the diagonal as a side",
        "zh": "把 34 cm 當成長或闊代入，方程由第一步就錯。34 cm 是斜邊，要單獨放在等號一邊。",
        "en": "Substituting 34 cm as the length or the breadth is wrong from the first line. 34 cm is the hypotenuse and must sit alone on one side."
       }
      ],
      "tip": {
       "zh": "這類題固定三步：列畢氏定理 → 整理成 $=0$ 並約簡係數 → 分解後逐個根檢查，不合理的寫 rejected。最後補一句驗算（$16$、$30$、$34$）就穩拿滿分。",
       "en": "Three fixed steps: write Pythagoras' theorem, rearrange into the $=0$ form and simplify the coefficients, then factorise and check every root, writing \"rejected\" for the impossible one. Adding the check $16$, $30$, $34$ secures the last mark."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算：代回三邊",
         "en": "Check: substitute back into the sides"
        },
        "zh": "$r=-5$ 時長 $=10-4(-5)=30$ cm、闊 $=26+2(-5)=16$ cm，對角線 $=\\sqrt{16^{2}+30^{2}}=\\sqrt{1156}=34$ cm，與題目相符。",
        "en": "With $r=-5$ the length is $10-4(-5)=30$ cm and the breadth is $26+2(-5)=16$ cm, so the diagonal is $\\sqrt{16^{2}+30^{2}}=\\sqrt{1156}=34$ cm, which matches the question."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en05-q2",
     "type": "long",
     "kind": "short",
     "topic": "en05",
     "unit": 5,
     "subtopic": "quadratic-equations",
     "difficulty": 2,
     "code": "EN5-Q2",
     "source": "EPH WS05 P1 Q2 · [HKCEE 2007 Paper 1 Q5]",
     "stem": {
      "en": "Let $k$ be a constant. If the quadratic equation $15x^{2}+6x-k=0$ has no real roots, find the range of values of $k$.",
      "zh": "設 $k$ 為常數。若二次方程 $15x^{2}+6x-k=0$ 沒有實根，求 $k$ 的取值範圍。"
     },
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 把「無實根」翻譯成 $\\Delta<0$",
         "en": "Step 1 · Translate “no real roots” into $\\Delta<0$"
        },
        "math": "\\Delta<0",
        "zh": "二次方程沒有實根，就是判別式小於 $0$。留意「無實根」只有 $<$，沒有等號；有等號的是「有實根」。",
        "en": "A quadratic equation has no real roots exactly when its discriminant is less than $0$. Note that “no real roots” uses $<$ only; the version with $\\ge$ is “has real roots”.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 讀出 $a$、$b$、$c$ 並代入",
         "en": "Step 2 · Read off $a$, $b$, $c$ and substitute"
        },
        "math": "\\Delta=6^{2}-4(15)(-k)",
        "zh": "方程已經是 $15x^{2}+6x-k=0$ 的標準形，所以 $a=15$、$b=6$、$c=-k$。代入 $\\Delta=b^{2}-4ac$ 時，$c$ 是 $-k$，兩個負號相乘會變正，所以是 $-4(15)(-k)$。",
        "en": "The equation is already in the form $15x^{2}+6x-k=0$, so $a=15$, $b=6$ and $c=-k$. In $\\Delta=b^{2}-4ac$ the constant is $-k$, and two minus signs give a plus: $-4(15)(-k)$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 化簡判別式",
         "en": "Step 3 · Simplify the discriminant"
        },
        "math": "36+60k<0",
        "zh": "展開：$6^{2}=36$，而 $-4\\times15\\times(-k)=+60k$。所以判別式是 $36+60k$，條件是 $36+60k<0$。",
        "en": "Expand: $6^{2}=36$ and $-4\\times15\\times(-k)=+60k$, so the discriminant is $36+60k$ and the condition is $36+60k<0$.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 4 步 · 解不等式",
         "en": "Step 4 · Solve the inequality"
        },
        "math": "60k<-36\n\\Rightarrow k<-\\frac{3}{5}",
        "zh": "把 $36$ 搬到右邊得 $60k<-36$，兩邊除以 $60$（正數，不等號方向不變），得 $k<-\\frac{3}{5}$。",
        "en": "Move $36$ to the right: $60k<-36$. Divide both sides by $60$, a positive number, so the inequality keeps its direction: $k<-\\frac{3}{5}$.",
        "marking": "(1A)",
        "highlight": [
         "k<-\\frac{3}{5}"
        ]
       }
      ],
      "traps": [
       {
        "label": "把 $-k$ 當成 $+k$",
        "labelEn": "Using $+k$ instead of $-k$",
        "zh": "常數項是 $-k$，代入時是 $-4(15)(-k)=+60k$。若寫成 $-60k$，最後的答案會變成 $k<\\frac{3}{5}$，方向完全不同。",
        "en": "The constant term is $-k$, so $-4(15)(-k)=+60k$. Writing $-60k$ flips the final answer to $k<\\frac{3}{5}$, which is a different set of values."
       },
       {
        "label": "不等號方向倒轉",
        "labelEn": "Reversing the inequality",
        "zh": "除以正數 $60$ 時不等號不變；只有除以負數才要倒轉。這一步倒轉了，答案就會是 $k>-\\frac{3}{5}$。",
        "en": "Dividing by the positive number $60$ keeps the inequality as it is; only division by a negative number reverses it. Reversing here gives $k>-\\frac{3}{5}$ instead."
       }
      ],
      "tip": {
       "zh": "判別式題目的次序永遠一樣：先寫條件（$<0$、$=0$、$>0$ 還是 $\\ge 0$）→ 代入 $a$、$b$、$c$ → 化簡 → 解不等式。先在草稿寫下「無實根＝$\\Delta<0$」就不會用錯。",
       "en": "The routine never changes: write the condition ($<0$, $=0$, $>0$ or $\\ge 0$), substitute $a$, $b$, $c$, simplify, then solve the inequality. Writing “no real roots means $\\Delta<0$” on your draft prevents the wrong condition."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算：代兩個數入去",
         "en": "Check: test two values"
        },
        "zh": "取 $k=-1$（符合 $k<-\\frac{3}{5}$）：$\\Delta=36-60=-24<0$，確實無實根。取 $k=0$（不符合）：$\\Delta=36>0$，有實根 —— 與結論一致。",
        "en": "Take $k=-1$ (which satisfies $k<-\\frac{3}{5}$): $\\Delta=36-60=-24<0$, so there are no real roots. Take $k=0$ (which does not satisfy it): $\\Delta=36>0$ and real roots exist, as expected."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en05-q3",
     "type": "long",
     "kind": "short",
     "topic": "en05",
     "unit": 5,
     "subtopic": "quadratic-equations",
     "difficulty": 1,
     "code": "EN5-Q3",
     "source": "EPH WS05 P1 Q3 · [HKDSE Practice Paper 1 Q17(b)(ii)]",
     "stem": {
      "en": "Find the range of values of $a$ such that the quadratic equation $-5x^{2}+10x-2=a$ has real roots.",
      "zh": "求 $a$ 的取值範圍，使二次方程 $-5x^{2}+10x-2=a$ 有實根。"
     },
     "marks": 2,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 搬成 $ax^{2}+bx+c=0$ 的標準形",
         "en": "Step 1 · Rearrange into the standard form $ax^{2}+bx+c=0$"
        },
        "math": "-5x^{2}+10x-2=a\n\\Rightarrow 5x^{2}-10x+(a+2)=0",
        "zh": "先把所有項搬到左邊：$-5x^{2}+10x-2-a=0$。為了方便，兩邊乘 $-1$，得 $5x^{2}-10x+(2+a)=0$，這樣 $a$ 的係數是正的，解不等式時就不易出錯。",
        "en": "Move everything to the left: $-5x^{2}+10x-2-a=0$. Multiply both sides by $-1$ to get $5x^{2}-10x+(2+a)=0$, so that the coefficient of $x^{2}$ is positive and the inequality is safer.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 有實根 → $\\Delta\\ge 0$，再解 $a$",
         "en": "Step 2 · Real roots means $\\Delta\\ge 0$; solve for $a$"
        },
        "math": "\\Delta=(-10)^{2}-4(5)(a+2)\\ge 0\n\\Rightarrow 60-20a\\ge 0\n\\Rightarrow a\\le 3",
        "zh": "「有實根」包含等根，所以是 $\\Delta\\ge 0$（有等號）。代入 $a=5$、$b=-10$、$c=a+2$：$\\Delta=100-20(a+2)=100-20a-40=60-20a$。令 $60-20a\\ge 0$，移項得 $20a\\le 60$，所以 $a\\le 3$。",
        "en": "“Has real roots” includes equal roots, so $\\Delta\\ge 0$. With $a=5$, $b=-10$ and $c=a+2$: $\\Delta=100-20(a+2)=100-20a-40=60-20a$. From $60-20a\\ge 0$ we get $20a\\le 60$, so $a\\le 3$.",
        "marking": "(1A)",
        "highlight": [
         "a\\le 3"
        ]
       }
      ],
      "traps": [
       {
        "label": "漏了等號",
        "labelEn": "Dropping the equality",
        "zh": "「有實根」要寫 $\\Delta\\ge 0$；寫成 $\\Delta>0$ 會把「兩個相等實根」的情況排除，答案就少了 $a=3$。",
        "en": "“Has real roots” needs $\\Delta\\ge 0$. Using $\\Delta>0$ excludes the case of two equal real roots, so $a=3$ would be missing from the answer."
       },
       {
        "label": "搬項時符號出錯",
        "labelEn": "Sign slip when rearranging",
        "zh": "$-2=a$ 搬到左邊是 $-2-a$，乘 $-1$ 之後是 $+a+2$；寫成 $a-2$ 就會得到 $a\\le 7$ 這個錯答案。",
        "en": "Moving $-2=a$ to the left gives $-2-a$; multiplying by $-1$ gives $+a+2$. Writing $a-2$ leads to the wrong answer $a\\le 7$."
       }
      ],
      "tip": {
       "zh": "「有實根」＝ $\\Delta\\ge 0$；「有兩個相異實根」才是 $\\Delta>0$。寫答案前再讀一次題目用的是哪一句。",
       "en": "“Has real roots” means $\\Delta\\ge 0$; only “two distinct real roots” means $\\Delta>0$. Re-read the wording before writing the final line."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算：取邊界值與界外值",
         "en": "Check: the boundary and one value outside"
        },
        "zh": "$a=3$ 時方程是 $5x^{2}-10x+5=0$，即 $5(x-1)^{2}=0$，有一個重根 —— 算「有實根」。$a=4$ 時 $\\Delta=100-4(5)(6)=-20<0$，沒有實根，所以答案應該是 $a\\le 3$。",
        "en": "For $a=3$ the equation is $5x^{2}-10x+5=0$, i.e. $5(x-1)^{2}=0$, which has a repeated root, so real roots exist. For $a=4$, $\\Delta=100-4(5)(6)=-20<0$ and there are none, so the answer is $a\\le 3$."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en05-q4",
     "type": "long",
     "kind": "short",
     "topic": "en05",
     "unit": 5,
     "subtopic": "quadratic-equations",
     "difficulty": 3,
     "code": "EN5-Q4",
     "source": "EPH WS05 P1 Q4 · [HKDSE 2022 Paper 1 Q17(a)]（工作紙用 $a$、$b$ 表示兩根，與常數 $b$ 撞名，本站改用 $\\alpha$、$\\beta$）",
     "stem": {
      "en": "Let $b$ be a real constant. The roots of the equation $2x^{2}-bx+8=0$ are $\\alpha$ and $\\beta$. Express $\\alpha^{2}+\\beta^{2}$ in terms of $b$.",
      "zh": "設 $b$ 為實常數。方程 $2x^{2}-bx+8=0$ 的兩個根為 $\\alpha$ 與 $\\beta$。以 $b$ 表示 $\\alpha^{2}+\\beta^{2}$。"
     },
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 寫出兩根之和與積",
         "en": "Step 1 · Write down the sum and the product of the roots"
        },
        "math": "\\alpha+\\beta=\\frac{b}{2},\\ \\alpha\\beta=\\frac{8}{2}=4",
        "zh": "方程是 $2x^{2}-bx+8=0$：$x^{2}$ 的係數是 $2$，$x$ 的係數是 $-b$，常數項是 $8$。所以和 $=-\\frac{-b}{2}=\\frac{b}{2}$（兩個負號相消），積 $=\\frac{8}{2}=4$。",
        "en": "The equation is $2x^{2}-bx+8=0$: the coefficient of $x^{2}$ is $2$, the coefficient of $x$ is $-b$ and the constant is $8$. Hence the sum is $-\\frac{-b}{2}=\\frac{b}{2}$ and the product is $\\frac{8}{2}=4$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 用恆等式把 $\\alpha^{2}+\\beta^{2}$ 拆成和與積",
         "en": "Step 2 · Express $\\alpha^{2}+\\beta^{2}$ with the sum and the product"
        },
        "math": "\\alpha^{2}+\\beta^{2}=(\\alpha+\\beta)^{2}-2\\alpha\\beta",
        "zh": "目標式不可以硬解方程（根含 $b$，還可能是複數），所以用恆等式 $(\\alpha+\\beta)^{2}=\\alpha^{2}+2\\alpha\\beta+\\beta^{2}$，移項就得多減 $2\\alpha\\beta$。",
        "en": "Do not solve the equation (the roots involve $b$ and may be non-real). Use $(\\alpha+\\beta)^{2}=\\alpha^{2}+2\\alpha\\beta+\\beta^{2}$, so $2\\alpha\\beta$ must be subtracted again.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 代入並化簡",
         "en": "Step 3 · Substitute and simplify"
        },
        "math": "=\\left(\\frac{b}{2}\\right)^{2}-2(4)\n=\\frac{b^{2}}{4}-8",
        "zh": "代入 $\\alpha+\\beta=\\frac{b}{2}$ 與 $\\alpha\\beta=4$：$\\left(\\frac{b}{2}\\right)^{2}=\\frac{b^{2}}{4}$，再減 $2(4)=8$，所以 $\\alpha^{2}+\\beta^{2}=\\frac{b^{2}}{4}-8$。",
        "en": "Substituting $\\alpha+\\beta=\\frac{b}{2}$ and $\\alpha\\beta=4$: $\\left(\\frac{b}{2}\\right)^{2}=\\frac{b^{2}}{4}$, then subtract $2(4)=8$, giving $\\alpha^{2}+\\beta^{2}=\\frac{b^{2}}{4}-8$.",
        "marking": "(1A)",
        "highlight": [
         "\\frac{b^{2}}{4}-8"
        ]
       }
      ],
      "traps": [
       {
        "label": "係數與根同名",
        "labelEn": "The coefficient and the root share a letter",
        "zh": "工作紙用 $a$、$b$ 同時做「兩根」與「常數」，數學上是矛盾的（會推出 $b^{2}=-8$）。所以本站把兩根寫成 $\\alpha$、$\\beta$：看到 $b$ 就當它是常數，看到 $\\alpha$、$\\beta$ 才是根。",
        "en": "The worksheet uses $a$ and $b$ for both the roots and the constant, which is inconsistent (it would force $b^{2}=-8$). Here the roots are $\\alpha$ and $\\beta$: $b$ is always the constant."
       },
       {
        "label": "和的負號算錯",
        "labelEn": "Wrong sign on the sum",
        "zh": "和是 $-\\frac{b}{a}=-\\frac{-b}{2}=\\frac{b}{2}$，兩個負號相消。若寫成 $-\\frac{b}{2}$ 或 $b$，最後的答案就會多一個負號或差四倍。",
        "en": "The sum is $-\\frac{b}{a}=-\\frac{-b}{2}=\\frac{b}{2}$, because the two minus signs cancel. Writing $-\\frac{b}{2}$ or $b$ gives an answer with the wrong sign or the wrong factor."
       }
      ],
      "tip": {
       "zh": "公式只有一組：和 $=-\\frac{b}{a}$、積 $=\\frac{c}{a}$。代入時先問「$a$ 是幾？」（這裡是 $2$，不是 $1$），就不會把和寫成 $b$。",
       "en": "There is only one pair of formulas: sum $=-\\frac{b}{a}$ and product $=\\frac{c}{a}$. Before substituting, ask “what is $a$?” (here $2$, not $1$) so the sum does not become $b$."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算：代一個 $b$ 的數值",
         "en": "Check: substitute a value of $b$"
        },
        "zh": "取 $b=10$：方程是 $2x^{2}-10x+8=0$，即 $x^{2}-5x+4=0$，兩根是 $1$ 與 $4$。和 $=1+4=5=\\frac{10}{2}$ ✓，而 $\\alpha^{2}+\\beta^{2}=1+16=17$；公式給 $\\frac{100}{4}-8=17$ ✓。",
        "en": "Take $b=10$: the equation is $2x^{2}-10x+8=0$, i.e. $x^{2}-5x+4=0$, with roots $1$ and $4$. The sum is $5=\\frac{10}{2}$, and $\\alpha^{2}+\\beta^{2}=1+16=17$; the formula gives $\\frac{100}{4}-8=17$."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en05-q5",
     "type": "long",
     "kind": "short",
     "topic": "en05",
     "unit": 5,
     "subtopic": "quadratic-equations",
     "difficulty": 3,
     "code": "EN5-Q5",
     "source": "EPH WS05 P1 Q5 · [HKDSE 2023 Paper 1 Q16(a)]",
     "stem": {
      "en": "Let $r$ and $s$ be real constants. If the roots of the equation $x^{2}+rx+s=0$ are $3p$ and $4p$, prove that $12r^{2}=49s$.",
      "zh": "設 $r$、$s$ 為實常數。若方程 $x^{2}+rx+s=0$ 的兩個根為 $3p$ 與 $4p$，求證 $12r^{2}=49s$。"
     },
     "marks": 2,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 用根與係數寫出兩條式子",
         "en": "Step 1 · Write two equations from the sum and the product"
        },
        "math": "3p+4p=-r\\ \\Rightarrow\\ 7p=-r\\ \\ldots(1)\n3p(4p)=s\\ \\Rightarrow\\ 12p^{2}=s\\ \\ldots(2)",
        "zh": "方程的 $x^{2}$ 係數是 $1$，所以和 $=-r$、積 $=s$。把兩個根 $3p$、$4p$ 代入：和是 $7p$，積是 $12p^{2}$，得出 (1) 與 (2) 兩條式。",
        "en": "The coefficient of $x^{2}$ is $1$, so the sum is $-r$ and the product is $s$. With the roots $3p$ and $4p$: the sum is $7p$ and the product is $12p^{2}$, giving (1) and (2).",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 消去 $p$，得出要證的等式",
         "en": "Step 2 · Eliminate $p$ to reach the required identity"
        },
        "math": "p=-\\frac{r}{7}\n\\Rightarrow 12\\left(-\\frac{r}{7}\\right)^{2}=s\n\\Rightarrow \\frac{12r^{2}}{49}=s\n\\Rightarrow 12r^{2}=49s",
        "zh": "目標式 $12r^{2}=49s$ 不含 $p$，所以由 (1) 把 $p$ 寫成 $-\\frac{r}{7}$，代入 (2)：$12\\left(\\frac{r^{2}}{49}\\right)=s$，兩邊乘 $49$ 就是 $12r^{2}=49s$（證明完畢）。注意負號平方之後消失。",
        "en": "The target $12r^{2}=49s$ contains no $p$, so make $p$ the subject of (1): $p=-\\frac{r}{7}$, and substitute into (2): $12\\left(\\frac{r^{2}}{49}\\right)=s$. Multiplying by $49$ gives $12r^{2}=49s$.",
        "marking": "(1A)",
        "highlight": [
         "12r^{2}=49s"
        ]
       }
      ],
      "traps": [
       {
        "label": "和的負號漏了",
        "labelEn": "Dropping the minus sign in the sum",
        "zh": "和是 $-r$（因為 $r$ 在 $x$ 的係數），不是 $r$。若寫成 $7p=r$，代入之後會得 $12r^{2}=-49s$，證不到題目要的等式。",
        "en": "The sum is $-r$ (because $r$ is the coefficient of $x$), not $r$. Writing $7p=r$ leads to $12r^{2}=-49s$, which is not what the question asks."
       },
       {
        "label": "先解出 $p$ 的數值",
        "labelEn": "Trying to find a number for $p$",
        "zh": "$p$ 是未知的，題目沒有給數值；正確做法是「消去 $p$」，不是求 $p$。看到目標式沒有 $p$ 就要想到消去。",
        "en": "$p$ is unknown and no value is given. The task is to eliminate $p$, not to find it. When the target has no $p$, elimination is the way."
       }
      ],
      "tip": {
       "zh": "證明題的固定思路：先寫根與係數的兩條式，再看「目標式缺哪個字母」—— 缺 $p$ 就把 $p$ 消去。這一步做對，(1A) 就自動到手。",
       "en": "For a proof, first write the two root relations, then look at which letter the target is missing. If $p$ is missing, eliminate $p$. Once that step is right, the answer mark follows."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算：代 $p=1$",
         "en": "Check: put $p=1$"
        },
        "zh": "取 $p=1$，兩根是 $3$ 與 $4$，方程是 $x^{2}-7x+12=0$，所以 $r=-7$、$s=12$。左邊 $12(-7)^{2}=588$，右邊 $49(12)=588$ ✓。",
        "en": "Put $p=1$: the roots are $3$ and $4$, so the equation is $x^{2}-7x+12=0$ with $r=-7$ and $s=12$. Left side $12(-7)^{2}=588$ and right side $49(12)=588$."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en05-q6",
     "type": "long",
     "topic": "en05",
     "unit": 5,
     "subtopic": "quadratic-equations",
     "difficulty": 3,
     "code": "EN5-Q6",
     "source": "EPH WS05 P1 Q6 · [HKDSE Practice Paper 1 Q17]",
     "stem": {
      "en": "Let $p$, $q$ and $r$ be real constants.",
      "zh": "設 $p$、$q$、$r$ 為實常數。"
     },
     "parts": [
      {
       "label": "(a)",
       "en": "Express $\\dfrac{1}{1+7i}$ in the form $a+bi$, where $a$ and $b$ are real numbers.",
       "zh": "把 $\\dfrac{1}{1+7i}$ 寫成 $a+bi$ 的形式，其中 $a$、$b$ 為實數。",
       "marks": 2
      },
      {
       "label": "(b)",
       "en": "The roots of the quadratic equation $x^{2}+px+q=0$ are $\\dfrac{100}{1+7i}$ and $\\dfrac{100}{1-7i}$. Find (i) $p$ and $q$, (ii) the range of values of $r$ such that the quadratic equation $x^{2}+px+q=r$ has real roots.",
       "zh": "二次方程 $x^{2}+px+q=0$ 的兩個根為 $\\dfrac{100}{1+7i}$ 與 $\\dfrac{100}{1-7i}$。求 (i) $p$ 與 $q$；(ii) $r$ 的取值範圍，使二次方程 $x^{2}+px+q=r$ 有實根。",
       "marks": 5
      }
     ],
     "marks": 7,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · (a) 分子分母乘共軛 $(1-7i)$",
         "en": "Step 1 · (a) Multiply by the conjugate $(1-7i)$"
        },
        "math": "\\frac{1}{1+7i}=\\frac{1-7i}{(1+7i)(1-7i)}\n=\\frac{1-7i}{1-49i^{2}}",
        "zh": "分母是 $1+7i$，共軛是 $1-7i$。分子分母同時乘 $1-7i$，分母就變成 $(1+7i)(1-7i)=1^{2}-(7i)^{2}=1-49i^{2}$。",
        "en": "The denominator is $1+7i$ and its conjugate is $1-7i$. Multiply numerator and denominator by $1-7i$; the denominator becomes $(1+7i)(1-7i)=1^{2}-(7i)^{2}=1-49i^{2}$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · (a) 把 $i^{2}=-1$ 代入，寫成 $a+bi$",
         "en": "Step 2 · (a) Put $i^{2}=-1$ and write the answer as $a+bi$"
        },
        "math": "=\\frac{1-7i}{1+49}\n=\\frac{1-7i}{50}\n=\\frac{1}{50}-\\frac{7}{50}i",
        "zh": "$1-49i^{2}=1-49(-1)=50$。所以結果是 $\\frac{1-7i}{50}$；題目要求 $a+bi$，要把實部與虛部分開寫成 $\\frac{1}{50}-\\frac{7}{50}i$。",
        "en": "$1-49i^{2}=1-49(-1)=50$, so the result is $\\frac{1-7i}{50}$. The form $a+bi$ needs the two parts separately: $\\frac{1}{50}-\\frac{7}{50}i$.",
        "marking": "(1A)",
        "highlight": [
         "\\frac{1}{50}-\\frac{7}{50}i"
        ]
       },
       {
        "title": {
         "zh": "第 3 步 · (b)(i) 用 (a) 的結果化簡兩個根",
         "en": "Step 3 · (b)(i) Use part (a) to simplify both roots"
        },
        "math": "\\frac{100}{1+7i}=100\\left(\\frac{1}{50}-\\frac{7}{50}i\\right)=2-14i\n\\frac{100}{1-7i}=2+14i",
        "zh": "(a) 已求得 $\\frac{1}{1+7i}=\\frac{1}{50}-\\frac{7}{50}i$，乘 $100$ 得 $2-14i$。另一個根的分母是 $1-7i$，只是中間的符號不同，所以虛部的符號相反：$2+14i$。",
        "en": "Part (a) gives $\\frac{1}{1+7i}=\\frac{1}{50}-\\frac{7}{50}i$, and multiplying by $100$ gives $2-14i$. The other root has denominator $1-7i$, only the middle sign differs, so the imaginary part changes sign: $2+14i$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · (b)(i) 兩根之和求 $p$",
         "en": "Step 4 · (b)(i) Find $p$ from the sum of the roots"
        },
        "math": "\\alpha+\\beta=(2-14i)+(2+14i)=4\n\\Rightarrow -p=4\\ \\Rightarrow\\ p=-4",
        "zh": "方程 $x^{2}+px+q=0$ 的兩根之和是 $-p$。兩根相加，虛部 $-14i$ 與 $+14i$ 抵銷，得 $4$；所以 $-p=4$，即 $p=-4$。",
        "en": "For $x^{2}+px+q=0$ the sum of the roots is $-p$. Adding the roots, $-14i$ and $+14i$ cancel, leaving $4$; hence $-p=4$ and $p=-4$.",
        "marking": "(1A)",
        "highlight": [
         "p=-4"
        ]
       },
       {
        "title": {
         "zh": "第 5 步 · (b)(i) 兩根之積求 $q$",
         "en": "Step 5 · (b)(i) Find $q$ from the product of the roots"
        },
        "math": "\\alpha\\beta=(2-14i)(2+14i)\n=2^{2}-(14i)^{2}=4+196=200\n\\Rightarrow q=200",
        "zh": "兩根之積是 $q$。用平方差：$(2-14i)(2+14i)=2^{2}-(14i)^{2}=4-196i^{2}=4+196=200$，所以 $q=200$。這裡的 $196$ 之後在 (ii) 會再用到。",
        "en": "The product of the roots is $q$. Using the difference of two squares: $(2-14i)(2+14i)=2^{2}-(14i)^{2}=4-196i^{2}=4+196=200$, so $q=200$.",
        "marking": "(1A)",
        "highlight": [
         "q=200"
        ]
       },
       {
        "title": {
         "zh": "第 6 步 · (b)(ii) 搬成標準形，寫出 $\\Delta\\ge 0$",
         "en": "Step 6 · (b)(ii) Rearrange and write $\\Delta\\ge 0$"
        },
        "math": "x^{2}-4x+200=r\n\\Rightarrow x^{2}-4x+(200-r)=0\n\\Rightarrow \\Delta=(-4)^{2}-4(1)(200-r)\\ge 0",
        "zh": "代入 $p=-4$、$q=200$，方程是 $x^{2}-4x+200=r$；把 $r$ 搬到左邊得 $x^{2}-4x+(200-r)=0$。有實根代表 $\\Delta\\ge 0$。",
        "en": "With $p=-4$ and $q=200$ the equation is $x^{2}-4x+200=r$; moving $r$ to the left gives $x^{2}-4x+(200-r)=0$. Real roots mean $\\Delta\\ge 0$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 7 步 · (b)(ii) 解不等式求 $r$ 的範圍",
         "en": "Step 7 · (b)(ii) Solve the inequality for $r$"
        },
        "math": "16-800+4r\\ge 0\n\\Rightarrow 4r\\ge 784\n\\Rightarrow r\\ge 196",
        "zh": "$\\Delta=16-4(200-r)=16-800+4r=4r-784$。令 $4r-784\\ge 0$，得 $4r\\ge 784$，所以 $r\\ge 196$。",
        "en": "$\\Delta=16-4(200-r)=16-800+4r=4r-784$. From $4r-784\\ge 0$ we get $4r\\ge 784$, so $r\\ge 196$.",
        "marking": "(1A)",
        "highlight": [
         "r\\ge 196"
        ]
       }
      ],
      "traps": [
       {
        "label": "共軛只乘分子",
        "labelEn": "Multiplying only the numerator",
        "zh": "分母也要乘 $(1-7i)$，否則分數的值就變了。乘完分母一定是實數：$(1+7i)(1-7i)=50$，如果分母仍有 $i$，就是漏了這一步。",
        "en": "The denominator must be multiplied by $1-7i$ as well, otherwise the value changes. After the multiplication the denominator is real ($50$); if an $i$ is left there, this step was missed."
       },
       {
        "label": "$(b)$ 的兩根用加法算乘積",
        "labelEn": "Using a sum where a product is needed",
        "zh": "$q$ 是兩根之積，要用乘；$(2-14i)+(2+14i)=4$ 是兩根之和（用來求 $p$）。兩個混了，$p$、$q$ 就會調轉。",
        "en": "$q$ is the product of the roots, so multiply; $(2-14i)+(2+14i)=4$ is the sum, used for $p$. Mixing them swaps $p$ and $q$."
       },
       {
        "label": "用 $\\Delta>0$ 代替 $\\Delta\\ge 0$",
        "labelEn": "Using $\\Delta>0$ instead of $\\Delta\\ge 0$",
        "zh": "題目說「有實根」，重根也算，所以要 $\\ge 0$；寫成 $>0$ 就會把 $r=196$ 漏掉。",
        "en": "The question says “has real roots”, and a repeated root counts, so $\\ge 0$ is needed. Using $>0$ would lose $r=196$."
       }
      ],
      "tip": {
       "zh": "(a) 的答案要留著，(b) 直接用：$\\frac{100}{1+7i}=100\\times\\frac{1}{1+7i}$，比重新做一次除法快得多。做完 (i) 的 $p$、$q$，(ii) 只是判別式加解不等式。",
       "en": "Keep the answer to (a) and reuse it: $\\frac{100}{1+7i}=100\\times\\frac{1}{1+7i}$ is much faster than dividing again. Once (i) gives $p$ and $q$, part (ii) is just the discriminant and an inequality."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算：取兩個 $r$ 值",
         "en": "Check: test two values of $r$"
        },
        "zh": "$r=196$ 時方程是 $x^{2}-4x+4=0$，即 $(x-2)^{2}=0$，有重根（符合「有實根」）。$r=100$ 時 $\\Delta=16-4(100)=-384<0$，沒有實根 —— 所以邊界 $196$ 正確。",
        "en": "For $r=196$ the equation is $x^{2}-4x+4=0$, i.e. $(x-2)^{2}=0$, a repeated root, so real roots exist. For $r=100$, $\\Delta=16-4(100)=-384<0$ with no real roots, which confirms the boundary $196$."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    }
   ],
   "pages": [
    [
     {
      "id": "eph-en05-m1",
      "type": "mc",
      "topic": "en05",
      "unit": 5,
      "subtopic": "quadratic-equations",
      "difficulty": 1,
      "code": "EN5-M1",
      "source": "EPH WS05 Q5 · [HKDSE 2013 Paper 2 Q6]",
      "stem": {
       "en": "Let $k$ be a constant. Solve the equation $(x+k)^{2}=9k^{2}$.",
       "zh": "設 $k$ 為常數。解方程 $(x+k)^{2}=9k^{2}$。"
      },
      "options": {
       "A": "$x=2k$",
       "B": "$x=8k$",
       "C": "$x=-4k$ or $x=2k$",
       "D": "$x=-10k$ or $x=8k$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 兩邊開平方，記得 $\\pm$",
          "en": "Step 1 · Take square roots of both sides, keeping $\\pm$"
         },
         "math": "(x+k)^{2}=9k^{2}\n\\Rightarrow x+k=\\pm 3k",
         "zh": "左邊是「一個平方」，右邊是 $9k^{2}=(3k)^{2}$，所以兩邊開平方：$x+k=\\pm 3k$。正負兩個都要寫，否則會少一個根。",
         "en": "The left side is a square and $9k^{2}=(3k)^{2}$, so take square roots: $x+k=\\pm 3k$. Both signs are needed, otherwise one root is lost."
        },
        {
         "title": {
          "zh": "第 2 步 · 分成兩種情況解 $x$",
          "en": "Step 2 · Solve the two cases separately"
         },
         "math": "x+k=3k\\ \\Rightarrow\\ x=2k\nx+k=-3k\\ \\Rightarrow\\ x=-4k",
         "zh": "取正號：$x=3k-k=2k$。取負號：$x=-3k-k=-4k$。兩個都是根。",
         "en": "With the plus sign: $x=3k-k=2k$. With the minus sign: $x=-3k-k=-4k$. Both are roots."
        },
        {
         "title": {
          "zh": "第 3 步 · 寫齊答案",
          "en": "Step 3 · Write both roots"
         },
         "math": "x=-4k\\text{ or }x=2k",
         "zh": "所以 $x=-4k$ 或 $x=2k$，答案是 C。",
         "en": "Therefore $x=-4k$ or $x=2k$. The answer is C.",
         "highlight": [
          "x=-4k",
          "x=2k"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$x=2k$ 只是其中一個根：取了 $x+k=3k$ 之後就停手，忘了另外還有 $x+k=-3k$。",
         "en": "$x=2k$ is only one root: the work stops after $x+k=3k$ and the case $x+k=-3k$ is forgotten."
        },
        {
         "opt": "B",
         "zh": "$x=8k$ 來自 $x+k=9k$ —— 把 $9k^{2}$ 開平方當成 $9k$，忘記 $k$ 也要開方。$\\sqrt{9k^{2}}=3k$，不是 $9k$。",
         "en": "$x=8k$ comes from $x+k=9k$: the square root of $9k^{2}$ was taken as $9k$. In fact $\\sqrt{9k^{2}}=3k$."
        },
        {
         "opt": "D",
         "zh": "$x=-10k$ 或 $8k$ 是同一個錯（$\\sqrt{9k^{2}}$ 寫成 $9k$），只是補上了 $\\pm$。",
         "en": "$x=-10k$ or $8k$ repeats the same error ($\\sqrt{9k^{2}}$ written as $9k$), with $\\pm$ added."
        }
       ],
       "tip": {
        "zh": "見到「括號平方 $=$ 數」就兩邊開平方，並且一定寫 $\\pm$；開方時整個 $9k^{2}$ 都要開（$\\sqrt{9}=3$、$\\sqrt{k^{2}}=k$）。",
        "en": "When you see “a squared bracket equals a number”, take square roots and keep $\\pm$. The whole $9k^{2}$ is square-rooted: $\\sqrt{9}=3$ and $\\sqrt{k^{2}}=k$."
       },
       "alt": [
        {
         "name": {
          "zh": "數值驗算：代 $k=1$",
          "en": "Numeric check: put $k=1$"
         },
         "zh": "$k=1$ 時方程是 $(x+1)^{2}=9$，所以 $x+1=\\pm3$，即 $x=2$ 或 $x=-4$。四個選項只有 C 同時給出 $2$ 與 $-4$。",
         "en": "With $k=1$ the equation is $(x+1)^{2}=9$, so $x+1=\\pm3$ and $x=2$ or $x=-4$. Only C gives both."
        }
       ]
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-en05-m2",
      "type": "mc",
      "topic": "en05",
      "unit": 5,
      "subtopic": "quadratic-equations",
      "difficulty": 2,
      "code": "EN5-M2",
      "source": "EPH WS05 Q7 · [HKDSE Sample Paper 2 Q6]",
      "stem": {
       "en": "Let $c$ be a constant. Solve the equation $(x+3c)(x-c+1)=(x+3c)$.",
       "zh": "設 $c$ 為常數。解方程 $(x+3c)(x-c+1)=(x+3c)$。"
      },
      "options": {
       "A": "$x=c$",
       "B": "$x=c-1$",
       "C": "$x=-3c$ or $x=c$",
       "D": "$x=-3c$ or $x=c-1$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 移項，令右邊是 0",
          "en": "Step 1 · Move everything to one side"
         },
         "math": "(x+3c)(x-c+1)-(x+3c)=0",
         "zh": "兩邊都有 $(x+3c)$，但右邊不是 $0$，所以不可以約走它（會漏根）。先把右邊的 $(x+3c)$ 搬到左邊。",
         "en": "Both sides contain $(x+3c)$, but the right-hand side is not $0$, so it must not be cancelled (that would lose a root). Move it to the left first."
        },
        {
         "title": {
          "zh": "第 2 步 · 抽公因式 $(x+3c)$",
          "en": "Step 2 · Factor out $(x+3c)$"
         },
         "math": "(x+3c)[(x-c+1)-1]=0\n\\Rightarrow (x+3c)(x-c)=0",
         "zh": "抽出 $(x+3c)$ 之後，中括號是 $(x-c+1)-1=x-c$。所以方程變成 $(x+3c)(x-c)=0$。",
         "en": "After factoring out $(x+3c)$ the bracket is $(x-c+1)-1=x-c$, so the equation becomes $(x+3c)(x-c)=0$."
        },
        {
         "title": {
          "zh": "第 3 步 · 每個因式各自為 0",
          "en": "Step 3 · Set each factor to 0"
         },
         "math": "x+3c=0\\text{ or }x-c=0\n\\Rightarrow x=-3c\\text{ or }x=c",
         "zh": "兩個因式各自等於 $0$：$x=-3c$ 或 $x=c$，答案是 C。",
         "en": "Setting each factor to $0$: $x=-3c$ or $x=c$. The answer is C.",
         "highlight": [
          "x=-3c",
          "x=c"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$x=c-1$ 是直接令第二個括號 $x-c+1=0$，等於把右邊的 $(x+3c)$ 當成 $0$。這樣做漏了「右邊不是 $0$」這件事。",
         "en": "$x=c-1$ comes from setting $x-c+1=0$, which effectively assumes the right-hand $(x+3c)$ is $0$. That is not allowed."
        },
        {
         "opt": "D",
         "zh": "$x=-3c$ 是對的，但另一個根用了 $x=c-1$ —— 同一個錯：沒有先移項就解第二個括號。",
         "en": "$x=-3c$ is correct, but the other root uses $x=c-1$, the same error of solving the second bracket without moving the right-hand side."
        },
        {
         "opt": "A",
         "zh": "$x=c$ 只寫了一個根，漏了 $(x+3c)=0$ 給出的 $x=-3c$。",
         "en": "$x=c$ keeps only one root and loses $x=-3c$."
        }
       ],
       "tip": {
        "zh": "「兩邊有同一個括號」＝ 先移項、再抽公因式、再令每個因式 $=0$。三步都不可以跳，尤其是第一步。",
        "en": "The same bracket on both sides means: move everything to one side, factor it out, then set each factor to $0$. Never skip the first step."
       },
       "alt": [
        {
         "name": {
          "zh": "數值驗算：代 $c=1$",
          "en": "Numeric check: put $c=1$"
         },
         "zh": "$c=1$ 時方程是 $(x+3)x=(x+3)$，移項得 $(x+3)(x-1)=0$，所以 $x=-3$ 或 $x=1$，即 $x=-3c$ 或 $c$。",
         "en": "With $c=1$ the equation is $(x+3)x=(x+3)$, i.e. $(x+3)(x-1)=0$, so $x=-3$ or $x=1$, which is $x=-3c$ or $c$."
        }
       ]
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-en05-m3",
      "type": "mc",
      "topic": "en05",
      "unit": 5,
      "subtopic": "quadratic-equations",
      "difficulty": 2,
      "code": "EN5-M3",
      "source": "EPH WS05 Q11 · [HKDSE Practice Paper 2 Q6, HKCEE 2009 Paper 2 Q8]",
      "stem": {
       "en": "Let $m$ be a constant. If the quadratic equation $x^{2}-mx+6m=0$ has equal roots, then $m=$",
       "zh": "設 $m$ 為常數。若二次方程 $x^{2}-mx+6m=0$ 有等根，則 $m=$"
      },
      "options": {
       "A": "$6$",
       "B": "$24$",
       "C": "$0$ or $6$",
       "D": "$0$ or $24$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 等根 → 判別式 $=0$",
          "en": "Step 1 · Equal roots means the discriminant is $0$"
         },
         "math": "\\Delta=(-m)^{2}-4(1)(6m)=0",
         "zh": "方程是 $x^{2}-mx+6m=0$，所以 $a=1$、$b=-m$、$c=6m$。有等根就是 $\\Delta=0$，先寫這條式。",
         "en": "For $x^{2}-mx+6m=0$ we have $a=1$, $b=-m$ and $c=6m$. Equal roots mean $\\Delta=0$."
        },
        {
         "title": {
          "zh": "第 2 步 · 展開判別式",
          "en": "Step 2 · Expand the discriminant"
         },
         "math": "m^{2}-24m=0",
         "zh": "$(-m)^{2}=m^{2}$，而 $4(1)(6m)=24m$，所以判別式是 $m^{2}-24m$，令它等於 $0$。",
         "en": "$(-m)^{2}=m^{2}$ and $4(1)(6m)=24m$, so the discriminant is $m^{2}-24m$, set equal to $0$."
        },
        {
         "title": {
          "zh": "第 3 步 · 分解，兩個值都要寫",
          "en": "Step 3 · Factorise and keep both values"
         },
         "math": "m(m-24)=0\n\\Rightarrow m=0\\text{ or }m=24",
         "zh": "抽公因式 $m$：$m(m-24)=0$，所以 $m=0$ 或 $m=24$。兩個都要寫 —— 不要兩邊除 $m$（那就少了 $m=0$）。答案是 D。",
         "en": "Factor out $m$: $m(m-24)=0$, so $m=0$ or $m=24$. Keep both — do not divide both sides by $m$, which would lose $m=0$. The answer is D.",
         "highlight": [
          "m=0",
          "m=24"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$m=24$ 是把 $m^{2}-24m=0$ 兩邊同除 $m$ 之後的結果：除之前要先肯定 $m\\ne 0$，這裡不可以除，否則就漏了 $m=0$ 這個根。",
         "en": "$m=24$ comes from dividing both sides of $m^{2}-24m=0$ by $m$. That division is only allowed when $m\\ne 0$, so the root $m=0$ is lost."
        },
        {
         "opt": "C",
         "zh": "$0$ 或 $6$ 是算 $\\Delta$ 時把 $24m$ 的 $24$ 又除了一次 $4$（$4ac$ 的 $4$ 用了兩次），得 $m(m-6)=0$。",
         "en": "$0$ or $6$ comes from dividing the $24$ in $24m$ by $4$ again (using the $4$ in $4ac$ twice), giving $m(m-6)=0$."
        },
        {
         "opt": "A",
         "zh": "$m=6$ 是同一個錯，而且連 $m=0$ 也漏了。",
         "en": "$m=6$ repeats that error and also loses $m=0$."
        }
       ],
       "tip": {
        "zh": "等根只給出「$\\Delta=0$」一個條件，但解出來的 $m$ 可以有兩個值。分解之後兩個都要寫；要除一個字母之前，先問它可不可以是 $0$。",
        "en": "Equal roots give only the condition $\\Delta=0$, but $m$ itself may take two values. Write both after factorising; before dividing by a letter, ask whether it can be $0$."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：兩個值各自代入",
          "en": "Check: substitute both values"
         },
         "zh": "$m=24$ 時方程是 $x^{2}-24x+144=0$，即 $(x-12)^{2}=0$，有重根 ✓。$m=0$ 時方程是 $x^{2}=0$，即 $x=0$（重根）✓。兩個都成立。",
         "en": "For $m=24$ the equation is $x^{2}-24x+144=0$, i.e. $(x-12)^{2}=0$, a repeated root. For $m=0$ it is $x^{2}=0$, i.e. $x=0$ twice. Both work."
        }
       ]
      },
      "answer": "D",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-en05-m4",
      "type": "mc",
      "topic": "en05",
      "unit": 5,
      "subtopic": "quadratic-equations",
      "difficulty": 2,
      "code": "EN5-M4",
      "source": "EPH WS05 Q14 · [HKDSE Sample Paper 2 Q7, HKCEE 2010 Paper 2 Q10]",
      "stem": {
       "en": "Find the range of values of $k$ such that the quadratic equation $x^{2}-4x+k=1$ has no real roots.",
       "zh": "求 $k$ 的取值範圍，使二次方程 $x^{2}-4x+k=1$ 沒有實根。"
      },
      "options": {
       "A": "$k>4$",
       "B": "$k<4$",
       "C": "$k>5$",
       "D": "$k<5$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 先搬成 $=0$ 的標準形",
          "en": "Step 1 · Rearrange into the $=0$ form"
         },
         "math": "x^{2}-4x+k=1\n\\Rightarrow x^{2}-4x+(k-1)=0",
         "zh": "把 $1$ 搬到左邊，常數項就是 $k-1$（不是 $k$）。這一步錯了，之後全部都錯。",
         "en": "Move $1$ to the left so that the constant term is $k-1$, not $k$. Getting this wrong spoils the rest."
        },
        {
         "title": {
          "zh": "第 2 步 · 無實根 → $\\Delta<0$",
          "en": "Step 2 · No real roots means $\\Delta<0$"
         },
         "math": "\\Delta=(-4)^{2}-4(1)(k-1)<0\n\\Rightarrow 16-4k+4<0",
         "zh": "代入 $a=1$、$b=-4$、$c=k-1$：$\\Delta=16-4(k-1)=16-4k+4$。注意 $-4\\times(-1)=+4$。",
         "en": "With $a=1$, $b=-4$ and $c=k-1$: $\\Delta=16-4(k-1)=16-4k+4$. Note that $-4\\times(-1)=+4$."
        },
        {
         "title": {
          "zh": "第 3 步 · 解不等式",
          "en": "Step 3 · Solve the inequality"
         },
         "math": "20-4k<0\n\\Rightarrow k>5",
         "zh": "化簡得 $20-4k<0$，即 $20<4k$，所以 $k>5$，答案是 C。",
         "en": "Simplifying: $20-4k<0$, so $20<4k$ and $k>5$. The answer is C.",
         "highlight": [
          "k>5"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$k>4$ 是忘記把 $1$ 搬過去（用了常數項 $k$），所以算到 $16-4k<0$。",
         "en": "$k>4$ comes from forgetting to move the $1$ (using the constant $k$), leading to $16-4k<0$."
        },
        {
         "opt": "D",
         "zh": "$k<5$ 是數字對但不等號方向倒轉：除以 $-4$ 時要變號，這裡倒錯了。",
         "en": "$k<5$ has the right number but the wrong direction: dividing by $-4$ reverses the inequality."
        },
        {
         "opt": "B",
         "zh": "$k<4$ 是兩個錯一起犯：常數項用錯，不等號又倒轉。",
         "en": "$k<4$ makes both mistakes: the wrong constant term and the reversed inequality."
        }
       ],
       "tip": {
        "zh": "判別式題目第一步永遠是「搬成 $=0$」。搬完先讀一次 $a$、$b$、$c$ 再代入，最後解不等式時留意除以負數要變號。",
        "en": "The first step of any discriminant question is to rearrange into the $=0$ form. Then read off $a$, $b$, $c$ before substituting, and watch the inequality sign when dividing by a negative number."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：取界內與界外各一個數",
          "en": "Check: one value on each side"
         },
         "zh": "$k=6$（符合 $k>5$）：$x^{2}-4x+5=0$，$\\Delta=16-20=-4<0$，無實根 ✓。$k=4$（不符合）：$x^{2}-4x+3=0$，$\\Delta=16-12=4>0$，有實根 ✓。",
         "en": "For $k=6$ (satisfies $k>5$): $x^{2}-4x+5=0$ has $\\Delta=16-20=-4<0$, no real roots. For $k=4$: $x^{2}-4x+3=0$ has $\\Delta=16-12=4>0$, real roots exist."
        }
       ]
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-en05-m7",
      "type": "mc",
      "topic": "en05",
      "unit": 5,
      "subtopic": "quadratic-equations",
      "difficulty": 2,
      "code": "EN5-M7",
      "source": "EPH WS05 Q23 · [HKDSE 2015 Paper 2 Q34]",
      "stem": {
       "en": "Let $q$ be a constant. If the roots of the quadratic equation $x^{2}+qx+6=0$ are $\\alpha$ and $\\beta$, then $\\alpha^{2}+\\beta^{2}=$",
       "zh": "設 $q$ 為常數。若二次方程 $x^{2}+qx+6=0$ 的兩根為 $\\alpha$ 與 $\\beta$，則 $\\alpha^{2}+\\beta^{2}=$"
      },
      "options": {
       "A": "$q^{2}$",
       "B": "$q^{2}-12$",
       "C": "$q^{2}+12$",
       "D": "$q^{2}+24$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 寫出和與積",
          "en": "Step 1 · Write the sum and the product"
         },
         "math": "\\alpha+\\beta=-q,\\ \\alpha\\beta=6",
         "zh": "方程是 $x^{2}+qx+6=0$，$a=1$、$b=q$、$c=6$。所以和 $=-q$、積 $=6$。",
         "en": "For $x^{2}+qx+6=0$ we have $a=1$, $b=q$ and $c=6$, so the sum is $-q$ and the product is $6$."
        },
        {
         "title": {
          "zh": "第 2 步 · 用恆等式拆開",
          "en": "Step 2 · Apply the identity"
         },
         "math": "\\alpha^{2}+\\beta^{2}=(\\alpha+\\beta)^{2}-2\\alpha\\beta",
         "zh": "目標式是平方和，用 $(\\alpha+\\beta)^{2}$ 減去多出來的 $2\\alpha\\beta$。",
         "en": "For a sum of squares, take $(\\alpha+\\beta)^{2}$ and subtract the extra $2\\alpha\\beta$."
        },
        {
         "title": {
          "zh": "第 3 步 · 代入",
          "en": "Step 3 · Substitute"
         },
         "math": "=(-q)^{2}-2(6)\n=q^{2}-12",
         "zh": "$(-q)^{2}=q^{2}$，再減 $12$，得 $q^{2}-12$，答案是 B。",
         "en": "$(-q)^{2}=q^{2}$, and subtracting $12$ gives $q^{2}-12$. The answer is B.",
         "highlight": [
          "q^{2}-12"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$q^{2}$ 只算了 $(\\alpha+\\beta)^{2}$，忘記減 $2\\alpha\\beta$。",
         "en": "$q^{2}$ is only $(\\alpha+\\beta)^{2}$; $2\\alpha\\beta$ was never subtracted."
        },
        {
         "opt": "C",
         "zh": "$q^{2}+12$ 把積當成 $-6$（常數項的符號錯），於是 $-2(-6)=+12$。常數項是 $+6$。",
         "en": "$q^{2}+12$ takes the product as $-6$, so $-2(-6)=+12$. The constant term is $+6$."
        },
        {
         "opt": "D",
         "zh": "$q^{2}+24$ 把 $2\\times6$ 算成 $12$ 之後又加了兩次（等於用了 $\\alpha\\beta=-12$）。",
         "en": "$q^{2}+24$ effectively uses $\\alpha\\beta=-12$, adding twice the correct amount in the wrong direction."
        }
       ],
       "tip": {
        "zh": "答案一定是「$q^{2}$ 減一個正數」，因為 $\\alpha\\beta=6>0$。單看這點已經可以排除 C 與 D。",
        "en": "The answer must be $q^{2}$ minus a positive number, because $\\alpha\\beta=6>0$. That alone rules out C and D."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：代 $q=5$",
          "en": "Check: put $q=5$"
         },
         "zh": "$q=5$ 時方程是 $x^{2}+5x+6=0$，兩根是 $-2$、$-3$，$\\alpha^{2}+\\beta^{2}=4+9=13$；公式給 $25-12=13$ ✓。",
         "en": "With $q=5$ the equation is $x^{2}+5x+6=0$ with roots $-2$ and $-3$, so $\\alpha^{2}+\\beta^{2}=4+9=13$; the formula gives $25-12=13$."
        }
       ]
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-en05-m6",
      "type": "mc",
      "topic": "en05",
      "unit": 5,
      "subtopic": "quadratic-equations",
      "difficulty": 3,
      "code": "EN5-M6",
      "source": "EPH WS05 Q22 · [HKCEE 2001 Paper 2 Q39]",
      "stem": {
       "en": "If $a$ and $b$ are distinct real numbers such that $a^{2}+2a-9=0$ and $b^{2}+2b-9=0$, find $a^{2}+b^{2}$.",
       "zh": "若 $a$、$b$ 為相異實數，且 $a^{2}+2a-9=0$、$b^{2}+2b-9=0$，求 $a^{2}+b^{2}$。"
      },
      "options": {
       "A": "$-14$",
       "B": "$4$",
       "C": "$22$",
       "D": "$81$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · $a$、$b$ 是 $x^{2}+2x-9=0$ 的兩個根",
          "en": "Step 1 · $a$ and $b$ are the roots of $x^{2}+2x-9=0$"
         },
         "math": "a+b=-2,\\ ab=-9",
         "zh": "兩條式形狀一樣，而且 $a$、$b$ 相異，所以它們是 $x^{2}+2x-9=0$ 的兩個根。和 $=-2$、積 $=-9$。",
         "en": "The two equations have the same shape and $a\\ne b$, so they are the two roots of $x^{2}+2x-9=0$: the sum is $-2$ and the product is $-9$."
        },
        {
         "title": {
          "zh": "第 2 步 · 用恆等式",
          "en": "Step 2 · Use the identity"
         },
         "math": "a^{2}+b^{2}=(a+b)^{2}-2ab",
         "zh": "$(a+b)^{2}=a^{2}+2ab+b^{2}$，所以 $a^{2}+b^{2}=(a+b)^{2}-2ab$。",
         "en": "Since $(a+b)^{2}=a^{2}+2ab+b^{2}$, we have $a^{2}+b^{2}=(a+b)^{2}-2ab$."
        },
        {
         "title": {
          "zh": "第 3 步 · 代入",
          "en": "Step 3 · Substitute"
         },
         "math": "=(-2)^{2}-2(-9)\n=4+18=22",
         "zh": "$(-2)^{2}=4$，而 $-2(-9)=+18$。兩者相加是 $22$，答案是 C。",
         "en": "$(-2)^{2}=4$ and $-2(-9)=+18$. Their sum is $22$. The answer is C.",
         "highlight": [
          "22"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$-14$ 是把 $-2ab$ 寫成 $+2ab$：$4-18=-14$。積是負數時，$-2ab$ 會變加。",
         "en": "$-14$ writes $-2ab$ as $+2ab$: $4-18=-14$. When the product is negative, $-2ab$ becomes a plus."
        },
        {
         "opt": "B",
         "zh": "$4$ 只算了 $(a+b)^{2}$，完全沒有減 $2ab$。",
         "en": "$4$ is just $(a+b)^{2}$, with $2ab$ never subtracted."
        },
        {
         "opt": "D",
         "zh": "$81$ 是把 $a^{2}+b^{2}$ 當成 $(ab)^{2}=(-9)^{2}$。$a^{2}+b^{2}$ 是「兩個平方相加」，不是「積的平方」。",
         "en": "$81$ treats $a^{2}+b^{2}$ as $(ab)^{2}=(-9)^{2}$. $a^{2}+b^{2}$ is a sum of squares, not the square of the product."
        }
       ],
       "tip": {
        "zh": "和與積的公式要連符號一齊抄：$a+b=-2$、$ab=-9$。代 $2ab$ 時把整個 $-9$ 放進去，負負得正，就不會寫錯。",
        "en": "Copy the sum and the product with their signs: $a+b=-2$, $ab=-9$. Putting the whole $-9$ into $2ab$ gives a plus and avoids the sign error."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：代近似根",
          "en": "Check: substitute the approximate roots"
         },
         "zh": "$x^{2}+2x-9=0$ 的根是 $-1\\pm\\sqrt{10}$，即約 $-4.16$ 與 $2.16$。$a^{2}+b^{2}\\approx 17.31+4.67=22$ ✓。",
         "en": "The roots of $x^{2}+2x-9=0$ are $-1\\pm\\sqrt{10}$, about $-4.16$ and $2.16$. Then $a^{2}+b^{2}\\approx 17.31+4.67=22$."
        }
       ]
      },
      "answer": "C",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-en05-m5",
      "type": "mc",
      "topic": "en05",
      "unit": 5,
      "subtopic": "quadratic-equations",
      "difficulty": 3,
      "code": "EN5-M5",
      "source": "EPH WS05 Q20 · [HKDSE 2018 Paper 2 Q36, HKCEE 2004 Paper 2 Q42]",
      "stem": {
       "en": "If $a\\ne b$ and $a^{2}=12-3a$, $b^{2}=12-3b$, then $(a-1)(b-1)=$",
       "zh": "若 $a\\ne b$ 且 $a^{2}=12-3a$、$b^{2}=12-3b$，則 $(a-1)(b-1)=$"
      },
      "options": {
       "A": "$-14$",
       "B": "$-8$",
       "C": "$10$",
       "D": "$16$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 兩條式形狀一樣 → $a$、$b$ 是同一個方程的根",
          "en": "Step 1 · Same shape twice: $a$ and $b$ are roots of one equation"
         },
         "math": "x^{2}+3x-12=0\n\\Rightarrow a+b=-3,\\ ab=-12",
         "zh": "$a^{2}=12-3a$ 整理成 $a^{2}+3a-12=0$；$b$ 的式子一模一樣。所以 $a$、$b$ 都是 $x^{2}+3x-12=0$ 的根，而且 $a\\ne b$ 代表它們是兩個不同的根。用根與係數：和 $=-3$、積 $=-12$。",
         "en": "$a^{2}=12-3a$ rearranges to $a^{2}+3a-12=0$, and the equation for $b$ is identical. So $a$ and $b$ are the two roots of $x^{2}+3x-12=0$ (and $a\\ne b$ says they are different). Hence the sum is $-3$ and the product is $-12$."
        },
        {
         "title": {
          "zh": "第 2 步 · 展開目標式，化成和與積",
          "en": "Step 2 · Expand the target in terms of the sum and the product"
         },
         "math": "(a-1)(b-1)=ab-a-b+1\n=ab-(a+b)+1",
         "zh": "逐項展開：$ab-a-b+1$。把 $-a-b$ 寫成 $-(a+b)$，就只剩「積」與「和」兩塊。",
         "en": "Expanding gives $ab-a-b+1$. Writing $-a-b$ as $-(a+b)$ leaves only the product and the sum."
        },
        {
         "title": {
          "zh": "第 3 步 · 代入",
          "en": "Step 3 · Substitute"
         },
         "math": "=-12-(-3)+1=-8",
         "zh": "代入 $ab=-12$、$a+b=-3$：$-12-(-3)+1=-12+3+1=-8$，答案是 B。",
         "en": "Substituting $ab=-12$ and $a+b=-3$: $-12-(-3)+1=-12+3+1=-8$. The answer is B.",
         "highlight": [
          "-8"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$-14$ 是把 $a+b$ 當成 $+3$（和的負號漏了）：$-12-3+1=-14$。方程是 $x^{2}+3x-12=0$，和應該是 $-3$。",
         "en": "$-14$ uses $a+b=+3$, dropping the minus sign: $-12-3+1=-14$. The sum for $x^{2}+3x-12=0$ is $-3$."
        },
        {
         "opt": "C",
         "zh": "$10$ 是把積當成 $+12$（符號錯）：$12-3+1=10$。常數項是 $-12$，積就是 $-12$。",
         "en": "$10$ uses the product $+12$: $12-3+1=10$. The constant term is $-12$, so the product is $-12$."
        },
        {
         "opt": "D",
         "zh": "$16$ 是兩處都錯：積用 $+12$、和用 $+3$，得 $12+3+1=16$。",
         "en": "$16$ makes both errors: $12+3+1=16$."
        }
       ],
       "tip": {
        "zh": "「$a\\ne b$，而兩條式一模一樣」是本題的暗號：$a$、$b$ 是同一個方程的兩個根。看到就立刻寫和與積，不要解方程。",
        "en": "“$a\\ne b$ with two identical equations” is the signal: $a$ and $b$ are the two roots of one equation. Write the sum and the product immediately; do not solve it."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：用求根公式取近似值",
          "en": "Check: approximate the roots"
         },
         "zh": "$x^{2}+3x-12=0$ 的根是 $\\frac{-3\\pm\\sqrt{57}}{2}$，即約 $2.27$ 與 $-5.27$。$(2.27-1)(-5.27-1)=(1.27)(-6.27)\\approx-8$ ✓。",
         "en": "The roots of $x^{2}+3x-12=0$ are $\\frac{-3\\pm\\sqrt{57}}{2}$, about $2.27$ and $-5.27$. Then $(2.27-1)(-5.27-1)=(1.27)(-6.27)\\approx-8$."
        }
       ]
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-en05-m8",
      "type": "mc",
      "topic": "en05",
      "unit": 5,
      "subtopic": "quadratic-equations",
      "difficulty": 3,
      "code": "EN5-M8",
      "source": "EPH WS05 Q24 · [改編自 HKDSE 2015 Paper 2 Q34]",
      "stem": {
       "en": "Let $m$ be a constant. If the roots of the quadratic equation $x^{2}-mx-8=0$ are $\\alpha$ and $\\beta$, then $\\alpha^{2}+\\alpha\\beta+\\beta^{2}=$",
       "zh": "設 $m$ 為常數。若二次方程 $x^{2}-mx-8=0$ 的兩根為 $\\alpha$ 與 $\\beta$，則 $\\alpha^{2}+\\alpha\\beta+\\beta^{2}=$"
      },
      "options": {
       "A": "$m^{2}-16$",
       "B": "$m^{2}-8$",
       "C": "$m^{2}+8$",
       "D": "$m^{2}+16$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 寫出和與積",
          "en": "Step 1 · Write the sum and the product"
         },
         "math": "\\alpha+\\beta=m,\\ \\alpha\\beta=-8",
         "zh": "方程是 $x^{2}-mx-8=0$：和 $=-\\frac{-m}{1}=m$，積 $=\\frac{-8}{1}=-8$。",
         "en": "For $x^{2}-mx-8=0$: the sum is $-\\frac{-m}{1}=m$ and the product is $\\frac{-8}{1}=-8$."
        },
        {
         "title": {
          "zh": "第 2 步 · 化成和與積（注意只減一次 $\\alpha\\beta$）",
          "en": "Step 2 · Rewrite with the sum and the product (subtract $\\alpha\\beta$ once)"
         },
         "math": "\\alpha^{2}+\\alpha\\beta+\\beta^{2}\n=(\\alpha+\\beta)^{2}-\\alpha\\beta",
         "zh": "$(\\alpha+\\beta)^{2}=\\alpha^{2}+2\\alpha\\beta+\\beta^{2}$，目標式中間只有一個 $\\alpha\\beta$，所以減一次就夠。",
         "en": "$(\\alpha+\\beta)^{2}=\\alpha^{2}+2\\alpha\\beta+\\beta^{2}$, while the target has only one $\\alpha\\beta$, so subtract it once."
        },
        {
         "title": {
          "zh": "第 3 步 · 代入",
          "en": "Step 3 · Substitute"
         },
         "math": "=m^{2}-(-8)\n=m^{2}+8",
         "zh": "代入 $\\alpha\\beta=-8$：$-(-8)=+8$，所以答案是 $m^{2}+8$，選 C。",
         "en": "Substituting $\\alpha\\beta=-8$: $-(-8)=+8$, so the answer is $m^{2}+8$. Option C.",
         "highlight": [
          "m^{2}+8"
         ]
        }
       ],
       "traps": [
        {
         "opt": "D",
         "zh": "$m^{2}+16$ 是用了平方和 $\\alpha^{2}+\\beta^{2}$ 的公式 $(\\alpha+\\beta)^{2}-2\\alpha\\beta$：減了兩次 $\\alpha\\beta$。本題是 $\\alpha^{2}+\\alpha\\beta+\\beta^{2}$，只減一次。",
         "en": "$m^{2}+16$ uses the sum-of-squares formula $(\\alpha+\\beta)^{2}-2\\alpha\\beta$, subtracting $\\alpha\\beta$ twice. This question has only one $\\alpha\\beta$."
        },
        {
         "opt": "B",
         "zh": "$m^{2}-8$ 用了「$+\\alpha\\beta$」而不是「$-\\alpha\\beta$」。展開之後中間是 $2\\alpha\\beta$，要減一次才會變一個。",
         "en": "$m^{2}-8$ adds $\\alpha\\beta$ instead of subtracting it. After expanding there are two, so one must be removed."
        },
        {
         "opt": "A",
         "zh": "$m^{2}-16$ 把積當成 $+8$，再用 $2\\alpha\\beta$ 去減。積的符號是 $-8$。",
         "en": "$m^{2}-16$ takes the product as $+8$ and subtracts $2\\alpha\\beta$. The product here is $-8$."
        }
       ],
       "tip": {
        "zh": "寫這類題之前，先做一次展開：$(\\alpha+\\beta)^{2}=\\alpha^{2}+2\\alpha\\beta+\\beta^{2}$，然後數一數目標式有幾個 $\\alpha\\beta$，就知道要減幾次。",
        "en": "Expand first: $(\\alpha+\\beta)^{2}=\\alpha^{2}+2\\alpha\\beta+\\beta^{2}$. Count how many $\\alpha\\beta$ terms the target has — that tells you how many to subtract."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：代 $m=2$",
          "en": "Check: put $m=2$"
         },
         "zh": "$m=2$ 時方程是 $x^{2}-2x-8=0$，即 $(x-4)(x+2)=0$，兩根 $4$、$-2$。$\\alpha^{2}+\\alpha\\beta+\\beta^{2}=16-8+4=12$；公式給 $4+8=12$ ✓。",
         "en": "With $m=2$ the equation is $x^{2}-2x-8=0$, i.e. $(x-4)(x+2)=0$, roots $4$ and $-2$. Then $\\alpha^{2}+\\alpha\\beta+\\beta^{2}=16-8+4=12$, and the formula gives $4+8=12$."
        }
       ]
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-en05-m11",
      "type": "mc",
      "topic": "en05",
      "unit": 5,
      "subtopic": "quadratic-equations",
      "difficulty": 2,
      "code": "EN5-M11",
      "source": "EPH WS05 Q31 · [HKDSE 2013 Paper 2 Q36]",
      "stem": {
       "en": "The real part of $3i^{18}+2i^{19}-3i^{20}-5i^{21}$ is",
       "zh": "$3i^{18}+2i^{19}-3i^{20}-5i^{21}$ 的實部是"
      },
      "options": {
       "A": "$-7$",
       "B": "$-6$",
       "C": "$0$",
       "D": "$6$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 逐個冪化簡（除以 4 看餘數）",
          "en": "Step 1 · Reduce each power with the remainder after dividing by 4"
         },
         "math": "i^{18}=-1,\\ i^{19}=-i,\\ i^{20}=1,\\ i^{21}=i",
         "zh": "餘數 $2\\to-1$、$3\\to-i$、$0\\to1$、$1\\to i$。所以 $i^{18}=-1$、$i^{19}=-i$、$i^{20}=1$、$i^{21}=i$。",
         "en": "Remainders: $2\\to-1$, $3\\to-i$, $0\\to1$, $1\\to i$. Hence $i^{18}=-1$, $i^{19}=-i$, $i^{20}=1$ and $i^{21}=i$."
        },
        {
         "title": {
          "zh": "第 2 步 · 代入原式",
          "en": "Step 2 · Substitute"
         },
         "math": "3(-1)+2(-i)-3(1)-5(i)",
         "zh": "逐項乘入：$3i^{18}=-3$、$2i^{19}=-2i$、$-3i^{20}=-3$、$-5i^{21}=-5i$。",
         "en": "Term by term: $3i^{18}=-3$, $2i^{19}=-2i$, $-3i^{20}=-3$ and $-5i^{21}=-5i$."
        },
        {
         "title": {
          "zh": "第 3 步 · 合併，讀出實部",
          "en": "Step 3 · Collect terms and read off the real part"
         },
         "math": "=-6-7i",
         "zh": "實部：$-3-3=-6$；虛部：$-2i-5i=-7i$。所以式子是 $-6-7i$，實部是 $-6$，答案是 B。",
         "en": "Real part: $-3-3=-6$; imaginary part: $-2i-5i=-7i$. The expression is $-6-7i$, so the real part is $-6$. The answer is B.",
         "highlight": [
          "-6"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$-7$ 是虛部（$i$ 的係數），不是實部。題目問 real part。",
         "en": "$-7$ is the imaginary part, not the real part."
        },
        {
         "opt": "C",
         "zh": "$0$ 是把 $i^{18}$ 與 $i^{20}$ 都當成 $1$，令 $3-3=0$。實際上 $i^{18}=-1$、$i^{20}=1$。",
         "en": "$0$ treats both $i^{18}$ and $i^{20}$ as $1$, so $3-3=0$. In fact $i^{18}=-1$ and $i^{20}=1$."
        },
        {
         "opt": "D",
         "zh": "$6$ 是符號寫反：$-3-3=-6$，不是 $+6$。",
         "en": "$6$ has the sign reversed: $-3-3=-6$, not $+6$."
        }
       ],
       "tip": {
        "zh": "問實部就只計沒有 $i$ 的項，問虛部就只計 $i$ 的係數（連符號）。計完先把整條式子寫成 $a+bi$，就不會答錯部位。",
        "en": "For the real part count only the terms without $i$; for the imaginary part take the coefficient of $i$ with its sign. Writing the whole expression as $a+bi$ first avoids answering the wrong part."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：只抽實部再算一次",
          "en": "Check: collect the real parts only"
         },
         "zh": "$i^{18}$ 與 $i^{20}$ 才是實數項：$3(-1)-3(1)=-6$，與答案一致（其餘兩項含 $i$，屬虛部）。",
         "en": "Only $i^{18}$ and $i^{20}$ are real: $3(-1)-3(1)=-6$, which confirms the answer (the other two terms carry $i$ and belong to the imaginary part)."
        }
       ]
      },
      "answer": "B",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-en05-m9",
      "type": "mc",
      "topic": "en05",
      "unit": 5,
      "subtopic": "quadratic-equations",
      "difficulty": 2,
      "code": "EN5-M9",
      "source": "EPH WS05 Q26 · [HKDSE 2012 Paper 2 Q35]",
      "stem": {
       "en": "$i^{7}(\\alpha i-6)=$",
       "zh": "$i^{7}(\\alpha i-6)=$"
      },
      "options": {
       "A": "$\\alpha+6i$",
       "B": "$\\alpha-6i$",
       "C": "$-\\alpha+6i$",
       "D": "$-\\alpha-6i$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 先把 $i^{7}$ 化簡",
          "en": "Step 1 · Simplify $i^{7}$ first"
         },
         "math": "i^{7}=i^{4+3}=i^{3}=-i",
         "zh": "$7\\div4$ 餘 $3$，所以 $i^{7}=i^{3}=-i$。高次冪一定要先化簡，不要硬乘。",
         "en": "$7\\div4$ leaves remainder $3$, so $i^{7}=i^{3}=-i$. Always simplify a high power first."
        },
        {
         "title": {
          "zh": "第 2 步 · 展開，並把 $i^{2}$ 換成 $-1$",
          "en": "Step 2 · Expand and replace $i^{2}$ by $-1$"
         },
         "math": "(-i)(\\alpha i-6)\n=-\\alpha i^{2}+6i",
         "zh": "$(-i)(\\alpha i)=-\\alpha i^{2}$，$(-i)(-6)=+6i$。兩個負號相乘是正，這裡最易錯。",
         "en": "$(-i)(\\alpha i)=-\\alpha i^{2}$ and $(-i)(-6)=+6i$. Two minus signs give a plus — the step most often wrong."
        },
        {
         "title": {
          "zh": "第 3 步 · 用 $i^{2}=-1$ 收尾",
          "en": "Step 3 · Finish with $i^{2}=-1$"
         },
         "math": "=-\\alpha(-1)+6i\n=\\alpha+6i",
         "zh": "$-\\alpha i^{2}=-\\alpha(-1)=\\alpha$，所以結果是 $\\alpha+6i$，答案是 A。",
         "en": "$-\\alpha i^{2}=-\\alpha(-1)=\\alpha$, so the result is $\\alpha+6i$. The answer is A.",
         "highlight": [
          "\\alpha+6i"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$\\alpha-6i$ 是把 $(-i)(-6)$ 算成 $-6i$：兩個負數相乘是正，所以應該是 $+6i$。",
         "en": "$\\alpha-6i$ evaluates $(-i)(-6)$ as $-6i$. Two negatives give a plus, so it is $+6i$."
        },
        {
         "opt": "C",
         "zh": "$-\\alpha+6i$ 是把 $-\\alpha i^{2}$ 算成 $-\\alpha$：忘記 $i^{2}=-1$，負負得正。",
         "en": "$-\\alpha+6i$ evaluates $-\\alpha i^{2}$ as $-\\alpha$, forgetting that $i^{2}=-1$."
        },
        {
         "opt": "D",
         "zh": "$-\\alpha-6i$ 兩個符號都錯。",
         "en": "$-\\alpha-6i$ gets both signs wrong."
        }
       ],
       "tip": {
        "zh": "次序：先把 $i$ 的冪化成 $\\pm i$ 或 $\\pm1$，再展開，最後才處理 $i^{2}$。三個步驟分開寫，符號就不會亂。",
        "en": "Order of work: reduce the power of $i$ to $\\pm i$ or $\\pm1$, expand, then deal with $i^{2}$. Keeping the three steps separate keeps the signs right."
       },
       "alt": [
        {
         "name": {
          "zh": "數值驗算：代 $\\alpha=1$",
          "en": "Numeric check: put $\\alpha=1$"
         },
         "zh": "$\\alpha=1$ 時 $i^{7}(i-6)=-i(i-6)=-i^{2}+6i=1+6i$，與 $\\alpha+6i$ 相符。",
         "en": "With $\\alpha=1$: $i^{7}(i-6)=-i(i-6)=-i^{2}+6i=1+6i$, matching $\\alpha+6i$."
        }
       ]
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-en05-m10",
      "type": "mc",
      "topic": "en05",
      "unit": 5,
      "subtopic": "quadratic-equations",
      "difficulty": 3,
      "code": "EN5-M10",
      "source": "EPH WS05 Q28 · [HKDSE Sample Paper 2 Q34]",
      "stem": {
       "en": "If $k$ is a real number, then $3ki-\\dfrac{2k-3i}{i}=$",
       "zh": "若 $k$ 為實數，則 $3ki-\\dfrac{2k-3i}{i}=$"
      },
      "options": {
       "A": "$3+5ki$",
       "B": "$-3+5ki$",
       "C": "$3+ki$",
       "D": "$-3+ki$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 先把分數的 $i$ 趕出分母",
          "en": "Step 1 · Clear the $i$ from the denominator"
         },
         "math": "\\frac{2k-3i}{i}=\\frac{(2k-3i)(-i)}{i(-i)}\n=-2ki+3i^{2}\n=-3-2ki",
         "zh": "分母是 $i$，分子分母同乘 $-i$（乘 $i$ 也可以）：$i(-i)=-i^{2}=1$。分子展開：$(2k)(-i)=-2ki$，$(-3i)(-i)=3i^{2}=-3$。所以分數等於 $-3-2ki$。",
         "en": "Multiply numerator and denominator by $-i$ (multiplying by $i$ also works): $i(-i)=-i^{2}=1$. Expanding: $(2k)(-i)=-2ki$ and $(-3i)(-i)=3i^{2}=-3$, so the fraction is $-3-2ki$."
        },
        {
         "title": {
          "zh": "第 2 步 · 代回原式（注意前面的減號）",
          "en": "Step 2 · Put it back, watching the minus sign"
         },
         "math": "3ki-(-3-2ki)=3ki+3+2ki",
         "zh": "原式是 $3ki$ 減去這個分數：$-( -3-2ki)=+3+2ki$。減號要分配給括號內每一項。",
         "en": "The expression subtracts the fraction from $3ki$: $-(-3-2ki)=+3+2ki$. The minus sign multiplies every term in the bracket."
        },
        {
         "title": {
          "zh": "第 3 步 · 合併同類項",
          "en": "Step 3 · Collect like terms"
         },
         "math": "=3+5ki",
         "zh": "$3ki+2ki=5ki$，加上常數 $3$，結果是 $3+5ki$，答案是 A。",
         "en": "$3ki+2ki=5ki$, plus the constant $3$, giving $3+5ki$. The answer is A.",
         "highlight": [
          "3+5ki"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$-3+5ki$ 是減號只分配給 $2ki$：$3ki+2ki-3$。減號要給括號內每一項，$-(-3)=+3$。",
         "en": "$-3+5ki$ applies the minus sign to $2ki$ only. It must multiply every term: $-(-3)=+3$."
        },
        {
         "opt": "C",
         "zh": "$3+ki$ 是把 $(-3i)(-i)$ 算成 $+3i$ 之類的符號錯，令虛部的係數只剩 $1$。答案是 $5ki$。",
         "en": "$3+ki$ mishandles the signs so the imaginary coefficient becomes $1$ instead of $5$."
        },
        {
         "opt": "D",
         "zh": "$-3+ki$ 兩處都錯：減號沒有分配好，虛部也算錯。",
         "en": "$-3+ki$ makes both errors: the minus sign is not distributed and the imaginary part is wrong."
        }
       ],
       "tip": {
        "zh": "分母是純虛數 $ni$ 時，分子分母同乘 $i$（或 $-i$）最快，因為 $i\\cdot i=-1$ 會把分母變成實數。做完記得檢查分母已經沒有 $i$。",
        "en": "When the denominator is purely imaginary, $ni$, multiply numerator and denominator by $i$ (or $-i$): $i\\cdot i=-1$ makes the denominator real. Check that no $i$ is left below the line."
       },
       "alt": [
        {
         "name": {
          "zh": "數值驗算：代 $k=1$",
          "en": "Numeric check: put $k=1$"
         },
         "zh": "$k=1$ 時原式是 $3i-\\frac{2-3i}{i}$。而 $\\frac{2-3i}{i}=(2-3i)(-i)=-3-2i$，所以 $3i-(-3-2i)=3+5i$ ✓。",
         "en": "With $k=1$: $3i-\\frac{2-3i}{i}$. Now $\\frac{2-3i}{i}=(2-3i)(-i)=-3-2i$, so $3i-(-3-2i)=3+5i$."
        }
       ]
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-en05-m12",
      "type": "mc",
      "topic": "en05",
      "unit": 5,
      "subtopic": "quadratic-equations",
      "difficulty": 3,
      "code": "EN5-M12",
      "source": "EPH WS05 Q37 · [HKDSE 2020 Paper 2 Q37]",
      "stem": {
       "en": "Define $z_{1}=\\dfrac{3-ki}{2+i}$ and $z_{2}=\\dfrac{-k-4i}{3-i}$, where $k$ is a real number. If the imaginary part of $z_{1}$ is equal to the imaginary part of $z_{2}$, then $z_{2}-z_{1}=$",
       "zh": "定義 $z_{1}=\\dfrac{3-ki}{2+i}$ 與 $z_{2}=\\dfrac{-k-4i}{3-i}$，其中 $k$ 為實數。若 $z_{1}$ 的虛部等於 $z_{2}$ 的虛部，則 $z_{2}-z_{1}=$"
      },
      "options": {
       "A": "$-1$",
       "B": "$0$",
       "C": "$1$",
       "D": "$2$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 化簡 $z_{1}$（分子分母乘 $2-i$）",
          "en": "Step 1 · Simplify $z_{1}$ by multiplying by $2-i$"
         },
         "math": "z_{1}=\\frac{(3-ki)(2-i)}{5}\n=\\frac{6-k}{5}-\\frac{3+2k}{5}i",
         "zh": "$(3-ki)(2-i)=6-3i-2ki+k i^{2}=6-k-(3+2k)i$，而 $(2+i)(2-i)=4-i^{2}=5$。",
         "en": "$(3-ki)(2-i)=6-3i-2ki+k i^{2}=6-k-(3+2k)i$ and $(2+i)(2-i)=4-i^{2}=5$."
        },
        {
         "title": {
          "zh": "第 2 步 · 化簡 $z_{2}$（分子分母乘 $3+i$）",
          "en": "Step 2 · Simplify $z_{2}$ by multiplying by $3+i$"
         },
         "math": "z_{2}=\\frac{(-k-4i)(3+i)}{10}\n=\\frac{4-3k}{10}-\\frac{k+12}{10}i",
         "zh": "$(-k-4i)(3+i)=-3k-ki-12i-4i^{2}=4-3k-(k+12)i$，而 $(3-i)(3+i)=9-i^{2}=10$。",
         "en": "$(-k-4i)(3+i)=-3k-ki-12i-4i^{2}=4-3k-(k+12)i$ and $(3-i)(3+i)=9-i^{2}=10$."
        },
        {
         "title": {
          "zh": "第 3 步 · 虛部相等，解出 $k$",
          "en": "Step 3 · Equate the imaginary parts and solve for $k$"
         },
         "math": "-\\frac{3+2k}{5}=-\\frac{k+12}{10}\n\\Rightarrow 2(3+2k)=k+12\n\\Rightarrow k=2",
         "zh": "兩邊乘 $10$：$-2(3+2k)=-(k+12)$，即 $6+4k=k+12$，所以 $3k=6$，$k=2$。",
         "en": "Multiply by $10$: $-2(3+2k)=-(k+12)$, i.e. $6+4k=k+12$, so $3k=6$ and $k=2$."
        },
        {
         "title": {
          "zh": "第 4 步 · 代回求 $z_{2}-z_{1}$",
          "en": "Step 4 · Substitute back to find $z_{2}-z_{1}$"
         },
         "math": "z_{1}=\\frac{4}{5}-\\frac{7}{5}i,\\ z_{2}=-\\frac{1}{5}-\\frac{7}{5}i\n\\Rightarrow z_{2}-z_{1}=-1",
         "zh": "$k=2$ 時 $z_{1}=\\frac{6-2}{5}-\\frac{3+4}{5}i=\\frac{4}{5}-\\frac{7}{5}i$，$z_{2}=\\frac{4-6}{10}-\\frac{2+12}{10}i=-\\frac{1}{5}-\\frac{7}{5}i$。兩者虛部相同（都是 $-\\frac{7}{5}$），相減只剩實部：$-\\frac{1}{5}-\\frac{4}{5}=-1$，答案是 A。",
         "en": "With $k=2$, $z_{1}=\\frac{6-2}{5}-\\frac{3+4}{5}i=\\frac{4}{5}-\\frac{7}{5}i$ and $z_{2}=\\frac{4-6}{10}-\\frac{2+12}{10}i=-\\frac{1}{5}-\\frac{7}{5}i$. Their imaginary parts are equal, so the difference is real: $-\\frac{1}{5}-\\frac{4}{5}=-1$. The answer is A.",
         "highlight": [
          "-1"
         ]
        }
       ],
       "traps": [
        {
         "opt": "D",
         "zh": "$2$ 是 $k$ 的值，不是 $z_{2}-z_{1}$。求出 $k$ 之後一定要代回兩個數再相減 —— 這是最常見的「答錯問題」。",
         "en": "$2$ is the value of $k$, not of $z_{2}-z_{1}$. After finding $k$, substitute back and subtract; answering the wrong quantity is the classic slip."
        },
        {
         "opt": "C",
         "zh": "$1$ 是計了 $z_{1}-z_{2}$：$\\frac{4}{5}-\\left(-\\frac{1}{5}\\right)=1$。題目問的是 $z_{2}-z_{1}$，次序要對。",
         "en": "$1$ is $z_{1}-z_{2}$. The question asks for $z_{2}-z_{1}$, so the order matters."
        },
        {
         "opt": "B",
         "zh": "$0$ 是假設「虛部相等」代表 $z_{1}=z_{2}$。虛部相等只表示相減之後是實數，$z_{1}$、$z_{2}$ 的實部仍然不同。",
         "en": "$0$ assumes equal imaginary parts mean $z_{1}=z_{2}$. It only means the difference is real; the real parts still differ."
        }
       ],
       "tip": {
        "zh": "兩步走：先用「虛部相等」求 $k$，再代回求 $z_{2}-z_{1}$。虛部相等時相減一定是實數，所以答案會是一個數，不是 $a+bi$。",
        "en": "Two steps: use equal imaginary parts to find $k$, then substitute back for $z_{2}-z_{1}$. When the imaginary parts are equal the difference is real, so the answer is a plain number."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：$k=2$ 時兩者的虛部",
          "en": "Check: the imaginary parts when $k=2$"
         },
         "zh": "$k=2$ 時 $z_{1}$ 的虛部是 $-\\frac{3+4}{5}=-\\frac{7}{5}$，$z_{2}$ 的虛部是 $-\\frac{2+12}{10}=-\\frac{7}{5}$，確實相等；相減得 $-\\frac{1}{5}-\\frac{4}{5}=-1$ ✓。",
         "en": "With $k=2$ the imaginary part of $z_{1}$ is $-\\frac{3+4}{5}=-\\frac{7}{5}$ and that of $z_{2}$ is $-\\frac{2+12}{10}=-\\frac{7}{5}$, so they are equal, and the difference is $-1$."
        }
       ]
      },
      "answer": "A",
      "verify": "checked"
     }
    ]
   ]
  }
 ],
 "stats": {
  "mc": 12,
  "long": 6,
  "cards": 6,
  "pages": 4
 }
};
