// 自動生成，請勿手改（來源：data/learn/；重新生成：python tools/make_learn_data.py）
window.LEARN_TOPIC_EN01 = {
 "id": "en01",
 "stage": 1,
 "unit": 5,
 "subtopic": "quadratic-equations",
 "source": "S.K.H. Bishop Baker Secondary School · S.5 After-School Tutorial · Endeavour Lesson 1（WS05 相關）",
 "name": {
  "zh": "Lesson 1 · 一元二次方程（解方程 ＋ 判別式）",
  "en": "Lesson 1 · Quadratic equations (solving & discriminant)"
 },
 "intro": {
  "zh": "這一節課堂討論三件事：① 用因式分解解一元二次方程（包括兩邊都有 $x$ 或同一個括號的題目）；② 已知方程的一個根，求另一條式子的值；③ 用判別式 $\\Delta=b^{2}-4ac$ 判斷實根／等根／無實根，並求 $k$ 的範圍。十題全部來自課堂教材（WS05）及歷屆文憑試，做完之後可以逐題重做。",
  "en": "This lesson covers three things: (1) solving quadratic equations by factorisation, including equations with $x$ (or the same bracket) on both sides; (2) using a given root to evaluate another expression; (3) using the discriminant $\\Delta=b^{2}-4ac$ to decide real / equal / no real roots and to find the range of $k$. All ten questions come from our lesson materials (WS05) and past HKDSE papers, and every question can be redone."
 },
 "cmdHints": [
  {
   "en": "Solve the equation",
   "zh": "解方程（「or」前後所有根都要寫）"
  },
  {
   "en": "Let $k$ be a constant",
   "zh": "$k$ 為常數（答案會是 $k$ 的式子）"
  },
  {
   "en": "has real roots",
   "zh": "有實根 → $\\Delta\\ge 0$（有等號）"
  },
  {
   "en": "has equal roots",
   "zh": "有等根 → $\\Delta=0$"
  },
  {
   "en": "find the range of values of $k$",
   "zh": "求 $k$ 的範圍 → 寫一條不等式"
  }
 ],
 "lessons": [
  {
   "id": "en01-1",
   "title": {
    "zh": "Lesson 1（課堂 10 題）",
    "en": "Lesson 1 (the 10 class questions)"
   },
   "cards": [
    {
     "id": "en1-c1",
     "topic": "en01",
     "title": {
      "zh": "解一元二次方程：三個實用方法",
      "en": "Solving a quadratic equation: three practical methods"
     },
     "body": {
      "zh": "解一元二次方程的方法不只一種 —— 因式分解、二次公式、配方法，或者兩邊有相同因式時直接約簡。本課集中三個最實用的：\n① 因式分解（用計算機求根，再逆推因式）—— 唔需要硬做十字相乘；\n② 兩邊有相同因式時，移項後抽公因式（＝安全的「約簡」）；\n③ 二次公式 $x=\\frac{-b\\pm\\sqrt{b^{2}-4ac}}{2a}$ —— 根是根式、或係數唔靚時用。\n方法一（計算機因式分解）：Casio fx-50FH II 按【FMLA 01】（或 fx-3650P II 執行 Prog 1），輸入 $a$、$b$、$c$ 求兩根。逆推口訣：分數根 $x=\\frac{p}{q}$ → 因式 $(qx-p)$；整數根 $x=k$ → 因式 $(x-k)$：\n{{math:0}}\n方法二（兩邊有相同因式）：最直接就係「約走」它 —— 但約走等於假設它不等於 0，會漏掉「它 $=0$」那個根。安全做法是把所有項移到一邊，再抽出共同因式：\n✗ 錯（兩邊直接約走 $x$）：{{math:1}} → 只剩 $x=-8$，$x=0$ 不見了\n✓ 對（移項、抽公因式）：{{math:2}}\n本課的 $(x-2t)(x-3t)=(6t-x)(x-3t)$ 就是這種：直接約走 $(x-3t)$ 會漏掉 $x=3t$；移項後抽公因式得 $(x-3t)(2x-8t)=0$，兩根齊全。\n方法三（二次公式）：因式分解唔靚（根是根式）時用：{{math:3}}\n最後：不論用哪個方法，答案一定要寫齊所有根（「or」前後都要）。",
      "en": "There is more than one way to solve a quadratic equation — factorisation, the quadratic formula, completing the square, or cancelling straight away when both sides share the same factor. This lesson focuses on the three most useful:\n(1) factorisation (find the roots with the calculator, then work back to the factors) — no need to force the cross-method;\n(2) when both sides share a factor, move everything to one side and factor it out (a safe form of “cancelling”);\n(3) the quadratic formula $x=\\frac{-b\\pm\\sqrt{b^{2}-4ac}}{2a}$ — for surd roots or awkward coefficients.\nMethod 1 (calculator factorisation): on a Casio fx-50FH II press [FMLA 01] (or run Prog 1 on a fx-3650P II) and enter $a$, $b$, $c$ to get the two roots. Reverse rule: a fraction root $x=\\frac{p}{q}$ gives the factor $(qx-p)$; an integer root $x=k$ gives $(x-k)$:\n{{math:0}}\nMethod 2 (a factor on both sides): the quickest move is to “cancel” it — but cancelling assumes it is not 0, so the root “it equals 0” is lost. The safe way is to move every term to one side and then factor it out:\n✗ Wrong (cancelling $x$ on both sides): {{math:1}} → only $x=-8$ is left, $x=0$ is gone\n✓ Right (move to one side, factor out): {{math:2}}\nThis lesson's $(x-2t)(x-3t)=(6t-x)(x-3t)$ is exactly that kind: cancelling $(x-3t)$ loses $x=3t$; moving everything to one side and factoring gives $(x-3t)(2x-8t)=0$, with both roots kept.\nMethod 3 (quadratic formula): use it when factorisation is not clean (surd roots): {{math:3}}\nFinally: whichever method you use, always write every root (both sides of “or”)."
     },
     "math": [
      "3x^{2}-14x+8=0\n\\Rightarrow x=\\frac{2}{3}\\text{ or }4\n\\Rightarrow (3x-2)(x-4)=0",
      "x(2x+3)=x(x-5)\n\\Rightarrow 2x+3=x-5\n\\Rightarrow x=-8",
      "x(2x+3)=x(x-5)\n\\Rightarrow x^{2}+8x=0\n\\Rightarrow x(x+8)=0\n\\Rightarrow x=0\\text{ or }-8",
      "x^{2}-4x-2=0\n\\Rightarrow x=\\frac{4\\pm\\sqrt{16+8}}{2}=\\frac{4\\pm 2\\sqrt{6}}{2}=2\\pm\\sqrt{6}"
     ],
     "vocab": [
      {
       "en": "factor method",
       "zh": "因式分解法"
      },
      {
       "en": "root",
       "zh": "根"
      },
      {
       "en": "cancel",
       "zh": "約走（兩邊同除）"
      }
     ],
     "warn": {
      "zh": "兩邊「約走」相同因式 ＝ 假設它不等於 0，一定會漏一個根 —— 記得補回（或改用「移項＋抽公因式」）。答案務必寫齊所有根。",
      "en": "“Cancelling” a factor that appears on both sides assumes it is not 0, so a root is always lost — put it back (or move everything to one side and factor instead). Always write every root."
     }
    },
    {
     "id": "en1-c2",
     "topic": "en01",
     "title": {
      "zh": "題目說「$\\alpha$ 是方程的一個根」＝把 $\\alpha$ 代入等於 0",
      "en": "“$\\alpha$ is a root” means substituting it gives 0"
     },
     "body": {
      "zh": "卷二最愛考這種題：已知一個根，要求另一條式子的值 —— 做法通常是兩步：① 寫下 $a\\alpha^{2}+b\\alpha+c=0$；② 把目標式砌成 $\\alpha^{2}$（或 $a\\alpha^{2}$）的倍數，再代入。\n例：已知 $\\alpha$ 是方程 $x^{2}-4x-2=0$ 的一個根，求 $3+8\\alpha-2\\alpha^{2}$ 的值。{{math:0}}\n不需要求出 $\\alpha$ 的數值（它通常是無理數）；用「根」這個關係就夠。\n另一個例子：已知 $\\beta$ 是方程 $3\\beta^{2}-5\\beta-7=0$ 的一個根，求 $4+10\\beta-6\\beta^{2}$ 的值。{{math:1}}",
      "en": "A Paper 2 favourite: given one root, find the value of another expression — usually two steps: (1) write down $a\\alpha^{2}+b\\alpha+c=0$; (2) build the target expression as a multiple of $\\alpha^{2}$ (or $a\\alpha^{2}$) and substitute.\nExample: given that $\\alpha$ is a root of $x^{2}-4x-2=0$, find the value of $3+8\\alpha-2\\alpha^{2}$. {{math:0}}\nYou do not need the value of $\\alpha$ itself (it is usually irrational); the root relation is enough.\nAnother example: given that $\\beta$ is a root of $3\\beta^{2}-5\\beta-7=0$, find the value of $4+10\\beta-6\\beta^{2}$. {{math:1}}"
     },
     "math": [
      "\\alpha^{2}-4\\alpha-2=0\n\\Rightarrow \\alpha^{2}-4\\alpha=2\n\\Rightarrow 3+8\\alpha-2\\alpha^{2}=3-2(\\alpha^{2}-4\\alpha)=3-2(2)=-1",
      "3\\beta^{2}-5\\beta-7=0\n\\Rightarrow 3\\beta^{2}=5\\beta+7\n\\Rightarrow 6\\beta^{2}=10\\beta+14\n\\Rightarrow 4+10\\beta-6\\beta^{2}=-10"
     ],
     "vocab": [
      {
       "en": "root of an equation",
       "zh": "方程的根"
      },
      {
       "en": "substitute",
       "zh": "代入"
      }
     ],
     "warn": {
      "zh": "砌倍數時要整條等式乘（包括常數項）：$3\\beta^{2}=5\\beta+7$ 乘 2 是 $6\\beta^{2}=10\\beta+14$，不是 $6\\beta^{2}=10\\beta+7$。",
      "en": "Multiply the whole relation, constants included: $3\\beta^{2}=5\\beta+7$ doubled is $6\\beta^{2}=10\\beta+14$, not $6\\beta^{2}=10\\beta+7$."
     }
    },
    {
     "id": "en1-c3",
     "topic": "en01",
     "title": {
      "zh": "判別式 $\\Delta=b^{2}-4ac$：有實根／等根／無實根",
      "en": "The discriminant $\\Delta=b^{2}-4ac$: real, equal or no real roots"
     },
     "body": {
      "zh": "先寫成 $ax^{2}+bx+c=0$，再算 $\\Delta=b^{2}-4ac$：{{math:0}}\n題目字眼對照：\n· 「有實根」→ $\\Delta\\ge 0$（包含等根，所以有等號）\n· 「有兩個相異實根」→ $\\Delta>0$\n· 「有等根／重根」→ $\\Delta=0$\n· 「無實根」→ $\\Delta<0$\n求 $k$（或 $r$）的範圍，就是解一條不等式：{{math:1}}",
      "en": "Write the equation as $ax^{2}+bx+c=0$, then compute $\\Delta=b^{2}-4ac$: {{math:0}}\nMatching the wording:\n· “has real roots” → $\\Delta\\ge 0$ (equal roots count, so the equality is included)\n· “has two distinct real roots” → $\\Delta>0$\n· “has equal (repeated) roots” → $\\Delta=0$\n· “has no real roots” → $\\Delta<0$\nFinding the range of $k$ (or $r$) is simply solving an inequality: {{math:1}}"
     },
     "math": [
      "\\Delta>0:\\ \\text{two distinct real roots};\\quad\\Delta=0:\\ \\text{equal roots};\\quad\\Delta<0:\\ \\text{no real roots}",
      "2x^{2}-4x+k=1\n\\Rightarrow 2x^{2}-4x+(k-1)=0;\\ \\Delta=16-8(k-1)\\ge 0\n\\Rightarrow k\\le 3"
     ],
     "vocab": [
      {
       "en": "discriminant",
       "zh": "判別式"
      },
      {
       "en": "real roots",
       "zh": "實根"
      },
      {
       "en": "equal roots",
       "zh": "等根／重根"
      },
      {
       "en": "range of values",
       "zh": "取值範圍"
      }
     ],
     "warn": {
      "zh": "最常見錯誤：忘記把方程搬成「$=0$」的標準形，令常數項寫錯（例如 $k=1$ 要搬過去變成 $k-1$）。",
      "en": "The most common mistake: forgetting to rearrange into the “$=0$” standard form, so the constant term is wrong (e.g. $k=1$ must move across to become $k-1$)."
     }
    }
   ],
   "long": [
    {
     "id": "eph-en01-q1",
     "type": "long",
     "topic": "en01",
     "unit": 5,
     "subtopic": "quadratic-equations",
     "difficulty": 2,
     "code": "EN1-Q1",
     "source": "WS05 課堂題（Basic Skills · 解方程）",
     "stem": {
      "en": "Solve $x(14-3x)=8$.",
      "zh": "解 $x(14-3x)=8$。"
     },
     "kind": "short",
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 展開並移項，化為標準形",
         "en": "Step 1 · Expand and rearrange into standard form"
        },
        "math": "14x-3x^{2}=8\\ \\Rightarrow\\ 3x^{2}-14x+8=0",
        "zh": "展開得 $14x-3x^{2}=8$。全部移至一邊並按降冪排列，使二次項係數為正：$3x^{2}-14x+8=0$。",
        "en": "Expand to get $14x-3x^{2}=8$. Move all terms to one side in descending powers so that the coefficient of $x^{2}$ is positive: $3x^{2}-14x+8=0$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 十字相乘因式分解",
         "en": "Step 2 · Factorise using the cross-method"
        },
        "math": "(3x-2)(x-4)=0",
        "zh": "進行十字相乘：$(3x)(-4)+(-2)(x)=-14x$，成功因式分解為 $(3x-2)(x-4)=0$。此步驟為考評局必評方法分。",
        "en": "Apply the cross-method: $(3x)(-4)+(-2)(x)=-14x$. Factorise into $(3x-2)(x-4)=0$. This step is an essential method mark.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 令各因式為零，寫出全部根",
         "en": "Step 3 · Set each factor to zero and state both roots"
        },
        "math": "3x-2=0\\ \\text{或}\\ x-4=0\\ \\Rightarrow\\ x=\\frac{2}{3}\\ \\text{或}\\ x=4",
        "zh": "分別解得 $x=\\frac{2}{3}$ 或 $x=4$。必須寫齊「或 (or)」前後的兩個根，缺一不可。",
        "en": "Solve to obtain $x=\\frac{2}{3}$ or $x=4$. Both roots connected by “or” must be clearly stated.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "兩邊約走 $x$",
        "labelEn": "Cancelling $x$ on both sides",
        "zh": "把 $x(14-3x)=8$ 兩邊除 $x$ 得 $14-3x=\\frac{8}{x}$，做不下去而且會走錯方向；展開搬項才是正路。",
        "en": "Dividing both sides by $x$ gives $14-3x=\\frac{8}{x}$ — a dead end. Expand and rearrange instead."
       },
       {
        "label": "只寫一個根",
        "labelEn": "Writing only one root",
        "zh": "$x=\\frac{2}{3}$ 或 $x=4$ 兩個都要寫，評分要求「or」前後齊全。",
        "en": "Both $x=\\frac{2}{3}$ and $x=4$ are required: the marking demands both."
       },
       {
        "label": "搬項漏變號",
        "labelEn": "Sign slips when moving terms",
        "zh": "$-3x^{2}+14x-8=0$ 也可以，但要一致；最穩是把 $x^{2}$ 的係數寫正，避免十字相乘時符號錯。",
        "en": "$-3x^{2}+14x-8=0$ is also valid, but be consistent; making the $x^{2}$ coefficient positive avoids sign slips in the cross-method."
       }
      ],
      "tip": {
       "zh": "右邊不是 0 → 先搬去一邊；展開後按次方排好再十字相乘。",
       "en": "If the right-hand side is not 0, move everything over first, then expand and write it in descending powers."
      },
      "alt": [
       {
        "name": {
         "zh": "計算機保底：利用求根逆推因式分解步驟",
         "en": "Calculator safety net: Reverse-engineering factors from roots"
        },
        "zh": "化為 $3x^{2}-14x+8=0$ 後若十字相乘有困難，可用 Casio fx-50FH II 按【FMLA】【01】輸入 $a=3, b=-14, c=8$。計算機顯示 $x_{1}=4$ 及 $x_{2}=\\frac{2}{3}$。逆推口訣：整數根 $4$ 寫成 $(x-4)$；分數根 $\\frac{2}{3}$ 將分母乘至 $x$ 前寫成 $(3x-2)$。將兩式相乘寫出 $(3x-2)(x-4)=0$，即可穩拿第 2 步方法分 (1M)！",
        "en": "After rearranging to $3x^{2}-14x+8=0$, if factorisation is challenging, use Casio fx-50FH II [FMLA] [01] with $a=3, b=-14, c=8$. The calculator outputs $x_{1}=4$ and $x_{2}=\\frac{2}{3}$. Reverse rule: the integer root $4$ gives the factor $(x-4)$; the fraction root $\\frac{2}{3}$ puts the denominator before $x$, giving $(3x-2)$. Writing $(3x-2)(x-4)=0$ secures the method mark (1M)."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en01-q2",
     "type": "long",
     "topic": "en01",
     "unit": 5,
     "subtopic": "quadratic-equations",
     "difficulty": 2,
     "code": "EN1-Q2",
     "source": "WS05 課堂題（Basic Skills · 解方程）",
     "stem": {
      "en": "Solve $x(2x+3)=x(x-5)$.",
      "zh": "解 $x(2x+3)=x(x-5)$。"
     },
     "kind": "short",
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 展開並移項整理",
         "en": "Step 1 · Expand and rearrange"
        },
        "math": "2x^{2}+3x=x^{2}-5x\\ \\Rightarrow\\ x^{2}+8x=0",
        "zh": "兩邊分別展開得 $2x^{2}+3x=x^{2}-5x$。千萬不可兩邊同除以 $x$（會漏解 $x=0$）。移項整理得 $x^{2}+8x=0$。",
        "en": "Expand both sides to obtain $2x^{2}+3x=x^{2}-5x$. Never divide both sides by $x$, as that loses the root $x=0$. Rearrange to get $x^{2}+8x=0$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 提取公因式",
         "en": "Step 2 · Factor out the common factor"
        },
        "math": "x(x+8)=0",
        "zh": "常數項為 0，直接提取公因式 $x$，得 $x(x+8)=0$。此因式分解步驟為關鍵方法分。",
        "en": "Since the constant term is 0, factor out $x$ directly to obtain $x(x+8)=0$. This factorisation is an essential method mark.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 各因式等於零，寫出兩根",
         "en": "Step 3 · Set each factor to zero and state both roots"
        },
        "math": "x=0\\ \\text{或}\\ x+8=0\\ \\Rightarrow\\ x=0\\ \\text{或}\\ x=-8",
        "zh": "得出 $x=0$ 或 $x=-8$。兩個根必須完整寫出，只寫一個會失去答案分。",
        "en": "Obtain $x=0$ or $x=-8$. Both roots must be stated clearly; omitting either loses the answer mark.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "兩邊約走 $x$",
        "labelEn": "Cancelling $x$ on both sides",
        "zh": "約走就只剩 $2x+3=x-5$ → $x=-8$，失去了 $x=0$ 這個根 —— 這是最常見的失分位。",
        "en": "Cancelling leaves $2x+3=x-5$, i.e. $x=-8$ only — the root $x=0$ is lost. The most common way to lose a mark."
       },
       {
        "label": "搬項符號錯",
        "labelEn": "Sign errors when rearranging",
        "zh": "$-5x$ 搬去左邊變 $+5x$；漏了變號就會得到 $x^{2}-2x=0$，答案跟着錯。",
        "en": "Moving $-5x$ across makes it $+5x$; missing that gives $x^{2}-2x=0$ and a wrong answer."
       },
       {
        "label": "只寫一個根",
        "labelEn": "Writing only one root",
        "zh": "答案一定要寫「$x=0$ 或 $x=-8$」。",
        "en": "The answer must read “$x=0$ or $x=-8$”."
       }
      ],
      "tip": {
       "zh": "方程兩邊都有 $x$：展開 → 搬去一邊 → 抽公因式，永遠不要約走 $x$。",
       "en": "When both sides contain $x$: expand, move to one side, factor out $x$ — never cancel."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：把根代回原方程（做完自己檢查）",
         "en": "Check: substitute the roots back into the equation"
        },
        "zh": "把求出的根分別代回原方程檢驗：代入 $x=0$，左邊 $=0(3)=0$，右邊 $=0(-5)=0$，左邊 $=$ 右邊；代入 $x=-8$，左邊 $=-8(2(-8)+3)=-8(-13)=104$，右邊 $=-8(-8-5)=-8(-13)=104$，左邊 $=$ 右邊。兩根均成立，肯定答案正確且無漏根。",
        "en": "Substitute each root back into the original equation: for $x=0$, LHS $=0(3)=0$ and RHS $=0(-5)=0$, LHS $=$ RHS; for $x=-8$, LHS $=-8(2(-8)+3)=-8(-13)=104$ and RHS $=-8(-8-5)=-8(-13)=104$, LHS $=$ RHS. Both roots satisfy the equation, confirming no arithmetic error or missing roots."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en01-q3",
     "type": "long",
     "topic": "en01",
     "unit": 5,
     "subtopic": "quadratic-equations",
     "difficulty": 2,
     "code": "EN1-Q3",
     "source": "WS05 課堂題 · [HKDSE Practice Paper 1 Q17(b)(ii)]（2 marks）",
     "stem": {
      "en": "Find the range of values of $r$ such that the quadratic equation $x^{2}-4x+9=r$ has real roots.",
      "zh": "求 $r$ 的取值範圍，使二次方程 $x^{2}-4x+9=r$ 有實根。"
     },
     "marks": 2,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 寫成標準形 $ax^{2}+bx+c=0$",
         "en": "Step 1 · Write in standard form $ax^{2}+bx+c=0$"
        },
        "math": "x^{2}-4x+(9-r)=0",
        "zh": "將 $r$ 移至左邊，常數項為 $(9-r)$。注意 $a=1, b=-4, c=9-r$。",
        "en": "Move $r$ to the left side so the constant term is $(9-r)$. Here $a=1, b=-4, c=9-r$."
       },
       {
        "title": {
         "zh": "第 2 步 · 方程有實根即 $\\Delta\\ge 0$",
         "en": "Step 2 · Real roots condition $\\Delta\\ge 0$"
        },
        "math": "(-4)^{2}-4(1)(9-r)\\ge 0\n\\Rightarrow 16-36+4r\\ge 0\n\\Rightarrow 4r-20\\ge 0",
        "zh": "題目指出方程有實根，即判別式 $\\Delta\\ge 0$（包含等根，務必帶等號）。代入係數並展開化簡得 $4r-20\\ge 0$。",
        "en": "The equation has real roots, which implies $\\Delta\\ge 0$ (including equal roots, must have the equality sign). Substitute coefficients to obtain $4r-20\\ge 0$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 解不等式求範圍",
         "en": "Step 3 · Solve the inequality for the range"
        },
        "math": "4r\\ge 20\\ \\Rightarrow\\ r\\ge 5",
        "zh": "兩邊同除以 4，得 $r\\ge 5$。取值範圍必須以不等式形式完整作答。",
        "en": "Divide both sides by 4 to get $r\\ge 5$. The range of values must be stated as an inequality.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "常數項漏了 $-r$",
        "labelEn": "Forgetting the $-r$ in the constant term",
        "zh": "用 $c=9$ 會得到 $16-36=-20\\ge 0$，明顯不可能 —— 那就代表搬項搬錯了。",
        "en": "Using $c=9$ gives $16-36=-20\\ge 0$, which is impossible — a sign you moved the terms wrongly."
       },
       {
        "label": "方向錯：寫成 $\\Delta>0$",
        "labelEn": "Wrong condition: using $\\Delta>0$",
        "zh": "「有實根」包含「兩個相等實根」，所以是 $\\Delta\\ge 0$（有等號）。",
        "en": "“Real roots” includes the equal-roots case, so it is $\\Delta\\ge 0$ (with the equality)."
       },
       {
        "label": "只寫一個數",
        "labelEn": "Giving a single number",
        "zh": "$r\\ge 5$ 是一條不等式；只寫 $5$ 不會得分。",
        "en": "$r\\ge 5$ is an inequality; writing just $5$ scores nothing."
       }
      ],
      "tip": {
       "zh": "「有實根」＝$\\Delta\\ge 0$；先把 $r$（或 $k$）併入常數項才代入判別式。",
       "en": "“Real roots” means $\\Delta\\ge 0$; fold $r$ (or $k$) into the constant term before using the discriminant."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：範圍內外各取一個數核對",
         "en": "Check: test one value inside and one outside the range"
        },
        "zh": "答案 $r\\ge 5$：取 $r=6$ 代入得 $x^{2}-4x+3=0$，$\\Delta=16-12=4>0$ ✓ 有實根；取 $r=4$（範圍外）得 $x^{2}-4x+5=0$，$\\Delta=16-20=-4<0$ ✗ 無實根。一正一反就確認範圍正確。",
        "en": "Answer $r\\ge 5$: take $r=6$ giving $x^{2}-4x+3=0$ with $\\Delta=4>0$ ✓ (real roots); take $r=4$ (outside) giving $x^{2}-4x+5=0$ with $\\Delta=-4<0$ ✗. One inside and one outside confirms the range."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en01-q4",
     "type": "long",
     "topic": "en01",
     "unit": 5,
     "subtopic": "quadratic-equations",
     "difficulty": 2,
     "code": "EN1-Q4",
     "source": "WS05 課堂題（判別式：求 $k$ 的範圍）",
     "stem": {
      "en": "If each of the following quadratic equations has real roots, find the range of values of $k$.",
      "zh": "若以下每個二次方程都有實根，求 $k$ 的取值範圍。"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$x^{2}+8x-k=0$",
       "en": "$x^{2}+8x-k=0$",
       "marks": 2
      },
      {
       "label": "(b)",
       "text": "$2x^{2}-4x+k=1$",
       "en": "$2x^{2}-4x+k=1$",
       "marks": 2
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a) 直接代判別式",
         "en": "(a) Apply the discriminant directly"
        },
        "math": "\\Delta=8^{2}-4(1)(-k)=64+4k\\ge 0\\ \\Rightarrow\\ k\\ge -16",
        "zh": "方程已經是標準形，$a=1$、$b=8$、$c=-k$。注意 $c$ 是 $-k$，所以 $-4ac=+4k$。",
        "en": "The equation is already in standard form with $a=1$, $b=8$, $c=-k$. Since $c=-k$, we get $-4ac=+4k$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "(a) 寫出範圍",
         "en": "(a) State the range"
        },
        "math": "k\\ge -16",
        "zh": "$4k\\ge -64$，所以 $k\\ge -16$。",
        "en": "$4k\\ge -64$, so $k\\ge -16$.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "(b) 先搬成標準形",
         "en": "(b) First write it in standard form"
        },
        "math": "2x^{2}-4x+(k-1)=0",
        "zh": "把 $1$ 搬去左邊：常數項是 $k-1$（不是 $k$）—— 這一步是 (b) 的關鍵。",
        "en": "Move the 1 across: the constant term is $k-1$, not $k$ — the key step of part (b).",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "(b) 判別式並解不等式",
         "en": "(b) Use the discriminant and solve"
        },
        "math": "\\Delta=(-4)^{2}-4(2)(k-1)=16-8k+8=24-8k\\ge 0\\ \\Rightarrow\\ k\\le 3",
        "zh": "$24-8k\\ge 0 \\Rightarrow 8k\\le 24 \\Rightarrow k\\le 3$。留意除以負數會令不等號反方向（這裡是把 $-8k$ 搬去右邊，不用反號）。",
        "en": "$24-8k\\ge 0 \\Rightarrow 8k\\le 24 \\Rightarrow k\\le 3$. (Moving $-8k$ to the right avoids dividing by a negative number.)",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "(b) 常數項用 $k$ 而不是 $k-1$",
        "labelEn": "(b) Using $k$ instead of $k-1$",
        "zh": "$k=1$ 搬去左邊後是 $-1$，所以 $c=k-1$；用 $c=k$ 會得到 $k\\le 2$（錯）。",
        "en": "Moving the 1 across gives $-1$, so $c=k-1$; using $c=k$ gives $k\\le 2$, which is wrong."
       },
       {
        "label": "(a) 符號：$c=-k$ 寫成 $c=k$",
        "labelEn": "(a) Sign slip: $c=-k$ written as $c=k$",
        "zh": "$c=-k$ 時 $-4ac=+4k$，答案 $k\\ge -16$；寫成 $c=k$ 會得到 $k\\le 16$。",
        "en": "With $c=-k$ we get $-4ac=+4k$ and $k\\ge -16$; using $c=k$ gives $k\\le 16$."
       },
       {
        "label": "不等號方向錯",
        "labelEn": "Wrong inequality direction",
        "zh": "解到 $k\\le 3$ 時，把 $-8k$ 搬去右邊（不要兩邊除 $-8$）就不會反號。",
        "en": "Moving $-8k$ to the right (instead of dividing by $-8$) keeps the inequality direction correct."
       }
      ],
      "tip": {
       "zh": "兩步固定：(1) 先寫成 $ax^{2}+bx+c=0$（$k$ 併入常數項）；(2) 代 $\\Delta\\ge 0$ 解不等式。",
       "en": "Two fixed moves: write $ax^{2}+bx+c=0$ with $k$ inside the constant term, then apply $\\Delta\\ge 0$ and solve the inequality."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：範圍內外各取一個數核對",
         "en": "Check: test one value inside and one outside the range"
        },
        "zh": "取 (b) 的答案 $k\\le 3$ 內外各一：$k=2$ 時 $2x^{2}-4x+1=0$，$\\Delta=16-8=8>0$ ✓ 有實根；$k=4$ 時 $2x^{2}-4x+3=0$，$\\Delta=16-24=-8<0$ ✗ 無實根。",
        "en": "For (b)'s answer $k\\le 3$, test one value inside and one outside: $k=2$ gives $2x^{2}-4x+1=0$ with $\\Delta=8>0$ ✓; $k=4$ gives $2x^{2}-4x+3=0$ with $\\Delta=-8<0$ ✗."
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
      "id": "eph-en01-m1",
      "type": "mc",
      "topic": "en01",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 3,
      "code": "EN1-M1",
      "source": "EPH WS05 Q8 · [HKDSE 2022 Paper 2 Q4]",
      "stem": {
       "en": "Let $t$ be a constant. Solve the equation $(x-2t)(x-3t)=(6t-x)(x-3t)$.",
       "zh": "設 $t$ 為常數。解方程 $(x-2t)(x-3t)=(6t-x)(x-3t)$。"
      },
      "options": {
       "A": "$x=3t$",
       "B": "$x=6t$",
       "C": "$x=2t$ or $x=6t$",
       "D": "$x=3t$ or $x=4t$"
      },
      "review": null,
      "answer": "D",
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 移項，令右邊是 0",
          "en": "Step 1 · Move terms to one side"
         },
         "math": "(x-2t)(x-3t)-(6t-x)(x-3t)=0",
         "zh": "兩邊有相同的括號 $(x-3t)$，先移項令右邊是 $0$，不可以直接約走。",
         "en": "Bring all terms to the left."
        },
        {
         "title": {
          "zh": "第 2 步 · 抽公因式，注意變號",
          "en": "Step 2 · Factor out, mind the signs"
         },
         "math": "(x-3t)[(x-2t)-(6t-x)]=(x-3t)[x-2t-6t+x]=(x-3t)(2x-8t)=0",
         "zh": "抽出公因式 $(x-3t)$ 後，中括號內為 $(x-2t)-(6t-x)$。注意負號分配律：$-(6t-x)=-6t+x$。合併同類項得 $(x-3t)(2x-8t)=0$。",
         "en": "After factoring out $(x-3t)$, the expression inside the square brackets is $(x-2t)-(6t-x)$. Mind the minus sign: $-(6t-x)=-6t+x$. Collecting like terms yields $(x-3t)(2x-8t)=0$."
        },
        {
         "title": {
          "zh": "第 3 步 · 各自等於 0",
          "en": "Step 3 · Set each bracket to 0"
         },
         "math": "x-3t=0\\ \\text{或}\\ 2x-8t=0\\ \\Rightarrow\\ x=3t\\ \\text{或}\\ x=4t",
         "zh": "得出 $x=3t$ 或 $x=4t$，答案選 D。",
         "en": "x = 3t or x = 4t. Answer: D.",
         "highlight": [
          "x=3t",
          "x=4t"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$x=3t$ 只寫了其中一個根（來自 $(x-3t)$），漏了另一邊解出的 $x=4t$。",
         "en": "Only one of the two roots was given."
        },
        {
         "opt": "B",
         "zh": "$x=6t$ 是誤把 $6t-x$ 當成一個因式並令它等於 $0$。真正的因式是 $(x-3t)$ 與 $(x-2t)$，$6t-x$ 不是因式（它是等號右邊的其中一個括號）。",
         "en": "The right-hand bracket is not a factor."
        }
       ],
       "tip": {
        "zh": "相減時括號內每一項都要變號：$-(6t-x)=-6t+x$。這一步錯了，之後的答案一定錯。",
        "en": "When both sides share the same bracket, move everything to one side and factor it out — never cancel it."
       },
       "alt": [
        {
         "name": {
          "zh": "卷二保底：數值代入法",
          "en": "Substitution check"
         },
         "zh": "設 $t=2$（避開 $0$ 與 $1$）：方程變成 $(x-4)(x-6)=(12-x)(x-6)$，解出 $x=6$ 或 $8$。把 $t=2$ 代入四個選項，只有 D 得 $x=6$ 或 $8$。",
         "en": "Put $t=2$ (avoid $0$ and $1$): the equation becomes $(x-4)(x-6)=(12-x)(x-6)$, giving $x=6$ or $8$. Substituting $t=2$ into the options, only D gives $x=6$ or $8$."
        }
       ]
      },
      "verify": "checked"
     },
     {
      "id": "eph-en01-m2",
      "type": "mc",
      "topic": "en01",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 3,
      "code": "EN1-M2",
      "source": "EPH WS05 Q9",
      "stem": {
       "en": "Let $h$ be a constant. Solve the equation $(x+6h)(x+4h)=(8h-x)(x+4h)$.",
       "zh": "設 $h$ 為常數。解方程 $(x+6h)(x+4h)=(8h-x)(x+4h)$。"
      },
      "options": {
       "A": "$x=8h$",
       "B": "$x=-4h$",
       "C": "$x=-4h$ or $x=h$",
       "D": "$x=-6h$ or $x=8h$"
      },
      "review": null,
      "answer": "C",
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 移項，令右邊是 0",
          "en": "Step 1 · Move terms to one side"
         },
         "math": "(x+6h)(x+4h)-(8h-x)(x+4h)=0",
         "zh": "兩邊有相同的括號 $(x+4h)$，先把所有項移到左邊。",
         "en": "Bring all terms to the left."
        },
        {
         "title": {
          "zh": "第 2 步 · 抽公因式 $(x+4h)$",
          "en": "Step 2 · Factor out (x + 4h)"
         },
         "math": "(x+4h)[(x+6h)-(8h-x)]=(x+4h)(2x-2h)=0",
         "zh": "抽出 $(x+4h)$，括號內 $(x+6h)-(8h-x)=x+6h-8h+x=2x-2h$。",
         "en": "(x + 6h) − (8h − x) = 2x − 2h."
        },
        {
         "title": {
          "zh": "第 3 步 · 各自等於 0",
          "en": "Step 3 · Set each bracket to 0"
         },
         "math": "x+4h=0\\ \\text{或}\\ 2x-2h=0\\ \\Rightarrow\\ x=-4h\\ \\text{或}\\ x=h",
         "zh": "得出 $x=-4h$ 或 $x=h$，答案選 C。",
         "en": "x = -4h or x = h. Answer: C.",
         "highlight": [
          "x=-4h",
          "x=h"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$x=-4h$ 只寫了其中一個根（來自 $(x+4h)$），漏了另一邊解出的 $x=h$。",
         "en": "Only one of the two roots was given."
        },
        {
         "opt": "D",
         "zh": "$x=-6h$ 或 $x=8h$ 是把 $(x+6h)$ 與 $(8h-x)$ 各令等於 $0$ —— 這兩個括號分別在等號兩邊，不是同一邊的因式，這樣做等於沒有移項。",
         "en": "The two brackets sit on opposite sides of the equation."
        }
       ],
       "tip": {
        "zh": "與前一題同一招式：相同括號不可以約，要走「移項 → 抽公因式 → 各自等於 0」三步。",
        "en": "Same routine: move everything to one side, factor out the common bracket, then set each factor to zero."
       },
       "alt": [
        {
         "name": {
          "zh": "卷二保底：數值代入法",
          "en": "Substitution check"
         },
         "zh": "設 $h=1$：方程變成 $(x+6)(x+4)=(8-x)(x+4)$，解出 $x=-4$ 或 $1$。把 $h=1$ 代入選項，只有 C 得 $x=-4$ 或 $1$。",
         "en": "Put $h=1$: the equation becomes $(x+6)(x+4)=(8-x)(x+4)$, giving $x=-4$ or $1$. Substituting $h=1$ into the options, only C gives $x=-4$ or $1$."
        }
       ]
      },
      "verify": "checked"
     },
     {
      "id": "eph-en01-m4",
      "type": "mc",
      "topic": "en01",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 3,
      "code": "EN1-M4",
      "source": "EPH WS05 Q10 · [HKDSE 2015 Paper 2 Q7]",
      "stem": {
       "en": "If $\\alpha$ is a root of the equation $x^{2}-4x-2=0$, then $3+8\\alpha-2\\alpha^{2}=$",
       "zh": "若 $\\alpha$ 是方程 $x^{2}-4x-2=0$ 的一個根，則 $3+8\\alpha-2\\alpha^{2}=$"
      },
      "options": {
       "A": "$-3$",
       "B": "$-1$",
       "C": "$7$",
       "D": "$9$"
      },
      "review": null,
      "answer": "B",
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 由「$\\alpha$ 是方程的根」寫出關係式",
          "en": "Step 1 · Use the fact that α is a root"
         },
         "math": "\\alpha^{2}-4\\alpha-2=0\\ \\Rightarrow\\ \\alpha^{2}=4\\alpha+2",
         "zh": "「$\\alpha$ 是方程 $x^{2}-4x-2=0$ 的根」意思是把 $x$ 換成 $\\alpha$ 之後等式成立：$\\alpha^{2}-4\\alpha-2=0$。移項得到 $\\alpha^{2}=4\\alpha+2$，用它可以把 $\\alpha^{2}$ 降到一次。",
         "en": "Substituting x = α gives α² = 4α + 2."
        },
        {
         "title": {
          "zh": "第 2 步 · 把 $\\alpha^{2}$ 整塊替換（記得加括號）",
          "en": "Step 2 · Replace α² as a whole"
         },
         "math": "3+8\\alpha-2\\alpha^{2}=3+8\\alpha-2(4\\alpha+2)",
         "zh": "把 $\\alpha^{2}$ 換成 $(4\\alpha+2)$。前面是 $-2$，所以一定要加括號，否則只會乘到第一項。",
         "en": "−2(4α + 2), not −2 × 4α + 2."
        },
        {
         "title": {
          "zh": "第 3 步 · 展開化簡",
          "en": "Step 3 · Expand and simplify"
         },
         "math": "=3+8\\alpha-8\\alpha-4=-1",
         "zh": "展開 $=3+8\\alpha-8\\alpha-4$。$8\\alpha$ 與 $-8\\alpha$ 互相抵消，剩下 $3-4=-1$，答案選 B。",
         "en": "Expanding gives $3+8\\alpha-8\\alpha-4$. The terms $8\\alpha$ and $-8\\alpha$ cancel out, leaving $3-4=-1$. The answer is B.",
         "highlight": [
          "-1"
         ]
        }
       ],
       "traps": [
        {
         "opt": "C",
         "zh": "$7$ 是移項時把 $\\alpha^{2}=4\\alpha+2$ 寫成 $\\alpha^{2}=4\\alpha-2$（負號錯），得出 $3+8\\alpha-8\\alpha+4=7$。",
         "en": "Sign slip when rearranging."
        },
        {
         "opt": "D",
         "zh": "$9$ 是把 $\\alpha=1$ 硬代入求出的值 —— $1$ 不是這個方程的根，所以不可以用。",
         "en": "Substituted a number that is not a root."
        }
       ],
       "tip": {
        "zh": "看到「$\\alpha$ 是方程的根」就想「降次」：把 $\\alpha^{2}$ 換成一次式，答案裡的 $\\alpha$ 通常會自動抵消。",
        "en": "For any “given a root” question, write the equation equal to 0 first, then build the target expression as a multiple of it."
       },
       "alt": [
        {
         "name": {
          "zh": "計算機保底：求根後 Ans 鍵秒殺法",
          "en": "Calculator safety net: Root finding and Ans key"
         },
         "zh": "考評局准用計算機直出答案：使用 Casio fx-50FH II 按【FMLA】【01】（或 fx-3650P II 執行二次方程程式 Prog 1），輸入 $a=1, b=-4, c=-2$。按【EXE】求出正根 $x \\approx 4.449$。毋須抄寫小數，直接按鍵輸入 $3+8\\text{Ans}-2\\text{Ans}^{2}$ 並按【EXE】，螢幕即刻顯示 $-1$！直接鎖定選項 B。",
         "en": "Direct calculator shortcut: On Casio fx-50FH II press [FMLA] [01] (or run Prog 1 on fx-3650P II), enter $a=1, b=-4, c=-2$. Press [EXE] to get root $x \\approx 4.449$. Do not copy down decimals; directly type $3+8\\text{Ans}-2\\text{Ans}^{2}$ and press [EXE]. The screen displays $-1$, confirming option B immediately."
        }
       ]
      },
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-en01-m6",
      "type": "mc",
      "topic": "en01",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 2,
      "code": "EN1-M6",
      "source": "EPH WS05 Q12 · [HKDSE 2016 Paper 2 Q8]",
      "stem": {
       "en": "If $k$ is a constant such that the quadratic equation $3x^{2}-kx+k+9=0$ has equal roots, then $k=$",
       "zh": "設 $k$ 為常數。若二次方程 $3x^{2}-kx+k+9=0$ 有等根，則 $k=$"
      },
      "options": {
       "A": "$-3$",
       "B": "$12$",
       "C": "$-6$ or $18$",
       "D": "$-12$ or $9$"
      },
      "review": null,
      "answer": "C",
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 相等實根 ⇒ $\\Delta=0$",
          "en": "Step 1 · Equal roots means Δ = 0"
         },
         "math": "\\Delta=(-k)^{2}-4(3)(k+9)=k^{2}-12k-108",
         "zh": "$a=3$、$b=-k$、$c=k+9$。$4ac=4(3)(k+9)=12k+108$，所以 $\\Delta=k^{2}-12k-108$。",
         "en": "a = 3, b = -k, c = k + 9."
        },
        {
         "title": {
          "zh": "第 2 步 · 十字相乘分解",
          "en": "Step 2 · Factorize"
         },
         "math": "k^{2}-12k-108=0\\ \\Rightarrow\\ (k+6)(k-18)=0",
         "zh": "找兩個數：相乘 $-108$、相加 $-12$。取 $+6$ 與 $-18$（$6\\times(-18)=-108$、$6-18=-12$），分解成 $(k+6)(k-18)$。",
         "en": "6 × (-18) = -108 and 6 - 18 = -12."
        },
        {
         "title": {
          "zh": "第 3 步 · 讀出兩個 $k$",
          "en": "Step 3 · Solve for k"
         },
         "math": "k=-6\\ \\text{或}\\ k=18",
         "zh": "所以 $k=-6$ 或 $k=18$，答案選 C。",
         "en": "k = -6 or k = 18. Answer: C.",
         "highlight": [
          "k=-6",
          "k=18"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$-3$ 是判別式只算了 $4(3)(9)=108$（把 $c$ 當成 $9$、漏了 $k$），$\\Delta$ 已經算錯，之後再解方程當然得不到正確答案。",
         "en": "Wrong c in the discriminant."
        },
        {
         "opt": "D",
         "zh": "$-12$ 或 $9$ 是分解錯了：展開 $(k-12)(k+9)$ 得 $k^{2}-3k-108$，中間項是 $-3k$ 而不是 $-12k$。",
         "en": "Wrong factorisation; check the middle term."
        }
       ],
       "tip": {
        "zh": "分解完一定要心算展開核對中間項。$c$ 代入時要整塊 $(k+9)$ 代入，不可以只拿 $9$。",
        "en": "Equal roots means $\\Delta=0$. Write the equation in standard form before substituting the discriminant."
       },
       "alt": [
        {
         "name": {
          "zh": "卷二保底：逐個選項代 $\\Delta=0$",
          "en": "Substitution check: test each option in $\\Delta=0$"
         },
         "zh": "有等根即 $\\Delta=0$：$(-k)^{2}-4(3)(k+9)=0$。把選項逐個代入：A 的 $k=-3$ 得 $9-4(3)(6)=-63\\neq 0$ ✗；C 的 $k=-6$ 得 $36-4(3)(3)=0$ ✓。只有 C 成立。",
         "en": "Equal roots means $\\Delta=0$: $(-k)^{2}-4(3)(k+9)=0$. Test the options: A ($k=-3$) gives $9-4(3)(6)\\neq 0$ ✗, while C ($k=-6$) gives $36-4(3)(3)=0$ ✓ — only C works."
        }
       ]
      },
      "verify": "checked"
     },
     {
      "id": "eph-en01-m3",
      "type": "mc",
      "topic": "en01",
      "unit": 5,
      "subtopic": "quadratic-equations",
      "difficulty": 2,
      "code": "EN1-M3",
      "source": "WS05 課堂題 · [HKDSE Sample Paper 2 Q6]",
      "stem": {
       "en": "Let $b$ be a constant. Solve the equation $(x-b)(x-b-8)=(x-b)$.",
       "zh": "設 $b$ 為常數。解方程 $(x-b)(x-b-8)=(x-b)$。"
      },
      "options": {
       "A": "$x=b+8$",
       "B": "$x=b+9$",
       "C": "$x=b$ or $x=b+8$",
       "D": "$x=b$ or $x=b+9$"
      },
      "answer": "D",
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "搬去一邊：不要約走 $(x-b)$",
          "en": "Move everything to one side: never cancel $(x-b)$"
         },
         "math": "(x-b)(x-b-8)-(x-b)=0",
         "zh": "方程兩邊都有 $(x-b)$。不可以兩邊約走它 —— 約走就等於假設 $x\\neq b$，會白白失掉一個根。正確做法是把右邊搬去左邊。",
         "en": "Both sides contain $(x-b)$. Never divide both sides by it: doing so assumes $x\\neq b$ and throws away a root. Move the right-hand side over instead."
        },
        {
         "title": {
          "zh": "抽走共同括號",
          "en": "Factor out the common bracket"
         },
         "math": "=(x-b)[(x-b-8)-1]=(x-b)(x-b-9)=0",
         "zh": "抽走 $(x-b)$ 之後，中括號內是 $(x-b-8)-1$。注意那個 $-1$（右邊被搬過來時留下的），漏了它就會變成 $x=b+8$。",
         "en": "After factoring out $(x-b)$ the bracket reads $(x-b-8)-1$. Do not lose the $-1$ brought over from the right-hand side, or the answer becomes $x=b+8$."
        },
        {
         "title": {
          "zh": "每個因子各自等於 0",
          "en": "Set each factor to zero"
         },
         "math": "x-b=0\\ \\text{or}\\ x-b-9=0\\ \\Rightarrow\\ x=b\\ \\text{or}\\ x=b+9",
         "zh": "兩個因子都要寫：$x=b$ 或 $x=b+9$。答案是 D。",
         "en": "Both factors give a root: $x=b$ or $x=b+9$. The answer is D."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "只寫 $x=b+8$：中括號內的 $-1$ 被漏掉了。",
         "en": "Writing only $x=b+8$: the $-1$ inside the square bracket was lost."
        },
        {
         "opt": "B",
         "zh": "只寫 $x=b+9$：漏掉 $x-b=0$ 這個根（在兩邊約走 $(x-b)$ 就會得到這個錯）。",
         "en": "Writing only $x=b+9$: the root $x-b=0$ is missing — the classic result of cancelling $(x-b)$."
        },
        {
         "opt": "C",
         "zh": "$x=b+8$ 的常數錯：$(x-b-8)-1=x-b-9$，所以是 $b+9$。",
         "en": "$x=b+8$ has the wrong constant: $(x-b-8)-1=x-b-9$, so it is $b+9$."
        }
       ],
       "tip": {
        "zh": "方程兩邊有同一個括號（或同一個 $x$）時：先搬去一邊，再抽走它，千萬不要約走。",
        "en": "When both sides share a bracket (or an $x$), move everything to one side and factor it out — never cancel it."
       },
       "alt": [
        {
         "name": {
          "zh": "卷二保底：數值代入法",
          "en": "Substitution check"
         },
         "zh": "設 $b=1$：方程變成 $(x-1)(x-9)=(x-1)$，解出 $x=1$ 或 $10$。把 $b=1$ 代入選項，只有 D 得 $x=1$ 或 $10$。",
         "en": "Put $b=1$: the equation becomes $(x-1)(x-9)=(x-1)$, giving $x=1$ or $10$. Substituting $b=1$ into the options, only D gives $x=1$ or $10$."
        }
       ]
      },
      "verify": "checked"
     },
     {
      "id": "eph-en01-m5",
      "type": "mc",
      "topic": "en01",
      "unit": 5,
      "subtopic": "quadratic-equations",
      "difficulty": 3,
      "code": "EN1-M5",
      "source": "WS05 課堂題 · [HKDSE 2015 Paper 2 Q7 同款]",
      "stem": {
       "en": "If $\\beta$ is a root of the equation $3x^{2}-5x-7=0$, then $4+10\\beta-6\\beta^{2}=$",
       "zh": "若 $\\beta$ 是方程 $3x^{2}-5x-7=0$ 的一個根，則 $4+10\\beta-6\\beta^{2}=$"
      },
      "options": {
       "A": "$-10$",
       "B": "$-3$",
       "C": "$11$",
       "D": "$18$"
      },
      "answer": "A",
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第一步一定寫：根代入方程等於 0",
          "en": "First line: substitute the root, the equation equals 0"
         },
         "math": "3\\beta^{2}-5\\beta-7=0",
         "zh": "「$\\beta$ 是根」的意思是代入之後等於 0。不要嘗試求出 $\\beta$ 的數值（它是無理數）。",
         "en": "“$\\beta$ is a root” means the value 0 after substitution. Do not try to find $\\beta$ itself — it is irrational."
        },
        {
         "title": {
          "zh": "把目標式砌成 $3\\beta^{2}$ 的倍數",
          "en": "Build a multiple of $3\\beta^{2}$ in the target expression"
         },
         "math": "3\\beta^{2}=5\\beta+7\\ \\Rightarrow\\ 6\\beta^{2}=10\\beta+14",
         "zh": "目標式有 $6\\beta^{2}$，剛好是 $3\\beta^{2}$ 的 2 倍，所以整條等式乘 2。",
         "en": "The target contains $6\\beta^{2}$, exactly twice $3\\beta^{2}$, so multiply the whole relation by 2."
        },
        {
         "title": {
          "zh": "代入並化簡",
          "en": "Substitute and simplify"
         },
         "math": "4+10\\beta-6\\beta^{2}=4+10\\beta-(10\\beta+14)=-10",
         "zh": "$10\\beta$ 與 $-10\\beta$ 相消，只剩 $4-14=-10$。答案是 A。",
         "en": "$10\\beta$ cancels with $-10\\beta$, leaving $4-14=-10$. The answer is A."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$-3$ 是「只減 7 一次」（$4-7$）：要減的是 $2\\times 7=14$。",
         "en": "$-3$ comes from subtracting 7 once ($4-7$); you must subtract $2\\times 7=14$."
        },
        {
         "opt": "C",
         "zh": "$11$ 是「$4+7$」：忘了 $10\\beta-6\\beta^{2}$ 會相消。",
         "en": "$11$ is $4+7$: it forgets that $10\\beta-6\\beta^{2}$ cancels."
        },
        {
         "opt": "D",
         "zh": "$18$ 是砌錯了倍數（用 $3\\beta^{2}=5\\beta+7$ 但乘錯或多加了一項）。",
         "en": "$18$ comes from a wrong multiple of $3\\beta^{2}=5\\beta+7$."
        }
       ],
       "tip": {
        "zh": "見到「已知一個根」，第一句寫 $a\\beta^{2}+b\\beta+c=0$，之後全部用「砌成目標式的倍數」去做。",
        "en": "For any “given a root” question: write $a\\beta^{2}+b\\beta+c=0$ first, then build the target expression as a multiple of it."
       },
       "alt": [
        {
         "name": {
          "zh": "計算機保底：求根後 Ans 鍵秒殺法",
          "en": "Calculator safety net: Root finding and Ans key"
         },
         "zh": "使用 Casio fx-50FH II 按【FMLA】【01】（或 fx-3650P II 執行 Prog 1），輸入 $a=3, b=-5, c=-7$，求得根 $x \\approx 2.573$。直接按鍵輸入 $4+10\\text{Ans}-6\\text{Ans}^{2}$ 按【EXE】，計算機螢幕直接顯示 $-10$，秒選選項 A。",
         "en": "On Casio fx-50FH II press [FMLA] [01] (or run Prog 1 on fx-3650P II), input $a=3, b=-5, c=-7$ to get $x \\approx 2.573$. Directly type $4+10\\text{Ans}-6\\text{Ans}^{2}$ and press [EXE]. The display shows $-10$, confirming option A instantly."
        }
       ]
      },
      "verify": "checked"
     }
    ]
   ]
  }
 ],
 "stats": {
  "mc": 6,
  "long": 4,
  "cards": 3,
  "pages": 2
 }
};
