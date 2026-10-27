// 自動生成，請勿手改（來源：data/learn/；重新生成：python tools/make_learn_data.py）
window.LEARN_TOPIC_EN04 = {
 "id": "en04",
 "stage": 1,
 "unit": 4,
 "subtopic": "polynomials",
 "source": "S.K.H. Bishop Baker Secondary School · S.5 After-School Tutorial · Endeavour Lesson 4（EPH WS06 More about Polynomials）",
 "name": {
  "zh": "Lesson 4 · 多項式（恆等式、長除法、餘式與因式定理）",
  "en": "Lesson 4 · More about polynomials (identities, division, remainder & factor theorems)"
 },
 "intro": {
  "zh": "這一節課堂討論多項式的五類題目：\n① 多項式的加減乘與恆等式（比較係數）；\n② 長除法與除法算式 $f(x)=g(x)Q(x)+R(x)$；\n③ 餘式定理與因式定理（求餘式、求未知數、分解三次式）；\n④ 三次方程的根：幾時是有理根、無理根、無實根；\n⑤ H.C.F.／L.C.M. 與有理函數化簡。\n9 條結構題照卷一格式寫上 1M／1A，另有 8 題卷二 MC，做完可以逐分對。",
  "en": "This lesson covers five kinds of polynomial questions:\n(1) adding, subtracting and multiplying polynomials, and identities solved by comparing coefficients;\n(2) long division and the division algorithm $f(x)=g(x)Q(x)+R(x)$;\n(3) the remainder theorem and the factor theorem: finding a remainder, finding an unknown, factorising a cubic;\n(4) the roots of a cubic equation: when they are rational, irrational or not real;\n(5) H.C.F. and L.C.M. of polynomials, and simplifying rational functions.\nThe 9 structured questions are in Paper 1 format with 1M / 1A marks shown, followed by 8 Paper 2 multiple-choice questions."
 },
 "cmdHints": [
  {
   "en": "$\\equiv$ ... for all values of $x$",
   "zh": "恆等式 → 左右同類項係數相等（不要只代一個數）"
  },
  {
   "en": "find the quotient and the remainder",
   "zh": "長除法：缺項補 $0x$，相減要整條變號"
  },
  {
   "en": "the remainder is ... when divided by $x-a$",
   "zh": "餘式定理 → 代 $x=a$（不是 $-a$）"
  },
  {
   "en": "is a factor of $f(x)$",
   "zh": "因式定理 → $f(a)=0$；除以 $mx-n$ 就代 $x=\\frac{n}{m}$"
  },
  {
   "en": "How many rational roots does the equation ... have?",
   "zh": "二次部分用判別式；$\\Delta$ 是完全平方數才是有理根"
  },
  {
   "en": "Find the H.C.F. and the L.C.M.",
   "zh": "每種因式：H.C.F. 取最低次方、L.C.M. 取最高次方"
  }
 ],
 "lessons": [
  {
   "id": "en04-1",
   "title": {
    "zh": "Lesson 4（課堂 9 條結構題 ＋ 8 題 MC）",
    "en": "Lesson 4 (9 structured questions + 8 multiple-choice questions)"
   },
   "cards": [
    {
     "id": "en4-c1",
     "topic": "en04",
     "title": {
      "zh": "多項式的加減乘與恆等式",
      "en": "Adding, subtracting, multiplying and identities"
     },
     "body": {
      "zh": "多項式加減只看同類項；乘法用分配律，逐項乘完再合併。\n去括號時，括號前面是「減」就要整條變號：\n{{math:0}}\n乘法：外面的每一項都要乘到括號內每一項：\n{{math:1}}\n恆等式 $\\equiv$ 的意思是「任何 $x$ 都成立」，所以左右兩邊同類項的係數一定相等：\n{{math:2}}\n看到 $\\equiv$ 就不要只代一個數 —— 代一個數只會得到一條方程，不足夠求幾個未知數。",
      "en": "When adding or subtracting polynomials, only like terms can be combined; when multiplying, use the distributive law and multiply every term before collecting.\nWhen a bracket is subtracted, every sign inside it changes:\n{{math:0}}\nFor multiplication, each term outside must multiply every term inside:\n{{math:1}}\nAn identity $\\equiv$ holds for every value of $x$, so the coefficients of like terms on the two sides must be equal:\n{{math:2}}\nWhen you see $\\equiv$, do not just substitute one value of $x$: one substitution gives only one equation, which is not enough for several unknowns."
     },
     "math": [
      "(3x^{3}+6x^{2}-5x-10)\n-(-x^{3}+8x+6)\n=4x^{3}+6x^{2}-13x-16",
      "(x+2)(x^{2}-3x+4)\n=x^{3}-x^{2}-2x+8",
      "Ax^{2}+Bx+C\\equiv ax^{2}+bx+c\n\\Rightarrow A=a,\\ B=b,\\ C=c"
     ],
     "vocab": [
      {
       "en": "identity",
       "zh": "恆等式"
      },
      {
       "en": "like terms",
       "zh": "同類項"
      },
      {
       "en": "coefficient",
       "zh": "係數"
      }
     ],
     "warn": {
      "zh": "最常見的錯是去括號時只變第一項的符號：$-(x^{2}-3x+4)$ 應該是 $-x^{2}+3x-4$，三項全部變號。另一個錯是把恆等式當方程，只代 $x=0$ 就以為求到全部未知數。",
      "en": "The commonest slip is changing only the first sign when a bracket is removed: $-(x^{2}-3x+4)$ should become $-x^{2}+3x-4$, with every term changed. Another is treating an identity as an equation and substituting $x=0$ once, as if that found every unknown."
     }
    },
    {
     "id": "en4-c2",
     "topic": "en04",
     "title": {
      "zh": "長除法與除法算式",
      "en": "Long division and the division algorithm"
     },
     "body": {
      "zh": "多項式除法跟數字長除法一樣：每次用最高次項相除，乘回除式，再相減。\n最重要的一條關係是除法算式（商 $Q(x)$、餘式 $R(x)$）：\n{{math:0}}\n兩個必記的限制：餘式的次數一定要低過除式的次數；被除式的次數等於除式與商的次數相加。\n{{math:1}}\n被除式缺項時要補 $0x$（例如 $x^{3}+8x^{2}-8$ 寫成 $x^{3}+8x^{2}+0x-8$），否則很容易錯位。\n驗算方法：把「除式 × 商 ＋ 餘式」乘開，應該等於原來的被除式。\n{{math:2}}",
      "en": "Polynomial long division works like long division with numbers: divide the highest-degree terms, multiply back by the divisor, then subtract.\nThe key relationship uses the quotient $Q(x)$ and the remainder $R(x)$:\n{{math:0}}\nTwo limits to remember: the degree of the remainder must be lower than the degree of the divisor, and the degree of the dividend equals the degrees of the divisor and quotient added together.\n{{math:1}}\nIf a term is missing in the dividend, insert $0x$ (write $x^{3}+8x^{2}-8$ as $x^{3}+8x^{2}+0x-8$), otherwise the columns shift.\nTo check, expand divisor times quotient plus remainder; it must give back the dividend.\n{{math:2}}"
     },
     "math": [
      "f(x)=g(x)Q(x)+R(x)",
      "\\deg R<\\deg g",
      "(2x-5)(x^{2}-2)-3\n=2x^{3}-5x^{2}-4x+7"
     ],
     "vocab": [
      {
       "en": "dividend",
       "zh": "被除式"
      },
      {
       "en": "divisor",
       "zh": "除式"
      },
      {
       "en": "quotient",
       "zh": "商"
      },
      {
       "en": "remainder",
       "zh": "餘式"
      }
     ],
     "warn": {
      "zh": "減的時候忘記整條變號，是最常見的出錯位：$2x^{3}-5x^{2}$ 減 $2x^{3}-5x^{2}$ 應該抵消，但寫成相加就會多出 $4x^{3}-10x^{2}$。另外，餘式的次數一定要低過除式，未低過就代表除法未做完。",
      "en": "Forgetting to change every sign when subtracting is the usual failure: subtracting $2x^{3}-5x^{2}$ from $2x^{3}-5x^{2}$ should cancel, but adding instead produces $4x^{3}-10x^{2}$. Also, the remainder must have lower degree than the divisor; if not, the division is unfinished."
     }
    },
    {
     "id": "en4-c3",
     "topic": "en04",
     "title": {
      "zh": "餘式定理與因式定理",
      "en": "The remainder theorem and the factor theorem"
     },
     "body": {
      "zh": "求餘式不必做長除法：把除式設成 0，解出 $x$，再代入 $f(x)$ 就是餘式。\n除以 $x-a$：\n{{math:0}}\n除以 $mx-n$：\n{{math:1}}\n因式定理是餘式定理的特例：餘式是 0 就代表整除，也就是「因式」。\n{{math:2}}\n最常錯的是符號：除以 $x+5$ 要代 $x=-5$，不是 $5$；除以 $2x-1$ 要代 $x=\\frac{1}{2}$，不是 $2$。",
      "en": "You do not need long division to find a remainder: set the divisor equal to 0, solve for $x$, and substitute into $f(x)$.\nFor division by $x-a$:\n{{math:0}}\nFor division by $mx-n$:\n{{math:1}}\nThe factor theorem is the special case where the remainder is 0, which means the divisor is a factor:\n{{math:2}}\nThe usual mistake is the sign: dividing by $x+5$ means substituting $x=-5$, not $5$; dividing by $2x-1$ means $x=\\frac{1}{2}$, not $2$."
     },
     "math": [
      "\\text{remainder of }f(x)\\div(x-a)=f(a)",
      "\\text{remainder of }f(x)\\div(mx-n)\n=f\\left(\\frac{n}{m}\\right)",
      "f(a)=0\\iff x-a\\text{ is a factor of }f(x)"
     ],
     "vocab": [
      {
       "en": "remainder theorem",
       "zh": "餘式定理"
      },
      {
       "en": "factor theorem",
       "zh": "因式定理"
      },
      {
       "en": "divisible",
       "zh": "可整除"
      }
     ],
     "warn": {
      "zh": "「$x+2$ 是因式」代表 $f(-2)=0$，不是 $f(2)=0$；「除以 $2x+3$」要代 $x=-\\frac{3}{2}$。符號一錯，之後整題的 $k$ 都會錯。",
      "en": "“$x+2$ is a factor” means $f(-2)=0$, not $f(2)=0$; “divided by $2x+3$” means substituting $x=-\\frac{3}{2}$. One sign error here makes every later value of $k$ wrong."
     }
    },
    {
     "id": "en4-c4",
     "topic": "en04",
     "title": {
      "zh": "三次方程：有理根、無理根與實根",
      "en": "Cubic equations: rational, irrational and real roots"
     },
     "body": {
      "zh": "三次方程 $f(x)=0$ 通常先抽一個因式，剩下一條二次方程，再用判別式判斷。\n{{math:0}}\n二次部分 $ax^{2}+bx+c=0$ 的判別式：\n{{math:1}}\n三種情況要分清楚：$\\Delta<0$ 代表二次部分沒有實根；$\\Delta$ 是完全平方數（例如 $49$、$64$）代表兩個有理根；$\\Delta>0$ 但不是完全平方數，代表兩個無理根（答案帶根號）。\n{{math:2}}\n所以「有無理根」和「無實根」是兩件完全不同的事，這是這一課最常見的混淆。",
      "en": "For a cubic $f(x)=0$, take out one factor first, leaving a quadratic that is decided by its discriminant.\n{{math:0}}\nFor the quadratic part $ax^{2}+bx+c=0$, the discriminant is\n{{math:1}}\nKeep the three cases apart: $\\Delta<0$ means the quadratic part has no real roots; $\\Delta$ being a perfect square (such as $49$ or $64$) gives two rational roots; $\\Delta>0$ but not a perfect square gives two irrational roots (the answers contain surds).\n{{math:2}}\nSo “has irrational roots” and “has no real roots” are completely different statements — the commonest confusion in this lesson."
     },
     "math": [
      "f(x)=(x-r)(ax^{2}+bx+c)",
      "\\Delta=b^{2}-4ac",
      "\\Delta=93\\Rightarrow x=\\frac{-7\\pm\\sqrt{93}}{2}"
     ],
     "vocab": [
      {
       "en": "rational number",
       "zh": "有理數"
      },
      {
       "en": "irrational number",
       "zh": "無理數"
      },
      {
       "en": "real root",
       "zh": "實根"
      },
      {
       "en": "perfect square",
       "zh": "完全平方數"
      }
     ],
     "warn": {
      "zh": "見到「無理根」不要立刻寫「無實根」：$\\sqrt{93}$ 是實數但無理數，所以那兩個根是無理根，不是無實根。另外，只有二次部分的係數是整數時，「$\\Delta$ 是完全平方數」才保證有理根。",
      "en": "Do not read “irrational roots” as “no real roots”: $\\sqrt{93}$ is a real number but not rational, so those two roots are irrational, not non-real. Also, “$\\Delta$ is a perfect square” only guarantees rational roots when the coefficients of the quadratic are integers."
     }
    },
    {
     "id": "en4-c5",
     "topic": "en04",
     "title": {
      "zh": "H.C.F.、L.C.M. 與有理函數",
      "en": "H.C.F., L.C.M. and rational functions"
     },
     "body": {
      "zh": "多項式的 H.C.F. 與 L.C.M. 跟數字一樣，先把每項分解成最細的因式（係數用質因數）。\nH.C.F.：每種因式取最低次方（而且只取每一項都有的因式）：\n{{math:0}}\nL.C.M.：每種因式取最高次方（所有出現過的因式都要）：\n{{math:1}}\n化簡有理函數：先分解所有分子分母，再約去公因式；做除法時把第二個分數倒轉相乘。\n{{math:2}}",
      "en": "The H.C.F. and L.C.M. of polynomials work like numbers: factorise everything first, using prime factors for the coefficients.\nH.C.F.: take the lowest power of each factor (and only factors common to every expression):\n{{math:0}}\nL.C.M.: take the highest power of every factor that appears:\n{{math:1}}\nTo simplify a rational function, factorise every numerator and denominator, then cancel common factors; for a division, turn the second fraction upside down and multiply.\n{{math:2}}"
     },
     "math": [
      "\\text{H.C.F. of }a^{2}b^{3},a^{4}bc^{2}=a^{2}b",
      "\\text{L.C.M. of }a^{2}b^{3},a^{4}bc^{2}=a^{4}b^{3}c^{2}",
      "\\frac{A}{B}\\div\\frac{C}{D}=\\frac{A}{B}\\times\\frac{D}{C}"
     ],
     "vocab": [
      {
       "en": "H.C.F.",
       "zh": "最大公因式"
      },
      {
       "en": "L.C.M.",
       "zh": "最小公倍式"
      },
      {
       "en": "rational function",
       "zh": "有理函數"
      }
     ],
     "warn": {
      "zh": "H.C.F. 取「最低」次方，L.C.M. 取「最高」次方，兩者剛好相反；把 H.C.F. 當成把全部因式乘起來（那其實是 L.C.M.）是常見的失分位。化簡時亦只可以約去「整塊因式」，不可以只約一條中的一個字母。",
      "en": "The H.C.F. takes the lowest powers while the L.C.M. takes the highest — they are opposites. A common loss is multiplying every factor and calling it the H.C.F., which is really the L.C.M. When cancelling, cancel whole factors only, never a single letter inside a sum."
     }
    }
   ],
   "long": [
    {
     "id": "eph-en04-q1",
     "type": "long",
     "kind": "short",
     "topic": "en04",
     "unit": 4,
     "subtopic": "polynomials",
     "difficulty": 1,
     "code": "EN4-Q1",
     "source": "EPH WS06 Q5 · 恆等式比較係數",
     "stem": {
      "en": "Let $a$, $p$ and $q$ be constants. If $(x-3)(px+q)\\equiv -2x^{2}+11x+a$, find $p$, $q$ and $a$.",
      "zh": "設 $a$、$p$、$q$ 為常數。若 $(x-3)(px+q)\\equiv -2x^{2}+11x+a$，求 $p$、$q$ 與 $a$。"
     },
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 展開左邊，整理成三項",
         "en": "Step 1 · Expand the left-hand side into three terms"
        },
        "math": "(x-3)(px+q)\n=px^{2}+qx-3px-3q\n=px^{2}+(q-3p)x-3q",
        "zh": "先把左邊乘開：$x$ 乘 $px$ 得 $px^{2}$，$x$ 乘 $q$ 得 $qx$，$-3$ 乘 $px$ 得 $-3px$，$-3$ 乘 $q$ 得 $-3q$。把兩個 $x$ 的項合併成 $(q-3p)x$，左邊就是 $px^{2}+(q-3p)x-3q$。",
        "en": "Expand the left-hand side: $x$ times $px$ gives $px^{2}$, $x$ times $q$ gives $qx$, $-3$ times $px$ gives $-3px$, and $-3$ times $q$ gives $-3q$. The two $x$ terms combine into $(q-3p)x$, so the left-hand side is $px^{2}+(q-3p)x-3q$.",
        "marking": "(1M)",
        "highlight": [
         "px^{2}+(q-3p)x-3q"
        ]
       },
       {
        "title": {
         "zh": "第 2 步 · 比較 $x^{2}$ 與 $x$ 的係數",
         "en": "Step 2 · Compare the coefficients of $x^{2}$ and $x$"
        },
        "math": "p=-2\nq-3p=11\nq-3(-2)=11\nq=5",
        "zh": "恆等式代表「任何 $x$ 都成立」，所以左右兩邊同類項的係數一定要相等。比較 $x^{2}$ 的係數得 $p=-2$；比較 $x$ 的係數得 $q-3p=11$，代入 $p=-2$ 後是 $q+6=11$，所以 $q=5$。",
        "en": "An identity holds for every value of $x$, so the coefficients of like terms must be equal on both sides. Comparing the coefficients of $x^{2}$ gives $p=-2$; comparing the coefficients of $x$ gives $q-3p=11$, and with $p=-2$ this is $q+6=11$, so $q=5$.",
        "marking": "(1A)",
        "highlight": [
         "p=-2",
         "q=5"
        ]
       },
       {
        "title": {
         "zh": "第 3 步 · 比較常數項求 $a$",
         "en": "Step 3 · Compare the constant terms to find $a$"
        },
        "math": "a=-3q\n=-3(5)\n=-15",
        "zh": "最後比較常數項：左邊的常數項是 $-3q$，右邊是 $a$，所以 $a=-3q=-3(5)=-15$。三個常數都找到了。",
        "en": "Finally compare the constant terms: the left-hand side has $-3q$ and the right-hand side has $a$, so $a=-3q=-3(5)=-15$. All three constants are found.",
        "marking": "(1A)",
        "highlight": [
         "a=-15"
        ]
       }
      ],
      "traps": [
       {
        "label": "只代一個 x 值",
        "labelEn": "Substituting one value of $x$ only",
        "zh": "用 $x=0$ 或 $x=1$ 代入只會得到一條方程，不可能同時求出 $p$、$q$、$a$ 三個未知數。看到 $\\\\equiv$ 就要比較係數。",
        "en": "Substituting $x=0$ or $x=1$ gives only one equation, which cannot fix all three unknowns $p$, $q$ and $a$. An identity is solved by comparing coefficients."
       },
       {
        "label": "常數項漏了負號",
        "labelEn": "Dropping the minus sign in the constant term",
        "zh": "左邊的常數項是 $(-3)(q)=-3q$，不是 $+3q$；寫成 $a=3q$ 會得 $15$，整個答案就錯了。",
        "en": "The constant term on the left is $(-3)(q)=-3q$, not $+3q$; writing $a=3q$ gives $15$ and the answer is wrong."
       }
      ],
      "tip": {
       "zh": "恆等式三步：展開、逐個次方比較係數、寫出答案。比較的次序不重要，但先挑「沒有未知數」的位置（例如 $x^{2}$）會最快。",
       "en": "Three steps for an identity: expand, compare coefficients power by power, then state the answers. The order does not matter, but starting with a position that contains no unknown (such as $x^{2}$) is fastest."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：代 $x=0$ 與 $x=1$",
         "en": "Check: substitute $x=0$ and $x=1$"
        },
        "zh": "代 $x=0$：左邊 $(-3)(q)=-3q$，右邊 $a$，所以 $a=-3q$。代 $x=1$：左邊 $(-2)(p+q)=(-2)(3)=-6$，右邊 $-2+11+a=-6$，兩邊相等，代表 $p=-2$、$q=5$、$a=-15$ 正確。",
        "en": "Put $x=0$: the left side is $(-3)(q)=-3q$ and the right side is $a$, so $a=-3q$. Put $x=1$: the left side is $(-2)(p+q)=(-2)(3)=-6$ and the right side is $-2+11+a=-6$, so the two sides agree and $p=-2$, $q=5$, $a=-15$ are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en04-q2",
     "type": "long",
     "kind": "short",
     "topic": "en04",
     "unit": 4,
     "subtopic": "polynomials",
     "difficulty": 2,
     "code": "EN4-Q2",
     "source": "EPH WS06 Q9 · 多項式長除法",
     "stem": {
      "en": "Find the quotient and the remainder when $2x^{3}-5x^{2}-4x+7$ is divided by $2x-5$.",
      "zh": "求 $2x^{3}-5x^{2}-4x+7$ 除以 $2x-5$ 的商與餘式。"
     },
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 用最高次項相除，寫出商的第一項",
         "en": "Step 1 · Divide the leading terms to get the first term of the quotient"
        },
        "math": "2x^{3}\\div 2x=x^{2}\n2x^{2}(2x-5)=2x^{3}-5x^{2}\n(2x^{3}-5x^{2}-4x+7)\n-(2x^{3}-5x^{2})=-4x+7",
        "zh": "長除法第一步：$2x^{3}$ 除以 $2x$ 得 $x^{2}$，寫在商的位置。把 $x^{2}$ 乘回除式 $2x-5$ 得 $2x^{3}-5x^{2}$，再從被除式減走，$x^{3}$ 與 $x^{2}$ 兩項剛好抵消，剩下 $-4x+7$。",
        "en": "First step of long division: $2x^{3}$ divided by $2x$ gives $x^{2}$, which is the first term of the quotient. Multiply $x^{2}$ back by $2x-5$ to get $2x^{3}-5x^{2}$ and subtract it; the $x^{3}$ and $x^{2}$ terms cancel, leaving $-4x+7$.",
        "marking": "(1M)",
        "highlight": [
         "\\text{quotient}\\ldots x^{2}"
        ]
       },
       {
        "title": {
         "zh": "第 2 步 · 重複一次，得到商的第二項與餘式",
         "en": "Step 2 · Repeat to get the second quotient term and the remainder"
        },
        "math": "(-4x)\\div 2x=-2\n-2(2x-5)=-4x+10\n(-4x+7)-(-4x+10)=-3",
        "zh": "把 $-4x+7$ 拉下來，$-4x$ 除以 $2x$ 得 $-2$，所以商的第二項是 $-2$。$-2$ 乘 $2x-5$ 得 $-4x+10$，相減後餘下 $-3$。$-3$ 的次數是 0，已經低過除式的次數 1，所以除法停止。",
        "en": "Bring down $-4x+7$; $-4x$ divided by $2x$ gives $-2$, the second term of the quotient. Multiply $-2$ by $2x-5$ to get $-4x+10$, and subtracting leaves $-3$. Its degree is 0, lower than the divisor's degree 1, so the division stops.",
        "marking": "(1A)",
        "highlight": [
         "-2",
         "-3"
        ]
       },
       {
        "title": {
         "zh": "第 3 步 · 寫出答案並驗算",
         "en": "Step 3 · State the answer and check it"
        },
        "math": "\\text{quotient}=x^{2}-2\n\\text{remainder}=-3\n(2x-5)(x^{2}-2)-3\n=2x^{3}-5x^{2}-4x+7",
        "zh": "商是 $x^{2}-2$，餘式是 $-3$。驗算：$(2x-5)(x^{2}-2)-3=2x^{3}-5x^{2}-4x+10-3=2x^{3}-5x^{2}-4x+7$，與被除式完全相同，所以答案正確。",
        "en": "The quotient is $x^{2}-2$ and the remainder is $-3$. Check: $(2x-5)(x^{2}-2)-3=2x^{3}-5x^{2}-4x+10-3=2x^{3}-5x^{2}-4x+7$, exactly the dividend, so the answer is correct.",
        "marking": "(1A)",
        "highlight": [
         "x^{2}-2",
         "-3"
        ]
       }
      ],
      "traps": [
       {
        "label": "商漏了 −2",
        "labelEn": "Forgetting the $-2$ in the quotient",
        "zh": "只寫商 $x^{2}$ 就停，等於假設 $-4x+7$ 除不下去；其實 $-4x$ 仍然可以被 $2x$ 除，商還有一項 $-2$。",
        "en": "Stopping at the quotient $x^{2}$ assumes $-4x+7$ cannot be divided further; in fact $-4x$ is still divisible by $2x$, so the quotient has another term, $-2$."
       },
       {
        "label": "相減沒有整條變號",
        "labelEn": "Not changing every sign when subtracting",
        "zh": "減 $(2x^{3}-5x^{2})$ 等於加 $(-2x^{3}+5x^{2})$；如果直接寫成相減但只變第一項，$x^{2}$ 的係數就會錯。",
        "en": "Subtracting $(2x^{3}-5x^{2})$ means adding $(-2x^{3}+5x^{2})$; changing only the first sign leaves the $x^{2}$ coefficient wrong."
       },
       {
        "label": "餘式寫成正數",
        "labelEn": "Reporting the remainder with the wrong sign",
        "zh": "最後一步是 $(-4x+7)-(-4x+10)=-3$，餘式是 $-3$ 不是 $3$；寫錯符號可以代 $x=0$ 快速檢查（餘式應等於 $f(0)$）。",
        "en": "The last subtraction is $(-4x+7)-(-4x+10)=-3$, so the remainder is $-3$, not $3$. A quick check is to put $x=0$: the remainder must equal $f(0)$."
       }
      ],
      "tip": {
       "zh": "長除法每做一步都問兩件事：商的次數對不對、餘式的次數是否已經低過除式。最後一定用「除式 × 商 ＋ 餘式」驗算一次。",
       "en": "At every step of long division ask two things: is the degree of the quotient right, and is the remainder's degree now lower than the divisor's? Always finish by expanding divisor times quotient plus remainder as a check."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：把答案乘開",
         "en": "Check: expand the answer"
        },
        "zh": "$(2x-5)(x^{2}-2)-3=2x^{3}-5x^{2}-4x+10-3=2x^{3}-5x^{2}-4x+7$，與被除式完全相同，證明商 $x^{2}-2$、餘式 $-3$ 正確。",
        "en": "$(2x-5)(x^{2}-2)-3=2x^{3}-5x^{2}-4x+10-3=2x^{3}-5x^{2}-4x+7$, exactly the dividend, so the quotient $x^{2}-2$ and remainder $-3$ are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en04-q3",
     "type": "long",
     "topic": "en04",
     "unit": 4,
     "subtopic": "polynomials",
     "difficulty": 2,
     "code": "EN4-Q3",
     "source": "EPH WS06 Q14 · 除法算式（未知商與餘式）",
     "stem": {
      "en": "Let $f(x)=5x^{3}-kx^{2}+17x-14$, where $k$ is a constant. When $f(x)$ is divided by $5x-2$, the quotient and the remainder are $ax^{2}-x+b$ and $c$ respectively, where $a$, $b$ and $c$ are constants.",
      "zh": "設 $f(x)=5x^{3}-kx^{2}+17x-14$，其中 $k$ 為常數。當 $f(x)$ 除以 $5x-2$ 時，商與餘式分別為 $ax^{2}-x+b$ 與 $c$，其中 $a$、$b$、$c$ 為常數。"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "Find $a$, $b$ and $c$.",
       "en": "Find $a$, $b$ and $c$.",
       "zh": "求 $a$、$b$ 與 $c$。",
       "marks": 3
      },
      {
       "label": "(b)",
       "text": "Find $k$.",
       "en": "Find $k$.",
       "zh": "求 $k$。",
       "marks": 1
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 寫出除法算式並展開右邊",
         "en": "Step 1 · Write the division identity and expand the right-hand side"
        },
        "math": "5x^{3}-kx^{2}+17x-14\n\\equiv(5x-2)(ax^{2}-x+b)+c\n=5ax^{3}+(-5-2a)x^{2}\n+(5b+2)x+(-2b+c)",
        "zh": "除法算式是「被除式 ＝ 除式 × 商 ＋ 餘式」，所以 $5x^{3}-kx^{2}+17x-14\\\\equiv(5x-2)(ax^{2}-x+b)+c$。把右邊展開並按 $x$ 的次方整理：$x^{3}$ 的係數是 $5a$，$x^{2}$ 是 $-5-2a$，$x$ 是 $5b+2$，常數是 $-2b+c$。",
        "en": "The division identity says dividend equals divisor times quotient plus remainder, so $5x^{3}-kx^{2}+17x-14\\equiv(5x-2)(ax^{2}-x+b)+c$. Expanding the right-hand side and collecting powers gives: coefficient of $x^{3}$ is $5a$, of $x^{2}$ is $-5-2a$, of $x$ is $5b+2$, and the constant is $-2b+c$.",
        "marking": "(1M)",
        "highlight": [
         "(5x-2)(ax^{2}-x+b)+c"
        ]
       },
       {
        "title": {
         "zh": "第 2 步 · 比較 $x^{3}$ 與 $x$ 的係數（求 $a$、$b$）",
         "en": "Step 2 · Compare the coefficients of $x^{3}$ and $x$ (find $a$ and $b$)"
        },
        "math": "5a=5\n5b+2=17\n\\Rightarrow a=1,\\ b=3",
        "zh": "比較 $x^{3}$ 的係數：$5a=5$，所以 $a=1$。比較 $x$ 的係數：$5b+2=17$，所以 $5b=15$、$b=3$。先做這兩個位置，是因為它們沒有 $k$，可以一次確定 $a$ 與 $b$。",
        "en": "Comparing the coefficients of $x^{3}$: $5a=5$, so $a=1$. Comparing the coefficients of $x$: $5b+2=17$, so $5b=15$ and $b=3$. These two positions come first because neither contains $k$, so $a$ and $b$ are fixed immediately.",
        "marking": "(1A)",
        "highlight": [
         "a=1",
         "b=3"
        ]
       },
       {
        "title": {
         "zh": "第 3 步 · 比較常數項求 $c$",
         "en": "Step 3 · Compare the constant terms to find $c$"
        },
        "math": "-2b+c=-14\n-2(3)+c=-14\nc=-8",
        "zh": "比較常數項：$-2b+c=-14$。代入 $b=3$ 得 $-6+c=-14$，所以 $c=-8$。這裡不要直接把 $-14$ 當成 $c$，因為 $-14$ 是被除式的常數項，右邊的常數項是 $-2b+c$。",
        "en": "Compare the constant terms: $-2b+c=-14$. With $b=3$ this is $-6+c=-14$, so $c=-8$. Do not simply take $c=-14$: that is the constant in the dividend, while the constant on the right is $-2b+c$.",
        "marking": "(1A)",
        "highlight": [
         "c=-8"
        ]
       },
       {
        "title": {
         "zh": "第 4 步 · 比較 $x^{2}$ 的係數求 $k$",
         "en": "Step 4 · Compare the coefficients of $x^{2}$ to find $k$"
        },
        "math": "-5-2a=-k\n-5-2(1)=-k\n-7=-k\nk=7",
        "zh": "最後比較 $x^{2}$ 的係數：$-5-2a=-k$。代入 $a=1$ 得 $-7=-k$，兩邊同時變號得 $k=7$。這一步最容易漏掉負號，寫完可以代 $k=7$ 回原式檢查。",
        "en": "Finally compare the coefficients of $x^{2}$: $-5-2a=-k$. With $a=1$ this is $-7=-k$, so changing the signs of both sides gives $k=7$. The minus sign is easily lost here; substitute $k=7$ back to check.",
        "marking": "(1A)",
        "highlight": [
         "k=7"
        ]
       }
      ],
      "traps": [
       {
        "label": "把餘式 c 當成常數項",
        "labelEn": "Taking $c$ to be the constant term",
        "zh": "$-14$ 是被除式的常數項，不是 $c$；右邊展開後常數項是 $-2b+c$，要比較之後才求得到 $c$。",
        "en": "$-14$ is the constant term of the dividend, not $c$. After expanding, the constant on the right is $-2b+c$, and only a comparison gives $c$."
       },
       {
        "label": "展開時漏乘",
        "labelEn": "Missing a product when expanding",
        "zh": "$(5x-2)(ax^{2}-x+b)$ 共有六個乘積；漏掉 $(-2)(b)$ 就不會有 $-2b+c$ 這個常數項，$c$ 一定錯。",
        "en": "$(5x-2)(ax^{2}-x+b)$ produces six products; missing $(-2)(b)$ removes the constant $-2b+c$, so $c$ must come out wrong."
       },
       {
        "label": "比較 x² 時漏了負號",
        "labelEn": "Losing the minus sign on the $x^{2}$ coefficient",
        "zh": "右邊 $x^{2}$ 的係數是 $(-5)+(-2a)$，即 $-5-2a$；漏掉 $5x$ 乘 $-x$ 的負號會得 $k=-3$。",
        "en": "The coefficient of $x^{2}$ on the right is $(-5)+(-2a)$, that is $-5-2a$. Dropping the minus from $5x$ times $-x$ gives $k=-3$."
       }
      ],
      "tip": {
       "zh": "未知商與餘式的題目，一律先寫「被除式 ≡ 除式 × 商 ＋ 餘式」，展開後逐個次方比較。先挑沒有未知數的位置做，最後才處理含 $k$ 的那一項。",
       "en": "For questions with an unknown quotient or remainder, always start from dividend equals divisor times quotient plus remainder, expand, and compare power by power. Begin with positions free of the unknown and leave the term containing $k$ until last."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：代 $x=0$ 與 $x=1$",
         "en": "Check: substitute $x=0$ and $x=1$"
        },
        "zh": "代 $x=0$：左邊 $-14$，右邊 $(0-2)(0-0+3)+c=-6-8=-14$；代 $x=1$：左邊 $5-7+17-14=1$，右邊 $(5-2)(1-1+3)-8=9-8=1$。兩邊相等，答案正確。",
        "en": "Put $x=0$: the left side is $-14$ and the right side is $(0-2)(0-0+3)+c=-6-8=-14$. Put $x=1$: the left side is $5-7+17-14=1$ and the right side is $(5-2)(1-1+3)-8=9-8=1$. The two sides agree."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en04-q4",
     "type": "long",
     "topic": "en04",
     "unit": 4,
     "subtopic": "polynomials",
     "difficulty": 2,
     "code": "EN4-Q4",
     "source": "EPH WS06 Q21 · 餘式定理（兩個條件）",
     "stem": {
      "en": "Let $f(x)=-4x^{3}+ax^{2}+bx+20$, where $a$ and $b$ are constants. When $f(x)$ is divided by $x+1$, the remainder is $25$. When $f(x)$ is divided by $x-2$, the remainder is $10$. Find $a$ and $b$.",
      "zh": "設 $f(x)=-4x^{3}+ax^{2}+bx+20$，其中 $a$、$b$ 為常數。當 $f(x)$ 除以 $x+1$ 時餘式為 $25$；當 $f(x)$ 除以 $x-2$ 時餘式為 $10$。求 $a$ 與 $b$。"
     },
     "marks": 5,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 用「除以 $x+1$ 餘 25」列第一條方程",
         "en": "Step 1 · Use the remainder 25 on division by $x+1$"
        },
        "math": "f(-1)=25\n-4(-1)^{3}+a(-1)^{2}+b(-1)+20=25\n4+a-b+20=25",
        "zh": "餘式定理：除以 $x+1$ 的餘式就是 $f(-1)$，所以 $f(-1)=25$。代入時 $-1$ 要連括號：$-4(-1)^{3}=4$、$a(-1)^{2}=a$、$b(-1)=-b$，得到 $4+a-b+20=25$。",
        "en": "By the remainder theorem the remainder on division by $x+1$ is $f(-1)$, so $f(-1)=25$. Keep the brackets for $-1$: $-4(-1)^{3}=4$, $a(-1)^{2}=a$ and $b(-1)=-b$, giving $4+a-b+20=25$.",
        "marking": "(1M)",
        "highlight": [
         "f(-1)=25"
        ]
       },
       {
        "title": {
         "zh": "第 2 步 · 整理成第一條方程",
         "en": "Step 2 · Simplify into the first equation"
        },
        "math": "a-b=1",
        "zh": "把常數合併：$4+20=24$，所以 $a-b+24=25$，兩邊減 24 得 $a-b=1$。",
        "en": "Combine the constants: $4+20=24$, so $a-b+24=25$; subtracting 24 from both sides gives $a-b=1$.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 3 步 · 用「除以 $x-2$ 餘 10」列第二條方程",
         "en": "Step 3 · Use the remainder 10 on division by $x-2$"
        },
        "math": "f(2)=10\n-4(2)^{3}+a(2)^{2}+b(2)+20=10\n-32+4a+2b+20=10",
        "zh": "同樣道理，除以 $x-2$ 的餘式是 $f(2)$，所以 $f(2)=10$。代入得 $-32+4a+2b+20=10$；留意 $(-4)(8)=-32$ 是負數，不要寫成 $+32$。",
        "en": "Likewise the remainder on division by $x-2$ is $f(2)$, so $f(2)=10$. Substituting gives $-32+4a+2b+20=10$; note that $(-4)(8)=-32$ is negative, not $+32$.",
        "marking": "(1M)",
        "highlight": [
         "f(2)=10"
        ]
       },
       {
        "title": {
         "zh": "第 4 步 · 整理成第二條方程",
         "en": "Step 4 · Simplify into the second equation"
        },
        "math": "4a+2b=22\n2a+b=11",
        "zh": "$-32+20=-12$，所以 $4a+2b-12=10$，即 $4a+2b=22$。兩邊除以 2 得 $2a+b=11$，數字細一點，之後解聯立會容易。",
        "en": "Since $-32+20=-12$, we have $4a+2b-12=10$, so $4a+2b=22$. Dividing both sides by 2 gives $2a+b=11$; smaller numbers make the simultaneous solution easier.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 5 步 · 解聯立方程",
         "en": "Step 5 · Solve the simultaneous equations"
        },
        "math": "a-b=1\n2a+b=11\n\\Rightarrow 3a=12\n\\Rightarrow a=4,\\ b=3",
        "zh": "兩式相加，$b$ 與 $-b$ 抵消：$(a-b)+(2a+b)=1+11$，即 $3a=12$，所以 $a=4$。代回 $a-b=1$ 得 $4-b=1$，所以 $b=3$。驗算：$f(-1)=4+4-3+20=25$、$f(2)=-32+16+6+20=10$，兩個餘式都對。",
        "en": "Adding the two equations cancels $b$: $(a-b)+(2a+b)=1+11$, so $3a=12$ and $a=4$. Substituting into $a-b=1$ gives $4-b=1$, so $b=3$. Check: $f(-1)=4+4-3+20=25$ and $f(2)=-32+16+6+20=10$, so both remainders match.",
        "marking": "(1A)",
        "highlight": [
         "a=4",
         "b=3"
        ]
       }
      ],
      "traps": [
       {
        "label": "餘式的 x 值代錯",
        "labelEn": "Substituting the wrong value of $x$",
        "zh": "除以 $x+1$ 要代 $x=-1$（因為 $x+1=0$），不是 $x=1$；除以 $x-2$ 才代 $x=2$。兩個條件剛好一負一正，最容易調亂。",
        "en": "Dividing by $x+1$ means substituting $x=-1$ (from $x+1=0$), not $x=1$; dividing by $x-2$ means $x=2$. One condition is negative and the other positive, so they are easily swapped."
       },
       {
        "label": "未整理就急著解",
        "labelEn": "Solving before tidying the equations",
        "zh": "$4+a-b+20=25$ 要先合併常數成 $a-b=1$；如果直接把 $4$、$20$、$25$ 一起搬，很容易把 $1$ 寫成 $49$ 或 $-49$。",
        "en": "$4+a-b+20=25$ must first be tidied to $a-b=1$. Moving $4$, $20$ and $25$ around at once easily turns $1$ into $49$ or $-49$."
       },
       {
        "label": "只驗算一個條件",
        "labelEn": "Checking only one condition",
        "zh": "求出 $a$、$b$ 之後要把兩個餘式都代一次；只驗一個的話，另一個條件的符號錯了也看不出來。",
        "en": "After finding $a$ and $b$, substitute into both remainders. Checking only one hides a sign error in the other condition."
       }
      ],
      "tip": {
       "zh": "兩個餘式條件 ＝ 兩條方程 ＝ 兩個未知數。每條條件都寫成 $f(a)=\\text{remainder}$ 的形式，整理成 $Aa+Bb=C$ 之後才解聯立。",
       "en": "Two remainder conditions give two equations for two unknowns. Write each condition as “$f(\\text{number})=\\text{remainder}$”, tidy it into the form $Aa+Bb=C$, and only then solve simultaneously."
      },
      "alt": [
       {
        "name": {
         "zh": "另一解法：代入消去法",
         "en": "Alternative: substitution"
        },
        "zh": "由 $a-b=1$ 得 $a=b+1$，代入 $2a+b=11$：$2(b+1)+b=11$，即 $3b=9$、$b=3$，再得 $a=4$。與加減消去法的答案一致。",
        "en": "From $a-b=1$ we get $a=b+1$. Substituting into $2a+b=11$ gives $2(b+1)+b=11$, so $3b=9$, $b=3$ and then $a=4$, matching the elimination method."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en04-q5",
     "type": "long",
     "topic": "en04",
     "unit": 4,
     "subtopic": "polynomials",
     "difficulty": 2,
     "code": "EN4-Q5",
     "source": "EPH WS06 Q24 · 因式定理與分解三次式",
     "stem": {
      "en": "Let $f(x)=3x^{3}+kx^{2}+x-20$, where $k$ is a constant. It is given that $x+5$ is a factor of $f(x)$.",
      "zh": "設 $f(x)=3x^{3}+kx^{2}+x-20$，其中 $k$ 為常數。已知 $x+5$ 是 $f(x)$ 的因式。"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "Find $k$.",
       "en": "Find $k$.",
       "zh": "求 $k$。",
       "marks": 2
      },
      {
       "label": "(b)",
       "text": "Factorize $f(x)$ completely.",
       "en": "Factorize $f(x)$ completely.",
       "zh": "把 $f(x)$ 完全分解。",
       "marks": 3
      }
     ],
     "marks": 5,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 用因式定理列方程（求 $k$）",
         "en": "Step 1 · Use the factor theorem to form an equation for $k$"
        },
        "math": "f(-5)=0\n3(-5)^{3}+k(-5)^{2}+(-5)-20=0\n-375+25k-5-20=0",
        "zh": "「$x+5$ 是因式」代表 $f(-5)=0$（因為 $-5+5=0$）。代入得 $3(-125)+25k-5-20=0$，即 $-375+25k-25=0$。留意 $(-5)^{2}=25$ 是正數，$(-5)$ 那一項是 $-5$。",
        "en": "“$x+5$ is a factor” means $f(-5)=0$ (since $-5+5=0$). Substituting gives $3(-125)+25k-5-20=0$, that is $-375+25k-25=0$. Note $(-5)^{2}=25$ is positive while the linear term is $-5$.",
        "marking": "(1M)",
        "highlight": [
         "f(-5)=0"
        ]
       },
       {
        "title": {
         "zh": "第 2 步 · 解出 $k$",
         "en": "Step 2 · Solve for $k$"
        },
        "math": "25k=400\nk=16",
        "zh": "$-375-25=-400$，所以 $25k=400$，兩邊除以 25 得 $k=16$。",
        "en": "Since $-375-25=-400$, we have $25k=400$; dividing by 25 gives $k=16$.",
        "marking": "(1A)",
        "highlight": [
         "k=16"
        ]
       },
       {
        "title": {
         "zh": "第 3 步 · 用長除法拆出二次因式",
         "en": "Step 3 · Use long division to take out the quadratic factor"
        },
        "math": "f(x)=3x^{3}+16x^{2}+x-20\n=(x+5)(3x^{2}+x-4)",
        "zh": "把 $k=16$ 寫回，$f(x)=3x^{3}+16x^{2}+x-20$。因為 $x+5$ 是因式，用長除法（或用除法算式比較係數）可得 $f(x)=(x+5)(3x^{2}+x-4)$。可以展開檢查：$x(3x^{2}+x-4)+5(3x^{2}+x-4)=3x^{3}+16x^{2}+x-20$。",
        "en": "Putting $k=16$ back gives $f(x)=3x^{3}+16x^{2}+x-20$. Since $x+5$ is a factor, long division (or comparing coefficients in the division identity) gives $f(x)=(x+5)(3x^{2}+x-4)$. Check by expanding: $x(3x^{2}+x-4)+5(3x^{2}+x-4)=3x^{3}+16x^{2}+x-20$.",
        "marking": "(1M)",
        "highlight": [
         "(x+5)(3x^{2}+x-4)"
        ]
       },
       {
        "title": {
         "zh": "第 4 步 · 把二次式再分解",
         "en": "Step 4 · Factorise the quadratic factor"
        },
        "math": "3x^{2}+x-4\n=(3x+4)(x-1)",
        "zh": "$3x^{2}+x-4$ 用十字相乘：$3x$ 乘 $x$ 得 $3x^{2}$，$4$ 乘 $-1$ 得 $-4$，中間 $3x(-1)+4x= x$，所以 $3x^{2}+x-4=(3x+4)(x-1)$。",
        "en": "Factorise $3x^{2}+x-4$ by inspection: $3x$ times $x$ gives $3x^{2}$, $4$ times $-1$ gives $-4$, and the middle term is $3x(-1)+4x=x$, so $3x^{2}+x-4=(3x+4)(x-1)$.",
        "marking": "(1M)",
        "highlight": [
         "(3x+4)(x-1)"
        ]
       },
       {
        "title": {
         "zh": "第 5 步 · 寫出完全分解的答案",
         "en": "Step 5 · State the complete factorisation"
        },
        "math": "f(x)=(x+5)(3x+4)(x-1)",
        "zh": "把兩步合起來，$f(x)=(x+5)(3x+4)(x-1)$。題目要求 completely，所以二次式一定要再拆，只寫到 $(x+5)(3x^{2}+x-4)$ 會少一分。",
        "en": "Combining the two steps, $f(x)=(x+5)(3x+4)(x-1)$. The question says completely, so the quadratic must be factorised further; stopping at $(x+5)(3x^{2}+x-4)$ loses a mark.",
        "marking": "(1A)",
        "highlight": [
         "(x+5)(3x+4)(x-1)"
        ]
       }
      ],
      "traps": [
       {
        "label": "因式定理符號錯",
        "labelEn": "Wrong sign in the factor theorem",
        "zh": "$x+5$ 是因式要代 $x=-5$；若代 $x=5$ 會得 $375+25k-25=0$，求出完全不同的 $k$。",
        "en": "$x+5$ being a factor means substituting $x=-5$. Substituting $x=5$ gives $375+25k-25=0$ and a completely different $k$."
       },
       {
        "label": "分解只做一半",
        "labelEn": "Stopping halfway through the factorisation",
        "zh": "$3x^{2}+x-4$ 仍然可以分解成 $(3x+4)(x-1)$；題目寫 completely 就代表要拆到不能再拆。",
        "en": "$3x^{2}+x-4$ still factorises into $(3x+4)(x-1)$; the word “completely” means no factor may be left unfactorised."
       },
       {
        "label": "長除法餘式不是 0",
        "labelEn": "A non-zero remainder in the long division",
        "zh": "如果長除法最後有餘式，代表 $k$ 算錯了（或除法過程有錯）；因為已知 $x+5$ 是因式，餘式一定要是 0。",
        "en": "If the long division leaves a remainder, either $k$ or the division is wrong: since $x+5$ is given as a factor, the remainder must be 0."
       }
      ],
      "tip": {
       "zh": "三次式分解的固定流程：先用因式定理求未知數 → 長除法拆出二次因式 → 再把二次式分解。最後把答案展開一次，確認與原式相同。",
       "en": "A fixed routine for factorising a cubic: use the factor theorem to find the unknown, divide out the linear factor, then factorise the quadratic. Expand the answer once to confirm it matches the original."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：把分解結果乘開",
         "en": "Check: expand the factorised form"
        },
        "zh": "先乘後兩個括號：$(3x+4)(x-1)=3x^{2}+x-4$；再乘 $(x+5)$：$3x^{3}+x^{2}-4x+15x^{2}+5x-20=3x^{3}+16x^{2}+x-20$，正是 $k=16$ 時的 $f(x)$。",
        "en": "Multiply the last two brackets first: $(3x+4)(x-1)=3x^{2}+x-4$. Then multiply by $(x+5)$: $3x^{3}+x^{2}-4x+15x^{2}+5x-20=3x^{3}+16x^{2}+x-20$, which is $f(x)$ with $k=16$."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en04-q6",
     "type": "long",
     "topic": "en04",
     "unit": 4,
     "subtopic": "polynomials",
     "difficulty": 2,
     "code": "EN4-Q6",
     "source": "EPH WS06 Q28 · 三次方程的有理根數目",
     "stem": {
      "en": "Consider $f(x)=(x-7)(x^{2}+7x-11)$. How many rational roots does the equation $f(x)=0$ have? Explain your answer.",
      "zh": "考慮 $f(x)=(x-7)(x^{2}+7x-11)$。方程 $f(x)=0$ 有多少個有理根？試解釋你的答案。"
     },
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 拆成兩個方程",
         "en": "Step 1 · Split the equation into two"
        },
        "math": "f(x)=0\n\\Rightarrow x-7=0\\ \\text{or}\\ x^{2}+7x-11=0",
        "zh": "兩個因式相乘等於 0，代表至少一個因式等於 0，所以 $x-7=0$ 或 $x^{2}+7x-11=0$。第一個直接給 $x=7$，第二個要用二次公式。",
        "en": "A product of two factors is 0 only if at least one factor is 0, so $x-7=0$ or $x^{2}+7x-11=0$. The first gives $x=7$ immediately; the second needs the quadratic formula.",
        "marking": "(1M)",
        "highlight": [
         "x=7"
        ]
       },
       {
        "title": {
         "zh": "第 2 步 · 用二次公式解二次部分",
         "en": "Step 2 · Solve the quadratic part with the formula"
        },
        "math": "x=\\frac{-7\\pm\\sqrt{7^{2}-4(1)(-11)}}{2}\n=\\frac{-7\\pm\\sqrt{93}}{2}",
        "zh": "二次公式：$x=\\\\frac{-b\\\\pm\\\\sqrt{b^{2}-4ac}}{2a}$，其中 $a=1$、$b=7$、$c=-11$。判別式是 $49+44=93$，所以 $x=\\\\frac{-7\\\\pm\\\\sqrt{93}}{2}$。",
        "en": "Quadratic formula: $x=\\frac{-b\\pm\\sqrt{b^{2}-4ac}}{2a}$ with $a=1$, $b=7$ and $c=-11$. The discriminant is $49+44=93$, so $x=\\frac{-7\\pm\\sqrt{93}}{2}$.",
        "marking": "(1M)",
        "highlight": [
         "\\frac{-7\\pm\\sqrt{93}}{2}"
        ]
       },
       {
        "title": {
         "zh": "第 3 步 · 判斷這兩個根是不是有理數",
         "en": "Step 3 · Decide whether these two roots are rational"
        },
        "math": "9^{2}=81,\\ 10^{2}=100\n81<93<100\n\\Rightarrow\\sqrt{93}\\ \\text{is irrational}",
        "zh": "$93$ 不是完全平方數（$9^{2}=81$、$10^{2}=100$），所以 $\\\\sqrt{93}$ 是無理數，$\\\\frac{-7\\\\pm\\\\sqrt{93}}{2}$ 這兩個根都是無理根。",
        "en": "$93$ is not a perfect square ($9^{2}=81$ and $10^{2}=100$), so $\\sqrt{93}$ is irrational and both roots $\\frac{-7\\pm\\sqrt{93}}{2}$ are irrational.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 4 步 · 數出有理根的數目",
         "en": "Step 4 · Count the rational roots"
        },
        "math": "\\text{rational roots}: x=7\n\\therefore 1\\ \\text{rational root}",
        "zh": "三個根之中，只有 $x=7$ 是有理數，其餘兩個是無理數。所以方程有 1 個有理根（不是 3 個，也不是 2 個）。",
        "en": "Of the three roots, only $x=7$ is rational; the other two are irrational. So the equation has 1 rational root — not 3 and not 2.",
        "marking": "(1A)",
        "highlight": [
         "1\\ \\text{rational root}"
        ]
       }
      ],
      "traps": [
       {
        "label": "把根號當成有理數",
        "labelEn": "Treating a surd as a rational number",
        "zh": "$\\\\sqrt{93}$ 不是有理數；有理數要可以寫成 $\\\\frac{p}{q}$（$p$、$q$ 是整數）。只有完全平方數開方之後才是有理數。",
        "en": "$\\sqrt{93}$ is not rational. A rational number can be written as $\\frac{p}{q}$ with integers $p$ and $q$; only perfect squares have rational square roots."
       },
       {
        "label": "數錯有理根數目",
        "labelEn": "Miscounting the rational roots",
        "zh": "方程有三個根，但只有一個是有理數；答「3 個」是把「所有根」當成「有理根」。",
        "en": "The equation has three roots but only one is rational. Answering 3 confuses “all roots” with “rational roots”."
       },
       {
        "label": "以為 √93 沒有實根",
        "labelEn": "Thinking the surd means there is no real root",
        "zh": "$\\\\sqrt{93}$ 是實數（約 9.64），所以那兩個是實數的無理根，不是「無實根」；無實根要判別式小於 0。",
        "en": "$\\sqrt{93}$ is a real number (about 9.64), so those two roots are real but irrational — not “no real roots”, which needs a negative discriminant."
       }
      ],
      "tip": {
       "zh": "問「多少個有理根」：先抽因式，再把二次部分用判別式分類。判別式是完全平方數 → 兩個有理根；不是完全平方數 → 該部分沒有有理根。",
       "en": "When asked how many rational roots there are: take out a factor first, then classify the quadratic part by its discriminant. A perfect-square discriminant gives two rational roots; otherwise that part gives none."
      },
      "alt": [
       {
        "name": {
         "zh": "另一方法：有理根檢驗",
         "en": "Alternative: rational-root test"
        },
        "zh": "二次部分 $x^{2}+7x-11$ 若有有理根，必為常數項 $-11$ 的整數因數：$\\pm 1$、$\\pm 11$。逐個代入：$1+7-11=-3$、$1-7-11=-17$、$121+77-11=187$、$121-77-11=33$，全部不是 0，所以二次部分沒有有理根，只有 $x=7$ 是有理根。",
        "en": "If $x^{2}+7x-11$ had a rational root, it would be an integer factor of $-11$, namely $\\pm 1$ or $\\pm 11$. Substituting: $1+7-11=-3$, $1-7-11=-17$, $121+77-11=187$ and $121-77-11=33$, none of which is 0. So the quadratic has no rational root and only $x=7$ is rational."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en04-q7",
     "type": "long",
     "topic": "en04",
     "unit": 4,
     "subtopic": "polynomials",
     "difficulty": 1,
     "code": "EN4-Q7",
     "source": "EPH WS06 Q33 · 多項式的 H.C.F. 與 L.C.M.",
     "stem": {
      "en": "Find the H.C.F. and the L.C.M. of $9a^{3}b^{4}$, $6ab^{2}$ and $15b^{6}$.",
      "zh": "求 $9a^{3}b^{4}$、$6ab^{2}$ 與 $15b^{6}$ 的 H.C.F. 與 L.C.M.。"
     },
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 把係數寫成質因數，逐個字母列次方",
         "en": "Step 1 · Write the coefficients as prime factors and list every index"
        },
        "math": "9a^{3}b^{4}=3^{2}a^{3}b^{4}\n6ab^{2}=2\\cdot 3ab^{2}\n15b^{6}=3\\cdot 5b^{6}",
        "zh": "先把三個式寫清楚：$9=3^{2}$、$6=2\\\\cdot 3$、$15=3\\\\cdot 5$；字母方面，第一個有 $a^{3}b^{4}$，第二個有 $ab^{2}$，第三個只有 $b^{6}$（沒有 $a$）。",
        "en": "Write the three expressions clearly: $9=3^{2}$, $6=2\\cdot 3$ and $15=3\\cdot 5$. For the letters, the first has $a^{3}b^{4}$, the second has $ab^{2}$ and the third has only $b^{6}$ (no $a$).",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · H.C.F.：每種因式取最低次方",
         "en": "Step 2 · H.C.F.: take the lowest power of each common factor"
        },
        "math": "\\text{H.C.F.}=3b^{2}",
        "zh": "H.C.F. 要三項都有：係數的 H.C.F. 是 3（$3^{2}$、$3$、$3$ 取最低），$b$ 三項都有，最低次方是 $b^{2}$。$a$ 只在首兩項出現，第三項 $15b^{6}$ 沒有 $a$，所以 $a$ 不可以放入 H.C.F.。答案 H.C.F. $=3b^{2}$。",
        "en": "The H.C.F. must divide all three: the H.C.F. of the coefficients is 3 ($3^{2}$, $3$ and $3$, lowest taken), and $b$ appears in all three with lowest power $b^{2}$. The letter $a$ appears only in the first two expressions and is absent from $15b^{6}$, so it cannot be part of the H.C.F. Hence the H.C.F. is $3b^{2}$.",
        "marking": "(1A)",
        "highlight": [
         "3b^{2}"
        ]
       },
       {
        "title": {
         "zh": "第 3 步 · L.C.M. 的係數與字母次方",
         "en": "Step 3 · The coefficient and indices of the L.C.M."
        },
        "math": "\\text{L.C.M. of }9,6,15=90\na:\\ \\max(3,1)=3\nb:\\ \\max(4,2,6)=6",
        "zh": "L.C.M. 要可以被三項整除：係數取 $2\\\\cdot 3^{2}\\\\cdot 5=90$（$2$ 只在第二項出現也要取），$a$ 取最高次方 $a^{3}$，$b$ 取最高次方 $b^{6}$。",
        "en": "The L.C.M. must be divisible by all three: the coefficient is $2\\cdot 3^{2}\\cdot 5=90$ (the $2$ from the second expression must be included), $a$ takes its highest power $a^{3}$, and $b$ takes its highest power $b^{6}$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 寫出 L.C.M.",
         "en": "Step 4 · State the L.C.M."
        },
        "math": "\\text{L.C.M.}=90a^{3}b^{6}",
        "zh": "把所有最高的部分乘起來：L.C.M. $=90a^{3}b^{6}$。檢查：$90a^{3}b^{6}\\div 9a^{3}b^{4}=10b^{2}$、$\\div 6ab^{2}=15a^{2}b^{4}$、$\\div 15b^{6}=6a^{3}$，三項都整除，答案正確。",
        "en": "Multiply the highest parts together: the L.C.M. is $90a^{3}b^{6}$. Check: $90a^{3}b^{6}\\div 9a^{3}b^{4}=10b^{2}$, $\\div 6ab^{2}=15a^{2}b^{4}$ and $\\div 15b^{6}=6a^{3}$, all exact, so the answer is right.",
        "marking": "(1A)",
        "highlight": [
         "90a^{3}b^{6}"
        ]
       }
      ],
      "traps": [
       {
        "label": "H.C.F. 取了最高次方",
        "labelEn": "Taking the highest powers for the H.C.F.",
        "zh": "H.C.F. 要「每一項都分得到」，所以取最低次方；取最高次方（$90a^{3}b^{6}$）其實是 L.C.M.。",
        "en": "The H.C.F. must divide every expression, so the lowest powers are taken. Taking the highest powers gives the L.C.M., not the H.C.F."
       },
       {
        "label": "L.C.M. 漏了係數的質因數",
        "labelEn": "Missing a prime factor in the L.C.M. coefficient",
        "zh": "$2$ 只在 $6ab^{2}$ 出現，但 L.C.M. 一定要包含它，否則不能被 $6ab^{2}$ 整除；漏了就會得 $45a^{3}b^{6}$。",
        "en": "The factor $2$ appears only in $6ab^{2}$, yet the L.C.M. must contain it, otherwise it is not divisible by $6ab^{2}$; missing it gives $45a^{3}b^{6}$."
       },
       {
        "label": "以為沒有 a",
        "labelEn": "Leaving $a$ out of the L.C.M.",
        "zh": "第三項 $15b^{6}$ 沒有 $a$，但 L.C.M. 要包含所有出現過的因式，所以 $a^{3}$ 一定要保留。",
        "en": "The third expression $15b^{6}$ has no $a$, but the L.C.M. must contain every factor that appears anywhere, so $a^{3}$ must stay."
       }
      ],
      "tip": {
       "zh": "做 H.C.F.／L.C.M. 前一定先把係數拆成質因數，字母逐個列出來比較。H.C.F. 取「最低、且每項都有」，L.C.M. 取「最高、所有出現過」。",
       "en": "Before finding an H.C.F. or L.C.M., write every coefficient as a product of primes and list the letters one by one. The H.C.F. takes the lowest power of factors present everywhere; the L.C.M. takes the highest power of every factor that appears."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：逐項除回去",
         "en": "Check: divide back"
        },
        "zh": "$9a^{3}b^{4}\\div 3b^{2}=3a^{3}b^{2}$、$6ab^{2}\\div 3b^{2}=2a$、$15b^{6}\\div 3b^{2}=5b^{4}$，三項都整除，所以 H.C.F. $=3b^{2}$（第三項沒有 $a$，H.C.F. 就不可以含 $a$）。L.C.M. 方面：$90a^{3}b^{6}\\div 9a^{3}b^{4}=10b^{2}$、$\\div 6ab^{2}=15a^{2}b^{4}$、$\\div 15b^{6}=6a^{3}$，三項都整除。",
        "en": "$9a^{3}b^{4}\\div 3b^{2}=3a^{3}b^{2}$, $6ab^{2}\\div 3b^{2}=2a$ and $15b^{6}\\div 3b^{2}=5b^{4}$, all exact, so the H.C.F. is $3b^{2}$ (the third expression has no $a$, so the H.C.F. cannot contain $a$). For the L.C.M.: $90a^{3}b^{6}\\div 9a^{3}b^{4}=10b^{2}$, $\\div 6ab^{2}=15a^{2}b^{4}$ and $\\div 15b^{6}=6a^{3}$, all exact."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en04-q8",
     "type": "long",
     "topic": "en04",
     "unit": 4,
     "subtopic": "polynomials",
     "difficulty": 2,
     "code": "EN4-Q8",
     "source": "EPH WS06 Q40 · 有理函數（除法）",
     "stem": {
      "en": "Simplify $\\dfrac{6x^{2}+12x-18}{x+3}\\div\\dfrac{12x^{2}-9x-3}{2x-5}$.",
      "zh": "化簡 $\\dfrac{6x^{2}+12x-18}{x+3}\\div\\dfrac{12x^{2}-9x-3}{2x-5}$。"
     },
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 先分解兩個分子",
         "en": "Step 1 · Factorise both numerators first"
        },
        "math": "6x^{2}+12x-18=6(x^{2}+2x-3)\n=6(x+3)(x-1)\n12x^{2}-9x-3=3(4x^{2}-3x-1)\n=3(4x+1)(x-1)",
        "zh": "$6x^{2}+12x-18$ 先抽 6：$6(x^{2}+2x-3)$，再分解成 $6(x+3)(x-1)$。$12x^{2}-9x-3$ 先抽 3：$3(4x^{2}-3x-1)$，再分解成 $3(4x+1)(x-1)$。先把係數抽出來，之後約分就不會漏。",
        "en": "Take out 6 from $6x^{2}+12x-18$: $6(x^{2}+2x-3)$, which factorises to $6(x+3)(x-1)$. Take out 3 from $12x^{2}-9x-3$: $3(4x^{2}-3x-1)$, which factorises to $3(4x+1)(x-1)$. Taking the numbers out first keeps the cancelling clean.",
        "marking": "(1M)",
        "highlight": [
         "6(x+3)(x-1)",
         "3(4x+1)(x-1)"
        ]
       },
       {
        "title": {
         "zh": "第 2 步 · 除法變成乘以倒數",
         "en": "Step 2 · Turn the division into multiplication by the reciprocal"
        },
        "math": "=\\frac{6(x+3)(x-1)}{x+3}\n\\times\\frac{2x-5}{3(4x+1)(x-1)}",
        "zh": "除以一個分數等於乘以它的倒數：把第二個分數的分子分母倒轉，除號變成乘號。這一步不可以只把分子倒轉，分母也要一起倒轉。",
        "en": "Dividing by a fraction means multiplying by its reciprocal: turn the second fraction upside down and change the sign to multiplication. Both its numerator and denominator must be inverted.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 約去公因式",
         "en": "Step 3 · Cancel the common factors"
        },
        "math": "=\\frac{6(x-1)(2x-5)}{3(4x+1)(x-1)}\n=\\frac{6(2x-5)}{3(4x+1)}",
        "zh": "$(x+3)$ 在分子分母各有一個，先約去；$(x-1)$ 也各有一個，再約去。剩下 $\\\\frac{6(2x-5)}{3(4x+1)}$。約分只可以約「整塊因式」，不可以把 $x$ 單獨約走。",
        "en": "$(x+3)$ appears in both numerator and denominator, so cancel it; $(x-1)$ also appears in both, so cancel that too. This leaves $\\frac{6(2x-5)}{3(4x+1)}$. Only whole factors may be cancelled, never a single $x$.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 4 步 · 約去係數，寫出答案",
         "en": "Step 4 · Cancel the numbers and state the answer"
        },
        "math": "=\\frac{2(2x-5)}{4x+1}",
        "zh": "$6$ 與 $3$ 可以約，剩下 $2$，所以答案是 $\\\\frac{2(2x-5)}{4x+1}$。分子可以展開成 $4x-10$，但保留因式形式通常更清楚。",
        "en": "The $6$ and $3$ cancel down to $2$, so the answer is $\\frac{2(2x-5)}{4x+1}$. The numerator may be expanded to $4x-10$, but the factorised form is usually clearer.",
        "marking": "(1A)",
        "highlight": [
         "\\frac{2(2x-5)}{4x+1}"
        ]
       }
      ],
      "traps": [
       {
        "label": "除法沒有倒轉",
        "labelEn": "Not inverting the second fraction",
        "zh": "$\\\\frac{A}{B}\\\\div\\\\frac{C}{D}=\\\\frac{A}{B}\\\\times\\\\frac{D}{C}$；如果照抄成 $\\\\frac{A}{B}\\\\times\\\\frac{C}{D}$，答案會完全不同。",
        "en": "$\\frac{A}{B}\\div\\frac{C}{D}=\\frac{A}{B}\\times\\frac{D}{C}$; copying it as $\\frac{A}{B}\\times\\frac{C}{D}$ gives a completely different answer."
       },
       {
        "label": "只約字母，沒有先分解",
        "labelEn": "Cancelling letters without factorising",
        "zh": "$\\\\frac{6x^{2}+12x-18}{x+3}$ 不可以把 $6x^{2}$ 與 $x$ 直接約；一定要先把分子分解成 $6(x+3)(x-1)$，才看得到 $(x+3)$。",
        "en": "In $\\frac{6x^{2}+12x-18}{x+3}$ you cannot cancel $6x^{2}$ against $x$; the numerator must first be factorised to $6(x+3)(x-1)$ so that the factor $(x+3)$ becomes visible."
       },
       {
        "label": "漏抽係數",
        "labelEn": "Forgetting the numerical factor",
        "zh": "$12x^{2}-9x-3=3(4x^{2}-3x-1)$，抽了 3 之後才分解得 $(4x+1)(x-1)$；漏了 3，最後的係數就會錯成 $6$ 而不是 $2$。",
        "en": "$12x^{2}-9x-3=3(4x^{2}-3x-1)$, and only then $(4x+1)(x-1)$. Missing the 3 leaves a final coefficient of 6 instead of 2."
       }
      ],
      "tip": {
       "zh": "有理函數三步：全部分解 → 除法倒轉相乘 → 約去整塊公因式。做完可以代一個數（例如 $x=0$）檢查原式與答案是否相等。",
       "en": "Three steps for rational functions: factorise everything, invert and multiply for a division, then cancel whole common factors. As a check, substitute a value such as $x=0$ into the original and the answer."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：代 $x=0$",
         "en": "Check: substitute $x=0$"
        },
        "zh": "代 $x=0$：原式 $=\\frac{-18}{3}\\div\\frac{-3}{-5}=-6\\div 0.6=-10$；答案 $\\frac{2(-5)}{1}=-10$，兩者相同。",
        "en": "Put $x=0$: the original expression is $\\frac{-18}{3}\\div\\frac{-3}{-5}=-6\\div 0.6=-10$, and the answer gives $\\frac{2(-5)}{1}=-10$, so they agree."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en04-q9",
     "type": "long",
     "topic": "en04",
     "unit": 4,
     "subtopic": "polynomials",
     "difficulty": 3,
     "code": "EN4-Q9",
     "source": "EPH WS06 Practice 1 · Modified from HKDSE 2018 Paper 1 Q12",
     "stem": {
      "en": "Let $f(x)=x^{2}(4x+a)+b$, where $a$ and $b$ are constants. It is given that $f(x)$ is divisible by $x+3$. When $f(x)$ is divided by $x-2$, the remainder is $a+74$.",
      "zh": "設 $f(x)=x^{2}(4x+a)+b$，其中 $a$、$b$ 為常數。已知 $f(x)$ 可被 $x+3$ 整除；當 $f(x)$ 除以 $x-2$ 時，餘式為 $a+74$。"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "Find $a$ and $b$.",
       "en": "Find $a$ and $b$.",
       "zh": "求 $a$ 與 $b$。",
       "marks": 3
      },
      {
       "label": "(b)",
       "text": "Someone claims that the equation $f(x)=0$ has two irrational roots. Do you agree? Explain your answer.",
       "en": "Someone claims that the equation $f(x)=0$ has two irrational roots. Do you agree? Explain your answer.",
       "zh": "有人聲稱方程 $f(x)=0$ 有兩個無理根。你是否同意？試解釋你的答案。",
       "marks": 4
      }
     ],
     "marks": 7,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 用「可被 $x+3$ 整除」列方程",
         "en": "Step 1 · Use divisibility by $x+3$ to form an equation"
        },
        "math": "f(-3)=0\n9(4(-3)+a)+b=0\n-108+9a+b=0",
        "zh": "「$f(x)$ 可被 $x+3$ 整除」代表 $f(-3)=0$。先寫 $f(x)=x^{2}(4x+a)+b$，代入 $x=-3$：$(-3)^{2}=9$，括號內是 $4(-3)+a=-12+a$，所以 $9(-12+a)+b=0$，即 $-108+9a+b=0$。",
        "en": "“$f(x)$ is divisible by $x+3$” means $f(-3)=0$. Write $f(x)=x^{2}(4x+a)+b$ and put $x=-3$: $(-3)^{2}=9$ and the bracket is $4(-3)+a=-12+a$, so $9(-12+a)+b=0$, that is $-108+9a+b=0$.",
        "marking": "(1M)",
        "highlight": [
         "f(-3)=0"
        ]
       },
       {
        "title": {
         "zh": "第 2 步 · 用「除以 $x-2$ 餘 $a+74$」列方程",
         "en": "Step 2 · Use the remainder $a+74$ on division by $x-2$"
        },
        "math": "f(2)=a+74\n4(8+a)+b=a+74\n32+4a+b=a+74",
        "zh": "除以 $x-2$ 的餘式是 $f(2)$，所以 $f(2)=a+74$。代入 $x=2$：$2^{2}=4$，括號內是 $8+a$，得 $4(8+a)+b=a+74$，即 $32+4a+b=a+74$。留意餘式本身含有 $a$，不可以寫成 $74$。",
        "en": "The remainder on division by $x-2$ is $f(2)$, so $f(2)=a+74$. With $x=2$: $2^{2}=4$ and the bracket is $8+a$, giving $4(8+a)+b=a+74$, that is $32+4a+b=a+74$. The remainder itself contains $a$, so it is not simply 74.",
        "marking": "(1M)",
        "highlight": [
         "f(2)=a+74"
        ]
       },
       {
        "title": {
         "zh": "第 3 步 · 解聯立方程求 $a$、$b$",
         "en": "Step 3 · Solve the simultaneous equations for $a$ and $b$"
        },
        "math": "9a+b=108\n3a+b=42\n\\Rightarrow 6a=66\n\\Rightarrow a=11,\\ b=9",
        "zh": "第一式是 $9a+b=108$；第二式 $32+4a+b=a+74$ 兩邊減 $a$、減 32，得 $3a+b=42$。兩式相減：$6a=66$，所以 $a=11$。代回 $3a+b=42$ 得 $33+b=42$，所以 $b=9$。",
        "en": "The first equation is $9a+b=108$. In the second, $32+4a+b=a+74$, subtract $a$ and 32 to get $3a+b=42$. Subtracting gives $6a=66$, so $a=11$; then $33+b=42$, so $b=9$.",
        "marking": "(1A)",
        "highlight": [
         "a=11",
         "b=9"
        ]
       },
       {
        "title": {
         "zh": "第 4 步 · 寫出三次式並抽出 $x+3$",
         "en": "Step 4 · Write the cubic and take out $x+3$"
        },
        "math": "f(x)=4x^{3}+11x^{2}+9\n=(x+3)(4x^{2}-x+3)",
        "zh": "把 $a=11$、$b=9$ 寫回：$f(x)=x^{2}(4x+11)+9=4x^{3}+11x^{2}+9$。因為已知 $x+3$ 是因式，用長除法或比較係數得 $f(x)=(x+3)(4x^{2}-x+3)$。展開檢查：$4x^{3}-x^{2}+3x+12x^{2}-3x+9=4x^{3}+11x^{2}+9$。",
        "en": "Put $a=11$ and $b=9$ back: $f(x)=x^{2}(4x+11)+9=4x^{3}+11x^{2}+9$. Since $x+3$ is a known factor, long division or comparing coefficients gives $f(x)=(x+3)(4x^{2}-x+3)$. Check by expanding: $4x^{3}-x^{2}+3x+12x^{2}-3x+9=4x^{3}+11x^{2}+9$.",
        "marking": "(1M)",
        "highlight": [
         "(x+3)(4x^{2}-x+3)"
        ]
       },
       {
        "title": {
         "zh": "第 5 步 · 計二次部分的判別式",
         "en": "Step 5 · Find the discriminant of the quadratic part"
        },
        "math": "\\Delta=(-1)^{2}-4(4)(3)\n=1-48\n=-47",
        "zh": "二次部分 $4x^{2}-x+3=0$ 的判別式是 $b^{2}-4ac=(-1)^{2}-4(4)(3)=1-48=-47$。計的時候要連 $a=4$ 一起代入，不可以只寫 $(-1)^{2}-4(3)$。",
        "en": "The discriminant of $4x^{2}-x+3=0$ is $b^{2}-4ac=(-1)^{2}-4(4)(3)=1-48=-47$. The leading coefficient 4 must be included, not just $(-1)^{2}-4(3)$.",
        "marking": "(1M)",
        "highlight": [
         "\\Delta=-47"
        ]
       },
       {
        "title": {
         "zh": "第 6 步 · 由判別式判斷二次部分沒有實根",
         "en": "Step 6 · Use the negative discriminant to rule out real roots"
        },
        "math": "\\Delta<0\n\\Rightarrow 4x^{2}-x+3=0\n\\ \\text{has no real roots}",
        "zh": "判別式 $-47<0$，所以 $4x^{2}-x+3=0$ 沒有實根。也就是說，三次方程的三個根之中，只有 $x=-3$ 這一個。",
        "en": "Since the discriminant is $-47<0$, the equation $4x^{2}-x+3=0$ has no real roots. Hence the cubic has only one root, $x=-3$.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 7 步 · 回應聲稱",
         "en": "Step 7 · Answer the claim"
        },
        "math": "f(x)=0\\Rightarrow x=-3\\ \\text{only}\n\\therefore\\ \\text{disagree}",
        "zh": "$f(x)=0$ 只有 $x=-3$ 一個根，而 $-3$ 是有理數，所以方程沒有兩個無理根，更沒有兩個根。聲稱不成立，答案是「不同意」。",
        "en": "$f(x)=0$ has only the root $x=-3$, and $-3$ is rational, so the equation does not have two irrational roots — it does not even have two roots. The claim is false, so the answer is “disagree”.",
        "marking": "(1A)",
        "highlight": [
         "\\text{disagree}"
        ]
       }
      ],
      "traps": [
       {
        "label": "把餘式當成 74",
        "labelEn": "Treating the remainder as 74",
        "zh": "題目說餘式是 $a+74$，不是 $74$；漏掉那個 $a$，第二條方程就會變成 $4a+b=42$，$a$、$b$ 全錯。",
        "en": "The remainder is $a+74$, not 74. Dropping that $a$ turns the second equation into $4a+b=42$ and makes both $a$ and $b$ wrong."
       },
       {
        "label": "判別式漏了首項係數",
        "labelEn": "Leaving the leading coefficient out of the discriminant",
        "zh": "$4x^{2}-x+3$ 的 $a=4$，所以 $4ac=4(4)(3)=48$；漏了這個 4 會得 $-11$，雖然結論一樣，但步驟分會失。",
        "en": "For $4x^{2}-x+3$ the leading coefficient is $a=4$, so $4ac=4(4)(3)=48$. Missing that 4 gives $-11$: the conclusion happens to match, but the method mark is lost."
       },
       {
        "label": "無理根與無實根混淆",
        "labelEn": "Confusing irrational roots with non-real roots",
        "zh": "$\\\\Delta<0$ 代表「無實根」，不是「兩個無理根」。無理根是實數（帶根號），判別式一定大於 0。",
        "en": "$\\Delta<0$ means “no real roots”, not “two irrational roots”. Irrational roots are real numbers containing surds, and they require a positive discriminant."
       },
       {
        "label": "忘記 −3 也是根",
        "labelEn": "Forgetting that $-3$ is a root",
        "zh": "就算二次部分沒有實根，$x+3=0$ 仍然給了一個根 $x=-3$；答「沒有根」也是錯的。",
        "en": "Even if the quadratic part has no real roots, $x+3=0$ still gives the root $x=-3$; answering “no roots” is also wrong."
       }
      ],
      "tip": {
       "zh": "這類 claim 題的固定流程：用兩個條件求 $a$、$b$ → 分解 $f(x)$ → 用判別式判斷二次部分 → 數清根之後才回應聲稱。每一步都要寫理由，最後一句一定要明確寫「同意／不同意」。",
       "en": "A fixed routine for this kind of claim: use the two conditions to find $a$ and $b$, factorise $f(x)$, use the discriminant on the quadratic part, count the roots, and only then answer. Give a reason at every step and state “agree” or “disagree” explicitly at the end."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：代回兩個條件並展開",
         "en": "Check: substitute both conditions and expand"
        },
        "zh": "把 $a=11$、$b=9$ 代回：$f(-3)=0$、$f(2)=85=a+74$，兩個條件都成立；再展開 $(x+3)(4x^{2}-x+3)=4x^{3}+11x^{2}+9$，與 $f(x)$ 相同。",
        "en": "With $a=11$ and $b=9$: $f(-3)=0$ and $f(2)=85=a+74$, so both conditions hold. Expanding $(x+3)(4x^{2}-x+3)=4x^{3}+11x^{2}+9$ also matches $f(x)$."
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
      "id": "eph-en04-m1",
      "type": "mc",
      "topic": "en04",
      "unit": 4,
      "subtopic": "polynomials",
      "difficulty": 1,
      "code": "EN4-M1",
      "source": "EPH WS06 MC Q1 · [HKDSE 2015 Paper 2 Q1]",
      "stem": {
       "en": "$(x-1)(x^{2}-x-1)=$",
       "zh": "$(x-1)(x^{2}-x-1)=$"
      },
      "options": {
       "A": "$x^{3}-1$",
       "B": "$(x-1)^{3}$",
       "C": "$x^{3}-2x^{2}+1$",
       "D": "$x^{3}-2x^{2}-2x-1$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 逐項乘開",
          "en": "Step 1 · Multiply term by term"
         },
         "math": "(x-1)(x^{2}-x-1)\n=x^{3}-x^{2}-x-x^{2}+x+1",
         "zh": "用分配律：$x$ 乘 $x^{2}-x-1$ 得 $x^{3}-x^{2}-x$；$-1$ 乘 $x^{2}-x-1$ 得 $-x^{2}+x+1$。負號要乘到每一項，尤其是最後的 $-1$ 乘 $-1$ 得 $+1$。",
         "en": "Use the distributive law: $x$ times $x^{2}-x-1$ gives $x^{3}-x^{2}-x$, and $-1$ times $x^{2}-x-1$ gives $-x^{2}+x+1$. The minus must reach every term, especially $-1$ times $-1$, which is $+1$."
        },
        {
         "title": {
          "zh": "第 2 步 · 合併同類項",
          "en": "Step 2 · Collect like terms"
         },
         "math": "=x^{3}-2x^{2}+1",
         "zh": "$-x^{2}-x^{2}=-2x^{2}$，$-x+x=0$，所以結果是 $x^{3}-2x^{2}+1$。$x$ 的一次項剛好抵消，這是本題最容易漏掉的地方。",
         "en": "$-x^{2}-x^{2}=-2x^{2}$ and $-x+x=0$, so the result is $x^{3}-2x^{2}+1$. The $x$ terms cancel exactly, which is the part most often missed."
        },
        {
         "title": {
          "zh": "第 3 步 · 對照選項",
          "en": "Step 3 · Match the options"
         },
         "math": "\\therefore\\ \\text{C}",
         "zh": "答案與 C 相同；A 是只乘首尾，B 是以為 $(x-1)^{3}$，D 是中間項符號錯。",
         "en": "The result matches C. Option A comes from multiplying only the first and last terms, B assumes $(x-1)^{3}$, and D has a sign error in the middle term."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "只乘了 $x$ 與 $x^{2}$、$-1$ 與 $-1$，完全漏掉中間兩項。",
         "en": "Only $x$ times $x^{2}$ and $-1$ times $-1$ were multiplied, so both middle terms are missing."
        },
        {
         "opt": "B",
         "zh": "$(x-1)^{3}=x^{3}-3x^{2}+3x-1$，與本題不同；不要看到兩個括號就當成立方公式。",
         "en": "$(x-1)^{3}=x^{3}-3x^{2}+3x-1$, which is not this product; two brackets do not make a cube formula."
        },
        {
         "opt": "D",
         "zh": "$-1$ 乘 $-1$ 應該是 $+1$，不是 $-1$；而且 $-x+x$ 應該抵消。",
         "en": "$-1$ times $-1$ should be $+1$, not $-1$, and $-x+x$ should cancel."
        }
       ],
       "tip": {
        "zh": "多項式乘法要「每一項都乘到」，乘完之後逐個次方合併同類項；$x$ 項抵消是常見設計，不要以為自己算錯。",
        "en": "Every term must be multiplied by every term; then collect like powers. A cancelling $x$ term is a common design, not a mistake."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算法：代 $x=0$ 與 $x=1$",
          "en": "Check: substitute $x=0$ and $x=1$"
         },
         "zh": "代 $x=0$：左邊 $(-1)(-1)=1$；A 是 $-1$、B 是 $-1$、C 是 $1$、D 是 $-1$，只有 C 符合。再代 $x=1$：左邊是 0，C 是 $1-2+1=0$，確認 C。",
         "en": "Put $x=0$: the left side is $(-1)(-1)=1$; A gives $-1$, B gives $-1$, C gives $1$ and D gives $-1$, so only C matches. Put $x=1$: the left side is 0 and C gives $1-2+1=0$, confirming C."
        }
       ]
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-en04-m3",
      "type": "mc",
      "topic": "en04",
      "unit": 4,
      "subtopic": "polynomials",
      "difficulty": 1,
      "code": "EN4-M3",
      "source": "EPH WS06 MC Q12 · [HKDSE Practice Paper 2 Q5, Sample Paper 2 Q5]",
      "stem": {
       "en": "Let $f(x)=x^{3}+2x^{2}-x+5$. When $f(x)$ is divided by $x+3$, the remainder is",
       "zh": "設 $f(x)=x^{3}+2x^{2}-x+5$。當 $f(x)$ 除以 $x+3$ 時，餘式是"
      },
      "options": {
       "A": "$-7$",
       "B": "$-1$",
       "C": "$11$",
       "D": "$47$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 用餘式定理代入 $x=-3$",
          "en": "Step 1 · Substitute $x=-3$ by the remainder theorem"
         },
         "math": "f(-3)=(-3)^{3}+2(-3)^{2}-(-3)+5\n=-27+18+3+5",
         "zh": "除以 $x+3$ 的餘式是 $f(-3)$。代入時要連括號：$(-3)^{3}=-27$、$2(-3)^{2}=18$、$-(-3)=+3$，最後 $+5$。",
         "en": "The remainder on division by $x+3$ is $f(-3)$. Keep the brackets: $(-3)^{3}=-27$, $2(-3)^{2}=18$, $-(-3)=+3$, and finally $+5$."
        },
        {
         "title": {
          "zh": "第 2 步 · 計出餘式",
          "en": "Step 2 · Evaluate the remainder"
         },
         "math": "=-27+18+3+5\n=-1",
         "zh": "$-27+18=-9$，$-9+3=-6$，$-6+5=-1$，所以餘式是 $-1$，答案是 B。",
         "en": "$-27+18=-9$, then $-9+3=-6$, then $-6+5=-1$, so the remainder is $-1$ and the answer is B."
        }
       ],
       "traps": [
        {
         "opt": "D",
         "zh": "$47$ 是 $f(3)$：把 $x=3$ 代入而不是 $-3$。",
         "en": "47 is $f(3)$: the value 3 was substituted instead of $-3$."
        },
        {
         "opt": "A",
         "zh": "$-7$ 來自把 $-(-3)$ 當成 $-3$（即 $-27+18-3+5$）。",
         "en": "$-7$ comes from treating $-(-3)$ as $-3$, giving $-27+18-3+5$."
        }
       ],
       "tip": {
        "zh": "餘式定理只做一件事：解 $x+3=0$ 得 $x=-3$，代入 $f(x)$。負數代入一定要加括號，尤其是三次方。",
        "en": "The remainder theorem does one thing: solve $x+3=0$ to get $x=-3$ and substitute. Always bracket a negative value, especially in a cube."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算法：長除法",
          "en": "Check: long division"
         },
         "zh": "$x^{3}+2x^{2}-x+5=(x+3)(x^{2}-x+2)-1$，展開右邊得 $x^{3}+2x^{2}-x+6-1=x^{3}+2x^{2}-x+5$，所以餘式是 $-1$。",
         "en": "$x^{3}+2x^{2}-x+5=(x+3)(x^{2}-x+2)-1$; expanding the right side gives $x^{3}+2x^{2}-x+6-1=x^{3}+2x^{2}-x+5$, so the remainder is $-1$."
        }
       ]
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-en04-m4",
      "type": "mc",
      "topic": "en04",
      "unit": 4,
      "subtopic": "polynomials",
      "difficulty": 2,
      "code": "EN4-M4",
      "source": "EPH WS06 MC Q14 · [HKDSE 2019 Paper 2 Q9, 2012 Paper 2 Q4]",
      "stem": {
       "en": "If $k$ is a constant such that $x^{3}+5x^{2}+kx-24$ is divisible by $x-2$, then $k=$",
       "zh": "若 $k$ 為常數，且 $x^{3}+5x^{2}+kx-24$ 可被 $x-2$ 整除，則 $k=$"
      },
      "options": {
       "A": "$-6$",
       "B": "$-2$",
       "C": "$18$",
       "D": "$26$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 用因式定理列方程",
          "en": "Step 1 · Form an equation with the factor theorem"
         },
         "math": "f(2)=0\n2^{3}+5(2)^{2}+2k-24=0\n8+20+2k-24=0",
         "zh": "「可被 $x-2$ 整除」代表 $f(2)=0$。代入 $x=2$：$8+20+2k-24=0$，即 $4+2k=0$。",
         "en": "“Divisible by $x-2$” means $f(2)=0$. Substituting $x=2$ gives $8+20+2k-24=0$, that is $4+2k=0$."
        },
        {
         "title": {
          "zh": "第 2 步 · 解出 $k$",
          "en": "Step 2 · Solve for $k$"
         },
         "math": "2k=-4\nk=-2",
         "zh": "$2k=-4$，所以 $k=-2$，答案是 B。",
         "en": "$2k=-4$, so $k=-2$ and the answer is B."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$-6$ 是代了 $x=-2$（即 $f(-2)=0$），但題目是除以 $x-2$。",
         "en": "$-6$ comes from using $x=-2$, that is $f(-2)=0$, but the divisor is $x-2$."
        },
        {
         "opt": "D",
         "zh": "$26$ 是移項時把 $-24$ 寫成 $+24$：$2k=52$。",
         "en": "$26$ comes from moving $-24$ across as $+24$, giving $2k=52$."
        },
        {
         "opt": "C",
         "zh": "$18$ 是算術錯：把 $8+20-24$ 當成 $-36$ 再除以 2。",
         "en": "$18$ is an arithmetic slip: $8+20-24$ was treated as $-36$ and halved."
        }
       ],
       "tip": {
        "zh": "「整除」＝餘式 0 ＝ 因式定理。先代 $x$ 值，再整理成 $k$ 的一次方程；最後把 $k$ 代回檢查。",
        "en": "“Divisible” means remainder 0, which is the factor theorem. Substitute the value, tidy into a linear equation in $k$, then substitute back to check."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算法：把 $k$ 代回",
          "en": "Check: substitute $k$ back"
         },
         "zh": "把 $k=-2$ 寫回 $f(x)=x^{3}+5x^{2}-2x-24$，代 $x=2$：$8+20-4-24=0$，確實整除，答案正確。",
         "en": "With $k=-2$, $f(x)=x^{3}+5x^{2}-2x-24$; substituting $x=2$ gives $8+20-4-24=0$, so it is indeed divisible and the answer is right."
        }
       ]
      },
      "answer": "B",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-en04-m2",
      "type": "mc",
      "topic": "en04",
      "unit": 4,
      "subtopic": "polynomials",
      "difficulty": 2,
      "code": "EN4-M2",
      "source": "EPH WS06 MC Q3 · [HKDSE 2023 Paper 2 Q2, 2021 Paper 2 Q4, 2020 Paper 2 Q3, 2018 Paper 2 Q4]",
      "stem": {
       "en": "$\\dfrac{4}{x+4}-\\dfrac{5}{x-5}=$",
       "zh": "$\\dfrac{4}{x+4}-\\dfrac{5}{x-5}=$"
      },
      "options": {
       "A": "$\\dfrac{x}{(x+4)(x-5)}$",
       "B": "$\\dfrac{x}{(x+4)(5-x)}$",
       "C": "$\\dfrac{x+40}{(x+4)(x-5)}$",
       "D": "$\\dfrac{x+40}{(x+4)(5-x)}$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 通分母",
          "en": "Step 1 · Use a common denominator"
         },
         "math": "\\frac{4(x-5)-5(x+4)}{(x+4)(x-5)}",
         "zh": "公分母是 $(x+4)(x-5)$。第一個分數要乘 $(x-5)$，第二個要乘 $(x+4)$；分子記得整塊放進括號，否則減號只會影響第一項。",
         "en": "The common denominator is $(x+4)(x-5)$. Multiply the first fraction by $(x-5)$ and the second by $(x+4)$; keep each numerator in brackets so the minus sign affects the whole expression."
        },
        {
         "title": {
          "zh": "第 2 步 · 化簡分子",
          "en": "Step 2 · Simplify the numerator"
         },
         "math": "=\\frac{4x-20-5x-20}{(x+4)(x-5)}\n=\\frac{-x-40}{(x+4)(x-5)}",
         "zh": "分子展開：$4x-20-5x-20$，合併得 $-x-40$。留意 $-5(x+4)=-5x-20$，最後那個 $-20$ 是減號乘正數的結果。",
         "en": "Expand the numerator: $4x-20-5x-20$, which simplifies to $-x-40$. Note $-5(x+4)=-5x-20$; the final $-20$ comes from the minus times a positive."
        },
        {
         "title": {
          "zh": "第 3 步 · 把分母寫成選項的形式",
          "en": "Step 3 · Rewrite the denominator to match the options"
         },
         "math": "\\frac{-(x+40)}{(x+4)(x-5)}\n=\\frac{x+40}{(x+4)(5-x)}",
         "zh": "分子分母同時變號：$\\\\frac{-(x+40)}{(x+4)(x-5)}=\\\\frac{x+40}{(x+4)(5-x)}$，因為 $-(x-5)=5-x$。所以答案是 D。",
         "en": "Change the signs of numerator and denominator together: $\\frac{-(x+40)}{(x+4)(x-5)}=\\frac{x+40}{(x+4)(5-x)}$ because $-(x-5)=5-x$. Hence the answer is D."
        }
       ],
       "traps": [
        {
         "opt": "C",
         "zh": "分子 $x+40$ 對了，但分母仍然寫 $(x-5)$，等於整體差了一個負號。",
         "en": "The numerator $x+40$ is right, but the denominator still has $(x-5)$, so the whole expression differs by a sign."
        },
        {
         "opt": "A",
         "zh": "分子只寫 $x$，是漏掉了常數項 $40$（$-20-20$）。",
         "en": "The numerator is written as $x$, which drops the constant $40$ coming from $-20-20$."
        },
        {
         "opt": "B",
         "zh": "分子漏了 $40$，分母又差了負號，兩處同時出錯。",
         "en": "The numerator loses the $40$ and the denominator has the wrong sign — two errors at once."
        }
       ],
       "tip": {
        "zh": "分數加減三步：通分母、分子整塊加括號、化簡。最後如果選項把 $(x-5)$ 寫成 $(5-x)$，就要分子分母同時變號。",
        "en": "Three steps for adding fractions: common denominator, bracket the whole numerator, simplify. If an option writes $(x-5)$ as $(5-x)$, change the signs of numerator and denominator together."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算法：代 $x=0$",
          "en": "Check: substitute $x=0$"
         },
         "zh": "代 $x=0$：原式 $=\\frac{4}{4}-\\frac{5}{-5}=1+1=2$；D 是 $\\frac{40}{(4)(5)}=2$，A、B 是 0，C 是 $-2$，只有 D 符合。",
         "en": "Put $x=0$: the expression is $\\frac{4}{4}-\\frac{5}{-5}=1+1=2$. Option D gives $\\frac{40}{(4)(5)}=2$, while A and B give 0 and C gives $-2$, so only D matches."
        }
       ]
      },
      "answer": "D",
      "verify": "checked"
     },
     {
      "id": "eph-en04-m5",
      "type": "mc",
      "topic": "en04",
      "unit": 4,
      "subtopic": "polynomials",
      "difficulty": 2,
      "code": "EN4-M5",
      "source": "EPH WS06 MC Q20 · [HKDSE 2020 Paper 2 Q6]",
      "stem": {
       "en": "Let $h(x)=ax^{3}+3ax^{2}-8$, where $a$ is a constant. If $x+1$ is a factor of $h(x)$, then $h(1)=$",
       "zh": "設 $h(x)=ax^{3}+3ax^{2}-8$，其中 $a$ 為常數。若 $x+1$ 是 $h(x)$ 的因式，則 $h(1)=$"
      },
      "options": {
       "A": "$-24$",
       "B": "$0$",
       "C": "$4$",
       "D": "$8$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 用因式定理求 $a$",
          "en": "Step 1 · Use the factor theorem to find $a$"
         },
         "math": "h(-1)=0\n-a+3a-8=0\n2a=8",
         "zh": "$x+1$ 是因式，所以 $h(-1)=0$。代入：$a(-1)^{3}+3a(-1)^{2}-8=-a+3a-8=0$，即 $2a=8$，所以 $a=4$。",
         "en": "$x+1$ is a factor, so $h(-1)=0$. Substituting gives $a(-1)^{3}+3a(-1)^{2}-8=-a+3a-8=0$, so $2a=8$ and $a=4$."
        },
        {
         "title": {
          "zh": "第 2 步 · 求 $h(1)$",
          "en": "Step 2 · Evaluate $h(1)$"
         },
         "math": "h(1)=4(1)^{3}+3(4)(1)^{2}-8\n=4+12-8\n=8",
         "zh": "把 $a=4$ 寫回 $h(x)=4x^{3}+12x^{2}-8$，代 $x=1$ 得 $4+12-8=8$，答案是 D。",
         "en": "With $a=4$, $h(x)=4x^{3}+12x^{2}-8$; substituting $x=1$ gives $4+12-8=8$, so the answer is D."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$0$ 是以為「$x+1$ 是因式」就代表 $h(1)=0$；因式對應的是 $h(-1)=0$。",
         "en": "$0$ assumes that “$x+1$ is a factor” means $h(1)=0$; the factor corresponds to $h(-1)=0$."
        },
        {
         "opt": "C",
         "zh": "$4$ 只是 $a$ 的值，題目問的是 $h(1)$。",
         "en": "$4$ is just the value of $a$; the question asks for $h(1)$."
        }
       ],
       "tip": {
        "zh": "兩步題：先用因式定理求未知數，再代入另一點求值。求完 $a$ 不要停手，看清楚最後一句問的是甚麼。",
        "en": "A two-step question: find the unknown with the factor theorem, then substitute the other value. Do not stop at $a$; read what the last line actually asks for."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算法：代 $a=4$ 檢查",
          "en": "Check: substitute $a=4$"
         },
         "zh": "$a=4$ 時 $h(x)=4x^{3}+12x^{2}-8$，$h(-1)=-4+12-8=0$（符合因式條件），$h(1)=4+12-8=8$，答案正確。",
         "en": "With $a=4$, $h(x)=4x^{3}+12x^{2}-8$; then $h(-1)=-4+12-8=0$ (the factor condition holds) and $h(1)=4+12-8=8$, so the answer is right."
        }
       ]
      },
      "answer": "D",
      "verify": "checked"
     },
     {
      "id": "eph-en04-m6",
      "type": "mc",
      "topic": "en04",
      "unit": 4,
      "subtopic": "polynomials",
      "difficulty": 3,
      "code": "EN4-M6",
      "source": "EPH WS06 MC Q30 · [HKDSE 2023 Paper 2 Q9]",
      "stem": {
       "en": "Let $f(x)=ax^{3}+bx-2$, where $a$ and $b$ are constants. If $x-3$ is a factor of $f(x)$, find the remainder when $f(x)$ is divided by $x+3$.",
       "zh": "設 $f(x)=ax^{3}+bx-2$，其中 $a$、$b$ 為常數。若 $x-3$ 是 $f(x)$ 的因式，求 $f(x)$ 除以 $x+3$ 的餘式。"
      },
      "options": {
       "A": "$-4$",
       "B": "$0$",
       "C": "$2$",
       "D": "$4$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 由因式條件寫出 $27a+3b$",
          "en": "Step 1 · Use the factor condition to get $27a+3b$"
         },
         "math": "f(3)=0\n27a+3b-2=0\n27a+3b=2",
         "zh": "$x-3$ 是因式，所以 $f(3)=0$：$a(3)^{3}+b(3)-2=27a+3b-2=0$，即 $27a+3b=2$。",
         "en": "$x-3$ is a factor, so $f(3)=0$: $a(3)^{3}+b(3)-2=27a+3b-2=0$, hence $27a+3b=2$."
        },
        {
         "title": {
          "zh": "第 2 步 · 把 $f(-3)$ 寫成 $27a+3b$ 的形式",
          "en": "Step 2 · Write $f(-3)$ in terms of $27a+3b$"
         },
         "math": "f(-3)=a(-3)^{3}+b(-3)-2\n=-27a-3b-2\n=-(27a+3b)-2",
         "zh": "要求的餘式是 $f(-3)$。把它寫成 $-27a-3b-2$，再提出負號：$-(27a+3b)-2$。這樣就把未知數整合成第一步已知的 $27a+3b$。",
         "en": "The required remainder is $f(-3)$. Write it as $-27a-3b-2$ and factor out the minus: $-(27a+3b)-2$. This turns the unknowns into the known quantity $27a+3b$."
        },
        {
         "title": {
          "zh": "第 3 步 · 代入求值",
          "en": "Step 3 · Substitute and evaluate"
         },
         "math": "=-(2)-2\n=-4",
         "zh": "代入 $27a+3b=2$ 得 $-2-2=-4$，答案是 A。",
         "en": "Substituting $27a+3b=2$ gives $-2-2=-4$, so the answer is A."
        }
       ],
       "traps": [
        {
         "opt": "D",
         "zh": "$4$ 是最後漏了那個 $-2$（只計 $-(27a+3b)=-2$）。",
         "en": "$4$ drops the final $-2$ and only evaluates $-(27a+3b)=-2$."
        },
        {
         "opt": "B",
         "zh": "$0$ 是以為因式定理對 $x+3$ 也成立（$f(-3)=0$），但題目只說 $x-3$ 是因式。",
         "en": "$0$ assumes the factor theorem also applies to $x+3$, but only $x-3$ is given as a factor."
        }
       ],
       "tip": {
        "zh": "這類題不需要求出 $a$、$b$：由一個條件得到 $27a+3b=2$，再把要求的 $f(-3)$ 整理成同一個組合，就可以直接代入。",
        "en": "You do not need $a$ and $b$ separately: one condition gives $27a+3b=2$, and rewriting $f(-3)$ as the same combination lets you substitute directly."
       },
       "alt": [
        {
         "name": {
          "zh": "另一方法：整體代入",
          "en": "Alternative: substitute the whole block"
         },
         "zh": "由 $27a+3b=2$ 可知 $-27a-3b=-2$，所以 $f(-3)=-27a-3b-2=-2-2=-4$，完全不需要分別求出 $a$、$b$。",
         "en": "From $27a+3b=2$ we get $-27a-3b=-2$, so $f(-3)=-27a-3b-2=-2-2=-4$ without finding $a$ and $b$ separately."
        }
       ]
      },
      "answer": "A",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-en04-m7",
      "type": "mc",
      "topic": "en04",
      "unit": 4,
      "subtopic": "polynomials",
      "difficulty": 1,
      "code": "EN4-M7",
      "source": "EPH WS06 MC Q45 · [HKDSE 2023 Paper 2 Q32, 2016 Paper 2 Q31]",
      "stem": {
       "en": "The L.C.M. of $10y^{3}$, $8xy$ and $6x^{5}y$ is",
       "zh": "$10y^{3}$、$8xy$ 與 $6x^{5}y$ 的 L.C.M. 是"
      },
      "options": {
       "A": "$2y$",
       "B": "$2xy$",
       "C": "$120x^{5}y^{3}$",
       "D": "$120x^{6}y^{5}$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 把係數寫成質因數",
          "en": "Step 1 · Write the coefficients as prime factors"
         },
         "math": "10y^{3}=2\\cdot 5y^{3}\n8xy=2^{3}xy\n6x^{5}y=2\\cdot 3x^{5}y",
         "zh": "L.C.M. 要包含所有因式：係數取 $2^{3}\\cdot 3\\cdot 5$（$2$ 的最高次方是 $2^{3}$），$x$ 取最高次方 $x^{5}$，$y$ 取最高次方 $y^{3}$。",
         "en": "The L.C.M. must contain every factor: the coefficient is $2^{3}\\cdot 3\\cdot 5$ (the highest power of 2 is $2^{3}$), $x$ takes its highest power $x^{5}$, and $y$ takes $y^{3}$."
        },
        {
         "title": {
          "zh": "第 2 步 · 乘出答案",
          "en": "Step 2 · Multiply out the answer"
         },
         "math": "\\text{L.C.M.}=2^{3}\\cdot 3\\cdot 5x^{5}y^{3}\n=120x^{5}y^{3}",
         "zh": "$2^{3}=8$，$8\\\\cdot 3\\\\cdot 5=120$，所以 L.C.M. $=120x^{5}y^{3}$，答案是 C。",
         "en": "$2^{3}=8$ and $8\\cdot 3\\cdot 5=120$, so the L.C.M. is $120x^{5}y^{3}$ and the answer is C."
        }
       ],
       "traps": [
        {
         "opt": "D",
         "zh": "$120x^{6}y^{5}$ 把指數「相加」了；L.C.M. 要取最高次方，不是相加。",
         "en": "$120x^{6}y^{5}$ adds the indices; the L.C.M. takes the highest power, not the sum."
        },
        {
         "opt": "A",
         "zh": "$2y$ 是 H.C.F.（最低次方），不是 L.C.M.。",
         "en": "$2y$ is the H.C.F. (lowest powers), not the L.C.M."
        },
        {
         "opt": "B",
         "zh": "$2xy$ 也是取了最低次方，而且漏了係數的 $3$ 與 $5$。",
         "en": "$2xy$ also uses the lowest powers and drops the factors 3 and 5 from the coefficients."
        }
       ],
       "tip": {
        "zh": "H.C.F. 與 L.C.M. 的分別只有一句：H.C.F. 取最低次方（且每項都有），L.C.M. 取最高次方（所有出現過）。係數要先拆質因數。",
        "en": "The difference is one line: the H.C.F. takes the lowest powers of factors common to all, the L.C.M. the highest powers of every factor present. Factorise the coefficients first."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算法：先代 $x=y=1$ 再比指數",
          "en": "Check: put $x=y=1$, then compare indices"
         },
         "zh": "代 $x=y=1$：三式變成 $10$、$8$、$6$，L.C.M. $=120$，C 與 D 的係數都符合，所以要用指數分辨：$x$ 的最高次方是 $x^{5}$、$y$ 的最高次方是 $y^{3}$，只有 C 的 $120x^{5}y^{3}$ 符合；D 把指數相加成 $x^{6}y^{5}$。",
         "en": "Put $x=y=1$: the expressions become $10$, $8$ and $6$ with L.C.M. $120$, so both C and D have the right coefficient. Compare the indices instead: the highest power of $x$ is $x^{5}$ and of $y$ is $y^{3}$, which only C has; D adds the indices to get $x^{6}y^{5}$."
        }
       ]
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-en04-m8",
      "type": "mc",
      "topic": "en04",
      "unit": 4,
      "subtopic": "polynomials",
      "difficulty": 2,
      "code": "EN4-M8",
      "source": "EPH WS06 MC Q47 · [Modified from HKDSE 2013 Paper 2 Q31]",
      "stem": {
       "en": "The H.C.F. of $x^{2}-x-2$, $x^{2}-4$ and $x^{2}-4x+4$ is",
       "zh": "$x^{2}-x-2$、$x^{2}-4$ 與 $x^{2}-4x+4$ 的 H.C.F. 是"
      },
      "options": {
       "A": "$x+2$",
       "B": "$x-2$",
       "C": "$(x+1)(x+2)(x-2)$",
       "D": "$(x+1)(x+2)(x-2)^{2}$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 三個表達式各自分解",
          "en": "Step 1 · Factorise all three expressions"
         },
         "math": "x^{2}-x-2=(x-2)(x+1)\nx^{2}-4=(x-2)(x+2)\nx^{2}-4x+4=(x-2)^{2}",
         "zh": "$x^{2}-x-2$ 找兩個數乘積 $-2$、和 $-1$，得 $(x-2)(x+1)$；$x^{2}-4$ 是平方差，得 $(x-2)(x+2)$；$x^{2}-4x+4$ 是完全平方，得 $(x-2)^{2}$。",
         "en": "For $x^{2}-x-2$, two numbers with product $-2$ and sum $-1$ give $(x-2)(x+1)$; $x^{2}-4$ is a difference of squares, $(x-2)(x+2)$; $x^{2}-4x+4$ is a perfect square, $(x-2)^{2}$."
        },
        {
         "title": {
          "zh": "第 2 步 · 取三式都有的因式（最低次方）",
          "en": "Step 2 · Take the factor common to all three (lowest power)"
         },
         "math": "\\text{H.C.F.}=x-2",
         "zh": "三式都含有 $(x-2)$，最低次方是 1 次，所以 H.C.F. $=x-2$，答案是 B。$(x+1)$ 與 $(x+2)$ 不是三式都有，不能放入 H.C.F.。",
         "en": "All three contain $(x-2)$, and its lowest power is 1, so the H.C.F. is $x-2$ and the answer is B. $(x+1)$ and $(x+2)$ are not in all three and cannot be included."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$x+2$ 只在第二式出現，不是三式公有的因式。",
         "en": "$x+2$ appears only in the second expression, so it is not common to all three."
        },
        {
         "opt": "C",
         "zh": "$(x+1)(x+2)(x-2)$ 把所有因式乘起來，那是 L.C.M. 的一部分，不是 H.C.F.。",
         "en": "$(x+1)(x+2)(x-2)$ multiplies all the factors together — part of the L.C.M., not the H.C.F."
        },
        {
         "opt": "D",
         "zh": "同樣是把所有因式（連最高次方）乘起來，方向完全相反。",
         "en": "Likewise this multiplies every factor at its highest power, the opposite of an H.C.F."
        }
       ],
       "tip": {
        "zh": "有括號的 H.C.F. 題一定先分解，再找「三式都有」的因式並取最低次方。分解錯一步，之後一定選錯。",
        "en": "Always factorise first when brackets are involved, then look for factors present in all expressions and take the lowest power. One wrong factorisation leads straight to a wrong option."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算法：代 $x=0$",
          "en": "Check: substitute $x=0$"
         },
         "zh": "代 $x=0$：三式分別是 $-2$、$-4$、$4$，H.C.F. 的數值是 $2$；B 的 $x-2$ 在 $x=0$ 時是 $-2$，絕對值 2，符合；A 的 $x+2$ 是 $2$ 也符合，所以要看因式分解：只有 $(x-2)$ 是三式公有的因式。",
         "en": "Put $x=0$: the three expressions are $-2$, $-4$ and $4$, whose H.C.F. has value 2; $x-2$ gives $-2$ (value 2) and $x+2$ gives 2 as well, so the decision must come from factorising: only $(x-2)$ is common to all three."
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
  "mc": 8,
  "long": 9,
  "cards": 5,
  "pages": 3
 }
};
