// 自動生成，請勿手改（來源：data/learn/；重新生成：python tools/make_learn_data.py）
window.LEARN_TOPIC_EN05 = {
 "id": "en05",
 "stage": 1,
 "unit": 10,
 "subtopic": "variation",
 "source": "S.K.H. Bishop Baker Secondary School · S.5 After-School Tutorial · Endeavour Lesson 5（Ch.10 Variation，17 題）",
 "name": {
  "zh": "Lesson 5 · 變分（正變、反變、聯變、部分變）",
  "en": "Lesson 5 · Variation (direct, inverse, joint and partial)"
 },
 "intro": {
  "zh": "這一課是第 10 章「變分」的課後練習，四組題型：\n① 正變與反變：寫出 $y=kx^{n}$ 或 $y=\\frac{k}{x^{n}}$，先求 $k$，再寫關係式；\n② 聯變：$z$ 同時隨兩個量變化（正變放分子、反變放分母），以及「must be constant」怎樣整理成 $k=\\ldots$；\n③ 部分變：一部分是常數、一部分隨 $x$ 變化，用兩對數值解 $c$ 與 $k$；\n④ 百分比變化：把「增加 25%」、「減少 36%」變成倍數再相乘。\n卷一 9 題照評分寫上 1M／1A，卷二 8 題 MC，做完可以逐題核對。",
  "en": "This is the after-school worksheet for Chapter 10, Variation, with four groups of questions:\n(1) direct and inverse variation: write $y=kx^{n}$ or $y=\\frac{k}{x^{n}}$, find $k$, then write the relation;\n(2) joint variation: $z$ changes with two quantities at once (direct on top, inverse at the bottom), plus how to turn “must be constant” into $k=\\ldots$;\n(3) partial variation: one part constant and one part varying, using two pairs of values to find $c$ and $k$;\n(4) percentage change: turn “increased by 25%” and “decreased by 36%” into multipliers.\nThe 9 Paper 1 questions show the official 1M / 1A marks; the 8 Paper 2 multiple-choice questions follow."
 },
 "cmdHints": [
  {
   "en": "varies directly as $x$",
   "zh": "正變 → $y=kx$（$x$ 在分子）"
  },
  {
   "en": "varies inversely as $x$",
   "zh": "反變 → $y=\\frac{k}{x}$（$x$ 在分母）"
  },
  {
   "en": "varies directly as $\\sqrt{x}$",
   "zh": "隨 $\\sqrt{x}$ 正變 → $y=k\\sqrt{x}$，代入時記得開方"
  },
  {
   "en": "partly constant and partly varies as $x$",
   "zh": "部分變 → $y=c+kx$（兩個未知數要兩對數值）"
  },
  {
   "en": "find the change in the value of $y$",
   "zh": "change ＝ 新值 − 舊值（負數代表減少）"
  },
  {
   "en": "which of the following must be constant?",
   "zh": "整理成 $k=\\ldots$，那一條式就是常數"
  }
 ],
 "lessons": [
  {
   "id": "en05-1",
   "title": {
    "zh": "Lesson 5（卷一 9 題 ＋ 卷二 8 題）",
    "en": "Lesson 5 (9 Paper 1 questions + 8 Paper 2 questions)"
   },
   "cards": [
    {
     "id": "en5-c1",
     "topic": "en05",
     "title": {
      "zh": "正變與反變：先寫 $y=kx^{n}$，再求 $k$",
      "en": "Direct and inverse variation: write $y=kx^{n}$ first, then find $k$"
     },
     "body": {
      "zh": "變分題只有一個起手式：寫出含有 $k$ 的方程，代入已知的一對數值求 $k$，再寫出關係式。\n· $y$ 隨 $x$ 正變（varies directly as $x$）：{{math:0}}\n· 隨 $x^{2}$ 正變是 $y=kx^{2}$；隨 $\\sqrt{x}$ 正變是 $y=k\\sqrt{x}$\n· $y$ 隨 $x$ 反變（varies inversely as $x$）：{{math:1}}\n· 隨 $x^{2}$ 反變是 $y=\\frac{k}{x^{2}}$；隨 $\\sqrt{x}$ 反變是 $y=\\frac{k}{\\sqrt{x}}$\n一句話記法：正變的放在分子，反變的放在分母。\n例（本課卷一第 1 題）：$y$ 隨 $x$ 正變，$x=5$ 時 $y=10$：\n{{math:2}}\n求 $k$ 之後一定要寫出關係式 $y=2x$，否則下一部分無從入手。",
      "en": "Every variation question starts the same way: write an equation with $k$, substitute the given pair of values to find $k$, then write the relation.\n· $y$ varies directly as $x$: {{math:0}}\n· directly as $x^{2}$ gives $y=kx^{2}$; directly as $\\sqrt{x}$ gives $y=k\\sqrt{x}$\n· $y$ varies inversely as $x$: {{math:1}}\n· inversely as $x^{2}$ gives $y=\\frac{k}{x^{2}}$; inversely as $\\sqrt{x}$ gives $y=\\frac{k}{\\sqrt{x}}$\nOne way to remember: direct quantities go on top, inverse quantities go at the bottom.\nExample (Paper 1 question 1 of this lesson): $y$ varies directly as $x$, and $y=10$ when $x=5$:\n{{math:2}}\nAfter finding $k$, always write the relation $y=2x$; the next part cannot start without it."
     },
     "math": [
      "y=kx",
      "y=\\frac{k}{x}",
      "y=kx\n10=k(5)\n\\Rightarrow k=2\n\\Rightarrow y=2x"
     ],
     "vocab": [
      {
       "en": "varies directly as",
       "zh": "隨…正變"
      },
      {
       "en": "varies inversely as",
       "zh": "隨…反變"
      },
      {
       "en": "constant of variation",
       "zh": "變分常數 $k$"
      }
     ],
     "warn": {
      "zh": "三個最常見的錯：① 反變寫成 $y=kx$（應該 $y=\\frac{k}{x}$）；② 忘記開方 —— $\\sqrt{36}=6$，不是 36；③ 只寫出 $k$ 而沒有關係式。「increased from 36 to 81」問的是 $y$ 的改變，不是新值。",
      "en": "Three common errors: (1) writing an inverse variation as $y=kx$ instead of $y=\\frac{k}{x}$; (2) forgetting the square root — $\\sqrt{36}=6$, not 36; (3) stopping at $k$ without writing the relation. Also note that “increased from 36 to 81” asks for the change in $y$, not the new value."
     }
    },
    {
     "id": "en5-c2",
     "topic": "en05",
     "title": {
      "zh": "聯變：$z$ 同時隨兩個量變化",
      "en": "Joint variation: $z$ changing with two quantities at once"
     },
     "body": {
      "zh": "「$z$ 隨 $x$ 正變、同時隨 $y$ 反變」就是把兩個關係乘在一起：\n{{math:0}}\n平方、立方、平方根照樣放上去：\n{{math:1}}\n例（本課卷一第 4 題）：$z$ 隨 $\\sqrt{x}$ 正變、隨 $y$ 反變，$x=16$、$y=8$ 時 $z=5$：\n{{math:2}}\n「Which of the following must be constant?」的解法：把方程整理成 $k=\\ldots$，那一邊就是常數。例如 $z=\\frac{ky^{2}}{x}$ 移項得 $k=\\frac{zx}{y^{2}}$，所以 $\\frac{zx}{y^{2}}$ 與它的倒數 $\\frac{y^{2}}{zx}$ 都一定是常數。",
      "en": "“$z$ varies directly as $x$ and inversely as $y$” means multiplying the two relations:\n{{math:0}}\nPowers and roots follow the same rule:\n{{math:1}}\nExample (Paper 1 question 4 of this lesson): $z$ varies directly as $\\sqrt{x}$ and inversely as $y$; $z=5$ when $x=16$ and $y=8$:\n{{math:2}}\nFor “which of the following must be constant?”, rearrange the equation into $k=\\ldots$; that side is the constant. For example $z=\\frac{ky^{2}}{x}$ gives $k=\\frac{zx}{y^{2}}$, so both $\\frac{zx}{y^{2}}$ and its reciprocal $\\frac{y^{2}}{zx}$ must be constant."
     },
     "math": [
      "z=\\frac{kx}{y}",
      "z=k\\sqrt{x}\\,y^{3}",
      "z=\\frac{k\\sqrt{x}}{y}\n5=\\frac{k(4)}{8}\n\\Rightarrow k=10\n\\Rightarrow z=\\frac{10\\sqrt{x}}{y}"
     ],
     "vocab": [
      {
       "en": "joint variation",
       "zh": "聯變"
      },
      {
       "en": "varies as",
       "zh": "隨…變化"
      },
      {
       "en": "must be constant",
       "zh": "一定是常數"
      }
     ],
     "warn": {
      "zh": "最常見是把方向寫反：把「正變」的 $x$ 放到分母、把「反變」的 $y$ 放到分子。另一個是求 $k$ 時沒有把根號算進去（$\\sqrt{16}=4$，$\\sqrt{4}=2$）。",
      "en": "The commonest slip is reversing the directions: putting the direct quantity in the denominator and the inverse quantity on top. The next is forgetting to take the square root when finding $k$ ($\\sqrt{16}=4$ and $\\sqrt{4}=2$)."
     }
    },
    {
     "id": "en5-c3",
     "topic": "en05",
     "title": {
      "zh": "部分變：$y$ 是幾部分相加，不一定有常數項",
      "en": "Partial variation: $y$ is a sum of parts — not always a constant plus one part"
     },
     "body": {
      "zh": "「部分變」只是指 $y$ 由幾部分相加而成，各部分可以各自變化；不一定是「一個常數 ＋ 一個隨 $x$ 變化的部分」。常見有三種寫法：\n① 一部分是常數、一部分隨 $x^{n}$ 變化（最常見）：{{math:0}}\n② 兩部分都隨 $x$ 變化，只是次方不同（沒有常數項）：{{math:1}}\n③ 一部分正變、一部分反變（例如一部分隨 $x$、一部分隨 $\\frac{1}{x}$）：{{math:2}}\n由題目字眼寫出方程：\n· partly constant and partly varies as $x$ → $c+kx$\n· partly varies as $x$ and partly varies as $x^{2}$ → $ax+bx^{2}$（沒有常數項）\n· the sum of two parts, one part varies as $x$, the other as $\\frac{1}{x}$ → $ax+\\frac{b}{x}$\n未知數有幾個，就需要幾對已知值：$c$ 與 $k$ 兩個未知數 → 兩對；$a$ 與 $b$ 兩個未知數 → 兩對。（只有一對數值就解不到，題目一定會給兩對。）\n例（本課卷一第 8 題）：一部分隨 $x$、一部分隨 $x^{2}$，$f(5)=60$、$f(8)=120$：\n{{math:3}}",
      "en": "“Partial variation” only means that $y$ is a sum of parts, and each part may vary in its own way — it is not always “a constant plus one part varying as $x$”. Three common shapes:\n(1) one part constant and one part varying as $x^{n}$ (the most common): {{math:0}}\n(2) both parts vary as $x$, but with different powers (no constant term): {{math:1}}\n(3) one part varies directly and one part inversely (say $x$ and $\\frac{1}{x}$): {{math:2}}\nTurning the wording into an equation:\n· partly constant and partly varies as $x$ → $c+kx$\n· partly varies as $x$ and partly varies as $x^{2}$ → $ax+bx^{2}$ (no constant term)\n· the sum of two parts, one part varies as $x$, the other as $\\frac{1}{x}$ → $ax+\\frac{b}{x}$\nThe number of unknowns is the number of pairs of values needed: two unknowns ($c$, $k$) need two pairs; two unknowns ($a$, $b$) also need two pairs. One pair is never enough, so the question always gives two.\nExample (Paper 1 question 8 of this lesson): one part varies as $x$, the other as $x^{2}$, and $f(5)=60$, $f(8)=120$:\n{{math:3}}"
     },
     "math": [
      "y=c+kx^{2}",
      "f(x)=ax+bx^{2}",
      "y=ax+\\frac{b}{x}",
      "f(5)=60,\\ f(8)=120\n5a+25b=60\n8a+64b=120\n\\Rightarrow a+5b=12,\\ a+8b=15\n\\Rightarrow b=1,\\ a=7\n\\Rightarrow f(x)=7x+x^{2}"
     ],
     "vocab": [
      {
       "en": "partly varies as",
       "zh": "部分隨…變化"
      },
      {
       "en": "the sum of two parts",
       "zh": "兩部分之和"
      },
      {
       "en": "constant term",
       "zh": "常數項"
      }
     ],
     "warn": {
      "zh": "最常見的誤解：以為「部分變」一定要寫成「常數 ＋ 一部分」。本課第 8、9 題都是 $ax+bx^{2}$，沒有常數項。看到「the sum of two parts」就按文字逐部分寫；也不要假設兩部分的次方相同。最後，未知數有幾個就要幾對數值，解完要把整個 $f(x)$ 寫出來。",
      "en": "The commonest misunderstanding is that partial variation must look like “constant + one part”. Questions 8 and 9 of this lesson are $ax+bx^{2}$ with no constant term. Write one term per part as the wording says, do not assume both parts have the same power, and finish by writing the whole $f(x)$."
     }
    },
    {
     "id": "en5-c4",
     "topic": "en05",
     "title": {
      "zh": "百分比變化：把百分數變成倍數",
      "en": "Percentage change: turn percentages into multipliers"
     },
     "body": {
      "zh": "「增加 25%」＝ 乘 $1.25$；「減少 36%」＝ 乘 $0.64$（因為 $1-0.36=0.64$）。把每個量換成倍數，再代進關係式：\n{{math:0}}\n平方與平方根要一齊處理：$y$ 減少 36% 之後是 $0.64y$，而 $\\sqrt{0.64y}=0.8\\sqrt{y}$（因為 $0.8^{2}=0.64$）。\n最後把倍數變回百分數：$1.8$ ＝ 增加 $80\\%$；$0.64$ ＝ 減少 $36\\%$；$0.8$ ＝ 減少 $20\\%$。",
      "en": "“Increased by 25%” means multiply by $1.25$; “decreased by 36%” means multiply by $0.64$ (since $1-0.36=0.64$). Replace every quantity by its multiplier, then substitute:\n{{math:0}}\nSquares and roots must be handled too: after a 36% decrease $y$ becomes $0.64y$, and $\\sqrt{0.64y}=0.8\\sqrt{y}$ (because $0.8^{2}=0.64$).\nFinally turn the multiplier back into a percentage: $1.8$ is an increase of $80\\%$, $0.64$ is a decrease of $36\\%$, and $0.8$ is a decrease of $20\\%$."
     },
     "math": [
      "z=kxy^{2}\nz'=k(1.25x)(1.2y)^{2}\n=1.25\\times 1.44\\,kxy^{2}\n=1.8z"
     ],
     "vocab": [
      {
       "en": "increased by",
       "zh": "增加了"
      },
      {
       "en": "decreased by",
       "zh": "減少了"
      },
      {
       "en": "percentage change",
       "zh": "百分變化"
      }
     ],
     "warn": {
      "zh": "三個錯：① 把百分數相加（$25\\%+20\\%$）—— 應該相乘；② $y^{2}$ 的變化忘記平方（$1.2^{2}=1.44$，不是 $1.2$）；③ 根號忘記開（$\\sqrt{0.64}=0.8$）。最後要答「增加／減少百分之幾」，不是倍數。",
      "en": "Three errors: (1) adding the percentages ($25\\%+20\\%$) instead of multiplying the multipliers; (2) forgetting to square the change for $y^{2}$ ($1.2^{2}=1.44$, not $1.2$); (3) forgetting the square root ($\\sqrt{0.64}=0.8$). The final answer is a percentage increase or decrease, not a multiplier."
     }
    },
    {
     "id": "en5-c5",
     "topic": "en05",
     "title": {
      "zh": "變分題四步：寫方程 → 求 $k$ → 寫關係式 → 代入",
      "en": "Four steps for every variation question"
     },
     "body": {
      "zh": "① 按題目字眼寫出含 $k$ 的方程（正變放分子、反變放分母）；\n② 代入第一對已知值求 $k$（先約簡再乘，數字細一點）；\n③ 寫出關係式，例如 $y=\\frac{6912}{x^{2}}$ —— 這一步是評分位，不可省；\n④ 代入題目要求的數值，並回答題目問的那個量：問 change 就寫「新值 − 舊值」，問 $x$ 就不要答 $y$。\n例（本課卷一第 3 題）：$y$ 隨 $x^{2}$ 反變，$x=12$ 時 $y=48$：\n{{math:0}}\n檢查方法：把答案代回關係式，兩邊應該相等。",
      "en": "(1) Write the equation with $k$ from the wording (direct on top, inverse at the bottom).\n(2) Substitute the first pair of values to find $k$ (simplify before multiplying).\n(3) Write the relation, for example $y=\\frac{6912}{x^{2}}$ — this line earns a mark, so never skip it.\n(4) Substitute the required value and answer the quantity asked: for “change” write new value minus old value; if the question asks for $x$, do not answer $y$.\nExample (Paper 1 question 3 of this lesson): $y$ varies inversely as $x^{2}$, and $y=48$ when $x=12$:\n{{math:0}}\nCheck by substituting the answer back into the relation; both sides should agree."
     },
     "math": [
      "y=\\frac{k}{x^{2}}\n48=\\frac{k}{12^{2}}\n\\Rightarrow k=48\\times 144=6912\n\\Rightarrow y=\\frac{6912}{x^{2}}"
     ],
     "vocab": [
      {
       "en": "substitute",
       "zh": "代入"
      },
      {
       "en": "relation",
       "zh": "關係式"
      },
      {
       "en": "change",
       "zh": "改變量"
      }
     ],
     "warn": {
      "zh": "四步之中最常漏第 ③ 步（寫關係式）；其次是「change」答成新值。另外 $\\sqrt{x}$、$x^{2}$ 這類字眼一定要在方程裡出現，否則整題方向都錯。",
      "en": "Step (3), writing the relation, is the one most often missed; the next is answering the new value instead of the change. Also make sure $\\sqrt{x}$ or $x^{2}$ appears in your equation when the question says so."
     }
    }
   ],
   "long": [
    {
     "id": "eph-en05-q1",
     "type": "long",
     "kind": "short",
     "topic": "en05",
     "unit": 10,
     "subtopic": "variation",
     "difficulty": 1,
     "code": "EN5-Q1",
     "source": "Endeavour Lesson 5 Q1 · 正變（direct variation）",
     "stem": {
      "en": "It is given that $y$ varies directly as $x$. When $x=5$, $y=10$.",
      "zh": "已知 $y$ 隨 $x$ 正變。當 $x=5$ 時，$y=10$。"
     },
     "parts": [
      {
       "label": "(a)",
       "en": "Express $y$ in terms of $x$.",
       "zh": "以 $x$ 表示 $y$。",
       "marks": 2
      },
      {
       "label": "(b)",
       "en": "Find the value of $y$ when $x=7$.",
       "zh": "求當 $x=7$ 時 $y$ 的值。",
       "marks": 1
      }
     ],
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 「正變」寫成 $y=kx$",
         "en": "Step 1 · “Varies directly” becomes $y=kx$"
        },
        "math": "y=kx",
        "zh": "$y$ 隨 $x$ 正變，代表 $y$ 與 $x$ 成正比，即 $y=kx$，其中 $k$ 是變分常數。",
        "en": "“$y$ varies directly as $x$” means $y$ is proportional to $x$, that is $y=kx$, where $k$ is the constant of variation.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 代入已知值求 $k$，寫出關係式",
         "en": "Step 2 · Substitute the given values to find $k$, then write the relation"
        },
        "math": "10=k(5)\n\\Rightarrow k=2\n\\Rightarrow y=2x",
        "zh": "代入 $x=5$、$y=10$：$10=5k$，所以 $k=2$。把 $k$ 寫回方程，得到關係式 $y=2x$ —— 這條式一定要寫出來，否則下一部分無從入手。",
        "en": "Substituting $x=5$ and $y=10$ gives $10=5k$, so $k=2$. Putting $k$ back gives the relation $y=2x$, which must be written down before the next part.",
        "marking": "(1A)",
        "highlight": [
         "y=2x"
        ]
       },
       {
        "title": {
         "zh": "第 3 步 · (b) 代入 $x=7$",
         "en": "Step 3 · (b) Substitute $x=7$"
        },
        "math": "y=2(7)=14",
        "zh": "把 $x=7$ 代入關係式：$y=2(7)=14$。所以當 $x=7$ 時，$y=14$。",
        "en": "Substitute $x=7$ into the relation: $y=2(7)=14$. Hence $y=14$ when $x=7$.",
        "marking": "(1A)",
        "highlight": [
         "14"
        ]
       }
      ],
      "traps": [
       {
        "label": "把 $k$ 當成答案",
        "labelEn": "Stopping at $k$",
        "zh": "$k=2$ 只是常數，不是題目要的答案。寫不出 $y=2x$ 這條關係式，(b) 就沒有東西可以代入。",
        "en": "$k=2$ is only the constant, not the answer. Without the relation $y=2x$, part (b) has nothing to substitute into."
       },
       {
        "label": "把 $x$、$y$ 對調",
        "labelEn": "Swapping $x$ and $y$",
        "zh": "寫成 $k=\\frac{10}{5}$ 之外的 $\\frac{5}{10}=0.5$ 就完全相反。正變是 $y=kx$，所以 $k=\\frac{y}{x}$，分子是 $y$。",
        "en": "Writing $k=\\frac{5}{10}=0.5$ reverses the ratio. For $y=kx$ we have $k=\\frac{y}{x}$, with $y$ on top."
       }
      ],
      "tip": {
       "zh": "正變三件事：寫 $y=kx$ → 求 $k$ → 寫回關係式。第 3 步那條關係式是之後每一步的基礎，評分也會看。",
       "en": "Three steps for direct variation: write $y=kx$, find $k$, write the relation back. That relation is the basis of every later step and earns a mark."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算：用比例法",
         "en": "Check: use the ratio"
        },
        "zh": "$x$ 由 5 增至 7，倍數是 $\\frac{7}{5}$，所以 $y$ 也是 $10\\times\\frac{7}{5}=14$，與 $y=2x$ 的結果一致。",
        "en": "Going from $x=5$ to $x=7$ multiplies $x$ by $\\frac{7}{5}$, so $y=10\\times\\frac{7}{5}=14$, which agrees with $y=2x$."
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
     "unit": 10,
     "subtopic": "variation",
     "difficulty": 2,
     "code": "EN5-Q2",
     "source": "Endeavour Lesson 5 Q2 · $y$ 隨 $\\sqrt{x}$ 正變",
     "stem": {
      "en": "It is given that $y$ varies directly as $\\sqrt{x}$. When $x=36$, $y=4$.",
      "zh": "已知 $y$ 隨 $\\sqrt{x}$ 正變。當 $x=36$ 時，$y=4$。"
     },
     "parts": [
      {
       "label": "(a)",
       "en": "Express $y$ in terms of $x$.",
       "zh": "以 $x$ 表示 $y$。",
       "marks": 2
      },
      {
       "label": "(b)",
       "en": "If the value of $x$ is increased from 36 to 81, find the change in the value of $y$.",
       "zh": "若 $x$ 的值由 36 增加至 81，求 $y$ 的改變量。",
       "marks": 2
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 寫出 $y=k\\sqrt{x}$",
         "en": "Step 1 · Write $y=k\\sqrt{x}$"
        },
        "math": "y=k\\sqrt{x}",
        "zh": "「$y$ 隨 $\\sqrt{x}$ 正變」即 $y=k\\sqrt{x}$。留意 $\\sqrt{x}$ 在分子（正變），不是 $x$。",
        "en": "“$y$ varies directly as $\\sqrt{x}$” means $y=k\\sqrt{x}$: the square root, not $x$, sits on top.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 代入 $x=36$、$y=4$ 求 $k$",
         "en": "Step 2 · Substitute $x=36$, $y=4$ to find $k$"
        },
        "math": "4=k\\sqrt{36}=6k\n\\Rightarrow k=\\frac{2}{3}\n\\Rightarrow y=\\frac{2}{3}\\sqrt{x}",
        "zh": "$\\sqrt{36}=6$，所以 $4=6k$，$k=\\frac{2}{3}$。關係式是 $y=\\frac{2}{3}\\sqrt{x}$。",
        "en": "$\\sqrt{36}=6$, so $4=6k$ and $k=\\frac{2}{3}$. The relation is $y=\\frac{2}{3}\\sqrt{x}$.",
        "marking": "(1A)",
        "highlight": [
         "y=\\frac{2}{3}\\sqrt{x}"
        ]
       },
       {
        "title": {
         "zh": "第 3 步 · 求 $x=81$ 時的 $y$",
         "en": "Step 3 · Find $y$ when $x=81$"
        },
        "math": "y=\\frac{2}{3}\\sqrt{81}=\\frac{2}{3}(9)=6",
        "zh": "$\\sqrt{81}=9$，所以 $y=\\frac{2}{3}(9)=6$。",
        "en": "$\\sqrt{81}=9$, so $y=\\frac{2}{3}(9)=6$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 求改變量",
         "en": "Step 4 · Find the change"
        },
        "math": "\\text{change}=6-4=2",
        "zh": "題目問 change，要寫「新值 − 舊值」：$6-4=2$，即 $y$ 增加了 2。",
        "en": "The question asks for the change: new value minus old value, $6-4=2$, so $y$ increases by 2.",
        "marking": "(1A)",
        "highlight": [
         "2"
        ]
       }
      ],
      "traps": [
       {
        "label": "忘記開方",
        "labelEn": "Forgetting the square root",
        "zh": "把 $\\sqrt{36}$ 當成 36、$\\sqrt{81}$ 當成 81，$k$ 與答案都會細了 6 倍或 9 倍。見到 $\\sqrt{x}$ 就要真的開方。",
        "en": "Treating $\\sqrt{36}$ as 36 or $\\sqrt{81}$ as 81 makes $k$ and the answer wrong by a factor of 6 or 9. Always take the square root."
       },
       {
        "label": "答了新值而不是改變量",
        "labelEn": "Answering the new value, not the change",
        "zh": "題目問「change in the value of $y$」，答案要寫 $6-4=2$（increased by 2），不是 6。",
        "en": "The question asks for “the change in the value of $y$”, so the answer is $6-4=2$ (increased by 2), not 6."
       }
      ],
      "tip": {
       "zh": "「increased from 36 to 81」問的是改變量：先後各計一次 $y$，再相減。負數就寫「decreased by」。",
       "en": "“Increased from 36 to 81” asks for the change: compute $y$ at both values and subtract. A negative result is a decrease."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算：用倍數",
         "en": "Check: use a multiplier"
        },
        "zh": "$\\sqrt{x}$ 由 6 變成 9（×1.5），正變之下 $y$ 也 ×1.5：$4\\times1.5=6$，改變量 $6-4=2$。",
        "en": "$\\sqrt{x}$ goes from 6 to 9 (a factor of 1.5), and a direct variation multiplies $y$ by the same factor: $4\\times1.5=6$, so the change is 2."
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
     "unit": 10,
     "subtopic": "variation",
     "difficulty": 2,
     "code": "EN5-Q3",
     "source": "Endeavour Lesson 5 Q3 · $y$ 隨 $x^{2}$ 反變",
     "stem": {
      "en": "It is given that $y$ varies inversely as $x^{2}$. When $x=12$, $y=48$.",
      "zh": "已知 $y$ 隨 $x^{2}$ 反變。當 $x=12$ 時，$y=48$。"
     },
     "parts": [
      {
       "label": "(a)",
       "en": "Express $y$ in terms of $x$.",
       "zh": "以 $x$ 表示 $y$。",
       "marks": 2
      },
      {
       "label": "(b)",
       "en": "If the value of $x$ is increased from 12 to 16, find the change in the value of $y$.",
       "zh": "若 $x$ 的值由 12 增加至 16，求 $y$ 的改變量。",
       "marks": 2
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 寫出 $y=\\frac{k}{x^{2}}$",
         "en": "Step 1 · Write $y=\\frac{k}{x^{2}}$"
        },
        "math": "y=\\frac{k}{x^{2}}",
        "zh": "「$y$ 隨 $x^{2}$ 反變」即 $y$ 與 $x^{2}$ 成反比：$y=\\frac{k}{x^{2}}$，$x^{2}$ 在分母。",
        "en": "“$y$ varies inversely as $x^{2}$” means $y$ is inversely proportional to $x^{2}$: $y=\\frac{k}{x^{2}}$, with $x^{2}$ at the bottom.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 代入求 $k$，寫出關係式",
         "en": "Step 2 · Substitute to find $k$, then write the relation"
        },
        "math": "48=\\frac{k}{12^{2}}=\\frac{k}{144}\n\\Rightarrow k=6912\n\\Rightarrow y=\\frac{6912}{x^{2}}",
        "zh": "代入 $x=12$、$y=48$：$48=\\frac{k}{144}$，兩邊乘 $144$ 得 $k=6912$。關係式是 $y=\\frac{6912}{x^{2}}$。",
        "en": "Substituting $x=12$ and $y=48$: $48=\\frac{k}{144}$, so $k=6912$ after multiplying by 144. The relation is $y=\\frac{6912}{x^{2}}$.",
        "marking": "(1A)",
        "highlight": [
         "y=\\frac{6912}{x^{2}}"
        ]
       },
       {
        "title": {
         "zh": "第 3 步 · 求 $x=16$ 時的 $y$",
         "en": "Step 3 · Find $y$ when $x=16$"
        },
        "math": "y=\\frac{6912}{16^{2}}=\\frac{6912}{256}=27",
        "zh": "$16^{2}=256$，所以 $y=\\frac{6912}{256}=27$。",
        "en": "$16^{2}=256$, so $y=\\frac{6912}{256}=27$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 求改變量",
         "en": "Step 4 · Find the change"
        },
        "math": "\\text{change}=27-48=-21",
        "zh": "新值減舊值：$27-48=-21$，即 $y$ 減少了 21。",
        "en": "New value minus old value: $27-48=-21$, so $y$ decreases by 21.",
        "marking": "(1A)",
        "highlight": [
         "-21"
        ]
       }
      ],
      "traps": [
       {
        "label": "反變寫成乘積",
        "labelEn": "Writing inverse variation as a product",
        "zh": "寫成 $y=kx^{2}$ 就變成正變，$k$ 會算成 $48\\times144$，答案完全相反。反變是除以 $x^{2}$。",
        "en": "Writing $y=kx^{2}$ turns it into a direct variation and gives $k=48\\times144$, the opposite answer. Inverse means dividing by $x^{2}$."
       },
       {
        "label": "$x^{2}$ 忘記平方",
        "labelEn": "Forgetting to square $x$",
        "zh": "反變的是 $x^{2}$ 而不是 $x$：代入要用 $12^{2}=144$、$16^{2}=256$，用了 12 或 16 就整題錯。",
        "en": "The variation is in $x^{2}$, not $x$: use $12^{2}=144$ and $16^{2}=256$. Using 12 or 16 spoils the whole question."
       }
      ],
      "tip": {
       "zh": "反變的「反」在分母：$y=\\frac{k}{x^{n}}$。求 $k$ 時先乘 $x^{n}$，數字大也要照乘（$48\\times144=6912$）。",
       "en": "Inverse variation puts the variable in the denominator: $y=\\frac{k}{x^{n}}$. When finding $k$, multiply by $x^{n}$ even when the number is large ($48\\times144=6912$)."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算：用倍數",
         "en": "Check: use multipliers"
        },
        "zh": "$x$ 由 12 增至 16（×$\\frac{4}{3}$），$x^{2}$ 就 ×$\\frac{16}{9}$，反變之下 $y$ 要 ×$\\frac{9}{16}$：$48\\times\\frac{9}{16}=27$ ✓。",
        "en": "$x$ goes from 12 to 16 (a factor of $\\frac{4}{3}$), so $x^{2}$ grows by $\\frac{16}{9}$ and $y$ shrinks by $\\frac{9}{16}$: $48\\times\\frac{9}{16}=27$."
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
     "unit": 10,
     "subtopic": "variation",
     "difficulty": 3,
     "code": "EN5-Q4",
     "source": "Endeavour Lesson 5 Q4 · 聯變（$z$ 隨 $\\sqrt{x}$ 正變、隨 $y$ 反變）",
     "stem": {
      "en": "Suppose $z$ varies directly as $\\sqrt{x}$ and inversely as $y$. When $x=16$ and $y=8$, $z=5$. Find the value of $x$ when $y=\\frac{4}{5}$ and $z=25$.",
      "zh": "設 $z$ 隨 $\\sqrt{x}$ 正變，並隨 $y$ 反變。當 $x=16$、$y=8$ 時，$z=5$。求當 $y=\\frac{4}{5}$、$z=25$ 時 $x$ 的值。"
     },
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 寫出聯變方程",
         "en": "Step 1 · Write the joint variation equation"
        },
        "math": "z=\\frac{k\\sqrt{x}}{y}",
        "zh": "「隨 $\\sqrt{x}$ 正變」放分子，「隨 $y$ 反變」放分母，所以 $z=\\frac{k\\sqrt{x}}{y}$。",
        "en": "The direct part $\\sqrt{x}$ goes on top and the inverse part $y$ goes at the bottom: $z=\\frac{k\\sqrt{x}}{y}$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 代入 $x=16$、$y=8$、$z=5$ 求 $k$",
         "en": "Step 2 · Substitute $x=16$, $y=8$, $z=5$ to find $k$"
        },
        "math": "5=\\frac{k(4)}{8}=\\frac{k}{2}\n\\Rightarrow k=10\n\\Rightarrow z=\\frac{10\\sqrt{x}}{y}",
        "zh": "$\\sqrt{16}=4$，所以 $5=\\frac{4k}{8}=\\frac{k}{2}$，得 $k=10$。關係式是 $z=\\frac{10\\sqrt{x}}{y}$。",
        "en": "$\\sqrt{16}=4$, so $5=\\frac{4k}{8}=\\frac{k}{2}$, giving $k=10$. The relation is $z=\\frac{10\\sqrt{x}}{y}$.",
        "marking": "(1A)",
        "highlight": [
         "z=\\frac{10\\sqrt{x}}{y}"
        ]
       },
       {
        "title": {
         "zh": "第 3 步 · 代入 $y=\\frac{4}{5}$、$z=25$ 求 $x$",
         "en": "Step 3 · Substitute $y=\\frac{4}{5}$, $z=25$ to find $x$"
        },
        "math": "25=\\frac{10\\sqrt{x}}{4/5}\n\\Rightarrow 25\\cdot\\frac{4}{5}=10\\sqrt{x}\n\\Rightarrow 20=10\\sqrt{x}\n\\Rightarrow x=4",
        "zh": "把 $y=\\frac{4}{5}$ 代入，分母是 $\\frac{4}{5}$（除以 $\\frac{4}{5}$ 等於乘 $\\frac{5}{4}$）：$25=\\frac{10\\sqrt{x}}{4/5}$。兩邊乘 $\\frac{4}{5}$ 得 $20=10\\sqrt{x}$，所以 $\\sqrt{x}=2$，$x=4$。",
        "en": "With $y=\\frac{4}{5}$ the denominator is $\\frac{4}{5}$ (dividing by it is multiplying by $\\frac{5}{4}$): $25=\\frac{10\\sqrt{x}}{4/5}$. Multiplying by $\\frac{4}{5}$ gives $20=10\\sqrt{x}$, so $\\sqrt{x}=2$ and $x=4$.",
        "marking": "(1A)",
        "highlight": [
         "x=4"
        ]
       }
      ],
      "traps": [
       {
        "label": "正反調轉",
        "labelEn": "Swapping direct and inverse",
        "zh": "寫成 $z=\\frac{ky}{\\sqrt{x}}$ 就把兩邊方向都倒轉，$k$ 會算成 $5\\times\\frac{8}{4}=10$ 之外的數，最後 $x$ 一定錯。",
        "en": "Writing $z=\\frac{ky}{\\sqrt{x}}$ reverses both directions; $k$ comes out wrong and $x$ cannot be right."
       },
       {
        "label": "忘記開方",
        "labelEn": "Forgetting the square root",
        "zh": "$\\sqrt{16}=4$、$\\sqrt{x}$ 最後要平方：$\\sqrt{x}=2$ 時 $x=4$，不是 2。",
        "en": "$\\sqrt{16}=4$, and $\\sqrt{x}$ must be squared at the end: $\\sqrt{x}=2$ gives $x=4$, not 2."
       }
      ],
      "tip": {
       "zh": "聯變只有一個原則：正變放分子、反變放分母。求 $k$ 之後，把關係式寫清楚再做第二部分，就不會把 $\\sqrt{x}$ 與 $y$ 的位置搞亂。",
       "en": "One rule for joint variation: direct on top, inverse at the bottom. Write the relation clearly after finding $k$ so the positions of $\\sqrt{x}$ and $y$ do not get mixed up."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算：代回兩組數值",
         "en": "Check: substitute both pairs"
        },
        "zh": "$x=16$、$y=8$：$z=\\frac{10(4)}{8}=5$ ✓；$x=4$、$y=\\frac{4}{5}$：$z=\\frac{10(2)}{4/5}=\\frac{20}{0.8}=25$ ✓。",
        "en": "For $x=16$, $y=8$: $z=\\frac{10(4)}{8}=5$. For $x=4$, $y=\\frac{4}{5}$: $z=\\frac{10(2)}{4/5}=25$. Both match."
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
     "unit": 10,
     "subtopic": "variation",
     "difficulty": 2,
     "code": "EN5-Q5",
     "source": "Endeavour Lesson 5 Q11 · 部分變（一部分為常數、一部分隨 $x^{2}$ 變化）",
     "stem": {
      "en": "It is given that $y$ is the sum of two parts. One part is a constant and the other part varies directly as $x^{2}$. When $x=2$, $y=1$ and when $x=3$, $y=-4$. Express $y$ in terms of $x$.",
      "zh": "已知 $y$ 是兩部分之和：一部分為常數，另一部分隨 $x^{2}$ 正變。當 $x=2$ 時 $y=1$；當 $x=3$ 時 $y=-4$。以 $x$ 表示 $y$。"
     },
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 寫出 $y=c+kx^{2}$ 與兩條方程",
         "en": "Step 1 · Write $y=c+kx^{2}$ and the two equations"
        },
        "math": "y=c+kx^{2}\n1=c+4k\\ \\ldots(1)\n-4=c+9k\\ \\ldots(2)",
        "zh": "一部分是常數 $c$，另一部分隨 $x^{2}$ 正變，所以 $y=c+kx^{2}$。代入兩組數值：$x=2$ 得 $1=c+4k$；$x=3$ 得 $-4=c+9k$。",
        "en": "One part is the constant $c$ and the other varies as $x^{2}$, so $y=c+kx^{2}$. Substituting the two pairs gives $1=c+4k$ and $-4=c+9k$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 兩式相減消去 $c$，求 $k$",
         "en": "Step 2 · Subtract to eliminate $c$ and find $k$"
        },
        "math": "(2)-(1):\\ 5k=-5\n\\Rightarrow k=-1",
        "zh": "$(2)-(1)$：左邊 $9k-4k=5k$，右邊 $-4-1=-5$，所以 $5k=-5$，$k=-1$。",
        "en": "$(2)-(1)$ gives $9k-4k=5k$ on the left and $-4-1=-5$ on the right, so $5k=-5$ and $k=-1$.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 3 步 · 代回求 $c$",
         "en": "Step 3 · Substitute back to find $c$"
        },
        "math": "c=1-4(-1)=5",
        "zh": "把 $k=-1$ 代入 (1)：$1=c-4$，所以 $c=5$。",
        "en": "With $k=-1$ in (1): $1=c-4$, so $c=5$.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 4 步 · 寫出關係式",
         "en": "Step 4 · Write the relation"
        },
        "math": "y=5-x^{2}",
        "zh": "把 $c=5$、$k=-1$ 寫回方程：$y=5-x^{2}$。答案要寫這條關係式，不可以只寫 $c=5$、$k=-1$。",
        "en": "Putting $c=5$ and $k=-1$ back gives $y=5-x^{2}$. The answer is this relation, not the separate values of $c$ and $k$.",
        "marking": "(1A)",
        "highlight": [
         "y=5-x^{2}"
        ]
       }
      ],
      "traps": [
       {
        "label": "漏了常數 $c$",
        "labelEn": "Dropping the constant $c$",
        "zh": "寫成 $y=kx^{2}$ 就少了一個未知數，兩組數值只能求出一條方程，解不到兩個未知數。",
        "en": "Writing $y=kx^{2}$ leaves only one unknown; the two pairs then give one equation, which cannot fix both unknowns."
       },
       {
        "label": "相減時符號錯",
        "labelEn": "Sign slip when subtracting",
        "zh": "$(1)-(2)$ 也可以，但要一致：$4k-9k=-5k$、$1-(-4)=5$，同樣得 $k=-1$。半途換方向就會得 $k=1$。",
        "en": "$(1)-(2)$ is also fine as long as it is consistent: $4k-9k=-5k$ and $1-(-4)=5$, again giving $k=-1$. Switching direction halfway gives $k=1$."
       }
      ],
      "tip": {
       "zh": "部分變＝兩個未知數，一定要兩對數值。做法固定：寫 $y=c+kx^{n}$ → 兩條方程 → 相減消 $c$ → 代回 → 寫關係式。",
       "en": "Partial variation has two unknowns and always needs two pairs of values: write $y=c+kx^{n}$, form two equations, subtract to remove $c$, substitute back, then write the relation."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算：代回兩組數值",
         "en": "Check: substitute both pairs"
        },
        "zh": "$x=2$：$5-4=1$ ✓；$x=3$：$5-9=-4$ ✓。",
        "en": "For $x=2$: $5-4=1$. For $x=3$: $5-9=-4$. Both match."
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
     "unit": 10,
     "subtopic": "variation",
     "difficulty": 3,
     "code": "EN5-Q6",
     "source": "Endeavour Lesson 5 Q14 · 部分變應用題（Helen 賣首飾）",
     "stem": {
      "en": "When Helen sells $n$ pieces of jewellery in a month, her income in that month is $S$ dollars. It is given that $S$ is a sum of two parts, one part is a constant and the other part varies as $n$. When $n=5$, $S=10200$; when $n=8$, $S=12000$.",
      "zh": "Helen 每月賣出 $n$ 件首飾，該月收入為 $S$ 元。已知 $S$ 是兩部分之和：一部分為常數，另一部分隨 $n$ 變化。當 $n=5$ 時 $S=10200$；當 $n=8$ 時 $S=12000$。"
     },
     "parts": [
      {
       "label": "(a)",
       "en": "When Helen sells 22 pieces of jewellery in a month, find her income in that month.",
       "zh": "若 Helen 在某月賣出 22 件首飾，求她該月的收入。",
       "marks": 4
      },
      {
       "label": "(b)",
       "en": "Is it possible that when Helen sells a certain number of pieces of jewellery in a month, her income in that month is 30000 dollars? Explain your answer.",
       "zh": "是否可能在某月賣出若干件首飾時，該月收入為 30000 元？試解釋。",
       "marks": 2
      }
     ],
     "marks": 6,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 寫出 $S=c+kn$ 與兩條方程",
         "en": "Step 1 · Write $S=c+kn$ and the two equations"
        },
        "math": "S=c+kn\n10200=c+5k\\ \\ldots(1)\n12000=c+8k\\ \\ldots(2)",
        "zh": "$S$ 的一部分是固定收入 $c$，另一部分隨件數 $n$ 正變，所以 $S=c+kn$。代入 $(n,S)=(5,10200)$ 與 $(8,12000)$ 得兩條方程。",
        "en": "One part of $S$ is a fixed $c$ and the other varies directly as $n$, so $S=c+kn$. Substituting $(n,S)=(5,10200)$ and $(8,12000)$ gives two equations.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 相減求 $k$",
         "en": "Step 2 · Subtract to find $k$"
        },
        "math": "(2)-(1):\\ 3k=1800\n\\Rightarrow k=600",
        "zh": "$(2)-(1)$：$3k=1800$，所以 $k=600$，即每賣出一件首飾多得 600 元。",
        "en": "$(2)-(1)$ gives $3k=1800$, so $k=600$: each piece sold adds 600 dollars.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 3 步 · 求 $c$，寫出關係式",
         "en": "Step 3 · Find $c$ and write the relation"
        },
        "math": "c=10200-5(600)=7200\n\\Rightarrow S=7200+600n",
        "zh": "代回 (1)：$10200=c+3000$，所以 $c=7200$。關係式是 $S=7200+600n$。",
        "en": "Back in (1): $10200=c+3000$, so $c=7200$. The relation is $S=7200+600n$.",
        "marking": "(1A)",
        "highlight": [
         "S=7200+600n"
        ]
       },
       {
        "title": {
         "zh": "第 4 步 · (a) 代入 $n=22$",
         "en": "Step 4 · (a) Substitute $n=22$"
        },
        "math": "S=7200+600(22)=20400",
        "zh": "$600\\times22=13200$，所以 $S=7200+13200=20400$，即 20400 元。",
        "en": "$600\\times22=13200$, so $S=7200+13200=20400$, that is 20400 dollars.",
        "marking": "(1A)",
        "highlight": [
         "20400"
        ]
       },
       {
        "title": {
         "zh": "第 5 步 · (b) 令 $S=30000$，解 $n$",
         "en": "Step 5 · (b) Put $S=30000$ and solve for $n$"
        },
        "math": "30000=7200+600n\n\\Rightarrow 600n=22800",
        "zh": "把 $S=30000$ 代入關係式：$30000=7200+600n$，移項得 $600n=22800$。",
        "en": "Substituting $S=30000$: $30000=7200+600n$, so $600n=22800$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 6 步 · (b) 判斷 $n$ 是否可以是件數",
         "en": "Step 6 · (b) Decide whether that $n$ is possible"
        },
        "math": "n=38",
        "zh": "$n=38$ 是正整數，代表賣出 38 件，所以有可能；答案寫「Yes, when $n=38$」。若解出來的 $n$ 不是整數（例如 38.5），就不可能。",
        "en": "$n=38$ is a positive integer, so selling 38 pieces is possible: “Yes, when $n=38$”. If $n$ were not an integer (say 38.5), it would be impossible.",
        "marking": "(1A)",
        "highlight": [
         "38"
        ]
       }
      ],
      "traps": [
       {
        "label": "只寫「不可能」",
        "labelEn": "Answering “impossible” without checking",
        "zh": "(b) 要真的解方程：$600n=22800$ 得 $n=38$，是整數，所以有可能。只說「不可能」而沒有計，拿不到分。",
        "en": "Part (b) needs the equation solved: $600n=22800$ gives $n=38$, an integer, so it is possible. Answering “impossible” without solving earns nothing."
       },
       {
        "label": "答了倍數而不是件數",
        "labelEn": "Answering with $k$ instead of $n$",
        "zh": "(a) 問的是收入（20400），不是 $k=600$；(b) 問的是件數（38），不是收入。看清楚問哪個量。",
        "en": "Part (a) asks for the income (20400), not $k=600$; part (b) asks for the number of pieces (38), not the income."
       }
      ],
      "tip": {
       "zh": "應用題的關係式要寫齊單位的意思：$S=7200+600n$ 之中 7200 是底薪、600 是每件的佣金。寫得出這句，(b) 的解釋就有分。",
       "en": "Read the relation with units: in $S=7200+600n$, the 7200 is the fixed part and the 600 is earned per piece. Explaining this earns the mark in part (b)."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算：三組數值",
         "en": "Check: three pairs"
        },
        "zh": "$n=5$：$7200+3000=10200$ ✓；$n=8$：$7200+4800=12000$ ✓；$n=38$：$7200+22800=30000$ ✓。",
        "en": "For $n=5$: $7200+3000=10200$. For $n=8$: $7200+4800=12000$. For $n=38$: $7200+22800=30000$. All match."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en05-q7",
     "type": "long",
     "topic": "en05",
     "unit": 10,
     "subtopic": "variation",
     "difficulty": 3,
     "code": "EN5-Q7",
     "source": "Endeavour Lesson 5 Q15 · 部分變＋二次方程",
     "stem": {
      "en": "It is given that $f(x)$ is partly constant and partly varies as $x$. Suppose that $f(3)=220$ and $f(-3)=-20$.",
      "zh": "已知 $f(x)$ 一部分為常數，另一部分隨 $x$ 變化。設 $f(3)=220$ 且 $f(-3)=-20$。"
     },
     "parts": [
      {
       "label": "(a)",
       "en": "Find $f(x)$.",
       "zh": "求 $f(x)$。",
       "marks": 3
      },
      {
       "label": "(b)",
       "en": "Solve the equation $f(x)=-4x^{2}$.",
       "zh": "解方程 $f(x)=-4x^{2}$。",
       "marks": 2
      }
     ],
     "marks": 5,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 寫出 $f(x)=c+kx$ 與兩條方程",
         "en": "Step 1 · Write $f(x)=c+kx$ and the two equations"
        },
        "math": "f(x)=c+kx\n220=c+3k\\ \\ldots(1)\n-20=c-3k\\ \\ldots(2)",
        "zh": "一部分是常數 $c$，另一部分隨 $x$ 正變，所以 $f(x)=c+kx$。代入 $f(3)=220$ 與 $f(-3)=-20$。",
        "en": "One part is constant and the other varies as $x$, so $f(x)=c+kx$. Substitute $f(3)=220$ and $f(-3)=-20$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 兩式相加求 $c$",
         "en": "Step 2 · Add the two equations to find $c$"
        },
        "math": "(1)+(2):\\ 2c=200\n\\Rightarrow c=100",
        "zh": "兩式相加，$3k$ 與 $-3k$ 相消：$2c=200$，所以 $c=100$。",
        "en": "Adding the equations cancels $3k$ and $-3k$: $2c=200$, so $c=100$.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 3 步 · 求 $k$，寫出 $f(x)$",
         "en": "Step 3 · Find $k$ and write $f(x)$"
        },
        "math": "6k=240\n\\Rightarrow k=40\n\\Rightarrow f(x)=100+40x",
        "zh": "由 (1)：$220=100+3k$，所以 $3k=120$，$k=40$。因此 $f(x)=100+40x$。",
        "en": "From (1): $220=100+3k$, so $3k=120$ and $k=40$. Hence $f(x)=100+40x$.",
        "marking": "(1A)",
        "highlight": [
         "f(x)=100+40x"
        ]
       },
       {
        "title": {
         "zh": "第 4 步 · (b) 寫成二次方程",
         "en": "Step 4 · (b) Form the quadratic equation"
        },
        "math": "100+40x=-4x^{2}\n\\Rightarrow 4x^{2}+40x+100=0\n\\Rightarrow x^{2}+10x+25=0",
        "zh": "把 $f(x)=100+40x$ 代入 $f(x)=-4x^{2}$，所有項搬到左邊：$4x^{2}+40x+100=0$，全式除以 $4$ 得 $x^{2}+10x+25=0$。",
        "en": "Substituting $f(x)=100+40x$ into $f(x)=-4x^{2}$ and moving everything left: $4x^{2}+40x+100=0$, or $x^{2}+10x+25=0$ after dividing by 4.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 5 步 · (b) 分解求解",
         "en": "Step 5 · (b) Factorise and solve"
        },
        "math": "(x+5)^{2}=0\n\\Rightarrow x=-5",
        "zh": "$x^{2}+10x+25=(x+5)^{2}$，所以 $(x+5)^{2}=0$，得 $x=-5$（重根，只有一個解）。",
        "en": "$x^{2}+10x+25=(x+5)^{2}$, so $(x+5)^{2}=0$ and $x=-5$ (a repeated root, so there is only one solution).",
        "marking": "(1A)",
        "highlight": [
         "x=-5"
        ]
       }
      ],
      "traps": [
       {
        "label": "(b) 沒有搬成一邊",
        "labelEn": "Not moving everything to one side",
        "zh": "直接寫 $100+40x=-4x^{2}$ 就開始分解是錯的，要先把所有項搬到左邊成為 $=0$，才可以分解或代入公式。",
        "en": "Factorising $100+40x=-4x^{2}$ straight away is wrong; everything must first be moved to one side so that the equation equals 0."
       },
       {
        "label": "重根寫成兩個解",
        "labelEn": "Writing a repeated root twice",
        "zh": "$(x+5)^{2}=0$ 只有 $x=-5$ 一個解（重根）。寫成「$x=-5$ 或 $x=-5$」不會額外加分。",
        "en": "$(x+5)^{2}=0$ has the single solution $x=-5$ (a repeated root). Writing it twice earns nothing extra."
       }
      ],
      "tip": {
       "zh": "(b) 是「先求 $f(x)$，再解方程」的固定套路：把 $f(x)$ 的結果整條代入，搬到一邊，再用因式分解。前一部分錯，(b) 一定跟著錯。",
       "en": "Part (b) always follows part (a): substitute the whole expression for $f(x)$, move everything to one side, then factorise. An error in (a) always carries into (b)."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算：三個位置",
         "en": "Check: three places"
        },
        "zh": "$f(3)=100+120=220$ ✓；$f(-3)=100-120=-20$ ✓；$x=-5$ 時 $f(-5)=100-200=-100$，而 $-4(-5)^{2}=-100$ ✓。",
        "en": "$f(3)=100+120=220$ and $f(-3)=100-120=-20$. At $x=-5$, $f(-5)=100-200=-100$ and $-4(-5)^{2}=-100$, so both sides agree."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en05-q8",
     "type": "long",
     "topic": "en05",
     "unit": 10,
     "subtopic": "variation",
     "difficulty": 3,
     "code": "EN5-Q8",
     "source": "Endeavour Lesson 5 Q16 · 部分變（$x$ 與 $x^{2}$ 兩部分）",
     "stem": {
      "en": "It is given that $f(x)$ is the sum of two parts, one part varies as $x$ and the other part varies as $x^{2}$. Suppose that $f(5)=60$ and $f(8)=120$.",
      "zh": "已知 $f(x)$ 是兩部分之和：一部分隨 $x$ 變化，另一部分隨 $x^{2}$ 變化。設 $f(5)=60$ 且 $f(8)=120$。"
     },
     "parts": [
      {
       "label": "(a)",
       "en": "Find $f(x)$.",
       "zh": "求 $f(x)$。",
       "marks": 3
      },
      {
       "label": "(b)",
       "en": "Solve the equation $f(x)=30$.",
       "zh": "解方程 $f(x)=30$。",
       "marks": 2
      }
     ],
     "marks": 5,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 寫出 $f(x)=ax+bx^{2}$ 與兩條方程",
         "en": "Step 1 · Write $f(x)=ax+bx^{2}$ and the two equations"
        },
        "math": "f(x)=ax+bx^{2}\n60=5a+25b\\ \\ldots(1)\n120=8a+64b\\ \\ldots(2)",
        "zh": "一部分隨 $x$ 變化（$ax$），另一部分隨 $x^{2}$ 變化（$bx^{2}$），所以 $f(x)=ax+bx^{2}$。代入 $f(5)=60$ 與 $f(8)=120$。",
        "en": "One part varies as $x$ ($ax$) and the other as $x^{2}$ ($bx^{2}$), so $f(x)=ax+bx^{2}$. Substitute $f(5)=60$ and $f(8)=120$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 約簡後相減求 $b$",
         "en": "Step 2 · Simplify, then subtract to find $b$"
        },
        "math": "(1)\\div5:\\ a+5b=12\n(2)\\div8:\\ a+8b=15\n\\Rightarrow b=1",
        "zh": "先把 (1) 全式除以 5、把 (2) 全式除以 8，係數就變簡單：$a+5b=12$、$a+8b=15$。相減得 $3b=3$，所以 $b=1$。",
        "en": "Divide (1) by 5 and (2) by 8 to simplify the coefficients: $a+5b=12$ and $a+8b=15$. Subtracting gives $3b=3$, so $b=1$.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 3 步 · 求 $a$，寫出 $f(x)$",
         "en": "Step 3 · Find $a$ and write $f(x)$"
        },
        "math": "a=12-5=7\n\\Rightarrow f(x)=7x+x^{2}",
        "zh": "代回 $a+5b=12$：$a=12-5=7$。所以 $f(x)=7x+x^{2}$。",
        "en": "Back in $a+5b=12$: $a=12-5=7$, so $f(x)=7x+x^{2}$.",
        "marking": "(1A)",
        "highlight": [
         "f(x)=7x+x^{2}"
        ]
       },
       {
        "title": {
         "zh": "第 4 步 · (b) 寫成二次方程",
         "en": "Step 4 · (b) Form the quadratic equation"
        },
        "math": "x^{2}+7x=30\n\\Rightarrow x^{2}+7x-30=0",
        "zh": "令 $f(x)=30$：$7x+x^{2}=30$，搬到一邊得 $x^{2}+7x-30=0$。",
        "en": "Setting $f(x)=30$: $7x+x^{2}=30$, so $x^{2}+7x-30=0$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 5 步 · (b) 分解求解",
         "en": "Step 5 · (b) Factorise and solve"
        },
        "math": "(x+10)(x-3)=0\n\\Rightarrow x=-10\\text{ or }x=3",
        "zh": "要找兩個數相乘 $-30$、相加 $7$：$10$ 與 $-3$。所以 $(x+10)(x-3)=0$，$x=-10$ 或 $x=3$。兩個根都要寫。",
        "en": "Two numbers multiplying to $-30$ and adding to $7$ are $10$ and $-3$: $(x+10)(x-3)=0$, so $x=-10$ or $x=3$. Both roots are needed.",
        "marking": "(1A)",
        "highlight": [
         "x=-10",
         "x=3"
        ]
       }
      ],
      "traps": [
       {
        "label": "沒有約簡就解",
        "labelEn": "Solving without simplifying",
        "zh": "$5a+25b=60$、$8a+64b=120$ 直接消元也可以，但數字大、易計錯。先各行約簡（$\\div5$、$\\div8$）就變成 $a+5b=12$、$a+8b=15$。",
        "en": "Eliminating directly from $5a+25b=60$ and $8a+64b=120$ works but the numbers are large. Dividing by 5 and by 8 gives the friendlier $a+5b=12$ and $a+8b=15$."
       },
       {
        "label": "只寫一個根",
        "labelEn": "Keeping only one root",
        "zh": "(b) 是二次方程，$x=-10$ 與 $x=3$ 都要寫；只寫一個當作半對。",
        "en": "Part (b) is a quadratic equation, so both $x=-10$ and $x=3$ are needed; giving one is only half an answer."
       }
      ],
      "tip": {
       "zh": "「一部分隨 $x$、另一部分隨 $x^{2}$」＝ $ax+bx^{2}$，兩個未知數要兩對數值。解出係數後，把整條 $f(x)$ 寫出來，(b) 才可以直接用。",
       "en": "“One part varies as $x$, the other as $x^{2}$” means $ax+bx^{2}$; two unknowns need two pairs of values. Write the whole $f(x)$ so that part (b) can start."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算：兩組已知值",
         "en": "Check: both given pairs"
        },
        "zh": "$f(5)=35+25=60$ ✓；$f(8)=56+64=120$ ✓；$f(-10)=-70+100=30$ ✓；$f(3)=21+9=30$ ✓。",
        "en": "$f(5)=35+25=60$ and $f(8)=56+64=120$. Also $f(-10)=-70+100=30$ and $f(3)=21+9=30$."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en05-q9",
     "type": "long",
     "topic": "en05",
     "unit": 10,
     "subtopic": "variation",
     "difficulty": 3,
     "code": "EN5-Q9",
     "source": "Endeavour Lesson 5 Q17 · 部分變＋截距＋判別式",
     "stem": {
      "en": "It is given that $f(x)$ partly varies as $x$ and partly varies as $x^{2}$. Suppose that $f(3)=-12$ and $f(-1)=12$.",
      "zh": "已知 $f(x)$ 一部分隨 $x$ 變化，另一部分隨 $x^{2}$ 變化。設 $f(3)=-12$ 且 $f(-1)=12$。"
     },
     "parts": [
      {
       "label": "(a)",
       "en": "Find $f(x)$.",
       "zh": "求 $f(x)$。",
       "marks": 3
      },
      {
       "label": "(b)",
       "en": "Write down the $x$-intercept(s) of the graph of $y=7f(x)$.",
       "zh": "寫出 $y=7f(x)$ 的圖像的 $x$ 截距。",
       "marks": 1
      },
      {
       "label": "(c)",
       "en": "Let $k$ be a real constant. Find the range of values of $k$ such that the equation $f(x)=k$ has two distinct real roots.",
       "zh": "設 $k$ 為實常數。求 $k$ 的取值範圍，使方程 $f(x)=k$ 有兩個相異實根。",
       "marks": 2
      }
     ],
     "marks": 6,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 寫出 $f(x)=ax+bx^{2}$ 與兩條方程",
         "en": "Step 1 · Write $f(x)=ax+bx^{2}$ and the two equations"
        },
        "math": "f(x)=ax+bx^{2}\n-12=3a+9b\\ \\ldots(1)\n12=-a+b\\ \\ldots(2)",
        "zh": "兩部分分別是 $ax$ 與 $bx^{2}$，所以 $f(x)=ax+bx^{2}$。代入 $f(3)=-12$ 與 $f(-1)=12$。",
        "en": "The two parts are $ax$ and $bx^{2}$, so $f(x)=ax+bx^{2}$. Substitute $f(3)=-12$ and $f(-1)=12$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 由 (2) 寫出 $b$，代入 (1) 求 $a$",
         "en": "Step 2 · Make $b$ the subject of (2), substitute into (1)"
        },
        "math": "b=12+a\n\\Rightarrow 3a+9(12+a)=-12\n\\Rightarrow 12a=-120\n\\Rightarrow a=-10",
        "zh": "由 (2) 得 $b=12+a$，代入 (1)：$3a+9(12+a)=-12$，即 $12a+108=-12$，所以 $12a=-120$，$a=-10$。",
        "en": "From (2), $b=12+a$. Substituting into (1): $3a+9(12+a)=-12$, i.e. $12a+108=-12$, so $12a=-120$ and $a=-10$.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 3 步 · 求 $b$，寫出 $f(x)$",
         "en": "Step 3 · Find $b$ and write $f(x)$"
        },
        "math": "b=12-10=2\n\\Rightarrow f(x)=2x^{2}-10x",
        "zh": "$b=12+(-10)=2$，所以 $f(x)=2x^{2}-10x$。",
        "en": "$b=12+(-10)=2$, so $f(x)=2x^{2}-10x$.",
        "marking": "(1A)",
        "highlight": [
         "f(x)=2x^{2}-10x"
        ]
       },
       {
        "title": {
         "zh": "第 4 步 · (b) 求 $y=7f(x)$ 的 $x$ 截距",
         "en": "Step 4 · (b) Find the $x$-intercepts of $y=7f(x)$"
        },
        "math": "7f(x)=0\n\\Rightarrow 2x(x-5)=0\n\\Rightarrow x=0\\text{ or }5",
        "zh": "圖像與 $x$ 軸相交即 $7f(x)=0$，也就是 $f(x)=0$：$2x^{2}-10x=2x(x-5)=0$，得 $x=0$ 或 $x=5$，截距是 $(0,0)$ 與 $(5,0)$。",
        "en": "The graph meets the $x$-axis where $7f(x)=0$, i.e. $f(x)=0$: $2x^{2}-10x=2x(x-5)=0$, so $x=0$ or $x=5$; the intercepts are $(0,0)$ and $(5,0)$.",
        "marking": "(1A)",
        "highlight": [
         "0",
         "5"
        ]
       },
       {
        "title": {
         "zh": "第 5 步 · (c) 寫成標準形，用判別式",
         "en": "Step 5 · (c) Rearrange and use the discriminant"
        },
        "math": "2x^{2}-10x-k=0\n\\Rightarrow \\Delta=100+8k>0",
        "zh": "$f(x)=k$ 即 $2x^{2}-10x-k=0$。有兩個相異實根代表 $\\Delta>0$：$\\Delta=(-10)^{2}-4(2)(-k)=100+8k$。",
        "en": "$f(x)=k$ means $2x^{2}-10x-k=0$. Two distinct real roots mean $\\Delta>0$: $\\Delta=(-10)^{2}-4(2)(-k)=100+8k$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 6 步 · (c) 解不等式",
         "en": "Step 6 · (c) Solve the inequality"
        },
        "math": "8k>-100\n\\Rightarrow k>-\\frac{25}{2}",
        "zh": "$100+8k>0$，移項得 $8k>-100$，所以 $k>-\\frac{25}{2}$（即 $k>-12.5$）。",
        "en": "$100+8k>0$ gives $8k>-100$, so $k>-\\frac{25}{2}$ (that is $k>-12.5$).",
        "marking": "(1A)",
        "highlight": [
         "k>-\\frac{25}{2}"
        ]
       }
      ],
      "traps": [
       {
        "label": "(c) 用了 $\\Delta\\ge 0$",
        "labelEn": "Using $\\Delta\\ge 0$ in part (c)",
        "zh": "「兩個相異實根」是 $\\Delta>0$；有等號的是「有實根／有重根」。用了 $\\ge$ 就會多出 $k=-12.5$。",
        "en": "“Two distinct real roots” means $\\Delta>0$; the version with equality is “real roots” or “equal roots”. Using $\\ge$ wrongly includes $k=-12.5$."
       },
       {
        "label": "(b) 只寫數字",
        "labelEn": "Giving bare numbers in part (b)",
        "zh": "問 $x$ 截距，寫成 $x=0$ 與 $x=5$（或座標 $(0,0)$、$(5,0)$）都可以，但要兩個；只寫「5」會漏了原點。",
        "en": "For $x$-intercepts, write $x=0$ and $x=5$ (or the points $(0,0)$ and $(5,0)$). Both are needed — writing only 5 misses the origin."
       }
      ],
      "tip": {
       "zh": "這一題把三課的東西串起來：部分變求 $f(x)$ → 因式分解求截距 → 判別式求 $k$ 的範圍。每一部分都用上前面的一部分，錯一步就全部錯。",
       "en": "This question links three ideas: partial variation to find $f(x)$, factorising for the intercepts, and the discriminant for the range of $k$. Each part uses the previous one, so one slip spoils the rest."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算：$k$ 的兩側",
         "en": "Check: values on both sides of $k$"
        },
        "zh": "$k=-12$（符合 $k>-12.5$）：$2x^{2}-10x+12=0$，即 $x^{2}-5x+6=0$，$x=2$、$3$ 兩個相異實根 ✓。$k=-13$（不符合）：$2x^{2}-10x+13=0$，$\\Delta=100-104=-4<0$，無實根 ✓。",
        "en": "For $k=-12$ (which satisfies $k>-12.5$): $2x^{2}-10x+12=0$, i.e. $x^{2}-5x+6=0$, with two distinct roots $2$ and $3$. For $k=-13$: $2x^{2}-10x+13=0$ has $\\Delta=100-104=-4<0$, so no real roots."
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
      "unit": 10,
      "subtopic": "variation",
      "difficulty": 2,
      "code": "EN5-M1",
      "source": "Endeavour Lesson 5 Q5 · 聯變（反變 $x$、正變 $y$）",
      "stem": {
       "en": "It is given that $z$ varies inversely as $x$ and directly as $y$. When $x=9$ and $y=3$, $z=1$. When $x=3$ and $z=9$, $y=$",
       "zh": "已知 $z$ 隨 $x$ 反變，並隨 $y$ 正變。當 $x=9$、$y=3$ 時 $z=1$。當 $x=3$、$z=9$ 時，$y=$"
      },
      "options": {
       "A": "$\\frac{1}{9}$",
       "B": "$1$",
       "C": "$3$",
       "D": "$9$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 寫出聯變方程",
          "en": "Step 1 · Write the joint variation equation"
         },
         "math": "z=\\frac{ky}{x}",
         "zh": "$z$ 隨 $y$ 正變（$y$ 在分子），隨 $x$ 反變（$x$ 在分母），所以 $z=\\frac{ky}{x}$。",
         "en": "$z$ varies directly as $y$ (on top) and inversely as $x$ (at the bottom), so $z=\\frac{ky}{x}$."
        },
        {
         "title": {
          "zh": "第 2 步 · 求 $k$，寫出關係式",
          "en": "Step 2 · Find $k$ and write the relation"
         },
         "math": "1=\\frac{k(3)}{9}\\ \\Rightarrow\\ k=3\n\\Rightarrow z=\\frac{3y}{x}",
         "zh": "代入 $x=9$、$y=3$、$z=1$：$1=\\frac{3k}{9}=\\frac{k}{3}$，所以 $k=3$。關係式是 $z=\\frac{3y}{x}$。",
         "en": "Substituting $x=9$, $y=3$, $z=1$: $1=\\frac{3k}{9}=\\frac{k}{3}$, so $k=3$. The relation is $z=\\frac{3y}{x}$."
        },
        {
         "title": {
          "zh": "第 3 步 · 代入 $x=3$、$z=9$ 求 $y$",
          "en": "Step 3 · Substitute $x=3$, $z=9$ to find $y$"
         },
         "math": "9=\\frac{3y}{3}\\ \\Rightarrow\\ y=9",
         "zh": "$x=3$ 時 $z=\\frac{3y}{3}=y$，所以 $y=z=9$，答案是 D。",
         "en": "With $x=3$, $z=\\frac{3y}{3}=y$, so $y=z=9$. The answer is D.",
         "highlight": [
          "9"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$\\frac{1}{9}$ 是把正變與反變寫反（$z=\\frac{kx}{y}$）：那麼 $k=\\frac{zy}{x}=\\frac{3}{9}=\\frac{1}{3}$，再解得 $y=\\frac{1}{9}$。方向一錯，答案就倒轉。",
         "en": "$\\frac{1}{9}$ comes from swapping the directions ($z=\\frac{kx}{y}$), which gives $k=\\frac{1}{3}$ and then $y=\\frac{1}{9}$."
        },
        {
         "opt": "C",
         "zh": "$3$ 是 $k$ 的值：求出 $k=3$ 就停手。題目問的是 $y$，要把 $x=3$、$z=9$ 代回關係式才是答案。",
         "en": "$3$ is $k$: the work stops once $k=3$ is found. The question asks for $y$, so $x=3$ and $z=9$ must be substituted back."
        }
       ],
       "tip": {
        "zh": "聯變先寫方程（正變放分子、反變放分母），再求 $k$，最後代第二組數值。三步都寫出來，就不會把 $k$ 當答案。",
        "en": "Write the joint equation (direct on top, inverse at the bottom), find $k$, then substitute the second set of values. Writing all three lines prevents answering $k$."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：兩組數值",
          "en": "Check: both pairs"
         },
         "zh": "$z=\\frac{3y}{x}$：$x=9$、$y=3$ 得 $z=\\frac{9}{9}=1$ ✓；$x=3$、$y=9$ 得 $z=\\frac{27}{3}=9$ ✓。",
         "en": "For $z=\\frac{3y}{x}$: $x=9$, $y=3$ gives $z=1$; $x=3$, $y=9$ gives $z=9$. Both match."
        }
       ]
      },
      "answer": "D",
      "verify": "checked"
     },
     {
      "id": "eph-en05-m2",
      "type": "mc",
      "topic": "en05",
      "unit": 10,
      "subtopic": "variation",
      "difficulty": 3,
      "code": "EN5-M2",
      "source": "Endeavour Lesson 5 Q6 · 聯變（$\\sqrt{x}$ 與 $y^{3}$）",
      "stem": {
       "en": "It is given that $z$ varies directly as the square root of $x$ and the cube of $y$. When $x=9$ and $y=3$, $z=27$. When $x=4$ and $y=9$, $z=$",
       "zh": "已知 $z$ 隨 $x$ 的平方根及 $y$ 的立方正變。當 $x=9$、$y=3$ 時 $z=27$。當 $x=4$、$y=9$ 時，$z=$"
      },
      "options": {
       "A": "$64$",
       "B": "$486$",
       "C": "$576$",
       "D": "$4374$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 寫出聯變方程",
          "en": "Step 1 · Write the joint variation equation"
         },
         "math": "z=k\\sqrt{x}\\,y^{3}",
         "zh": "「隨 $x$ 的平方根正變」是 $\\sqrt{x}$，「隨 $y$ 的立方正變」是 $y^{3}$，兩者都在分子：$z=k\\sqrt{x}\\,y^{3}$。",
         "en": "“Directly as the square root of $x$” gives $\\sqrt{x}$ and “the cube of $y$” gives $y^{3}$; both are on top: $z=k\\sqrt{x}\\,y^{3}$."
        },
        {
         "title": {
          "zh": "第 2 步 · 求 $k$",
          "en": "Step 2 · Find $k$"
         },
         "math": "27=k\\sqrt{9}(3)^{3}=k(3)(27)\n\\Rightarrow k=\\frac{1}{3}",
         "zh": "代入 $x=9$、$y=3$：$\\sqrt{9}=3$、$3^{3}=27$，所以 $27=81k$，$k=\\frac{1}{3}$。",
         "en": "Substituting $x=9$, $y=3$: $\\sqrt{9}=3$ and $3^{3}=27$, so $27=81k$ and $k=\\frac{1}{3}$."
        },
        {
         "title": {
          "zh": "第 3 步 · 代入 $x=4$、$y=9$",
          "en": "Step 3 · Substitute $x=4$, $y=9$"
         },
         "math": "z=\\frac{1}{3}(2)(729)=486",
         "zh": "$\\sqrt{4}=2$、$9^{3}=729$，所以 $z=\\frac{1}{3}(2)(729)=486$，答案是 B。",
         "en": "$\\sqrt{4}=2$ and $9^{3}=729$, so $z=\\frac{1}{3}(2)(729)=486$. The answer is B.",
         "highlight": [
          "486"
         ]
        }
       ],
       "traps": [
        {
         "opt": "D",
         "zh": "$4374$ 是求 $k$ 時只用了 $y=3$ 而沒有立方：$k=\\frac{27}{3\\times3}=3$，於是 $z=3(2)(729)=4374$。第一個條件的 $y^{3}=27$ 不可以漏。",
         "en": "$4374$ comes from using $y=3$ instead of $y^{3}=27$ when finding $k$: $k=3$, so $z=3(2)(729)=4374$."
        },
        {
         "opt": "A",
         "zh": "$64$ 是 $4^{3}$：把「$y$ 的立方」錯用到 $x$ 身上，而且連 $k$ 與 $y$ 都沒有代入。",
         "en": "$64$ is $4^{3}$: the cube was applied to $x$ and neither $k$ nor $y$ was used."
        }
       ],
       "tip": {
        "zh": "聯變的次方要逐一對應題目字眼：square root 對 $\\sqrt{x}$、cube 對 $y^{3}$。求 $k$ 時把兩個次方都算清（$3^{3}=27$、$9^{3}=729$），就不會選到相差 9 倍的答案。",
        "en": "Match each power to the wording: “square root” means $\\sqrt{x}$, “cube” means $y^{3}$. Evaluating both when finding $k$ ($3^{3}=27$, $9^{3}=729$) rules out answers that differ by a factor of 9."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：用比例",
          "en": "Check: with a ratio"
         },
         "zh": "$x$ 由 9 變 4，$\\sqrt{x}$ 由 3 變 2（×$\\frac{2}{3}$）；$y$ 由 3 變 9（×3），$y^{3}$ ×$27$。所以 $z$ 由 $27$ 變 $27\\times\\frac{2}{3}\\times27=486$ ✓。",
         "en": "$x$ goes from 9 to 4, so $\\sqrt{x}$ goes from 3 to 2 (a factor of $\\frac{2}{3}$); $y$ goes from 3 to 9, so $y^{3}$ grows 27 times. Hence $z=27\\times\\frac{2}{3}\\times27=486$."
        }
       ]
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-en05-m3",
      "type": "mc",
      "topic": "en05",
      "unit": 10,
      "subtopic": "variation",
      "difficulty": 2,
      "code": "EN5-M3",
      "source": "Endeavour Lesson 5 Q7 · 哪一條式一定是常數",
      "stem": {
       "en": "If $z$ varies inversely as $x$ and directly as $y^{2}$, which of the following must be constant?",
       "zh": "若 $z$ 隨 $x$ 反變，並隨 $y^{2}$ 正變，下列哪一個一定是常數？"
      },
      "options": {
       "A": "$\\frac{x}{zy^{2}}$",
       "B": "$\\frac{y^{2}}{zx}$",
       "C": "$\\frac{xy^{2}}{z}$",
       "D": "$xy^{2}z$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 寫出方程",
          "en": "Step 1 · Write the equation"
         },
         "math": "z=\\frac{ky^{2}}{x}",
         "zh": "$z$ 隨 $y^{2}$ 正變（分子）、隨 $x$ 反變（分母），所以 $z=\\frac{ky^{2}}{x}$。",
         "en": "$z$ varies directly as $y^{2}$ (on top) and inversely as $x$ (at the bottom): $z=\\frac{ky^{2}}{x}$."
        },
        {
         "title": {
          "zh": "第 2 步 · 把 $k$ 寫成主項",
          "en": "Step 2 · Make $k$ the subject"
         },
         "math": "k=\\frac{zx}{y^{2}}",
         "zh": "兩邊乘 $x$、除以 $y^{2}$：$k=\\frac{zx}{y^{2}}$。因為 $k$ 是常數，所以 $\\frac{zx}{y^{2}}$ 一定是常數。",
         "en": "Multiply by $x$ and divide by $y^{2}$: $k=\\frac{zx}{y^{2}}$. Since $k$ is constant, $\\frac{zx}{y^{2}}$ must be constant."
        },
        {
         "title": {
          "zh": "第 3 步 · 找出對應的選項",
          "en": "Step 3 · Match the option"
         },
         "math": "\\frac{zx}{y^{2}}=\\text{const.}\\iff \\frac{y^{2}}{zx}=\\text{const.}",
         "zh": "選項中沒有 $\\frac{zx}{y^{2}}$，但它的倒數 $\\frac{y^{2}}{zx}$ 也一定是常數（常數的倒數仍是常數），所以答案是 B。",
         "en": "The option list has no $\\frac{zx}{y^{2}}$, but its reciprocal $\\frac{y^{2}}{zx}$ is also constant (the reciprocal of a constant is constant), so the answer is B.",
         "highlight": [
          "\\frac{y^{2}}{zx}"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$\\frac{x}{zy^{2}}$ 是把方向寫反（$z=\\frac{kx}{y^{2}}$）之後的倒數：$k=\\frac{zy^{2}}{x}$，倒數是 $\\frac{x}{zy^{2}}$。方向一錯，整條式都不同。",
         "en": "$\\frac{x}{zy^{2}}$ is the reciprocal of the constant you get after reversing the directions ($k=\\frac{zy^{2}}{x}$)."
        },
        {
         "opt": "C",
         "zh": "$\\frac{xy^{2}}{z}$ 其實等於 $\\frac{x^{2}}{k}$：把 $z=\\frac{ky^{2}}{x}$ 代入，$\\frac{xy^{2}}{z}=\\frac{x^{2}}{k}$，仍然含 $x$，所以不是常數。",
         "en": "$\\frac{xy^{2}}{z}$ equals $\\frac{x^{2}}{k}$ after substituting $z=\\frac{ky^{2}}{x}$, which still contains $x$ and is not constant."
        },
        {
         "opt": "D",
         "zh": "$xy^{2}z$ 代入之後是 $\\frac{ky^{4}x^{2}}{x}=kx^{2}y^{4}$，含 $x$、$y$，不是常數。",
         "en": "$xy^{2}z$ becomes $kx^{2}y^{4}$, which contains $x$ and $y$ and is not constant."
        }
       ],
       "tip": {
        "zh": "問「哪一條是常數」就把方程整理成 $k=\\ldots$；如果選項是它的倒數，一樣是常數。把每個選項代一次，含 $x$ 或 $y$ 的就不是。",
        "en": "For “which is constant”, rearrange into $k=\\ldots$; the reciprocal is also constant. Substituting into each option shows that anything still containing $x$ or $y$ is not constant."
       },
       "alt": [
        {
         "name": {
          "zh": "數值檢查",
          "en": "Numeric check"
         },
         "zh": "取 $k=12$：$x=3$、$y=2$ 時 $z=\\frac{12(4)}{3}=16$。此時 A $=\\frac{3}{16\\times4}=\\frac{3}{64}$、B $=\\frac{4}{48}=\\frac{1}{12}$、C $=\\frac{3\\times4}{16}=\\frac{3}{4}$、D $=3\\times4\\times16=192$。再取 $x=6$、$y=2$：$z=8$，只有 B 仍是 $\\frac{1}{12}$ ✓。",
         "en": "Take $k=12$: with $x=3$, $y=2$ we get $z=16$. Then A $=\\frac{3}{64}$, B $=\\frac{1}{12}$, C $=\\frac{3}{4}$, D $=192$. With $x=6$, $y=2$ we get $z=8$, and only B is still $\\frac{1}{12}$."
        }
       ]
      },
      "answer": "B",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-en05-m4",
      "type": "mc",
      "topic": "en05",
      "unit": 10,
      "subtopic": "variation",
      "difficulty": 3,
      "code": "EN5-M4",
      "source": "Endeavour Lesson 5 Q8 · 哪一條式一定是常數（$\\sqrt{q}$ 與 $r^{4}$）",
      "stem": {
       "en": "If $p$ varies inversely as $\\sqrt{q}$ and directly as $r^{4}$, which of the following must be constant?",
       "zh": "若 $p$ 隨 $\\sqrt{q}$ 反變，並隨 $r^{4}$ 正變，下列哪一個一定是常數？"
      },
      "options": {
       "A": "$\\frac{p^{2}r^{8}}{q}$",
       "B": "$\\frac{p^{2}q}{r^{8}}$",
       "C": "$\\frac{p}{r^{4}\\sqrt{q}}$",
       "D": "$pr^{4}\\sqrt{q}$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 寫出方程",
          "en": "Step 1 · Write the equation"
         },
         "math": "p=\\frac{kr^{4}}{\\sqrt{q}}",
         "zh": "$p$ 隨 $r^{4}$ 正變（分子）、隨 $\\sqrt{q}$ 反變（分母），所以 $p=\\frac{kr^{4}}{\\sqrt{q}}$。",
         "en": "$p$ varies directly as $r^{4}$ (on top) and inversely as $\\sqrt{q}$ (at the bottom): $p=\\frac{kr^{4}}{\\sqrt{q}}$."
        },
        {
         "title": {
          "zh": "第 2 步 · 把 $k$ 寫成主項",
          "en": "Step 2 · Make $k$ the subject"
         },
         "math": "k=\\frac{p\\sqrt{q}}{r^{4}}",
         "zh": "兩邊乘 $\\sqrt{q}$、除以 $r^{4}$：$k=\\frac{p\\sqrt{q}}{r^{4}}$，所以 $\\frac{p\\sqrt{q}}{r^{4}}$ 是常數。",
         "en": "Multiply by $\\sqrt{q}$ and divide by $r^{4}$: $k=\\frac{p\\sqrt{q}}{r^{4}}$, so $\\frac{p\\sqrt{q}}{r^{4}}$ is constant."
        },
        {
         "title": {
          "zh": "第 3 步 · 平方，對應選項",
          "en": "Step 3 · Square it to match the options"
         },
         "math": "k^{2}=\\frac{p^{2}q}{r^{8}}",
         "zh": "常數的平方也是常數，所以 $\\frac{p^{2}q}{r^{8}}$ 一定是常數，答案是 B。",
         "en": "The square of a constant is constant, so $\\frac{p^{2}q}{r^{8}}$ must be constant. The answer is B.",
         "highlight": [
          "\\frac{p^{2}q}{r^{8}}"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$\\frac{p^{2}r^{8}}{q}$ 是方向寫反（$p=\\frac{k\\sqrt{q}}{r^{4}}$）之後再平方：$k^{2}=\\frac{p^{2}r^{8}}{q}$。正變與反變的位置一調轉就會選到它。",
         "en": "$\\frac{p^{2}r^{8}}{q}$ comes from reversing the directions ($p=\\frac{k\\sqrt{q}}{r^{4}}$) and then squaring."
        },
        {
         "opt": "D",
         "zh": "$pr^{4}\\sqrt{q}$ 代入 $p$ 之後是 $kr^{8}$，仍然含 $r$，不是常數。",
         "en": "$pr^{4}\\sqrt{q}$ becomes $kr^{8}$, which still contains $r$ and is not constant."
        },
        {
         "opt": "C",
         "zh": "$\\frac{p}{r^{4}\\sqrt{q}}$ 代入 $p$ 之後是 $\\frac{k}{q}$，含 $q$，不是常數；它是把 $\\sqrt{q}$ 又放到分母多一次。",
         "en": "$\\frac{p}{r^{4}\\sqrt{q}}$ becomes $\\frac{k}{q}$, which contains $q$; the $\\sqrt{q}$ was moved to the denominator twice."
        }
       ],
       "tip": {
        "zh": "兩步：$k=\\ldots$ → 再平方（選項是平方後的樣子）。含 $q$ 的放在分母、含 $r^{4}$ 的放在分子，方向不要倒。",
        "en": "Two steps: write $k=\\ldots$, then square it (the options are squared). The $q$ part belongs at the bottom and $r^{4}$ on top."
       },
       "alt": [
        {
         "name": {
          "zh": "數值檢查",
          "en": "Numeric check"
         },
         "zh": "取 $k=2$：$r=2$、$q=9$ 時 $p=\\frac{2(16)}{3}=\\frac{32}{3}$。B $=\\frac{(32/3)^{2}\\times9}{256}=\\frac{1024/9\\times9}{256}=4=k^{2}$ ✓；換 $r=1$、$q=4$（$p=1$），B $=\\frac{1\\times4}{1}=4$ 仍然是 4 ✓。",
         "en": "Take $k=2$: with $r=2$, $q=9$ we get $p=\\frac{32}{3}$ and B $=\\frac{(32/3)^{2}\\times9}{256}=4=k^{2}$. With $r=1$, $q=4$ we get $p=1$ and B $=4$ again."
        }
       ]
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-en05-m5",
      "type": "mc",
      "topic": "en05",
      "unit": 10,
      "subtopic": "variation",
      "difficulty": 2,
      "code": "EN5-M5",
      "source": "Endeavour Lesson 5 Q9 · 百分比變化（$x$ 加 25%、$y$ 加 20%）",
      "stem": {
       "en": "It is given that $z$ varies directly as $x$ and directly as $y^{2}$. If $x$ is increased by $25\\%$ and $y$ is increased by $20\\%$, then $z$",
       "zh": "已知 $z$ 隨 $x$ 正變，並隨 $y^{2}$ 正變。若 $x$ 增加 $25\\%$ 而 $y$ 增加 $20\\%$，則 $z$"
      },
      "options": {
       "A": "is increased by $50\\%$.",
       "B": "is decreased by $50\\%$.",
       "C": "is increased by $80\\%$.",
       "D": "is decreased by $80\\%$."
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 寫出方程",
          "en": "Step 1 · Write the equation"
         },
         "math": "z=kxy^{2}",
         "zh": "$z$ 隨 $x$ 與 $y^{2}$ 正變，所以 $z=kxy^{2}$。",
         "en": "$z$ varies directly as $x$ and as $y^{2}$, so $z=kxy^{2}$."
        },
        {
         "title": {
          "zh": "第 2 步 · 把百分數變成倍數",
          "en": "Step 2 · Turn the percentages into multipliers"
         },
         "math": "x\\to 1.25x,\\ y\\to 1.2y",
         "zh": "增加 $25\\%$ ＝ ×$1.25$；增加 $20\\%$ ＝ ×$1.2$。所以新的 $z$ 是 $z'=k(1.25x)(1.2y)^{2}$。",
         "en": "An increase of $25\\%$ is $\\times1.25$ and an increase of $20\\%$ is $\\times1.2$, so $z'=k(1.25x)(1.2y)^{2}$."
        },
        {
         "title": {
          "zh": "第 3 步 · 合併倍數",
          "en": "Step 3 · Combine the multipliers"
         },
         "math": "=1.25\\times1.44\\,kxy^{2}\n=1.8z",
         "zh": "$1.2^{2}=1.44$，而 $1.25\\times1.44=1.8$，所以 $z'=1.8z$，即 $z$ 增加了 $80\\%$，答案是 C。",
         "en": "$1.2^{2}=1.44$ and $1.25\\times1.44=1.8$, so $z'=1.8z$: $z$ increases by $80\\%$. The answer is C.",
         "highlight": [
          "80\\%"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$50\\%$ 是只用了一次 $1.2$（把 $y^{2}$ 當成 $y$）：$1.25\\times1.2=1.5$。$y$ 是平方，倍數要平方成 $1.44$。",
         "en": "$50\\%$ uses $1.2$ only once (treating $y^{2}$ as $y$): $1.25\\times1.2=1.5$. Because $y$ is squared, its multiplier must be squared to $1.44$."
        },
        {
         "opt": "B",
         "zh": "$1.5$ 是增加的倍數（$+50\\%$），寫成「decreased by $50\\%$」是方向倒轉：$1.5>1$ 代表增加。",
         "en": "$1.5$ is an increase ($+50\\%$); calling it “decreased by $50\\%$” reverses the direction, since $1.5>1$ means an increase."
        },
        {
         "opt": "D",
         "zh": "$0.8$ 是把 $1.8$ 的小數點看錯（$1.8\\to0.8$），再寫成減少 $80\\%$。倍數大於 1 一定是增加。",
         "en": "$0.8$ misreads $1.8$ as $0.8$ and then calls it a decrease of $80\\%$. A multiplier greater than 1 is always an increase."
        }
       ],
       "tip": {
        "zh": "百分比變化三步：每個量換成倍數（$1+$ 或 $1-$ 百分數）→ 平方、開方照做 → 相乘。倍數大於 1 是增加，小於 1 是減少。",
        "en": "Three steps: turn each quantity into a multiplier, apply squares and roots, then multiply. A multiplier above 1 is an increase and below 1 is a decrease."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：代實際數字",
          "en": "Check: use numbers"
         },
         "zh": "取 $k=1$、$x=4$、$y=5$：$z=1(4)(25)=100$。$x$ 變 5、$y$ 變 6：$z'=1(5)(36)=180$，$\\frac{180}{100}=1.8$，增加 $80\\%$ ✓。",
         "en": "Take $k=1$, $x=4$, $y=5$: $z=100$. After $x\\to5$ and $y\\to6$: $z'=180$, and $\\frac{180}{100}=1.8$, an increase of $80\\%$."
        }
       ]
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-en05-m6",
      "type": "mc",
      "topic": "en05",
      "unit": 10,
      "subtopic": "variation",
      "difficulty": 3,
      "code": "EN5-M6",
      "source": "Endeavour Lesson 5 Q10 · 百分比變化（$x$ 加 25%、$y$ 減 36%）",
      "stem": {
       "en": "It is given that $z$ varies inversely as $x$ and directly as $\\sqrt{y}$. If $x$ is increased by $25\\%$ and $y$ is decreased by $36\\%$, then $z$",
       "zh": "已知 $z$ 隨 $x$ 反變，並隨 $\\sqrt{y}$ 正變。若 $x$ 增加 $25\\%$ 而 $y$ 減少 $36\\%$，則 $z$"
      },
      "options": {
       "A": "is increased by $48\\%$.",
       "B": "is increased by $52\\%$.",
       "C": "is decreased by $36\\%$.",
       "D": "is decreased by $64\\%$."
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 寫出方程",
          "en": "Step 1 · Write the equation"
         },
         "math": "z=\\frac{k\\sqrt{y}}{x}",
         "zh": "$z$ 隨 $\\sqrt{y}$ 正變（分子）、隨 $x$ 反變（分母），所以 $z=\\frac{k\\sqrt{y}}{x}$。",
         "en": "$z$ varies directly as $\\sqrt{y}$ (on top) and inversely as $x$ (at the bottom): $z=\\frac{k\\sqrt{y}}{x}$."
        },
        {
         "title": {
          "zh": "第 2 步 · 換成倍數",
          "en": "Step 2 · Convert to multipliers"
         },
         "math": "x\\to 1.25x,\\ y\\to 0.64y",
         "zh": "增加 $25\\%$ ＝ ×$1.25$；減少 $36\\%$ ＝ ×$(1-0.36)=0.64$。",
         "en": "An increase of $25\\%$ is $\\times1.25$; a decrease of $36\\%$ is $\\times(1-0.36)=0.64$."
        },
        {
         "title": {
          "zh": "第 3 步 · 開方後合併",
          "en": "Step 3 · Take the square root, then combine"
         },
         "math": "\\sqrt{0.64y}=0.8\\sqrt{y}\nz'=\\frac{k(0.8\\sqrt{y})}{1.25x}\n=0.64z",
         "zh": "$\\sqrt{0.64}=0.8$（因為 $0.8^{2}=0.64$），所以 $z'=\\frac{0.8}{1.25}z=0.64z$，即 $z$ 減少了 $36\\%$，答案是 C。",
         "en": "$\\sqrt{0.64}=0.8$ (since $0.8^{2}=0.64$), so $z'=\\frac{0.8}{1.25}z=0.64z$: $z$ decreases by $36\\%$. The answer is C.",
         "highlight": [
          "36\\%"
         ]
        }
       ],
       "traps": [
        {
         "opt": "D",
         "zh": "$64\\%$ 是把倍數 $0.64$ 直接讀成「減少 $64\\%$」。倍數 $0.64$ 代表「餘下 $64\\%$」，即減少了 $1-0.64=36\\%$。",
         "en": "$64\\%$ reads the multiplier $0.64$ as “a decrease of $64\\%$”. A multiplier of $0.64$ means $64\\%$ remains, so the decrease is $1-0.64=36\\%$."
        },
        {
         "opt": "B",
         "zh": "$52\\%$ 是把 $x$ 與 $y$ 的倍數掉轉除（$\\frac{1.25}{0.8}=1.5625$），方向變成增加，與正確的 $\\frac{0.8}{1.25}$ 相反。",
         "en": "$52\\%$ divides the multipliers the wrong way round ($\\frac{1.25}{0.8}=1.5625$), turning a decrease into an increase."
        },
        {
         "opt": "A",
         "zh": "$48\\%$ 是忘記開方：$\\frac{0.64}{1.25}=0.512$，即減少約 $49\\%$。$\\sqrt{0.64}=0.8$ 一定要開。",
         "en": "$48\\%$ forgets the square root: $\\frac{0.64}{1.25}=0.512$, a decrease of about $49\\%$. The root $\\sqrt{0.64}=0.8$ is essential."
        }
       ],
       "tip": {
        "zh": "「減少 36%」＝ ×$0.64$；「隨 $\\sqrt{y}$ 變化」＝ 倍數要開方（$\\sqrt{0.64}=0.8$）；反變的 $x$ 在分母，倍數要除。三步都做對才會得 $-36\\%$。",
        "en": "A 36% decrease is $\\times0.64$; a square-root variation needs the root of the multiplier ($\\sqrt{0.64}=0.8$); the inverse $x$ sits at the bottom, so divide. Only all three steps give $-36\\%$."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：代實際數字",
          "en": "Check: use numbers"
         },
         "zh": "取 $k=1$、$x=4$、$y=25$：$z=\\frac{5}{4}=1.25$。$x$ 變 5、$y$ 變 $0.64\\times25=16$：$z'=\\frac{\\sqrt{16}}{5}=\\frac{4}{5}=0.8$。$\\frac{0.8}{1.25}=0.64$，減少 $36\\%$ ✓。",
         "en": "Take $k=1$, $x=4$, $y=25$: $z=\\frac{5}{4}=1.25$. After $x\\to5$ and $y\\to16$: $z'=\\frac{4}{5}=0.8$, and $\\frac{0.8}{1.25}=0.64$, a decrease of $36\\%$."
        }
       ]
      },
      "answer": "C",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-en05-m7",
      "type": "mc",
      "topic": "en05",
      "unit": 10,
      "subtopic": "variation",
      "difficulty": 2,
      "code": "EN5-M7",
      "source": "Endeavour Lesson 5 Q12 · 部分變（求 $x$）",
      "stem": {
       "en": "It is given that $y$ is partly constant and partly varies directly as $x$. When $x=3$, $y=-6$ and when $x=-2$, $y=14$. When $y=18$, $x=$",
       "zh": "已知 $y$ 一部分為常數，另一部分隨 $x$ 正變。當 $x=3$ 時 $y=-6$；當 $x=-2$ 時 $y=14$。當 $y=18$ 時，$x=$"
      },
      "options": {
       "A": "$-66$",
       "B": "$-3$",
       "C": "$6$",
       "D": "$78$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 寫出 $y=c+kx$ 與兩條方程",
          "en": "Step 1 · Write $y=c+kx$ and the two equations"
         },
         "math": "y=c+kx\n-6=c+3k\\ \\ldots(1)\n14=c-2k\\ \\ldots(2)",
         "zh": "一部分是常數、另一部分隨 $x$ 正變，所以 $y=c+kx$。代入兩組數值得 (1) 與 (2)。",
         "en": "One part is constant and the other varies as $x$, so $y=c+kx$. The two pairs give (1) and (2)."
        },
        {
         "title": {
          "zh": "第 2 步 · 相減求 $k$",
          "en": "Step 2 · Subtract to find $k$"
         },
         "math": "(1)-(2):\\ 5k=-20\n\\Rightarrow k=-4",
         "zh": "$(1)-(2)$：$3k-(-2k)=5k$，右邊 $-6-14=-20$，所以 $5k=-20$，$k=-4$。",
         "en": "$(1)-(2)$: $3k-(-2k)=5k$ and $-6-14=-20$, so $5k=-20$ and $k=-4$."
        },
        {
         "title": {
          "zh": "第 3 步 · 求 $c$，寫出關係式",
          "en": "Step 3 · Find $c$ and write the relation"
         },
         "math": "c=-6-3(-4)=6\n\\Rightarrow y=6-4x",
         "zh": "代回 (1)：$-6=c-12$，所以 $c=6$。關係式是 $y=6-4x$。",
         "en": "Back in (1): $-6=c-12$, so $c=6$. The relation is $y=6-4x$."
        },
        {
         "title": {
          "zh": "第 4 步 · 令 $y=18$ 解 $x$",
          "en": "Step 4 · Put $y=18$ and solve for $x$"
         },
         "math": "18=6-4x\n\\Rightarrow 4x=-12\n\\Rightarrow x=-3",
         "zh": "把 $y=18$ 代入：$18=6-4x$，移項得 $-4x=12$，所以 $x=-3$，答案是 B。",
         "en": "Substituting $y=18$: $18=6-4x$, so $-4x=12$ and $x=-3$. The answer is B.",
         "highlight": [
          "-3"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$-66$ 是把 $18=6-4x$ 解錯成「先乘後加」：$18\\times(-4)+6=-66$。解一次方程要先移項，再除。",
         "en": "$-66$ comes from solving $18=6-4x$ as $18\\times(-4)+6$. Move the term first, then divide."
        },
        {
         "opt": "C",
         "zh": "$6$ 是常數 $c$：求到 $c=6$ 就停手。題目問 $y=18$ 時的 $x$，要代回關係式再解。",
         "en": "$6$ is the constant $c$. The question asks for $x$ when $y=18$, so $18$ must be substituted and solved."
        },
        {
         "opt": "D",
         "zh": "$78$ 是符號錯：$x=18\\times4+6=78$。正確是 $-4x=18-6=12$，所以 $x=-3$。",
         "en": "$78$ has a sign error ($x=18\\times4+6$). Correctly, $-4x=18-6=12$, so $x=-3$."
        }
       ],
       "tip": {
        "zh": "部分變的方程 $y=c+kx$ 一定是「先加後乘」：$y=c+kx$，所以解 $x$ 時要先把 $c$ 搬走，再除以 $k$。",
        "en": "In $y=c+kx$ the product comes after the constant, so when solving for $x$ move $c$ first and then divide by $k$."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：兩組已知值",
          "en": "Check: both given pairs"
         },
         "zh": "$x=3$：$6-12=-6$ ✓；$x=-2$：$6+8=14$ ✓；$y=18$ 時 $18=6-4(-3)$ ✓。",
         "en": "For $x=3$: $6-12=-6$. For $x=-2$: $6+8=14$. And with $x=-3$: $6-4(-3)=18$."
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
      "unit": 10,
      "subtopic": "variation",
      "difficulty": 2,
      "code": "EN5-M8",
      "source": "Endeavour Lesson 5 Q13 · 部分變（求 $y$）",
      "stem": {
       "en": "It is given that $y$ is the sum of two parts, one part is a constant and the other part varies as $x^{2}$. When $x=-1$, $y=1$ and when $x=3$, $y=25$. If $x=4$, then $y=$",
       "zh": "已知 $y$ 是兩部分之和：一部分為常數，另一部分隨 $x^{2}$ 變化。當 $x=-1$ 時 $y=1$；當 $x=3$ 時 $y=25$。若 $x=4$，則 $y=$"
      },
      "options": {
       "A": "$29$",
       "B": "$35$",
       "C": "$46$",
       "D": "$50$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 寫出 $y=c+kx^{2}$ 與兩條方程",
          "en": "Step 1 · Write $y=c+kx^{2}$ and the two equations"
         },
         "math": "y=c+kx^{2}\n1=c+k\\ \\ldots(1)\n25=c+9k\\ \\ldots(2)",
         "zh": "一部分是常數、另一部分隨 $x^{2}$ 變化，所以 $y=c+kx^{2}$。$x=-1$ 時 $(-1)^{2}=1$，得 $1=c+k$；$x=3$ 得 $25=c+9k$。",
         "en": "One part is constant and the other varies as $x^{2}$, so $y=c+kx^{2}$. At $x=-1$, $(-1)^{2}=1$ gives $1=c+k$; at $x=3$ we get $25=c+9k$."
        },
        {
         "title": {
          "zh": "第 2 步 · 相減求 $k$",
          "en": "Step 2 · Subtract to find $k$"
         },
         "math": "(2)-(1):\\ 8k=24\n\\Rightarrow k=3",
         "zh": "$(2)-(1)$：$8k=24$，所以 $k=3$。",
         "en": "$(2)-(1)$ gives $8k=24$, so $k=3$."
        },
        {
         "title": {
          "zh": "第 3 步 · 求 $c$，寫出關係式",
          "en": "Step 3 · Find $c$ and write the relation"
         },
         "math": "c=1-3=-2\n\\Rightarrow y=3x^{2}-2",
         "zh": "代回 (1)：$1=c+3$，所以 $c=-2$。關係式是 $y=3x^{2}-2$。",
         "en": "Back in (1): $1=c+3$, so $c=-2$. The relation is $y=3x^{2}-2$."
        },
        {
         "title": {
          "zh": "第 4 步 · 代入 $x=4$",
          "en": "Step 4 · Substitute $x=4$"
         },
         "math": "y=3(4)^{2}-2=48-2=46",
         "zh": "$4^{2}=16$，所以 $y=3(16)-2=46$，答案是 C。",
         "en": "$4^{2}=16$, so $y=3(16)-2=46$. The answer is C.",
         "highlight": [
          "46"
         ]
        }
       ],
       "traps": [
        {
         "opt": "D",
         "zh": "$50$ 是 $3(16)+2$：常數 $c$ 的符號寫反（用了 $+2$ 而不是 $-2$）。",
         "en": "$50$ is $3(16)+2$: the sign of $c$ was flipped (using $+2$ instead of $-2$)."
        },
        {
         "opt": "A",
         "zh": "$29$ 是 $3(9)+2$：既用了上一組的 $x=3$（沒有代 $x=4$），又把 $c$ 的符號寫反。",
         "en": "$29$ is $3(9)+2$: it uses the old $x=3$ instead of $x=4$ and also flips the sign of $c$."
        },
        {
         "opt": "B",
         "zh": "$35$ 不是任何一組已知值代入的結果：$3(16)-13$ 之類的混合運算。代一次 $x=4$ 就會見到是 46。",
         "en": "$35$ does not come from substituting any consistent values. Substituting $x=4$ once gives 46."
        }
       ],
       "tip": {
        "zh": "部分變最後一步一定是「代入 $x$」而不是答 $c$ 或 $k$。$(x)^{2}$ 的負號會消失：$x=-1$ 與 $x=1$ 的 $y$ 相同。",
        "en": "The last step is always substituting $x$, not reporting $c$ or $k$. A negative $x$ loses its sign when squared: $x=-1$ and $x=1$ give the same $y$."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：兩組已知值",
          "en": "Check: both given pairs"
         },
         "zh": "$x=-1$：$3-2=1$ ✓；$x=3$：$27-2=25$ ✓；$x=4$：$48-2=46$ ✓。",
         "en": "For $x=-1$: $3-2=1$. For $x=3$: $27-2=25$. For $x=4$: $48-2=46$."
        }
       ]
      },
      "answer": "C",
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
