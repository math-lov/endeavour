// 自動生成，請勿手改（來源：data/learn/；重新生成：python tools/make_learn_data.py）
window.LEARN_TOPIC_EN02 = {
 "id": "en02",
 "stage": 1,
 "unit": 5,
 "subtopic": "quadratic-equations",
 "source": "S.K.H. Bishop Baker Secondary School · S.5 After-School Tutorial · Endeavour Lesson 2（EPH WS05 Q14–21、DSE P1 Q7–8、DSE P2 Q30–33）",
 "name": {
  "zh": "Lesson 2 · 判別式、根與係數、複數",
  "en": "Lesson 2 · Discriminant, sum & product of roots, complex numbers"
 },
 "intro": {
  "zh": "這一節課堂討論三件事：\n① 用判別式 $\\Delta=b^{2}-4ac$ 求 $k$（兩個相等實根／無實根／兩個相異實根／有實根）與 $k$ 的取值範圍；\n② 用根與係數 $\\alpha+\\beta=-\\frac{b}{a}$、$\\alpha\\beta=\\frac{c}{a}$ 求 $\\alpha^{2}+\\beta^{2}$（以 $k$ 或 $b$ 表示）；\n③ 複數：化簡成 $a+bi$、求實部與虛部、由「是實數」求 $k$，以及卷二的 $i$ 的冪題。\n其中 ① 在 Lesson 1 已學過（這一節是重溫），所以概念卡放 ② 與 ③；判別式的每一步仍寫在每題的題解裡，照著做就可以。",
  "en": "This lesson covers three things:\n(1) using the discriminant $\\Delta=b^{2}-4ac$ to find $k$ (two equal real roots, no real roots, two distinct real roots, real roots) and the range of values of $k$;\n(2) using the sum and product of roots $\\alpha+\\beta=-\\frac{b}{a}$ and $\\alpha\\beta=\\frac{c}{a}$ to express $\\alpha^{2}+\\beta^{2}$ in terms of $k$ or $b$;\n(3) complex numbers: simplifying into the form $a+bi$, reading the real and imaginary parts, finding $k$ when a number is real, and the powers-of-$i$ questions in Paper 2.\nTopic (1) was already learnt in Lesson 1 and is revised here, so the concept cards cover (2) and (3); every step of the discriminant work is still shown in the step-by-step solutions."
 },
 "cmdHints": [
  {
   "en": "has two equal real roots",
   "zh": "有兩個相等實根 → $\\Delta=0$（只有一個等號）"
  },
  {
   "en": "has no real roots",
   "zh": "無實根 → $\\Delta<0$（解不等式，方向不要倒轉）"
  },
  {
   "en": "has two unequal real roots",
   "zh": "有兩個相異實根 → $\\Delta>0$"
  },
  {
   "en": "has real roots",
   "zh": "有實根 → $\\Delta\\ge 0$（有等號，等根也算有實根）"
  },
  {
   "en": "Express $\\alpha^{2}+\\beta^{2}$ in terms of $k$",
   "zh": "以 $k$ 表示 → 用 $\\alpha+\\beta$、$\\alpha\\beta$，不要解方程"
  },
  {
   "en": "in the form $a+bi$ / the imaginary part of ... is",
   "zh": "寫成 $a+bi$；虛部 ＝ $i$ 的係數（連符號）"
  }
 ],
 "lessons": [
  {
   "id": "en02-1",
   "title": {
    "zh": "Lesson 2（課堂 14 題：判別式、根與係數、複數）",
    "en": "Lesson 2 (14 class questions: discriminant, roots and complex numbers)"
   },
   "cards": [
    {
     "id": "en2-c1",
     "topic": "en02",
     "title": {
      "zh": "根與係數：$\\alpha+\\beta$、$\\alpha\\beta$ 與 $\\alpha^{2}+\\beta^{2}$",
      "en": "Sum and product of roots, and $\\alpha^{2}+\\beta^{2}$"
     },
     "body": {
      "zh": "如果 $\\alpha$、$\\beta$ 是方程 $ax^{2}+bx+c=0$ 的兩個根：\n{{math:0}}\n不用解方程（根通常是無理數，解出來也不漂亮）—— 用這兩個關係就夠。\n最常考的目標式：\n{{math:1}}\n例（本課第 4 題）：$x^{2}+kx-15=0$ 的根是 $\\alpha$ 與 $\\beta$，以 $k$ 表示 $\\alpha^{2}+\\beta^{2}$：\n{{math:2}}\n（延伸：$(\\alpha-\\beta)^{2}=(\\alpha+\\beta)^{2}-4\\alpha\\beta$；$\\frac{1}{\\alpha}+\\frac{1}{\\beta}=\\frac{\\alpha+\\beta}{\\alpha\\beta}$。）\n這一課的第 4、5 題就是考這一招（各 3 分）：(1M) 寫出 $\\alpha+\\beta$ 與 $\\alpha\\beta$、(1M) 用恆等式拆開 $\\alpha^{2}+\\beta^{2}$、(1A) 代入並寫出答案。",
      "en": "If $\\alpha$ and $\\beta$ are the roots of $ax^{2}+bx+c=0$:\n{{math:0}}\nThere is no need to solve the equation (the roots are usually irrational) — these two relations are enough.\nThe most common target expression:\n{{math:1}}\nExample (question 4 of this lesson): the roots of $x^{2}+kx-15=0$ are $\\alpha$ and $\\beta$; express $\\alpha^{2}+\\beta^{2}$ in terms of $k$:\n{{math:2}}\n(Also useful: $(\\alpha-\\beta)^{2}=(\\alpha+\\beta)^{2}-4\\alpha\\beta$ and $\\frac{1}{\\alpha}+\\frac{1}{\\beta}=\\frac{\\alpha+\\beta}{\\alpha\\beta}$.)\nQuestions 4 and 5 of this lesson test exactly this routine (3 marks each): one mark for the sum and the product, one for the identity, and one for the final answer."
     },
     "math": [
      "\\alpha+\\beta=-\\frac{b}{a},\\ \\alpha\\beta=\\frac{c}{a}",
      "\\alpha^{2}+\\beta^{2}=(\\alpha+\\beta)^{2}-2\\alpha\\beta",
      "x^{2}+kx-15=0\n\\Rightarrow \\alpha+\\beta=-k,\\ \\alpha\\beta=-15\n\\Rightarrow \\alpha^{2}+\\beta^{2}=(-k)^{2}-2(-15)\n=k^{2}+30"
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
      }
     ],
     "warn": {
      "zh": "最常見錯誤：硬解方程求 $\\alpha$、$\\beta$ 的數值，再逐個平方相加 —— 這樣既花時間又容易計錯。看到「兩根是 $\\alpha$ 和 $\\beta$」就要反射式寫出 $\\alpha+\\beta$ 與 $\\alpha\\beta$。另外，$\\alpha\\beta$ 要連符號：$x^{2}+kx-15=0$ 的 $\\alpha\\beta=-15$。",
      "en": "The classic mistake is solving the equation for $\\alpha$ and $\\beta$ and squaring them one by one — slow and error-prone. When a question says “the roots are $\\alpha$ and $\\beta$”, immediately write down $\\alpha+\\beta$ and $\\alpha\\beta$. Keep the sign of the product: for $x^{2}+kx-15=0$ we have $\\alpha\\beta=-15$."
     }
    },
    {
     "id": "en2-c2",
     "topic": "en02",
     "title": {
      "zh": "複數：$i$ 的冪與四則運算",
      "en": "Complex numbers: powers of $i$ and the four operations"
     },
     "body": {
      "zh": "複數的基本規則只有一條：$i^{2}=-1$。\n{{math:0}}\n加減：實部與實部合併、虛部與虛部合併 —— 例 $(4+5i)-(6-7i)=-2+12i$（減號要分配給每一項）。\n乘：展開之後把 $i^{2}$ 換成 $-1$，最後整理成 $a+bi$。\n{{math:1}}\n題目要求「express the result in the form $a+bi$」時，實部與虛部要分開兩份寫：$\\frac{3+i}{10}$ 寫成 $\\frac{3}{10}+\\frac{1}{10}i$。\n高次冪（例如 $i^{18}$、$i^{31}$）不可以硬乘 —— 先看下面的重點框，用「除以 4 看餘數」一步化簡。",
      "en": "There is only one basic rule for complex numbers: $i^{2}=-1$.\n{{math:0}}\nAdd and subtract: combine the real parts together and the imaginary parts together — for example $(4+5i)-(6-7i)=-2+12i$ (the minus sign applies to every term).\nMultiply: expand, replace $i^{2}$ by $-1$, then tidy everything into the form $a+bi$.\n{{math:1}}\nWhen the question says “express the result in the form $a+bi$”, keep the real part and the imaginary part as two separate terms: write $\\frac{3+i}{10}$ as $\\frac{3}{10}+\\frac{1}{10}i$.\nNever expand a high power such as $i^{18}$ or $i^{31}$ by hand — read the key box below and reduce it in one step by dividing the index by 4."
     },
     "math": [
      "i^{2}=-1",
      "(1-2i)(3+4i)=3+4i-6i-8i^{2}\n=3-2i+8=11-2i"
     ],
     "box": {
      "tag": {
       "zh": "餘數法",
       "en": "Remainder rule"
      },
      "title": {
       "zh": "$i$ 的四個冪：除以 4 看餘數",
       "en": "The four powers of $i$: divide the index by 4 and look at the remainder"
      },
      "zh": "① 四個冪先順序記熟（餘數 1、2、3、0 依次對應 $i$、$-1$、$-i$、$1$）：\n{{math:0}}\n② 每 4 個一循環，所以第 5 個冪由頭開始：\n{{math:1}}\n③ 化簡 $i^{n}$ 只有一步 —— 把 $n$ 除以 4，看餘數（這是整個方法的重點）：\n{{math:2}}\n④ 例子：先把指數寫成 $4k+$ 餘數，再換成對應的冪。\n{{math:3}}",
      "en": "① First learn the four powers in order (remainders 1, 2, 3 and 0 give $i$, $-1$, $-i$ and $1$):\n{{math:0}}\n② The pattern repeats every 4, so the fifth power starts the cycle again:\n{{math:1}}\n③ There is only one step in simplifying $i^{n}$ — divide $n$ by 4 and look at the remainder (this is the heart of the method):\n{{math:2}}\n④ Examples: write the index as $4k$ plus the remainder, then swap in the matching power.\n{{math:3}}",
      "math": [
       "i^{1}=i,\\quad i^{2}=-1,\\quad i^{3}=-i,\\quad i^{4}=1",
       "i^{5}=i,\\quad i^{6}=-1,\\quad i^{7}=-i,\\quad i^{8}=1",
       "\\text{remainder }1\\to i,\\quad 2\\to-1,\\quad 3\\to-i,\\quad 0\\to1",
       "18=4\\times4+2\\ \\Rightarrow\\ i^{18}=i^{2}=-1\n31=4\\times7+3\\ \\Rightarrow\\ i^{31}=i^{3}=-i\n20=4\\times5+0\\ \\Rightarrow\\ i^{20}=i^{4}=1"
      ]
     },
     "vocab": [
      {
       "en": "imaginary unit",
       "zh": "虛數單位 $i$"
      },
      {
       "en": "power of $i$",
       "zh": "$i$ 的冪"
      },
      {
       "en": "remainder",
       "zh": "餘數（除以 4 之後餘下多少）"
      }
     ],
     "warn": {
      "zh": "把 $i^{4}$ 誤記成 $-1$（正確是 $1$）最致命：$i^{20}=(i^{4})^{5}=1$，寫成 $-1$ 就會全盤皆錯。另一個常見錯：展開 $(3-2i)(1+i)$ 時漏了 $-2i\\times i=-2i^{2}=+2$。",
      "en": "Remembering $i^{4}$ as $-1$ (it is $1$) ruins everything: $i^{20}=(i^{4})^{5}=1$, and writing $-1$ makes every later step wrong. Another common slip: when expanding $(3-2i)(1+i)$, the term $-2i\\times i=-2i^{2}=+2$ is missed."
     }
    },
    {
     "id": "en2-c3",
     "topic": "en02",
     "title": {
      "zh": "複數的實部／虛部與除法：分母乘共軛",
      "en": "Real part, imaginary part and division: multiply by the conjugate"
     },
     "body": {
      "zh": "把複數寫成 $a+bi$ 之後：$a$ 是實部（real part）、$b$ 是虛部（imaginary part）。兩者都是實數，虛部只寫 $i$ 前面那個數，而且要連符號 —— $3-7i$ 的實部是 $3$、虛部是 $-7$（不是 $7$）。\n{{math:0}}\n分母有 $i$ 時，分子分母同乘分母的共軛（conjugate），把分母變成實數：$(c+di)(c-di)=c^{2}+d^{2}$。\n{{math:1}}\n兩個高頻題型：\n① 求 real part／imaginary part：先化簡成 $a+bi$，再讀出 $a$、$b$ —— 讀完要核對正負號；\n② 「is a real number」（是實數）＝虛部 $=0$：把 $i$ 的係數寫成一條方程，就求得 $k$。\n{{math:2}}",
      "en": "Once a complex number is written as $a+bi$: $a$ is the real part and $b$ is the imaginary part. Both are real numbers, and the imaginary part is only the number in front of $i$, with its sign — for $3-7i$ the real part is $3$ and the imaginary part is $-7$, not $7$.\n{{math:0}}\nWhen the denominator contains $i$, multiply the top and the bottom by the conjugate of the denominator: $(c+di)(c-di)=c^{2}+d^{2}$ makes the denominator real.\n{{math:1}}\nTwo frequent question types:\n(1) find the real part or the imaginary part: simplify into $a+bi$ first, then read off $a$ and $b$ and check the signs;\n(2) “is a real number” means the imaginary part is $0$: set the coefficient of $i$ equal to zero and solve for $k$.\n{{math:2}}"
     },
     "math": [
      "3-7i:\\ \\text{real part}=3,\\ \\text{imaginary part}=-7",
      "\\frac{2+i}{7+i}=\\frac{(2+i)(7-i)}{(7+i)(7-i)}\n=\\frac{15+5i}{50}=\\frac{3}{10}+\\frac{1}{10}i",
      "\\frac{k-i}{1+2i}=\\frac{(k-i)(1-2i)}{(1+2i)(1-2i)}\n=\\frac{(k-2)-(2k+1)i}{5}\n\\text{real number}\\ \\Rightarrow 2k+1=0\n\\Rightarrow k=-\\frac{1}{2}"
     ],
     "vocab": [
      {
       "en": "conjugate",
       "zh": "共軛"
      },
      {
       "en": "real part",
       "zh": "實部"
      },
      {
       "en": "imaginary part",
       "zh": "虛部"
      }
     ],
     "warn": {
      "zh": "讀虛部時要連符號：$2-4i$ 的虛部是 $-4$。另外，$(c+di)(c-di)=c^{2}+d^{2}$（因為 $-i^{2}=+1$），不是 $c^{2}-d^{2}$ —— 這個符號錯是複數題最常見的失分位。",
      "en": "The imaginary part keeps its sign: the imaginary part of $2-4i$ is $-4$. Also $(c+di)(c-di)=c^{2}+d^{2}$ (because $-i^{2}=+1$), not $c^{2}-d^{2}$ — that wrong sign is the most common slip in complex-number questions."
     }
    },
    {
     "id": "en2-c4",
     "topic": "en02",
     "title": {
      "zh": "複數題的流程與常見錯誤（帶走這一張）",
      "en": "Complex-number routine and common mistakes (take this card away)"
     },
     "body": {
      "zh": "複數題固定四步：① 有 $i$ 的冪就先化簡（除以 4 看餘數）；② 加減乘除之後整理成 $a+bi$（$i^{2}=-1$）；③ 分母有 $i$ 就分子分母同乘共軛，分母變成 $c^{2}+d^{2}$；④ 最後才回答題目問的東西 —— real part、imaginary part，或者由「是實數」寫出虛部 $=0$。\n{{math:0}}\n五個最常見的失分位：\n① 把 $i^{4}$ 記成 $-1$（正確是 $1$）：之後 $i^{18}$、$i^{20}$ 全部錯；\n② 共軛相乘的分母寫成 $c^{2}-d^{2}$（正確是 $c^{2}+d^{2}$，因為 $-i^{2}=+1$）；\n③ 問 real part 卻答了 imaginary part（選項通常兩個都放進去）；\n④ 讀虛部時漏了負號（$2-4i$ 的虛部是 $-4$，不是 $4$）；\n⑤ 漏掉式子後面不含 $i$ 的常數項（例如 $-i^{18}=+1$），少了一項答案就錯。",
      "en": "Complex-number questions follow four fixed steps: (1) simplify any power of $i$ first by dividing the index by 4; (2) add, subtract, multiply or divide and tidy everything into the form $a+bi$ using $i^{2}=-1$; (3) when the denominator contains $i$, multiply the top and the bottom by its conjugate so that the denominator becomes $c^{2}+d^{2}$; (4) only then answer what is asked — the real part, the imaginary part, or use “is a real number” to mean that the imaginary part is zero.\n{{math:0}}\nFive ways marks are lost:\n(1) remembering $i^{4}$ as $-1$ instead of $1$, which spoils every higher power;\n(2) writing the conjugate product as $c^{2}-d^{2}$ instead of $c^{2}+d^{2}$, because minus $i$ squared is plus 1;\n(3) answering the imaginary part when the real part was asked, since the options usually contain both;\n(4) dropping the sign of the imaginary part ($2-4i$ has imaginary part $-4$, not $4$);\n(5) missing the constant terms that carry no $i$, such as minus $i$ to the 18th being plus 1."
     },
     "math": [
      "z=a+bi:\\ \\text{real part}=a,\\ \\text{imaginary part}=b\nz\\ \\text{is purely imaginary}\\ \\Leftrightarrow\\ a=0\nz\\ \\text{is real}\\ \\Leftrightarrow\\ b=0"
     ],
     "vocab": [
      {
       "en": "conjugate",
       "zh": "共軛"
      },
      {
       "en": "purely imaginary",
       "zh": "純虛數（實部 $=0$）"
      }
     ],
     "warn": {
      "zh": "「是實數」＝虛部 $=0$；「是純虛數」＝實部 $=0$ —— 兩個條件剛好相反，是複數題最常見的混淆。",
      "en": "Being real means the imaginary part is zero, while being purely imaginary means the real part is zero; the two conditions are opposites and are easily confused."
     }
    }
   ],
   "long": [
    {
     "id": "eph-en02-q1",
     "type": "long",
     "topic": "en02",
     "unit": 5,
     "subtopic": "quadratic-equations",
     "difficulty": 2,
     "code": "EN2-Q1",
     "source": "Endeavour Lesson 2 Q19 · EPH WS05 Q19（判別式：兩個相等實根）",
     "stem": {
      "en": "If each of the following quadratic equations has two equal real roots, find $k$.",
      "zh": "若下列每個二次方程都有兩個相等實根，求 $k$。"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$x^{2}+4x+k=0$",
       "en": "$x^{2}+4x+k=0$",
       "zh": "$x^{2}+4x+k=0$",
       "marks": 2
      },
      {
       "label": "(b)",
       "text": "$kx^{2}-30x+9=0$",
       "en": "$kx^{2}-30x+9=0$",
       "zh": "$kx^{2}-30x+9=0$",
       "marks": 2
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 (a) · 相等實根 ⇒ $\\Delta=0$",
         "en": "(a) Equal real roots means the discriminant is zero"
        },
        "math": "(a)\\ 4^{2}-4(1)(k)=0\n\\Rightarrow 16-4k=0",
        "zh": "「有兩個相等實根」＝判別式 $\\Delta=b^{2}-4ac=0$。這裡 $a=1$、$b=4$、$c=k$（$k$ 本身就是常數項），代入得 $16-4k=0$。",
        "en": "Two equal real roots means the discriminant is 0. Here a = 1, b = 4 and c = k, so 16 - 4k = 0.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 (a) · 解方程求 $k$",
         "en": "(a) Solve the equation for k"
        },
        "math": "16-4k=0\n\\Rightarrow 4k=16\n\\Rightarrow k=4",
        "zh": "把 $-4k$ 搬去右邊得 $4k=16$，所以 $k=4$。不要兩邊同除 $-4$，就不會弄錯符號。",
        "en": "Move -4k to the right: 4k = 16, so k = 4. Avoid dividing by -4, which invites sign errors.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 3 步 (b) · 二次項係數是 $k$：先認清 $a$、$b$、$c$",
         "en": "(b) The coefficient of x squared is k: identify a, b and c first"
        },
        "math": "(b)\\ a=k,\\ b=-30,\\ c=9\n\\Delta=(-30)^{2}-4(k)(9)\n=900-36k",
        "zh": "方程 $kx^{2}-30x+9=0$ 的 $a=k$（不是 $1$）、$b=-30$（連負號）、$c=9$。代入 $\\Delta=b^{2}-4ac$ 得 $900-36k$。（順帶一提：$k\\ne 0$，否則方程不再是二次方程。）",
        "en": "In kx^2 - 30x + 9 = 0 we have a = k, b = -30 with its sign, and c = 9; the discriminant is 900 - 36k. Note k must not be 0.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 (b) · 令 $\\Delta=0$ 解出 $k$",
         "en": "(b) Set the discriminant to zero and solve"
        },
        "math": "900-36k=0\n\\Rightarrow 36k=900\n\\Rightarrow k=25",
        "zh": "相等實根 ⇒ $\\Delta=0$：$36k=900$，所以 $k=25$。兩個答案一起寫：$k=4$ 或 $k=25$。",
        "en": "Equal roots means 900 - 36k = 0, hence 36k = 900 and k = 25.",
        "marking": "(1A)",
        "highlight": [
         "k=4",
         "k=25"
        ]
       }
      ],
      "traps": [
       {
        "label": "二次項係數看錯",
        "labelEn": "Wrong quadratic coefficient",
        "zh": "(b) 把 $a$ 當成 $1$，得 $900-36=864$；這樣怎樣解也得不到 $k=25$。$a$ 含 $k$ 時一定要整塊代入。",
        "en": "Treating a as 1 in part (b) leaves 864 instead of 900 - 36k, so k = 25 can never appear."
       },
       {
        "label": "等根誤用 $\\Delta>0$",
        "labelEn": "Using a strict inequality for equal roots",
        "zh": "「兩個相等實根」是 $\\Delta=0$（一個等號）；$\\Delta>0$ 才是「兩個相異實根」。",
        "en": "Two equal real roots gives the discriminant equal to zero; a strict inequality describes two distinct roots."
       },
       {
        "label": "搬項忘記變號",
        "labelEn": "Sign slip when rearranging",
        "zh": "$16-4k=0$ 得 $4k=16$、$k=4$；若兩邊同除 $-4$ 又漏了符號，就會寫成 $k=-4$。",
        "en": "16 - 4k = 0 gives 4k = 16 and k = 4; dividing by -4 carelessly produces k = -4 instead."
       }
      ],
      "tip": {
       "zh": "「相等實根」＝ $\\Delta=0$。先把方程寫成標準形，再把 $a$、$b$、$c$ 連符號整塊代入 —— 二次項係數含 $k$ 時最容易漏。",
       "en": "Equal roots means the discriminant is zero. Write the equation in standard form first, then substitute a, b and c with their signs; a coefficient containing k is the easiest one to drop."
      },
      "alt": [
       {
        "name": {
         "zh": "計算機保底驗算法：Formula 01 重根檢驗",
         "en": "Calculator safety net: repeated root check with Formula 01"
        },
        "zh": "把求得的 $k$ 代回方程檢驗：用考評局准用的 Casio fx-50FH II 按【FMLA】【01】（或 fx-3650P II 執行 Prog 1）。(a) 輸入 $a=1$、$b=4$、$c=4$，屏幕顯示 $x=-2$，兩個根是同一個數值 → 重根，證明 $\\Delta=0$；(b) 輸入 $a=25$、$b=-30$、$c=9$，屏幕顯示 $x=0.6$（即 $\\frac{3}{5}$），兩個根同樣相同 → 重根，證明 $k=25$ 正確。（卷一仍要寫出手算步驟才得分，這裡只是驗算。）",
        "en": "Substitute each value of k back and check: on a Casio fx-50FH II press [FMLA] [01] (or run Prog 1 on a fx-3650P II). For (a) enter a = 1, b = 4, c = 4: the screen shows x = -2 with both roots equal, confirming a repeated root and Δ = 0. For (b) enter a = 25, b = -30, c = 9: the screen shows x = 0.6, again a repeated root, so k = 25 is correct. (Marks in Paper 1 still come from the written steps — this is only a check.)"
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en02-q2",
     "type": "long",
     "topic": "en02",
     "unit": 5,
     "subtopic": "quadratic-equations",
     "difficulty": 2,
     "code": "EN2-Q2",
     "source": "Endeavour Lesson 2 Q20 · EPH WS05 Q20（判別式：求 k 的範圍）",
     "stem": {
      "en": "For each of the following quadratic equations, find the range of values of $k$.",
      "zh": "就下列每個二次方程，求 $k$ 的取值範圍。"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$x^{2}-6x+k=0$ has no real roots.",
       "en": "$x^{2}-6x+k=0$ has no real roots.",
       "zh": "$x^{2}-6x+k=0$ 無實根。",
       "marks": 2
      },
      {
       "label": "(b)",
       "text": "$9x^{2}+3x-k=0$ has two unequal real roots.",
       "en": "$9x^{2}+3x-k=0$ has two unequal real roots.",
       "zh": "$9x^{2}+3x-k=0$ 有兩個相異實根。",
       "marks": 2
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 (a) · 無實根 ⇒ $\\Delta<0$",
         "en": "(a) No real roots means the discriminant is negative"
        },
        "math": "(a)\\ (-6)^{2}-4(1)(k)<0\n\\Rightarrow 36-4k<0",
        "zh": "「無實根」＝判別式 $\\Delta<0$（嚴格小於，沒有等號）。$a=1$、$b=-6$、$c=k$，而 $(-6)^{2}=36$（負數平方得正）。",
        "en": "No real roots means the discriminant is strictly negative. Here a = 1, b = -6 and c = k, and (-6)^2 = 36.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 (a) · 解不等式，寫出範圍",
         "en": "(a) Solve the inequality and state the range"
        },
        "math": "36-4k<0\n\\Rightarrow 36<4k\n\\Rightarrow k>9",
        "zh": "把 $-4k$ 搬去右邊（不要兩邊除 $-4$，就不會反號）：$36<4k$，兩邊同除 $4$ 得 $k>9$。答案要寫成不等式。",
        "en": "Move -4k across instead of dividing by a negative number: 36 < 4k, so k > 9. The answer must be written as an inequality.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 3 步 (b) · 認清 $a$、$b$、$c$：$c=-k$",
         "en": "(b) Identify a, b and c: here c is minus k"
        },
        "math": "(b)\\ a=9,\\ b=3,\\ c=-k\n\\Delta=3^{2}-4(9)(-k)\n=9+36k",
        "zh": "「有兩個相異實根」＝$\\Delta>0$。$c=-k$，所以 $-4ac=-4(9)(-k)=+36k$ —— 負負得正，這一步最容易漏掉。",
        "en": "Two unequal real roots means the discriminant is positive. Since c = -k, the term -4ac becomes +36k; the double negative is the usual slip.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 (b) · 解出 $k$ 的範圍",
         "en": "(b) Solve for the range of k"
        },
        "math": "9+36k>0\n\\Rightarrow 36k>-9\n\\Rightarrow k>-\\frac{1}{4}",
        "zh": "把 $9$ 搬去右邊得 $36k>-9$，兩邊同除 $36$（正數，不等號不變）得 $k>-\\frac{1}{4}$。",
        "en": "Move 9 across to get 36k > -9, then divide by the positive number 36: k > -1/4.",
        "marking": "(1A)",
        "highlight": [
         "k>9",
         "k>-\\frac{1}{4}"
        ]
       }
      ],
      "traps": [
       {
        "label": "無實根寫成 $\\Delta\\le 0$",
        "labelEn": "Writing the no-real-roots condition with an equality",
        "zh": "「無實根」是 $\\Delta<0$；寫成 $\\Delta\\le 0$ 會多包了一個 $k=9$ —— 那時方程有重根，不是無實根。",
        "en": "No real roots means the discriminant is strictly negative; including the equality would wrongly accept the repeated-root case."
       },
       {
        "label": "(b) 漏了 $c=-k$ 的負號",
        "labelEn": "Dropping the sign of c = -k",
        "zh": "$c=-k$ 時 $-4ac=+36k$，答案是 $k>-\\frac{1}{4}$；把 $c$ 當成 $k$ 就得 $9-36k>0$，答案變成 $k<\\frac{1}{4}$（剛好相反）。",
        "en": "With c = -k the discriminant is 9 + 36k, giving k > -1/4; treating c as k gives the opposite answer."
       },
       {
        "label": "(b) 忘記 $a=9$",
        "labelEn": "Forgetting that a is 9",
        "zh": "用 $a=1$ 會得 $3^{2}-4(1)(-k)=9+4k>0$，答案變成 $k>-\\frac{9}{4}$。",
        "en": "Using a = 1 gives 9 + 4k > 0 instead, so the range becomes k > -9/4."
       }
      ],
      "tip": {
       "zh": "三個字眼要分清：「無實根」$\\Delta<0$、「兩個相異實根」$\\Delta>0$、「有實根」$\\Delta\\ge 0$。解不等式時把負項搬去另一邊，就不會反號。",
       "en": "Keep the three wordings apart: no real roots gives a negative discriminant, two unequal roots a positive one, and real roots allow the equality. Move negative terms across instead of dividing by them."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：範圍內外各取一個數核對",
         "en": "Check: test one value inside and one outside the range"
        },
        "zh": "取 (b) 的答案 $k>-\\frac{1}{4}$ 內外各一：$k=0$ 時 $9x^{2}+3x=0$，$\\Delta=9>0$ ✓ 兩個相異實根；$k=-1$ 時 $9x^{2}+3x+1=0$，$\\Delta=9-36=-27<0$ ✗ 無實根。一正一反就確認範圍正確。",
        "en": "For the answer k > -1/4, test one value inside and one outside: k = 0 gives 9x^2 + 3x = 0 with a positive discriminant, while k = -1 gives a negative discriminant. One inside and one outside confirms the range."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en02-q3",
     "type": "long",
     "topic": "en02",
     "unit": 5,
     "subtopic": "quadratic-equations",
     "difficulty": 2,
     "code": "EN2-Q3",
     "source": "Endeavour Lesson 2 Q21 · EPH WS05 Q21（判別式：有實根）",
     "stem": {
      "en": "If each of the following quadratic equations has real roots, find the range of values of $k$.",
      "zh": "若下列每個二次方程都有實根，求 $k$ 的取值範圍。"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$x^{2}+8x-k=0$",
       "en": "$x^{2}+8x-k=0$",
       "zh": "$x^{2}+8x-k=0$",
       "marks": 2
      },
      {
       "label": "(b)",
       "text": "$2x^{2}-4x+k=1$",
       "en": "$2x^{2}-4x+k=1$",
       "zh": "$2x^{2}-4x+k=1$",
       "marks": 2
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 (a) · 有實根 ⇒ $\\Delta\\ge 0$",
         "en": "(a) Real roots means the discriminant is at least zero"
        },
        "math": "(a)\\ 8^{2}-4(1)(-k)\\ge 0\n\\Rightarrow 64+4k\\ge 0",
        "zh": "「有實根」＝$\\Delta\\ge 0$（等號不可漏：等根也算有實根）。$c=-k$，所以 $-4ac=-4(1)(-k)=+4k$。",
        "en": "Real roots means the discriminant is greater than or equal to 0. Since c = -k, the term -4ac equals +4k.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 (a) · 寫出 $k$ 的範圍",
         "en": "(a) State the range of k"
        },
        "math": "64+4k\\ge 0\n\\Rightarrow 4k\\ge -64\n\\Rightarrow k\\ge -16",
        "zh": "把 $64$ 搬去右邊得 $4k\\ge -64$，同除 $4$ 得 $k\\ge -16$。",
        "en": "Move 64 across to get 4k at least -64, so k is at least -16.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 3 步 (b) · 先搬成標準形，常數項是 $k-1$",
         "en": "(b) Write it in standard form: the constant term is k minus 1"
        },
        "math": "(b)\\ 2x^{2}-4x+k=1\n\\Rightarrow 2x^{2}-4x+(k-1)=0",
        "zh": "右邊的 $1$ 搬去左邊才做判別式：常數項是 $(k-1)$，不是 $k$。這一步是 (b) 的關鍵。",
        "en": "Move the 1 across before using the discriminant: the constant term is k - 1, not k. This is the key step of part (b).",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 (b) · 判別式 $\\ge 0$ 並解不等式",
         "en": "(b) Apply the discriminant and solve the inequality"
        },
        "math": "\\Delta=(-4)^{2}-4(2)(k-1)\\ge 0\n\\Rightarrow 16-8(k-1)\\ge 0\n\\Rightarrow 16-[8k-8]\\ge 0\n\\Rightarrow 16-8k+8\\ge 0\n\\Rightarrow 24-8k\\ge 0\n\\Rightarrow 24\\ge 8k\n\\Rightarrow k\\le 3",
        "zh": "$-4ac$ 的常數項是多項式 $(k-1)$，分配負號時最好把中括號寫出來：$16-[8k-8]=16-8k+8=24-8k$。最常見的錯就是漏了變號，寫成 $16-8k-8=8-8k$，之後的答案全部錯。最後把負項搬去右邊：$24\\ge 8k$，兩邊同除正數 $8$ 得 $k\\le 3$ —— 這樣就不會碰到「除以負數要反號」的陷阱。",
        "en": "When working out -4ac, the constant term is the binomial k - 1, so write the bracket step 16 - [8k - 8] explicitly: forgetting the sign change gives 16 - 8k - 8, which ruins the rest. Moving -8k to the right gives 24 >= 8k, and dividing by the positive number 8 gives k <= 3 without any need to reverse the inequality.",
        "marking": "(1A)",
        "highlight": [
         "k\\ge -16",
         "k\\le 3"
        ]
       }
      ],
      "traps": [
       {
        "label": "(b) 常數項用 $k$ 而不是 $k-1$",
        "labelEn": "(b) Using k instead of k - 1",
        "zh": "用 $c=k$ 得 $16-8k\\ge 0$，即 $k\\le 2$ —— 差了一格，這是最常見的失分位。",
        "en": "Using c = k gives 16 - 8k at least 0, hence k at most 2, which is wrong by one step."
       },
       {
        "label": "(a) 符號：$c=-k$ 寫成 $c=k$",
        "labelEn": "(a) Sign slip: writing c = k instead of -k",
        "zh": "$c=-k$ 時 $-4ac=+4k$，答案 $k\\ge -16$；寫成 $c=k$ 會得 $k\\le 16$。",
        "en": "With c = -k we get +4k and the range k at least -16; using c = k reverses it."
       },
       {
        "label": "「有實根」漏等號",
        "labelEn": "Dropping the equality for real roots",
        "zh": "寫成 $\\Delta>0$ 會漏掉 $k=-16$ —— 那時方程有重根，仍然算有實根。",
        "en": "Using a strict inequality loses k = -16, where the equation has a repeated root and still counts as having real roots."
       }
      ],
      "tip": {
       "zh": "有實根＝$\\Delta\\ge 0$（有等號）。記得先把 $k$ 搬進常數項，再代入判別式。",
       "en": "Real roots means the discriminant is at least zero, equality included. Fold k into the constant term before substituting."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：範圍內外各取一個數核對",
         "en": "Check: test one value inside and one outside the range"
        },
        "zh": "取 (b) 的答案 $k\\le 3$：$k=2$ 時 $2x^{2}-4x+1=0$，$\\Delta=16-8=8>0$ ✓ 有實根；$k=4$ 時 $2x^{2}-4x+3=0$，$\\Delta=16-24=-8<0$ ✗ 無實根。",
        "en": "For the answer k at most 3, test k = 2 and k = 4: the first has a positive discriminant and the second a negative one, confirming the boundary."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en02-q4",
     "type": "long",
     "topic": "en02",
     "unit": 5,
     "subtopic": "quadratic-equations",
     "difficulty": 3,
     "code": "EN2-Q4",
     "source": "Endeavour Lesson 2 Q7 · EPH WS05 DSE P1 Q7 · [HKDSE 2022 Paper 1 Q17(a)]（3 marks）",
     "stem": {
      "en": "Let $k$ be a real constant. The roots of the equation $x^{2}+kx-15=0$ are $\\alpha$ and $\\beta$. Express $\\alpha^{2}+\\beta^{2}$ in terms of $k$.",
      "zh": "設 $k$ 為實常數。方程 $x^{2}+kx-15=0$ 的兩個根是 $\\alpha$ 與 $\\beta$。以 $k$ 表示 $\\alpha^{2}+\\beta^{2}$。"
     },
     "kind": "short",
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 寫下兩根之和與兩根之積",
         "en": "Step 1 · Write down the sum and the product of the roots"
        },
        "math": "\\alpha+\\beta=-\\frac{k}{1}=-k\n\\alpha\\beta=\\frac{-15}{1}=-15",
        "zh": "根與係數：$\\alpha+\\beta=-\\frac{b}{a}$、$\\alpha\\beta=\\frac{c}{a}$。這裡 $a=1$、$b=k$、$c=-15$，所以 $\\alpha+\\beta=-k$、$\\alpha\\beta=-15$。不需要（也不應該）解方程。",
        "en": "For roots alpha and beta: their sum is minus b over a and their product is c over a. With a = 1, b = k and c = -15 we get -k and -15. Never solve the equation itself.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 用恆等式拆開 $\\alpha^{2}+\\beta^{2}$",
         "en": "Step 2 · Split the target with the standard identity"
        },
        "math": "\\alpha^{2}+\\beta^{2}=(\\alpha+\\beta)^{2}-2\\alpha\\beta",
        "zh": "由 $(\\alpha+\\beta)^{2}=\\alpha^{2}+2\\alpha\\beta+\\beta^{2}$ 移項就得到這條恆等式：目標式要先用「和」與「積」表示，才可以代入。",
        "en": "This identity follows from expanding the square of the sum: the target must first be written using the sum and the product.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 代入並化簡（連符號）",
         "en": "Step 3 · Substitute with the signs and simplify"
        },
        "math": "=(-k)^{2}-2(-15)\n=k^{2}+30",
        "zh": "$(-k)^{2}=k^{2}$（負數平方是正數），$-2(-15)=+30$（負負得正），所以 $\\alpha^{2}+\\beta^{2}=k^{2}+30$。",
        "en": "The square of -k is k squared, and minus twice -15 is plus 30, so the answer is k squared plus 30.",
        "marking": "(1A)",
        "highlight": [
         "k^{2}+30"
        ]
       }
      ],
      "traps": [
       {
        "label": "硬解方程求根",
        "labelEn": "Trying to solve the equation for the roots",
        "zh": "解 $x^{2}+kx-15=0$ 要求根式（還帶着 $k$），又慢又易錯。題目只要求「以 $k$ 表示」，用根與係數兩步就完成。",
        "en": "Solving the equation would produce surds containing k: slow and error-prone. The question only asks for an expression in k."
       },
       {
        "label": "$\\alpha\\beta$ 漏了負號",
        "labelEn": "Dropping the sign of the product",
        "zh": "$c=-15$，所以 $\\alpha\\beta=-15$；寫成 $+15$ 會得 $k^{2}-30$。",
        "en": "Since c = -15 the product is -15; using +15 gives k squared minus 30 instead."
       },
       {
        "label": "$(-k)^{2}$ 寫成 $-k^{2}$",
        "labelEn": "Writing -k squared as minus k squared",
        "zh": "負數平方是正數：$(-k)^{2}=k^{2}$。漏了這個符號，整題就錯。",
        "en": "Squaring a negative number gives a positive result, so -k squared is k squared; a missing sign ruins the whole answer."
       }
      ],
      "tip": {
       "zh": "看到「兩根是 $\\alpha$ 和 $\\beta$」：① 寫 $\\alpha+\\beta$、$\\alpha\\beta$（連符號）；② 用 $\\alpha^{2}+\\beta^{2}=(\\alpha+\\beta)^{2}-2\\alpha\\beta$；③ 代入化簡。",
       "en": "When a question gives the roots as alpha and beta: write down the sum and the product with their signs, apply the identity for the sum of squares, then substitute and simplify."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：代一個具體的 $k$ 核對",
         "en": "Check: pick a number for k and test the answer"
        },
        "zh": "設 $k=2$：方程是 $x^{2}+2x-15=0$，分解得 $(x+5)(x-3)=0$，兩根為 $-5$ 與 $3$，$\\alpha^{2}+\\beta^{2}=25+9=34$。公式 $k^{2}+30=2^{2}+30=34$ ✓ 兩者相同。",
        "en": "Take k = 2: the equation becomes x^2 + 2x - 15 = 0, whose roots are -5 and 3, so the sum of squares is 34. The formula gives 4 + 30 = 34 as well."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en02-q5",
     "type": "long",
     "topic": "en02",
     "unit": 5,
     "subtopic": "quadratic-equations",
     "difficulty": 3,
     "code": "EN2-Q5",
     "source": "Endeavour Lesson 2 Q8 · EPH WS05 DSE P1 Q8（2022 P1 Q17(a) 同款變式，3 marks）",
     "stem": {
      "en": "Let $b$ be a real constant. The roots of the equation $2x^{2}-bx+8=0$ are $\\alpha$ and $\\beta$. Express $\\alpha^{2}+\\beta^{2}$ in terms of $b$.",
      "zh": "設 $b$ 為實常數。方程 $2x^{2}-bx+8=0$ 的兩個根是 $\\alpha$ 與 $\\beta$。以 $b$ 表示 $\\alpha^{2}+\\beta^{2}$。"
     },
     "kind": "short",
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 和與積（注意方程的係數是 $-b$）",
         "en": "Step 1 · Sum and product (the coefficient is minus b)"
        },
        "math": "\\alpha+\\beta=-\\frac{-b}{2}=\\frac{b}{2}\n\\alpha\\beta=\\frac{8}{2}=4",
        "zh": "$a=2$、一次項係數是 $-b$（方程寫作 $-bx$），所以 $\\alpha+\\beta=-\\frac{-b}{2}=\\frac{b}{2}$；兩根之積 $\\alpha\\beta=\\frac{c}{a}=\\frac{8}{2}=4$。",
        "en": "Here a = 2 and the coefficient of x is -b, so the sum of the roots is b over 2, and the product is 8 over 2, which is 4.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 用恆等式把目標式寫成和與積",
         "en": "Step 2 · Rewrite the target with the sum and the product"
        },
        "math": "\\alpha^{2}+\\beta^{2}=(\\alpha+\\beta)^{2}-2\\alpha\\beta",
        "zh": "與上一題同一條恆等式：先把 $\\alpha^{2}+\\beta^{2}$ 寫成 $(\\alpha+\\beta)^{2}-2\\alpha\\beta$，才可以代入剛剛算出的和與積。",
        "en": "Same identity as the previous question: rewrite the sum of squares as the square of the sum minus twice the product before substituting.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 代入化簡",
         "en": "Step 3 · Substitute and simplify"
        },
        "math": "=\\left(\\frac{b}{2}\\right)^{2}-2(4)\n=\\frac{b^{2}}{4}-8",
        "zh": "$(\\frac{b}{2})^{2}=\\frac{b^{2}}{4}$，$-2(4)=-8$，所以答案是 $\\frac{b^{2}}{4}-8$（也可以寫成 $\\frac{b^{2}-32}{4}$，兩者相同）。",
        "en": "The square of b over 2 is b squared over 4, and minus twice 4 is minus 8, so the answer is b squared over 4 minus 8.",
        "marking": "(1A)",
        "highlight": [
         "\\frac{b^{2}}{4}-8",
         "\\frac{b^{2}-32}{4}"
        ]
       }
      ],
      "traps": [
       {
        "label": "和式的符號",
        "labelEn": "Sign of the sum",
        "zh": "方程是 $2x^{2}-bx+8=0$，一次項係數是 $-b$，所以 $\\alpha+\\beta=-\\frac{-b}{2}=+\\frac{b}{2}$；漏了一個負號就會寫成 $-\\frac{b}{2}$。",
        "en": "The coefficient of x is -b, so the sum of the roots is plus b over 2. Missing the double negative gives the wrong sign."
       },
       {
        "label": "忘記 $a=2$",
        "labelEn": "Forgetting that a is 2",
        "zh": "用 $a=1$ 得 $\\alpha+\\beta=b$，答案變成 $b^{2}-8$。",
        "en": "Using a = 1 gives a sum of b and therefore a different answer, b squared minus 8."
       },
       {
        "label": "乘積忘了除 $a$",
        "labelEn": "Forgetting to divide the product by a",
        "zh": "$\\alpha\\beta=\\frac{c}{a}=\\frac{8}{2}=4$，不是 $8$；用 $8$ 會得 $\\frac{b^{2}}{4}-16$。",
        "en": "The product is 8 over 2, which is 4 and not 8; using 8 gives a wrong constant term."
       }
      ],
      "tip": {
       "zh": "公式 $\\alpha+\\beta=-\\frac{b}{a}$ 裡的 $b$ 是方程的一次項係數（連符號），與題目裡的常數 $b$ 同名但不是同一回事 —— 代入時逐個對清楚。",
       "en": "In the formula the letter b means the coefficient of x in the equation, with its sign; it is not the same as the constant b in the question, so match every symbol carefully."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：代一個具體的 $b$ 核對",
         "en": "Check: pick a number for b and test the answer"
        },
        "zh": "設 $b=6$：方程是 $2x^{2}-6x+8=0$，即 $x^{2}-3x+4=0$，兩根為 $\\frac{3\\pm\\sqrt{9-16}}{2}$…判別式是負數，換一個有實根的：設 $b=10$，方程 $2x^{2}-10x+8=0$，兩根為 $1$ 與 $4$，$\\alpha^{2}+\\beta^{2}=1+16=17$；公式 $\\frac{10^{2}}{4}-8=25-8=17$ ✓。",
        "en": "Take b = 10: the equation 2x^2 - 10x + 8 = 0 has roots 1 and 4, so the sum of squares is 17, which matches the formula 100 over 4 minus 8."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en02-q6",
     "type": "long",
     "topic": "en02",
     "unit": 6,
     "subtopic": "complex-numbers",
     "difficulty": 2,
     "code": "EN2-Q6",
     "source": "Endeavour Lesson 2 Q14–16 · EPH WS05 Q14–16（複數化簡：寫成 a+bi）",
     "stem": {
      "en": "Simplify the following and express the results in the form $a+bi$.",
      "zh": "化簡下列各題，並以 $a+bi$ 的形式表示結果。"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$(4+5i)-(6-7i)$",
       "en": "$(4+5i)-(6-7i)$",
       "zh": "$(4+5i)-(6-7i)$",
       "marks": 2
      },
      {
       "label": "(b)",
       "text": "$(1-2i)(3+4i)$",
       "en": "$(1-2i)(3+4i)$",
       "zh": "$(1-2i)(3+4i)$",
       "marks": 2
      },
      {
       "label": "(c)",
       "text": "$\\frac{2+i}{7+i}$",
       "en": "$\\frac{2+i}{7+i}$",
       "zh": "$\\frac{2+i}{7+i}$",
       "marks": 3
      }
     ],
     "marks": 7,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 (a) · 去括號：減號要分配給每一項",
         "en": "(a) Remove the brackets: the minus sign applies to every term"
        },
        "math": "(a)\\ (4+5i)-(6-7i)\n=4+5i-6+7i",
        "zh": "$-(6-7i)=-6+7i$：括號前的減號要乘進每一項，$-(-7i)=+7i$ 是最易錯的一步。",
        "en": "The minus sign in front of the bracket multiplies every term inside, so -(-7i) becomes +7i.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 (a) · 合併實部與虛部",
         "en": "(a) Combine the real parts and the imaginary parts"
        },
        "math": "=(4-6)+(5+7)i\n=-2+12i",
        "zh": "實部 $4-6=-2$、虛部 $5+7=12$，所以答案是 $-2+12i$。",
        "en": "The real parts give -2 and the imaginary parts give 12, so the answer is -2 + 12i.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 3 步 (b) · 展開（每一項都要乘）",
         "en": "(b) Expand, multiplying every pair of terms"
        },
        "math": "(b)\\ (1-2i)(3+4i)\n=3+4i-6i-8i^{2}",
        "zh": "逐項相乘：$1\\times3=3$、$1\\times4i=4i$、$-2i\\times3=-6i$、$-2i\\times4i=-8i^{2}$。四項都要寫出來才不會漏。",
        "en": "Multiply term by term: 3, 4i, -6i and -8i squared. Writing all four terms down prevents omissions.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 (b) · 用 $i^{2}=-1$ 收尾",
         "en": "(b) Finish with i squared equal to minus one"
        },
        "math": "=3-2i-8(-1)\n=3-2i+8\n=11-2i",
        "zh": "$-8i^{2}=-8(-1)=+8$（負負得正），所以實部 $3+8=11$、虛部 $-2$，答案是 $11-2i$。",
        "en": "Minus 8 i squared becomes plus 8, so the real part is 11 and the imaginary part is -2, giving 11 - 2i.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 5 步 (c) · 分母有 $i$：分子分母同乘共軛",
         "en": "(c) The denominator contains i: multiply by its conjugate"
        },
        "math": "(c)\\ \\frac{2+i}{7+i}\n=\\frac{(2+i)(7-i)}{(7+i)(7-i)}",
        "zh": "分母 $7+i$ 的共軛是 $7-i$（把 $+i$ 換成 $-i$）。分子分母同乘它，分母就會變成實數。",
        "en": "The conjugate of 7 + i is 7 - i. Multiplying the top and the bottom by it makes the denominator real.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 6 步 (c) · 分母用平方差、分子展開",
         "en": "(c) Use the difference of squares below and expand above"
        },
        "math": "=\\frac{14-2i+7i-i^{2}}{7^{2}+1^{2}}\n=\\frac{15+5i}{50}",
        "zh": "分母 $(7+i)(7-i)=7^{2}-i^{2}=49+1=50$；分子 $(2+i)(7-i)=14-2i+7i-i^{2}=15+5i$（$-i^{2}=+1$）。",
        "en": "The denominator becomes 49 plus 1, which is 50, and the numerator becomes 15 + 5i because minus i squared is plus 1.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 7 步 (c) · 約簡並分成 $a+bi$ 兩份",
         "en": "(c) Simplify and split into the form a + bi"
        },
        "math": "=\\frac{3}{10}+\\frac{1}{10}i",
        "zh": "分子分母同除 $5$：$\\frac{15+5i}{50}=\\frac{3+i}{10}$。題目要求 $a+bi$，所以要把兩項分開寫成 $\\frac{3}{10}+\\frac{1}{10}i$。",
        "en": "Dividing top and bottom by 5 gives three tenths plus one tenth i, with the real and imaginary parts written separately.",
        "marking": "(1A)",
        "highlight": [
         "-2+12i",
         "11-2i",
         "\\frac{3}{10}+\\frac{1}{10}i"
        ]
       }
      ],
      "traps": [
       {
        "label": "(a) 減號只乘第一項",
        "labelEn": "(a) Applying the minus sign to the first term only",
        "zh": "$-(6-7i)$ 若只寫成 $-6-7i$，虛部會變成 $5-7=-2$，答案錯成 $-2-2i$。",
        "en": "Writing the bracket as -6 - 7i leaves the imaginary part as 5 - 7, giving the wrong answer -2 - 2i."
       },
       {
        "label": "(b) 漏了 $-2i\\times4i=-8i^{2}=+8$",
        "labelEn": "(b) Missing the term -2i times 4i",
        "zh": "少了 $+8$，實部只餘 $3$，答案會寫成 $3-2i$。展開時四項要齊。",
        "en": "Without that plus 8 the real part stays at 3, so the answer becomes 3 - 2i. All four products must be written down."
       },
       {
        "label": "(c) 分母寫成 $7^{2}-1^{2}=48$",
        "labelEn": "(c) Writing the denominator as 49 - 1",
        "zh": "$(7+i)(7-i)=7^{2}-i^{2}=49+1=50$（因為 $-i^{2}=+1$）；寫成 $49-1$ 是最常見的符號錯，之後約簡也會跟着錯。",
        "en": "The product is 49 plus 1, which is 50, because minus i squared is plus 1; writing 49 - 1 is the usual slip and spoils the simplification."
       }
      ],
      "tip": {
       "zh": "複數化簡三步：① 展開時 $i^{2}$ 全部換成 $-1$；② 分母有 $i$ 就乘共軛，分母變成 $c^{2}+d^{2}$；③ 最後一定要寫成 $a+bi$ 兩份。",
       "en": "Three steps for simplifying complex numbers: replace every i squared by minus 1, multiply by the conjugate when the denominator contains i, and finish with the real and imaginary parts written separately."
      },
      "alt": [
       {
        "name": {
         "zh": "計算機保底驗算法：複數模式（CMPLX）核對三小題",
         "en": "Calculator safety net: verify all three parts in CMPLX mode"
        },
        "zh": "考評局准用的 Casio fx-50FH II 可以直接計複數：按【MODE】【2】轉去 CMPLX 模式（屏幕上方顯示 CMPLX），$i$ 用【ENG】鍵輸入，做完按【MODE】【1】返回 COMP 模式。(a) 輸入 $(4+5i)-(6-7i)$ 按【=】得 $-2$，再按【SHIFT】【=】（Re⇔Im）讀出虛部 $12$ → $-2+12i$；(b) 輸入 $(1-2i)(3+4i)$ 得 $11$，虛部 $-2$ → $11-2i$；(c) 輸入 $(2+i)\\div(7+i)$ 得 $0.3$（即 $\\frac{3}{10}$），虛部 $0.1$（即 $\\frac{1}{10}$）→ $\\frac{3}{10}+\\frac{1}{10}i$。三小題十秒內核完。（卷一仍要寫出手算步驟才得分。）",
        "en": "An approved Casio fx-50FH II can work with complex numbers directly: press [MODE] [2] for CMPLX mode (the screen shows CMPLX), type the imaginary unit with the [ENG] key, and return with [MODE] [1]. For (a) enter (4+5i)-(6-7i): the screen gives -2 and SHIFT = (Re to Im) shows the imaginary part 12, so the answer is -2+12i; for (b) (1-2i)(3+4i) gives 11 and -2i; for (c) (2+i) divided by (7+i) gives 0.3 and 0.1i, that is three tenths plus one tenth i. Marks in Paper 1 still come from the written steps."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en02-q7",
     "type": "long",
     "topic": "en02",
     "unit": 6,
     "subtopic": "complex-numbers",
     "difficulty": 2,
     "code": "EN2-Q7",
     "source": "Endeavour Lesson 2 Q17 · EPH WS05 Q17（複數的實部與虛部）",
     "stem": {
      "en": "Find the real part and the imaginary part of $5-\\frac{4+3i}{i}$.",
      "zh": "求 $5-\\frac{4+3i}{i}$ 的實部與虛部。"
     },
     "kind": "short",
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 先處理分數：分子分母同乘 $-i$",
         "en": "Step 1 · Deal with the fraction: multiply by minus i"
        },
        "math": "\\frac{4+3i}{i}=\\frac{(4+3i)(-i)}{i(-i)}\n=\\frac{-4i-3i^{2}}{1}",
        "zh": "分母只有 $i$：分子分母同乘 $-i$，因為 $i\\times(-i)=-i^{2}=1$，分母立即變成 $1$。",
        "en": "The denominator is just i, so multiply top and bottom by minus i: the denominator becomes 1 because i times minus i is 1.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 用 $i^{2}=-1$ 化簡這一部分",
         "en": "Step 2 · Simplify using i squared equal to minus one"
        },
        "math": "=-4i-3(-1)\n=3-4i",
        "zh": "$-3i^{2}=-3(-1)=+3$，所以 $\\frac{4+3i}{i}=3-4i$。",
        "en": "Minus 3 i squared becomes plus 3, so the fraction equals 3 - 4i.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 代回原式，讀出實部與虛部",
         "en": "Step 3 · Substitute back and read off both parts"
        },
        "math": "5-\\frac{4+3i}{i}=5-(3-4i)\n=5-3+4i\n=2+4i",
        "zh": "$5-(3-4i)$：減號要分配給括號內的每一項，$-(-4i)=+4i$。結果是 $2+4i$，所以實部是 $2$、虛部是 $4$ —— 虛部只取 $i$ 前面的係數（連符號），不包含 $i$ 本身。",
        "en": "The minus sign must be distributed over both terms: 5 - 3 + 4i = 2 + 4i. The real part is 2 and the imaginary part is 4 — the imaginary part is the coefficient of i on its own, with its sign.",
        "marking": "(1A)",
        "highlight": [
         "\\text{real part}=2",
         "\\text{imaginary part}=4"
        ]
       }
      ],
      "traps": [
       {
        "label": "忘了減號分配",
        "labelEn": "Forgetting to distribute the minus sign",
        "zh": "$5-(3-4i)$ 寫成 $5-3-4i=2-4i$，虛部變成 $-4$（符號錯）。",
        "en": "Writing 5 - 3 - 4i gives 2 - 4i, so the imaginary part has the wrong sign."
       },
       {
        "label": "問實部答了虛部",
        "labelEn": "Answering the imaginary part when the real part was asked",
        "zh": "題目同時問 real part 與 imaginary part，兩個都要寫（$2$ 與 $4$）。只寫一個不會得分。",
        "en": "The question asks for both parts, so both 2 and 4 must be stated; a single value scores nothing."
       },
       {
        "label": "分母乘錯",
        "labelEn": "Choosing the wrong multiplier",
        "zh": "乘 $i$ 也可以：$\\frac{(4+3i)i}{i\\cdot i}=\\frac{4i+3i^{2}}{-1}=\\frac{-3+4i}{-1}=3-4i$，但分母是 $-1$，要小心符號。",
        "en": "Multiplying by i also works but leaves minus 1 in the denominator, so the signs need extra care."
       }
      ],
      "tip": {
       "zh": "分母只有 $i$ 時，分子分母同乘 $-i$ 就令分母變成實數；乘 $i$ 也可以，但分母變成 $-1$。最後代回原式要小心減號分配。",
       "en": "When the denominator is just i, multiply top and bottom by minus i to make it real; multiplying by i works too but leaves minus 1 below. Watch the minus sign when substituting back."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：用 $i$ 的定義直接核對",
         "en": "Check: verify directly from the definition of i"
        },
        "zh": "因為 $\\frac{1}{i}=-i$，所以 $\\frac{4+3i}{i}=(4+3i)(-i)=-4i-3i^{2}=3-4i$，與第 2 步相同；再用計算機複數模式輸入 $5-(4+3i)\\div i$ 應得 $2+4i$。",
        "en": "Since one over i is minus i, the fraction equals 3 - 4i exactly as above; a calculator in complex mode returns 2 + 4i for the whole expression."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en02-q8",
     "type": "long",
     "topic": "en02",
     "unit": 6,
     "subtopic": "complex-numbers",
     "difficulty": 3,
     "code": "EN2-Q8",
     "source": "Endeavour Lesson 2 Q18 · EPH WS05 Q18（複數：已知是實數求 k）",
     "stem": {
      "en": "If $k$ and $\\frac{k-i}{1+2i}$ are real numbers, find $k$.",
      "zh": "若 $k$ 與 $\\frac{k-i}{1+2i}$ 都是實數，求 $k$。"
     },
     "kind": "short",
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 分子分母同乘分母的共軛 $1-2i$",
         "en": "Step 1 · Multiply top and bottom by the conjugate 1 - 2i"
        },
        "math": "\\frac{k-i}{1+2i}=\\frac{(k-i)(1-2i)}{(1+2i)(1-2i)}",
        "zh": "分母 $1+2i$ 的共軛是 $1-2i$。乘完之後分母會變成實數 $1^{2}+2^{2}=5$，分子不要漏乘任何一項。",
        "en": "The conjugate of 1 + 2i is 1 - 2i. The denominator then becomes 1 + 4, which is 5, and every numerator term must be multiplied.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 化簡成 $a+bi$",
         "en": "Step 2 · Simplify into the form a + bi"
        },
        "math": "=\\frac{k-2ki-i+2i^{2}}{5}\n=\\frac{(k-2)-(2k+1)i}{5}",
        "zh": "分子 $(k-i)(1-2i)=k-2ki-i+2i^{2}=(k-2)-(2k+1)i$。所以實部是 $\\frac{k-2}{5}$、虛部是 $-\\frac{2k+1}{5}$。",
        "en": "Expanding the numerator gives k - 2 minus 2k + 1 times i, all divided by 5, so the imaginary part is minus 2k + 1 over 5.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 「是實數」⇒ 虛部 $=0$",
         "en": "Step 3 · Being real means the imaginary part is zero"
        },
        "math": "-\\frac{2k+1}{5}=0\n\\Rightarrow -(2k+1)=0\n\\Rightarrow 2k+1=0\n\\Rightarrow 2k=-1\n\\Rightarrow k=-\\frac{1}{2}",
        "zh": "題目說這個複數「是實數」，即虛部 $=0$。由標準形 $\\frac{k-2}{5}-\\frac{2k+1}{5}i$ 可見虛部是 $-\\frac{2k+1}{5}$（連負號）。令它等於 $0$：兩邊同乘 $-5$ 得 $2k+1=0$，解得 $k=-\\frac{1}{2}$。這裡右邊是 $0$，負號最後會消去；但每次都把虛部連負號寫出來，遇到右邊不是 $0$ 的題目（例如虛部 $=3$）就不會漏符號。",
        "en": "The number is real, so its imaginary part is 0. In the standard form the imaginary part is -(2k + 1)/5, negative sign included. Setting it to zero and multiplying both sides by -5 gives 2k + 1 = 0, hence k = -1/2. The sign disappears here only because the right-hand side is zero; writing it every time stops sign errors when the right-hand side is not zero.",
        "marking": "(1A)",
        "highlight": [
         "k=-\\frac{1}{2}"
        ]
       }
      ],
      "traps": [
       {
        "label": "分母符號：$(1+2i)(1-2i)=5$",
        "labelEn": "The denominator is 5, not -3",
        "zh": "$(1+2i)(1-2i)=1^{2}+2^{2}=5$（因為 $-i^{2}=+1$）；寫成 $1-4$ 是最常見的錯。",
        "en": "The product equals 1 plus 4, which is 5, because minus i squared is plus 1; writing 1 - 4 is the usual mistake."
       },
       {
        "label": "令實部 $=0$（純虛數）",
        "labelEn": "Setting the real part to zero instead",
        "zh": "「是實數」＝虛部 $=0$；若令實部 $=0$（那是「純虛數」的條件）就會得 $k=2$，完全相反。",
        "en": "Being real means the imaginary part is zero; setting the real part to zero describes a purely imaginary number and gives k = 2 instead."
       },
       {
        "label": "分子符號錯",
        "labelEn": "Sign error in the numerator",
        "zh": "$(k-i)(1-2i)=k-2ki-i+2i^{2}$：最後一項是 $+2i^{2}=-2$，不是 $+2$。符號錯就會得 $(k+2)-\\cdots$。",
        "en": "The last term of the expansion is plus 2 i squared, which is minus 2 and not plus 2."
       }
      ],
      "tip": {
       "zh": "「是實數」＝虛部 $=0$；「是純虛數」＝實部 $=0$。分母有 $i$ 就先乘共軛化簡，再讀虛部。",
       "en": "Being real means the imaginary part is zero, while being purely imaginary means the real part is zero. Multiply by the conjugate first, then read off the imaginary part."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：把 $k$ 代回，用計算機複數模式核對",
         "en": "Check: substitute k back and use complex mode"
        },
        "zh": "把 $k=-\\frac{1}{2}$ 代回：$\\frac{-0.5-i}{1+2i}$ 用計算機複數模式計算，結果是 $-0.5+0i$（虛部為 $0$），確實是實數 ✓。",
        "en": "With k equal to minus one half, a calculator in complex mode gives minus 0.5 with zero imaginary part, confirming that the number is real."
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
      "id": "eph-en02-m2",
      "type": "mc",
      "topic": "en02",
      "unit": 6,
      "subtopic": "complex-numbers",
      "difficulty": 2,
      "code": "EN2-M2",
      "source": "Endeavour Lesson 2 Q31 · EPH WS05 Q31 · [HKDSE 2013 Paper 2 Q36]",
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
          "zh": "第 1 步 · 化簡每個 $i$ 的冪（除以 4 看餘數）",
          "en": "Step 1 · Reduce every power of i using the remainder"
         },
         "math": "i^{18}=i^{16}\\cdot i^{2}=1\\cdot(-1)=-1\ni^{19}=-i,\\ i^{20}=1,\\ i^{21}=i",
         "zh": "$18\\div4$ 餘 $2$ → $-1$；$19$ 餘 $3$ → $-i$；$20$ 整除 → $1$；$21$ 餘 $1$ → $i$。",
         "en": "The remainders of 18, 19, 20 and 21 on division by 4 give minus 1, minus i, 1 and i respectively.",
         "marking": null
        },
        {
         "title": {
          "zh": "第 2 步 · 代入並合併同類項",
          "en": "Step 2 · Substitute and collect like terms"
         },
         "math": "=3(-1)+2(-i)-3(1)-5(i)\n=-3-2i-3-5i\n=-6-7i",
         "zh": "實部 $-3-3=-6$、虛部 $-2i-5i=-7i$，所以原式 $=-6-7i$。",
         "en": "The real parts give minus 6 and the imaginary parts give minus 7 i, so the value is minus 6 minus 7 i.",
         "marking": null
        },
        {
         "title": {
          "zh": "第 3 步 · 讀出實部",
          "en": "Step 3 · Read off the real part"
         },
         "math": "\\text{real part}=-6",
         "zh": "題目問 real part：$-6$，答案 B。（$-7$ 是這個數的虛部 —— 選項 A 就是為此而設的陷阱。）",
         "en": "The real part is minus 6, so the answer is B; minus 7 is the imaginary part and is offered as a trap.",
         "marking": null,
         "highlight": [
          "-6"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$-7$ 是化簡結果 $-6-7i$ 的虛部；題目問實部，答了虛部就中了這個陷阱。",
         "en": "Minus 7 is the imaginary part of the simplified value; the question asks for the real part."
        },
        {
         "opt": "C",
         "zh": "$0$ 來自把 $i^{4}$ 誤記成 $-1$：那樣 $i^{20}=(i^{4})^{5}=-1$，實部變成 $-3-3(-1)=0$。$i^{4}$ 正確是 $1$。",
         "en": "This comes from remembering i to the fourth as minus 1, so that i to the twentieth is also treated as minus 1."
        },
        {
         "opt": "D",
         "zh": "$6$ 是實部的符號全部倒轉（把 $i^{18}=-1$ 當 $+1$、$i^{20}=1$ 當 $-1$）。",
         "en": "Six appears when both real contributions have their signs reversed."
        }
       ],
       "tip": {
        "zh": "$i$ 的冪：除以 4 看餘數。化簡成 $a+bi$ 之後看清楚題目問實部還是虛部 —— 兩個答案通常同時出現在選項裡。",
        "en": "Reduce powers of i by their remainder on division by 4, then check whether the question wants the real or the imaginary part; both usually appear among the options."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算法：先看 $i$ 的週期，再核對總和",
          "en": "Check: use the period of i and verify the total"
         },
         "zh": "$i$ 的冪每 4 個一循環，所以 $i^{18}=i^{2}$、$i^{19}=i^{3}$、$i^{20}=i^{4}$、$i^{21}=i^{1}$：原式 $=3i^{2}+2i^{3}-3i^{4}-5i=3(-1)+2(-i)-3(1)-5i=-6-7i$ ✓。",
         "en": "Since powers of i repeat with period 4, the expression can be rewritten with exponents 2, 3, 4 and 1, which again gives minus 6 minus 7 i."
        }
       ]
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-en02-m3",
      "type": "mc",
      "topic": "en02",
      "unit": 6,
      "subtopic": "complex-numbers",
      "difficulty": 2,
      "code": "EN2-M3",
      "source": "Endeavour Lesson 2 Q32 · EPH WS05 Q32 · [HKDSE 2018 Paper 2 Q37]",
      "stem": {
       "en": "The imaginary part of $\\frac{9i^{5}+8i^{6}+3i^{7}-8i^{8}-8i^{9}}{1-i}$ is",
       "zh": "$\\frac{9i^{5}+8i^{6}+3i^{7}-8i^{8}-8i^{9}}{1-i}$ 的虛部是"
      },
      "options": {
       "A": "$-9$",
       "B": "$-7$",
       "C": "$7$",
       "D": "$9$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 化簡分子的每個 $i$ 的冪",
          "en": "Step 1 · Reduce every power of i in the numerator"
         },
         "math": "9i^{5}=9i,\\ 8i^{6}=-8,\\ 3i^{7}=-3i\n8i^{8}=8,\\ 8i^{9}=8i",
         "zh": "餘數法：$5$ 餘 $1$ → $i$；$6$ 餘 $2$ → $-1$；$7$ 餘 $3$ → $-i$；$8$ 整除 → $1$；$9$ 餘 $1$ → $i$。",
         "en": "The remainders 1, 2, 3, 0 and 1 give i, minus 1, minus i, 1 and i in turn.",
         "marking": null
        },
        {
         "title": {
          "zh": "第 2 步 · 合併分子",
          "en": "Step 2 · Combine the numerator"
         },
         "math": "9i-8-3i-8-8i\n=(-8-8)+(9-3-8)i\n=-16-2i",
         "zh": "實部 $-8-8=-16$；虛部 $9-3-8=-2$，所以分子是 $-16-2i$。",
         "en": "The real parts give minus 16 and the imaginary parts give minus 2, so the numerator is minus 16 minus 2 i.",
         "marking": null
        },
        {
         "title": {
          "zh": "第 3 步 · 除以 $1-i$：分子分母同乘共軛",
          "en": "Step 3 · Divide by 1 - i using its conjugate"
         },
         "math": "\\frac{-16-2i}{1-i}=\\frac{(-16-2i)(1+i)}{(1-i)(1+i)}",
         "zh": "分母 $(1-i)(1+i)=1^{2}+1^{2}=2$（$-i^{2}=+1$），分子乘 $1+i$。",
         "en": "The denominator becomes 2, and the numerator is multiplied by 1 + i.",
         "marking": null
        },
        {
         "title": {
          "zh": "第 4 步 · 化簡並讀出虛部",
          "en": "Step 4 · Simplify and read off the imaginary part"
         },
         "math": "=\\frac{-14-18i}{2}\n=-7-9i",
         "zh": "分子 $(-16-2i)(1+i)=-16-16i-2i-2i^{2}=-14-18i$，除以 $2$ 得 $-7-9i$，虛部是 $-9$，答案 A。",
         "en": "Expanding gives minus 14 minus 18 i, which reduces to minus 7 minus 9 i, so the imaginary part is minus 9.",
         "marking": null,
         "highlight": [
          "-9"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$-7$ 是 $-7-9i$ 的實部；題目問虛部，答了實部就錯了。",
         "en": "Minus 7 is the real part of the final value, but the question asks for the imaginary part."
        },
        {
         "opt": "D",
         "zh": "$9$ 是符號錯：除完是 $-7-9i$，虛部是 $-9$，不是 $+9$。",
         "en": "The imaginary part keeps its minus sign after the division."
        },
        {
         "opt": "C",
         "zh": "$7$ 是把實部的符號也當成虛部（同一類符號錯，把 $-7-9i$ 看成 $7+9i$ 再讀虛部）。",
         "en": "Seven arises from flipping both signs of the final value before reading the imaginary part."
        }
       ],
       "tip": {
        "zh": "先化簡分子的每個 $i$ 的冪，合併成 $a+bi$，最後才做除法（乘共軛）。次序清楚就不會亂。",
        "en": "Reduce every power of i first, combine them into a single complex number, and only then divide by multiplying by the conjugate."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算法：把 $1-i$ 的倒數記成 $\\frac{1+i}{2}$",
          "en": "Check: remember that one over 1 - i is (1 + i) over 2"
         },
         "zh": "$\\frac{1}{1-i}=\\frac{1+i}{(1-i)(1+i)}=\\frac{1+i}{2}$，所以 $-16-2i$ 除以 $1-i$ 就是乘 $\\frac{1+i}{2}$：$(-16-2i)(1+i)=-14-18i$，再除 $2$ 得 $-7-9i$ ✓。",
         "en": "Writing the reciprocal of 1 - i as (1 + i) over 2 turns the division into a multiplication, which gives the same result minus 7 minus 9 i."
        }
       ]
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-en02-m1",
      "type": "mc",
      "topic": "en02",
      "unit": 6,
      "subtopic": "complex-numbers",
      "difficulty": 3,
      "code": "EN2-M1",
      "source": "Endeavour Lesson 2 Q30 · EPH WS05 Q30 · [HKDSE 2023 Paper 2 Q34]",
      "stem": {
       "en": "If $k$ is a real number, then the imaginary part of $\\frac{i}{k-2i}-\\frac{2}{k+2i}$ is",
       "zh": "若 $k$ 是實數，則 $\\frac{i}{k-2i}-\\frac{2}{k+2i}$ 的虛部是"
      },
      "options": {
       "A": "$\\frac{k-4}{k^{2}-4}$",
       "B": "$\\frac{k+4}{k^{2}+4}$",
       "C": "$\\frac{2k-2}{k^{2}-4}$",
       "D": "$\\frac{2k+2}{k^{2}+4}$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 第一項：分子分母同乘 $k+2i$",
          "en": "Step 1 · First term: multiply by k + 2i"
         },
         "math": "\\frac{i}{k-2i}=\\frac{i(k+2i)}{(k-2i)(k+2i)}\n=\\frac{-2+ki}{k^{2}+4}",
         "zh": "分母 $(k-2i)(k+2i)=k^{2}-(2i)^{2}=k^{2}+4$（$-i^{2}=+1$，所以是 $+4$）。分子 $i(k+2i)=ki+2i^{2}=-2+ki$。",
         "en": "The denominator becomes k squared plus 4, because minus i squared is plus 1. The numerator is k i minus 2.",
         "marking": null
        },
        {
         "title": {
          "zh": "第 2 步 · 第二項：分子分母同乘 $k-2i$",
          "en": "Step 2 · Second term: multiply by k - 2i"
         },
         "math": "\\frac{2}{k+2i}=\\frac{2(k-2i)}{k^{2}+4}\n=\\frac{2k-4i}{k^{2}+4}",
         "zh": "分母同樣是 $k^{2}+4$（兩項的分母相同，之後可以直接相減）；分子 $2(k-2i)=2k-4i$。",
         "en": "The denominator is the same k squared plus 4, so the two fractions can be subtracted directly; the numerator is 2k - 4i.",
         "marking": null
        },
        {
         "title": {
          "zh": "第 3 步 · 相減並讀出虛部",
          "en": "Step 3 · Subtract and read off the imaginary part"
         },
         "math": "\\frac{(-2+ki)-(2k-4i)}{k^{2}+4}\n=\\frac{(-2-2k)+(k+4)i}{k^{2}+4}",
         "zh": "實部 $-2-2k$、虛部 $k+4$，所以虛部是 $\\frac{k+4}{k^{2}+4}$，答案 B。",
         "en": "The real part is minus 2 minus 2k and the imaginary part is k + 4, so the answer is option B.",
         "marking": null,
         "highlight": [
          "\\frac{k+4}{k^{2}+4}"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "分母寫成 $k^{2}-4$：$(k-2i)(k+2i)=k^{2}-4i^{2}=k^{2}+4$（$-i^{2}=+1$）。分母符號錯，答案就一定是錯的。",
         "en": "The denominator is written as k squared minus 4, but minus 4 i squared is plus 4."
        },
        {
         "opt": "C",
         "zh": "$2k-2$ 是相減時沒有把第二項整個減去：應是 $(-2)-(2k)=-2-2k$。",
         "en": "The whole second numerator must be subtracted, giving minus 2 minus 2k."
        },
        {
         "opt": "D",
         "zh": "分母對，但分子符號錯：$-2-2k$ 寫成了 $2k+2$，虛部跟着錯。",
         "en": "The denominator is right but the real part is written with the opposite sign."
        }
       ],
       "tip": {
        "zh": "分母有 $i$ 的加減題：每一項各自乘共軛（分母都是 $a^{2}+b^{2}$），合併時實部、虛部分開整理，最後才讀虛部。",
        "en": "For sums of fractions with i below: multiply each term by its conjugate so both denominators become a squared plus b squared, then combine the real and imaginary parts separately."
       },
       "alt": [
        {
         "name": {
          "zh": "卷二保底：質數代入法（避開 $k=0$、$k=1$）",
          "en": "Paper 2 safety net: substitute a prime (avoid 0 and 1)"
         },
         "zh": "$k=0$ 會令選項巧合地相同（A、B 都得 $1$），所以要取一個「不靚」的數。設 $k=3$：原式 $=\\frac{i}{3-2i}-\\frac{2}{3+2i}$，虛部應該是 $\\frac{3+4}{3^{2}+4}=\\frac{7}{13}$。把 $k=3$ 逐個代入選項：A 得 $\\frac{3-4}{9-4}=-\\frac{1}{5}$、B 得 $\\frac{3+4}{9+4}=\\frac{7}{13}$、C 得 $\\frac{6-2}{9-4}=\\frac{4}{5}$、D 得 $\\frac{6+2}{9+4}=\\frac{8}{13}$ —— 只有 B 吻合。",
         "en": "With k = 0 the options coincide (A and B both give 1), so pick a value that separates them. Put k = 3: the expression is i/(3-2i) - 2/(3+2i), whose imaginary part should be 7/13. Substituting k = 3 into each option gives A = -1/5, B = 7/13, C = 4/5 and D = 8/13, so only B matches."
        }
       ]
      },
      "answer": "B",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-en02-m4",
      "type": "mc",
      "topic": "en02",
      "unit": 6,
      "subtopic": "complex-numbers",
      "difficulty": 3,
      "code": "EN2-M4",
      "source": "Endeavour Lesson 2 Q33 · EPH WS05 Q33 · [HKDSE 2019 Paper 2 Q34]",
      "stem": {
       "en": "If $a$ is a real number, then the real part of $\\frac{8-i^{13}}{a-i}-i^{18}$ is",
       "zh": "若 $a$ 是實數，則 $\\frac{8-i^{13}}{a-i}-i^{18}$ 的實部是"
      },
      "options": {
       "A": "$\\frac{8a+1}{a^{2}-1}$",
       "B": "$\\frac{8a+1}{a^{2}+1}$",
       "C": "$\\frac{a^{2}+8a+2}{a^{2}-1}$",
       "D": "$\\frac{a^{2}+8a+2}{a^{2}+1}$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 先把 $i^{13}$、$i^{18}$ 化簡",
          "en": "Step 1 · Reduce i to the 13th and i to the 18th"
         },
         "math": "i^{13}=i,\\ i^{18}=-1\n\\frac{8-i^{13}}{a-i}-i^{18}=\\frac{8-i}{a-i}+1",
         "zh": "$13\\div4$ 餘 $1$ → $i$；$18\\div4$ 餘 $2$ → $-1$。所以 $-i^{18}=-(-1)=+1$，千萬不要漏了這一項。",
         "en": "The first remainder gives i and the second gives minus 1, so minus i to the 18th becomes plus 1, which must not be dropped.",
         "marking": null
        },
        {
         "title": {
          "zh": "第 2 步 · 分子分母同乘 $a+i$",
          "en": "Step 2 · Multiply top and bottom by a + i"
         },
         "math": "\\frac{8-i}{a-i}=\\frac{(8-i)(a+i)}{(a-i)(a+i)}\n=\\frac{8a+1+(8-a)i}{a^{2}+1}",
         "zh": "分母 $(a-i)(a+i)=a^{2}+1$（$-i^{2}=+1$）。分子 $(8-i)(a+i)=8a+8i-ai-i^{2}=8a+1+(8-a)i$。",
         "en": "The denominator becomes a squared plus 1, and expanding the numerator gives 8a + 1 plus (8 - a) times i.",
         "marking": null
        },
        {
         "title": {
          "zh": "第 3 步 · 加上那個 $1$，讀出實部",
          "en": "Step 3 · Add the plus 1 and read off the real part"
         },
         "math": "=\\frac{8a+1+(8-a)i}{a^{2}+1}+\\frac{a^{2}+1}{a^{2}+1}\n=\\frac{a^{2}+8a+2+(8-a)i}{a^{2}+1}",
         "zh": "把整數 $1$ 寫成 $\\frac{a^{2}+1}{a^{2}+1}$，分子相加：實部 $8a+1+a^{2}+1=a^{2}+8a+2$。所以實部是 $\\frac{a^{2}+8a+2}{a^{2}+1}$，答案 D。",
         "en": "Writing the integer 1 over the same denominator lets the numerators be added, giving a real part of a squared plus 8a plus 2 over a squared plus 1.",
         "marking": null,
         "highlight": [
          "\\frac{a^{2}+8a+2}{a^{2}+1}"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$\\frac{8a+1}{a^{2}+1}$ 是漏了 $-i^{18}=+1$ 那一項：只做完除法就選答案。",
         "en": "This omits the plus 1 that comes from minus i to the 18th."
        },
        {
         "opt": "A",
         "zh": "$\\frac{8a+1}{a^{2}-1}$ 同時犯了兩個錯：漏了 $+1$，又把 $(a-i)(a+i)$ 寫成 $a^{2}-1$（正確是 $a^{2}+1$）。",
         "en": "This drops the plus 1 and also uses a squared minus 1 as the denominator."
        },
        {
         "opt": "C",
         "zh": "$\\frac{a^{2}+8a+2}{a^{2}-1}$ 是分母符號錯：$-i^{2}=+1$，所以 $(a-i)(a+i)=a^{2}+1$。",
         "en": "The numerator is right here but the denominator has the wrong sign."
        }
       ],
       "tip": {
        "zh": "先化簡 $i$ 的冪（$-i^{18}=+1$ 也要寫出來），再做除法；把整數寫成分數（分子分母同乘 $a^{2}+1$）就不會漏掉那一項。",
        "en": "Reduce the powers of i first, then divide; writing the integer as a fraction over the same denominator makes sure it is not forgotten."
       },
       "alt": [
        {
         "name": {
          "zh": "卷二保底：質數代入法（$a=1$ 會令分母為 0）",
          "en": "Paper 2 safety net: substitute a prime (a = 1 makes denominators zero)"
         },
         "zh": "$a=1$ 會令選項 A、C 的分母變成 $0$，$a=0$ 又容易看漏符號 —— 取 $a=2$ 最穩。先化簡 $i^{13}=i$、$-i^{18}=-(-1)=+1$，原式成為 $\\frac{8-i}{2-i}+1$，實部應該是 $\\frac{4+16+2}{4+1}=\\frac{22}{5}=4.4$。把 $a=2$ 逐個代入選項：A 得 $\\frac{17}{3}$、B 得 $\\frac{17}{5}=3.4$、C 得 $\\frac{22}{3}$、D 得 $\\frac{22}{5}=4.4$ —— 只有 D 吻合，穩奪此分。",
         "en": "Putting a = 1 makes the denominators of options A and C zero, and a = 0 hides sign errors, so take a = 2. With i^13 = i and -i^18 = +1 the expression becomes (8-i)/(2-i) + 1, whose real part should be 22/5 = 4.4. At a = 2 the four options give A = 17/3, B = 17/5, C = 22/3 and D = 22/5, so only D matches."
        }
       ]
      },
      "answer": "D",
      "verify": "checked"
     },
     {
      "id": "eph-en02-m5",
      "type": "mc",
      "topic": "en02",
      "unit": 5,
      "subtopic": "quadratic-equations",
      "difficulty": 2,
      "code": "EN2-M5",
      "source": "Lesson 2 課後針對練習（自編）· 判別式：無實根 → 求 k 的範圍",
      "stem": {
       "en": "Let $k$ be a constant. If the quadratic equation $x^{2}+4x+k=0$ has no real roots, find the range of values of $k$.",
       "zh": "設 $k$ 為常數。若二次方程 $x^{2}+4x+k=0$ 無實根，求 $k$ 的取值範圍。"
      },
      "options": {
       "A": "$k<4$",
       "B": "$k>4$",
       "C": "$k\\le 4$",
       "D": "$k\\ge 4$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 無實根 ⇒ $\\Delta<0$",
          "en": "Step 1 · No real roots means a negative discriminant"
         },
         "math": "\\Delta=4^{2}-4(1)(k)\n=16-4k<0",
         "zh": "「無實根」是嚴格小於 $0$（沒有等號）。$a=1$、$b=4$、$c=k$，代入得 $16-4k<0$。",
         "en": "No real roots means the discriminant is strictly negative; with a = 1, b = 4 and c = k it becomes 16 - 4k.",
         "marking": null
        },
        {
         "title": {
          "zh": "第 2 步 · 解不等式，寫成範圍",
          "en": "Step 2 · Solve the inequality and state the range"
         },
         "math": "16-4k<0\n\\Rightarrow 16<4k\n\\Rightarrow k>4",
         "zh": "把 $-4k$ 搬去右邊得 $16<4k$，兩邊同除 $4$（正數，不等號不變）得 $k>4$，答案 B。",
         "en": "Moving the negative term across gives 16 is less than 4k, so k is greater than 4 and the answer is B.",
         "marking": null,
         "highlight": [
          "k>4"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$k<4$ 是不等號方向反了：把 $16-4k<0$ 兩邊同除 $-4$ 而沒有反號就會得這個答案。",
         "en": "This is the result of dividing by a negative number without reversing the inequality."
        },
        {
         "opt": "C",
         "zh": "$k\\le 4$ 是把「無實根」當成「有實根」：有實根是 $\\Delta\\ge 0$，即 $k\\le 4$。",
         "en": "This treats the question as having real roots, where the discriminant is at least zero."
        },
        {
         "opt": "D",
         "zh": "$k\\ge 4$ 是同一種混淆再加上方向錯。",
         "en": "This combines the wrong condition with the wrong direction."
        }
       ],
       "tip": {
        "zh": "「無實根」$\\Delta<0$、「有實根」$\\Delta\\ge 0$，兩者剛好相反；解不等式時把負項搬去另一邊就不會反號。",
        "en": "No real roots needs a negative discriminant while real roots allow the equality; move negative terms across instead of dividing by them."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算法：範圍內外各取一個數核對",
          "en": "Check: test one value inside and one outside"
         },
         "zh": "$k=5$（範圍內）：$x^{2}+4x+5=0$，$\\Delta=16-20=-4<0$ ✓ 無實根；$k=3$（範圍外）：$x^{2}+4x+3=0$，$\\Delta=16-12=4>0$ ✗ 有實根。",
         "en": "With k = 5 the discriminant is negative, and with k = 3 it is positive, so the boundary at 4 is confirmed."
        }
       ]
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-en02-m6",
      "type": "mc",
      "topic": "en02",
      "unit": 6,
      "subtopic": "complex-numbers",
      "difficulty": 1,
      "code": "EN2-M6",
      "source": "Lesson 2 課後針對練習（自編）· 複數：展開後讀虛部（分清實部與虛部）",
      "stem": {
       "en": "The imaginary part of $(3-2i)(1+i)$ is",
       "zh": "$(3-2i)(1+i)$ 的虛部是"
      },
      "options": {
       "A": "$3$",
       "B": "$1$",
       "C": "$5$",
       "D": "$5+i$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 展開，四項都要寫",
          "en": "Step 1 · Expand: all four products must appear"
         },
         "math": "(3-2i)(1+i)\n=3+3i-2i-2i^{2}",
         "zh": "逐項相乘：$3\\times1=3$、$3\\times i=3i$、$-2i\\times1=-2i$、$-2i\\times i=-2i^{2}$。",
         "en": "Multiply term by term: 3, 3i, minus 2i and minus 2 i squared.",
         "marking": null
        },
        {
         "title": {
          "zh": "第 2 步 · 用 $i^{2}=-1$ 化簡成 $a+bi$",
          "en": "Step 2 · Use i squared equal to minus one"
         },
         "math": "=3+i-2(-1)\n=5+i",
         "zh": "$-2i^{2}=-2(-1)=+2$，所以實部 $3+2=5$、虛部 $3-2=1$，結果是 $5+i$。",
         "en": "Minus 2 i squared becomes plus 2, so the value is 5 + i with real part 5 and imaginary part 1.",
         "marking": null
        },
        {
         "title": {
          "zh": "第 3 步 · 讀出虛部",
          "en": "Step 3 · Read off the imaginary part"
         },
         "math": "\\text{imaginary part}=1",
         "zh": "虛部是 $i$ 前面的數：$1$，答案 B。$5$ 是實部（選項 C 就是這個陷阱）。",
         "en": "The imaginary part is the number in front of i, which is 1, so the answer is B; 5 is the real part.",
         "marking": null,
         "highlight": [
          "1"
         ]
        }
       ],
       "traps": [
        {
         "opt": "C",
         "zh": "$5$ 是實部；題目問 imaginary part（虛部）。",
         "en": "Five is the real part, but the question asks for the imaginary part."
        },
        {
         "opt": "D",
         "zh": "$5+i$ 是整個複數：虛部是一個實數（$i$ 的係數），不是一整塊 $5+i$。",
         "en": "The imaginary part is a single real number, not the whole complex number."
        },
        {
         "opt": "A",
         "zh": "$3$ 是漏了 $-2i\\times1=-2i$ 那一項：虛部只餘 $3i$。展開時四項都要寫。",
         "en": "Three comes from missing the term minus 2i, so only 3i is left before simplification."
        }
       ],
       "tip": {
        "zh": "展開 → 用 $i^{2}=-1$ 化簡 → 寫成 $a+bi$，最後才讀虛部；題目問實部還是虛部要看清。",
        "en": "Expand, replace i squared by minus 1, tidy into a + bi, and only then read the part that is asked for."
       },
       "alt": [
        {
         "name": {
          "zh": "計算機保底：CMPLX 模式 5 秒直出虛部",
          "en": "Calculator safety net: read the imaginary part in CMPLX mode"
         },
         "zh": "卷二複數四則運算不用手寫展開：按【MODE】【2】進入 CMPLX 模式，輸入 $(3-2i)(1+i)$ 按【=】先顯示實部 $5$，再按【SHIFT】【=】（Re⇔Im）顯示虛部 $1$ —— 即時排除干擾項 $5$，選 B。",
         "en": "No need to expand by hand in Paper 2: press [MODE] [2] for CMPLX mode, enter (3-2i)(1+i) and press = to see the real part 5, then SHIFT = (Re to Im) to read the imaginary part 1, which rules out the distractor 5 and gives B."
        }
       ]
      },
      "answer": "B",
      "verify": "checked"
     }
    ]
   ]
  }
 ],
 "stats": {
  "mc": 6,
  "long": 8,
  "cards": 4,
  "pages": 2
 }
};
