// 自動生成，請勿手改（來源：data/learn/；重新生成：python tools/make_learn_data.py）
window.LEARN_TOPIC_EN03 = {
 "id": "en03",
 "stage": 1,
 "unit": 10,
 "subtopic": "straight-lines",
 "source": "S.K.H. Bishop Baker Secondary School · S.5 After-School Tutorial · Endeavour Lesson 3（Chapter 4 Extra Questions）",
 "name": {
  "zh": "Lesson 3 · 直線方程（斜率、截距與求方程）",
  "en": "Lesson 3 · Equations of straight lines (slope, intercepts and equations)"
 },
 "intro": {
  "zh": "這一節課堂討論直線方程的四類題目：\n① 已知一點在直線上、已知截距或斜率，求直線方程；\n② 由圖像讀出 $x+my+n=0$ 中 $m$、$n$ 的正負與範圍；\n③ 平行、垂直與兩線交點（解聯立方程）；\n④ 圖形應用：三角形面積、$AB=BC$ 這類相等長度條件。\n9 題全部是卷一的作答題格式，每題的題解都照官方評分寫上 1M／1A，做完可以逐分對。",
  "en": "This lesson covers four kinds of straight-line questions:\n(1) finding the equation of a line when a point on it, an intercept or the slope is given;\n(2) reading the signs and ranges of $m$ and $n$ from the graph of $x+my+n=0$;\n(3) parallel and perpendicular lines, and the intersection of two lines (solving simultaneous equations);\n(4) graphical applications: the area of a triangle and equal-length conditions such as $AB=BC$.\nAll 9 questions are in Paper 1 answer format, and every solution shows the official 1M / 1A marks so that you can check your work mark by mark."
 },
 "cmdHints": [
  {
   "en": "is parallel to ...",
   "zh": "「平行」→ 斜率相同（照抄 $L_1$ 的斜率）"
  },
  {
   "en": "is perpendicular to ...",
   "zh": "「垂直」→ 斜率乘積 $=-1$，要取負倒數"
  },
  {
   "en": "cuts the $x$-axis and the $y$-axis at $A$ and $B$",
   "zh": "「與 $x$ 軸／$y$ 軸交於」→ 代入 $y=0$ ／ $x=0$ 求另一坐標"
  },
  {
   "en": "find the ranges of values of $m$ and $n$",
   "zh": "求範圍 → 由圖讀斜率與截距的正負，答案寫不等式"
  },
  {
   "en": "the area of $\\triangle ABC$ is 50 square units",
   "zh": "面積 → $\\frac{1}{2}\\times$ 底 $\\times$ 高，先看清楚底和高是哪兩段"
  },
  {
   "en": "Find the coordinates of their intersection",
   "zh": "「交點」→ 解兩條方程的聯立方程"
  }
 ],
 "lessons": [
  {
   "id": "en03-1",
   "title": {
    "zh": "Lesson 3（課堂 9 題：求方程、讀圖、圖形應用）",
    "en": "Lesson 3 (9 class questions: finding equations, reading graphs, graphical applications)"
   },
   "cards": [
    {
     "id": "en3-c1",
     "topic": "en03",
     "title": {
      "zh": "直線方程的三種寫法與斜率",
      "en": "Three forms of a straight line and the slope"
     },
     "body": {
      "zh": "同一條直線可以寫成不同形式，認得三種就足夠應付本課：\n斜截式（一眼看到斜率與 $y$ 截距）：\n{{math:0}}\n點斜式（有一點＋斜率時最好用）：\n{{math:1}}\n一般式（題目只說「find the equation」時最穩）：\n{{math:2}}\n由兩點求斜率：\n{{math:3}}\n做題時先問自己「手上有甚麼」：有兩點 → 先求斜率；有一點＋斜率 → 用點斜式；有斜率＋$y$ 截距 → 直接寫斜截式；最後整理成一般式（習慣令 $x$ 的係數為正）。",
      "en": "The same straight line can be written in several forms; three of them are enough for this lesson:\nSlope-intercept form (the slope and the $y$-intercept are visible at once):\n{{math:0}}\nPoint-slope form (best when you have one point and the slope):\n{{math:1}}\nGeneral form (safest when the question only says “find the equation”):\n{{math:2}}\nThe slope from two points:\n{{math:3}}\nStart every question by asking what you already have: two points → find the slope first; one point and the slope → use point-slope form; the slope and the $y$-intercept → write the slope-intercept form straight away; then tidy the answer into the general form with a positive coefficient of $x$."
     },
     "math": [
      "y=mx+c",
      "y-y_{1}=m(x-x_{1})",
      "Ax+By+C=0",
      "m=\\frac{y_{2}-y_{1}}{x_{2}-x_{1}}"
     ],
     "vocab": [
      {
       "en": "slope",
       "zh": "斜率"
      },
      {
       "en": "point-slope form",
       "zh": "點斜式"
      },
      {
       "en": "general form",
       "zh": "一般式（$Ax+By+C=0$）"
      }
     ],
     "warn": {
      "zh": "「點在直線上」＝ 該點的坐標代入方程之後等於 0 —— 忘記代入就無從入手。另外，代入負數一定要連括號：$x=-3$ 代入 $3x$ 是 $3(-3)=-9$，不是 $-9$ 與 $9$ 之間的混亂。",
      "en": "“A point lies on the line” means that substituting its coordinates gives 0 — without that substitution there is no way to start. Always keep the bracket for a negative value: $x=-3$ in $3x$ means $3(-3)=-9$."
     }
    },
    {
     "id": "en3-c2",
     "topic": "en03",
     "title": {
      "zh": "由圖像讀出 $x+my+n=0$ 的 $m$、$n$",
      "en": "Reading $m$ and $n$ from the graph of $x+my+n=0$"
     },
     "body": {
      "zh": "圖像題考的是符號與範圍，不是數字。方程 $x+my+n=0$ 要先改寫成斜截式才讀得到資料：\n{{math:0}}\n於是三項資料可以逐項對應：\n{{math:1}}\n{{math:2}}\n{{math:3}}\n讀圖只有兩步：\n① 線的傾斜方向 → 斜率正負：往右上斜 $>0$、往右下斜 $<0$；\n② 線與兩軸的交點位置 → 兩個截距的正負（在原點之上是正、之下是負）。\n如果交點落在兩條刻度之間（例如在 $-5$ 與 $0$ 之間），答案要寫範圍，不是寫等號。",
      "en": "Graph questions test signs and ranges, not numbers. Rewrite $x+my+n=0$ in slope-intercept form before reading anything off the figure:\n{{math:0}}\nThree quantities can then be matched one by one:\n{{math:1}}\n{{math:2}}\n{{math:3}}\nReading the graph takes only two steps:\n(1) the direction of the line gives the sign of the slope: rising to the right is $>0$, falling to the right is $<0$;\n(2) where the line meets each axis gives the signs of the two intercepts (above the origin is positive, below is negative).\nIf a crossing lies between two marks on the axis (say between $-5$ and $0$), the answer must be a range, not an equality."
     },
     "math": [
      "x+my+n=0\\ \\Rightarrow\\ y=-\\frac{1}{m}x-\\frac{n}{m}",
      "\\text{slope}=-\\frac{1}{m}",
      "x\\text{-intercept}=-n",
      "y\\text{-intercept}=-\\frac{n}{m}"
     ],
     "box": {
      "tag": {
       "zh": "讀圖口訣",
       "en": "Graph-reading rule"
      },
      "title": {
       "zh": "$x+my+n=0$：每一個量都差一個負號",
       "en": "$x+my+n=0$: every quantity carries a minus sign"
      },
      "zh": "① 先改寫成斜截式：\n{{math:0}}\n② 對應表（由左邊的 $m$、$n$ 去右邊的「斜率／截距」時，每個都要反一次號）：\n{{math:1}}\n③ 範圍題：交點落在兩條刻度之間就寫不等式，不要寫等號。",
      "en": "① Rewrite it in slope-intercept form first:\n{{math:0}}\n② Matching table (every quantity changes sign when you go from $m$, $n$ to the slope and the intercepts):\n{{math:1}}\n③ Range questions: if the crossing lies between two marks, write an inequality, never an equality.",
      "math": [
       "x+my+n=0\\ \\Rightarrow\\ y=-\\frac{1}{m}x-\\frac{n}{m}",
       "\\text{slope}=-\\frac{1}{m}\nx\\text{-intercept}=-n\ny\\text{-intercept}=-\\frac{n}{m}"
      ]
     },
     "vocab": [
      {
       "en": "x-intercept",
       "zh": "與 $x$ 軸的交點（$y=0$ 時的 $x$）"
      },
      {
       "en": "y-intercept",
       "zh": "與 $y$ 軸的交點（$x=0$ 時的 $y$）"
      },
      {
       "en": "range of values",
       "zh": "取值範圍（寫成不等式）"
      }
     ],
     "warn": {
      "zh": "最常見的兩個錯：① 把圖上讀到的 $y$ 截距直接當成 $n$（其實是 $-\\frac{n}{m}$）；② 見到「線往右下斜」就寫 $m<0$（斜率是 $-\\frac{1}{m}$，所以 $m$ 反而是正數）。每次由圖上的數寫成 $m$、$n$ 都要反一次號。",
      "en": "Two standard mistakes: ① taking the $y$-intercept read from the graph as $n$ (it is $-\\frac{n}{m}$); ② writing $m<0$ because the line falls to the right (the slope is $-\\frac{1}{m}$, so $m$ is in fact positive). Every quantity read from the graph changes sign when it is turned into $m$ or $n$."
     }
    },
    {
     "id": "en3-c3",
     "topic": "en03",
     "title": {
      "zh": "平行、垂直、交點與距離",
      "en": "Parallel, perpendicular, intersection and distance"
     },
     "body": {
      "zh": "兩條線的關係全部由斜率決定：\n{{math:0}}\n{{math:1}}\n平行＝直接抄斜率；垂直＝取負倒數（$\\frac{3}{4}$ 的負倒數是 $-\\frac{4}{3}$：先顛倒、再變號）。\n求兩線交點＝解它們的聯立方程；其中一條寫成 $x=k$ 或 $y=k$ 時，直接代入另一條最快。\n要比較兩點之間的長度（例如 $AB=BC$）就用距離公式：\n{{math:2}}\n座標相減一定要連括號再平方：$(-4)^{2}=16$、$[0-(-3)]^{2}=9$。",
      "en": "Everything about the relationship between two lines is decided by their slopes:\n{{math:0}}\n{{math:1}}\nParallel means copy the slope; perpendicular means the negative reciprocal ($\\frac{3}{4}$ becomes $-\\frac{4}{3}$: invert first, then change the sign).\nTo find the intersection, solve the two equations simultaneously; when one of them is $x=k$ or $y=k$, substituting into the other is the fastest route.\nTo compare two lengths (for example $AB=BC$), use the distance formula:\n{{math:2}}\nKeep the brackets when subtracting coordinates: $(-4)^{2}=16$ and $[0-(-3)]^{2}=9$."
     },
     "math": [
      "L_{1}\\parallel L_{2}\\ \\Leftrightarrow\\ m_{1}=m_{2}",
      "L_{1}\\perp L_{2}\\ \\Leftrightarrow\\ m_{1}m_{2}=-1",
      "AB=\\sqrt{(x_{2}-x_{1})^{2}+(y_{2}-y_{1})^{2}}"
     ],
     "vocab": [
      {
       "en": "parallel",
       "zh": "平行（斜率相同）"
      },
      {
       "en": "perpendicular",
       "zh": "垂直（斜率乘積 $=-1$）"
      },
      {
       "en": "distance formula",
       "zh": "距離公式"
      },
      {
       "en": "intersection",
       "zh": "交點（解聯立方程求得）"
      }
     ],
     "warn": {
      "zh": "垂直只顧「顛倒」而忘記「變號」是最常見的錯：$\\frac{2}{3}$ 的負倒數是 $-\\frac{3}{2}$。另外，讀斜率要按 $x$、$y$ 的次序讀係數：$Ax+By+C=0$ 的斜率是 $-\\frac{A}{B}$，不是 $-\\frac{B}{A}$。",
      "en": "The commonest error is inverting without changing the sign: the negative reciprocal of $\\frac{2}{3}$ is $-\\frac{3}{2}$. Also, read the coefficients in the order of $x$ then $y$: the slope of $Ax+By+C=0$ is $-\\frac{A}{B}$, not $-\\frac{B}{A}$."
     }
    },
    {
     "id": "en3-c4",
     "topic": "en03",
     "title": {
      "zh": "解題流程與常見錯誤",
      "en": "Workflow and common mistakes"
     },
     "body": {
      "zh": "看到直線題，先分類再落手：\n① 求方程（已知一點、截距、平行或垂直）→ 先找斜率 → 用點斜式 {{math:0}} → 整理成一般式 → 把已知點代回驗算。\n② 由圖求 $m$、$n$ 的範圍 → 改寫成斜截式 → 比較斜率與兩個截距的符號 → 答案寫成不等式。\n③ 圖形應用（三角形面積、$AB=BC$）→ 先把軸上的點求出來（代 $y=0$ 或 $x=0$）→ 用距離公式或面積公式列方程：{{math:1}}。\n④ 兩線交點 → 解聯立方程（其中一條是 $x=k$ 就直接代入）。\n常見失分：① 求完方程沒有整理成一般式；② 負數截距漏括號（$y-(-3)$ 寫成 $y-3$）；③ 面積忘記乘 $\\frac{1}{2}$；④ 範圍題寫了等號；⑤ 求完答案沒有驗算。",
      "en": "Sort every straight-line question into one of four kinds before you start:\n(1) Find the equation (a point, an intercept, parallel or perpendicular) → find the slope → use point-slope form {{math:0}} → tidy it into general form → substitute the given point back to check.\n(2) Read the ranges of $m$ and $n$ from a graph → rewrite in slope-intercept form → compare the signs of the slope and the two intercepts → give the answer as inequalities.\n(3) Graphical applications (area of a triangle, $AB=BC$) → find every axis point first (put $y=0$ or $x=0$) → write a distance or area equation: {{math:1}}.\n(4) Intersection of two lines → solve them simultaneously (if one is $x=k$, substitute).\nCommon ways to lose marks: ① leaving the answer out of general form; ② dropping the bracket for a negative intercept ($y-(-3)$ written as $y-3$); ③ forgetting the $\\frac{1}{2}$ in an area; ④ writing an equality in a range question; ⑤ never checking the answer."
     },
     "math": [
      "y-y_{1}=m(x-x_{1})",
      "A=\\frac{1}{2}\\times\\text{base}\\times\\text{height}"
     ],
     "vocab": [
      {
       "en": "substitute",
       "zh": "代入"
      },
      {
       "en": "check",
       "zh": "驗算（把答案代回題目）"
      },
      {
       "en": "square units",
       "zh": "平方單位（面積的單位）"
      }
     ],
     "warn": {
      "zh": "最貴的失分是「沒有驗算」：求完方程，只要把題目給的一點代入答案（等於 0 就正確）；求完未知數，就把答案代回原式。這個動作只需十秒，但可以救回整題的分數。",
      "en": "The most expensive mistake is not checking: after finding an equation, substitute one given point into it (0 means correct); after finding an unknown, put it back into the original equation. Ten seconds of work can save the whole question."
     }
    }
   ],
   "long": [
    {
     "id": "eph-en03-q1",
     "type": "long",
     "topic": "en03",
     "unit": 10,
     "subtopic": "straight-lines",
     "difficulty": 1,
     "code": "EN3-Q1",
     "source": "Endeavour Lesson 3 Q1 · Chapter 4 Extra Questions（已知點在直線上，求 b、斜率與 y 截距）",
     "stem": {
      "en": "It is given that $A(-3,\\ 4)$ lies on the straight line $L: 3x+by-7=0$.",
      "zh": "已知 $A(-3,\\ 4)$ 在直線 $L: 3x+by-7=0$ 上。"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "Find the value of $b$.",
       "en": "Find the value of $b$.",
       "zh": "求 $b$ 的值。",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "Find the slope and the $y$-intercept of $L$.",
       "en": "Find the slope and the $y$-intercept of $L$.",
       "zh": "求 $L$ 的斜率與 $y$ 截距。",
       "marks": 2
      }
     ],
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 把已知點代入方程（求 b）",
         "en": "Step 1 · Substitute the given point (find $b$)"
        },
        "math": "3(-3)+b(4)-7=0\n\\Rightarrow\\ -9+4b-7=0\n\\Rightarrow\\ 4b=16",
        "zh": "「$A(-3,\\ 4)$ 在 $L$ 上」的意思是：把 $x=-3$、$y=4$ 代入 $3x+by-7=0$ 之後會等於 0（$-3$ 要連括號一起代入）。得 $-9+4b-7=0$，即 $4b=16$，所以 $b=4$。",
        "en": "“$A(-3,\\ 4)$ lies on $L$” means that substituting $x=-3$ and $y=4$ into $3x+by-7=0$ gives 0. Keep the bracket when substituting $-3$: $-9+4b-7=0$, so $4b=16$ and $b=4$.",
        "marking": "(1A)",
        "highlight": [
         "b=4"
        ]
       },
       {
        "title": {
         "zh": "第 2 步 · 寫成斜截式讀出斜率",
         "en": "Step 2 · Rewrite in slope-intercept form to read the slope"
        },
        "math": "3x+4y-7=0\n\\Rightarrow\\ 4y=-3x+7\n\\Rightarrow\\ y=-\\frac{3}{4}x+\\frac{7}{4}",
        "zh": "把 $b=4$ 寫回方程得 $3x+4y-7=0$。要求斜率就先把 $y$ 放在一邊：$4y=-3x+7$，兩邊除以 4 得 $y=-\\frac{3}{4}x+\\frac{7}{4}$，所以斜率是 $-\\frac{3}{4}$。",
        "en": "Putting $b=4$ back gives $3x+4y-7=0$. To read the slope, isolate $y$: $4y=-3x+7$, and dividing by 4 gives $y=-\\frac{3}{4}x+\\frac{7}{4}$, so the slope is $-\\frac{3}{4}$.",
        "marking": "(1A)",
        "highlight": [
         "\\text{slope}=-\\frac{3}{4}"
        ]
       },
       {
        "title": {
         "zh": "第 3 步 · 讀出 y 截距",
         "en": "Step 3 · Read off the $y$-intercept"
        },
        "math": "y=-\\frac{3}{4}x+\\frac{7}{4}\n\\Rightarrow\\ y\\text{-intercept}=\\frac{7}{4}",
        "zh": "斜截式 $y=mx+c$ 中的 $c$ 就是 $y$ 截距，所以 $y$ 截距是 $\\frac{7}{4}$（是正數 —— 在 $y=-\\frac{3}{4}x+\\frac{7}{4}$ 中，常數項前面沒有負號）。",
        "en": "In $y=mx+c$ the constant $c$ is the $y$-intercept, so the $y$-intercept is $\\frac{7}{4}$, which is positive because the constant term carries no minus sign in $y=-\\frac{3}{4}x+\\frac{7}{4}$.",
        "marking": "(1A)",
        "highlight": [
         "y\\text{-intercept}=\\frac{7}{4}"
        ]
       }
      ],
      "traps": [
       {
        "label": "把 b 當成斜率",
        "labelEn": "Reading $b$ as the slope",
        "zh": "看到 $3x+by-7=0$ 就把 $b$ 當作斜率是錯的：$b$ 只是方程裡的一個未知數，要用「$A$ 在線上」這個條件求出來；斜率要整理成 $y=mx+c$ 才讀得到。",
        "en": "Treating the $b$ in $3x+by-7=0$ as the slope is wrong: $b$ is just an unknown in the equation, found from the condition that $A$ lies on the line. The slope can only be read after rewriting the equation as $y=mx+c$."
       },
       {
        "label": "代入時漏括號",
        "labelEn": "Dropping the bracket when substituting",
        "zh": "代入負數一定要連括號：$3(-3)=-9$ 正確；若寫成 $3\\times-3$ 再在後面接上 $b(4)$，很容易把符號弄錯，令 $b$ 算成 $-4$。",
        "en": "Always use brackets for negative values: $3(-3)=-9$ is correct. Writing the product without brackets easily produces a sign error and gives $b=-4$ instead."
       },
       {
        "label": "斜率與截距的符號",
        "labelEn": "Signs of the slope and the intercept",
        "zh": "由 $3x+4y-7=0$ 整理時，$-3x$ 搬到右邊是 $-3x$；斜率一定是負數 $(-\\frac{3}{4})$，而 $y$ 截距是正數 $\\frac{7}{4}$ —— 兩個符號一負一正，不要一併寫成負。",
        "en": "When rearranging $3x+4y-7=0$, the term $-3x$ stays negative: the slope must be negative ($-\\frac{3}{4}$) while the $y$-intercept is positive ($\\frac{7}{4}$). Do not make both negative."
       }
      ],
      "tip": {
       "zh": "「已知一點在直線上」＝ 代入方程會等於 0，這是求未知數的唯一條件；求斜率與截距就一定先把方程寫成 $y=mx+c$。",
       "en": "“A point lies on the line” means the substitution gives 0 — the only condition available for finding the unknown. To read the slope and intercept, always rewrite the equation as $y=mx+c$ first."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：把答案代回兩邊核對",
         "en": "Check: substitute the answer back"
        },
        "zh": "檢查第一步：$b=4$ 時 $L$ 是 $3x+4y-7=0$，代入 $A(-3,\\ 4)$ 得 $3(-3)+4(4)-7=-9+16-7=0$ ✓，代表 $A$ 真的在線上。再檢查斜率與截距：代 $x=0$ 得 $y=\\frac{7}{4}$（$y$ 截距）；代 $x=4$ 得 $y=-3+\\frac{7}{4}=-\\frac{5}{4}$，由 $(0,\\ \\frac{7}{4})$ 到 $(4,\\ -\\frac{5}{4})$ 的斜率是 $\\frac{-\\frac{5}{4}-\\frac{7}{4}}{4-0}=-\\frac{3}{4}$ ✓。",
        "en": "For $b=4$ the line is $3x+4y-7=0$; substituting $A(-3,\\ 4)$ gives $3(-3)+4(4)-7=-9+16-7=0$, so $A$ really lies on it. Check the slope and intercept too: at $x=0$, $y=\\frac{7}{4}$ (the $y$-intercept); at $x=4$, $y=-\\frac{5}{4}$, and the slope from $(0,\\ \\frac{7}{4})$ to $(4,\\ -\\frac{5}{4})$ is $-\\frac{3}{4}$."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en03-q2",
     "type": "long",
     "topic": "en03",
     "unit": 10,
     "subtopic": "straight-lines",
     "difficulty": 1,
     "code": "EN3-Q2",
     "source": "Endeavour Lesson 3 Q2 · Chapter 4 Extra Questions（已知 x 截距與斜率，求方程）",
     "stem": {
      "en": "Find the equation of a straight line with $x$-intercept $-3$ and slope $-2$.",
      "zh": "求一條 $x$ 截距是 $-3$、斜率是 $-2$ 的直線方程。"
     },
     "kind": "short",
     "marks": 2,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 把 x 截距變成一個點，寫點斜式",
         "en": "Step 1 · Turn the $x$-intercept into a point and write point-slope form"
        },
        "math": "x\\text{-intercept}=-3\n\\Rightarrow\\ \\text{the line passes through }(-3,\\ 0)\ny-0=-2[x-(-3)]",
        "zh": "$x$ 截距是 $-3$ 的意思是「線與 $x$ 軸交於 $x=-3$」，即通過 $(-3,\\ 0)$。有了斜率和一點，用點斜式 $y-y_1=m(x-x_1)$：$y-0=-2[x-(-3)]$。",
        "en": "An $x$-intercept of $-3$ means the line meets the $x$-axis at $x=-3$, i.e. it passes through $(-3,\\ 0)$. With a slope and a point, use point-slope form $y-y_1=m(x-x_1)$: $y-0=-2[x-(-3)]$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 展開並整理成一般式",
         "en": "Step 2 · Expand and rearrange into general form"
        },
        "math": "y=-2(x+3)\n\\Rightarrow\\ y=-2x-6\n\\Rightarrow\\ 2x+y+6=0",
        "zh": "展開：$-2[x-(-3)]=-2(x+3)=-2x-6$，所以 $y=-2x-6$。把所有項搬到同一邊得 $2x+y+6=0$（題目只說「求方程」，寫一般式一定不會被扣分）。",
        "en": "Expanding gives $-2[x-(-3)]=-2(x+3)=-2x-6$, so $y=-2x-6$. Moving every term to one side gives $2x+y+6=0$; since the question only asks for “the equation”, the general form is always safe.",
        "marking": "(1A)",
        "highlight": [
         "2x+y+6=0"
        ]
       }
      ],
      "traps": [
       {
        "label": "x 截距與 y 截距調亂",
        "labelEn": "Swapping the $x$- and $y$-intercepts",
        "zh": "「$x$ 截距是 $-3$」是過點 $(-3,\\ 0)$；寫成 $(0,\\ -3)$ 就會把整條線畫錯方向。$x$ 截距是 $y=0$ 時的 $x$，$y$ 截距是 $x=0$ 時的 $y$。",
        "en": "An $x$-intercept of $-3$ means the point $(-3,\\ 0)$, not $(0,\\ -3)$. The $x$-intercept is the value of $x$ when $y=0$, and the $y$-intercept is the value of $y$ when $x=0$."
       },
       {
        "label": "漏括號令符號出錯",
        "labelEn": "A missing bracket flips the sign",
        "zh": "$x-(-3)$ 寫成 $x-3$ 就會得到 $y=-2x+6$ —— 這條線與正確答案的 $x$ 截距相差很遠，是最常見的失分位。",
        "en": "Writing $x-(-3)$ as $x-3$ gives $y=-2x+6$, a line with a completely different $x$-intercept. This is the most common way to lose the mark."
       },
       {
        "label": "沒有整理成一般式",
        "labelEn": "Leaving the answer unfinished",
        "zh": "只寫 $y=-2x-6$ 通常也可以，但若題目要求 $Ax+By+C=0$ 的形式，就要把 $2x$、$6$ 全部搬到左邊（且習慣令 $x$ 的係數為正）。",
        "en": "Writing just $y=-2x-6$ is usually accepted, but if the question asks for the form $Ax+By+C=0$, move every term to the left-hand side and keep the coefficient of $x$ positive."
       }
      ],
      "tip": {
       "zh": "「$x$ 截距是 $a$」＝ 過 $(a,\\ 0)$；「$y$ 截距是 $b$」＝ 過 $(0,\\ b)$。寫點斜式時，負數一定要連括號。",
       "en": "“$x$-intercept $a$” means the point $(a,\\ 0)$; “$y$-intercept $b$” means $(0,\\ b)$. Always keep the bracket for a negative value in point-slope form."
      },
      "alt": [
       {
        "name": {
         "zh": "另解：先用斜截式，再代入已知點",
         "en": "Alternative: start with the slope-intercept form"
        },
        "zh": "既然斜率是 $-2$，方程一定可以寫成 $y=-2x+c$。代入 $(-3,\\ 0)$：$0=-2(-3)+c$，即 $c=-6$，所以 $y=-2x-6$，同樣得 $2x+y+6=0$。這個做法少了點斜式的括號，適合容易漏括號的同學。",
        "en": "Since the slope is $-2$, the equation must be $y=-2x+c$. Substituting $(-3,\\ 0)$: $0=-2(-3)+c$, so $c=-6$ and $y=-2x-6$, giving the same $2x+y+6=0$. This route avoids the bracket in point-slope form."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en03-q3",
     "type": "long",
     "topic": "en03",
     "unit": 10,
     "subtopic": "straight-lines",
     "difficulty": 2,
     "code": "EN3-Q3",
     "source": "Endeavour Lesson 3 Q3 · Chapter 4 Extra Questions（讀圖：由圖判斷 m、n 的範圍）",
     "stem": {
      "en": "The figure shows the straight line $L: x+my+n=0$. Find the ranges of values of $m$ and $n$. (Working steps are NOT required.)",
      "zh": "圖中直線 $L: x+my+n=0$。求 $m$ 與 $n$ 的取值範圍。（不需列出工作步驟。）"
     },
     "kind": "short",
     "marks": 2,
     "figBefore": true,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 改寫方程，由方向定 m 的正負",
         "en": "Step 1 · Rewrite the equation and read $m$ from the direction"
        },
        "math": "x+my+n=0\n\\Rightarrow\\ y=-\\frac{1}{m}x-\\frac{n}{m}\n\\Rightarrow\\ \\text{slope}=-\\frac{1}{m}",
        "zh": "圖上見到的是「往哪個方向斜」，所以先把方程寫成斜截式：斜率是 $-\\frac{1}{m}$、$y$ 截距是 $-\\frac{n}{m}$。圖中直線往右下斜，斜率是負數，即 $-\\frac{1}{m}<0$，所以 $m>0$。",
        "en": "The graph shows the direction of the line, so rewrite the equation in slope-intercept form: the slope is $-\\frac{1}{m}$ and the $y$-intercept is $-\\frac{n}{m}$. The line falls to the right, so the slope is negative: $-\\frac{1}{m}<0$, hence $m>0$.",
        "marking": "(1A)",
        "highlight": [
         "m>0"
        ]
       },
       {
        "title": {
         "zh": "第 2 步 · 用 x 截距的位置定 n 的範圍",
         "en": "Step 2 · Use the position of the $x$-intercept to bound $n$"
        },
        "math": "x\\text{-intercept}=-n\n-5<-n<0\n\\Rightarrow\\ 0<n<5",
        "zh": "在 $x+my+n=0$ 中代 $y=0$，得 $x=-n$，所以 $x$ 截距是 $-n$。圖中交點落在 $-5$ 與 $0$ 之間（不是剛好在 $-5$），所以 $-5<-n<0$，兩邊乘 $-1$ 要反號，得 $0<n<5$。",
        "en": "Putting $y=0$ in $x+my+n=0$ gives $x=-n$, so the $x$-intercept is $-n$. In the figure the crossing lies between $-5$ and $0$, so $-5<-n<0$; multiplying by $-1$ reverses the inequalities and gives $0<n<5$.",
        "marking": "(1A)",
        "highlight": [
         "0<n<5"
        ]
       }
      ],
      "traps": [
       {
        "label": "把 y 截距當成 n",
        "labelEn": "Taking the $y$-intercept as $n$",
        "zh": "$x+my+n=0$ 的 $y$ 截距是 $-\\frac{n}{m}$，不是 $n$；由圖見到交點在原點之下（截距是負），代表 $-\\frac{n}{m}<0$。這一步很容易把正負倒轉。",
        "en": "The $y$-intercept of $x+my+n=0$ is $-\\frac{n}{m}$, not $n$. The graph shows the line meeting the $y$-axis below the origin, so $-\\frac{n}{m}<0$; the sign is easy to flip here."
       },
       {
        "label": "往右下斜就寫 m < 0",
        "labelEn": "Reading “falling to the right” as $m<0$",
        "zh": "斜率是 $-\\frac{1}{m}$，不是 $m$ 本身。線往右下斜 → $-\\frac{1}{m}<0$ → $m>0$，與直覺相反，這是最多人錯的一步。",
        "en": "The slope is $-\\frac{1}{m}$, not $m$. Falling to the right means $-\\frac{1}{m}<0$, so $m>0$ — the opposite of the first guess, and the commonest error."
       },
       {
        "label": "範圍題寫了等號",
        "labelEn": "Writing an equality instead of a range",
        "zh": "交點落在 $-5$ 與 $0$ 之間，答案是 $0<n<5$（不對：不是 $n=5$）。題目問「ranges」，答的一定是不等式。",
        "en": "The crossing lies strictly between $-5$ and $0$, so the answer is $0<n<5$ — not $n=5$. The question asks for “ranges”, so the answers must be inequalities."
       }
      ],
      "tip": {
       "zh": "$x+my+n=0$ 先寫成 $y=-\\frac{1}{m}x-\\frac{n}{m}$：斜率 $=-\\frac{1}{m}$、$y$ 截距 $=-\\frac{n}{m}$、$x$ 截距 $=-n$。讀圖題答的是符號與範圍，不是數值。",
       "en": "Rewrite $x+my+n=0$ as $y=-\\frac{1}{m}x-\\frac{n}{m}$ first: slope $=-\\frac{1}{m}$, $y$-intercept $=-\\frac{n}{m}$, $x$-intercept $=-n$. Graph-reading questions are answered with signs and ranges, not exact values."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：用範圍內的數畫一次圖",
         "en": "Check: test a value inside the range"
        },
        "zh": "取範圍內的一組數，例如 $m=1$、$n=2$，方程是 $x+y+2=0$，即 $y=-x-2$：斜率 $-1$（往右下斜 ✓）、$x$ 截距 $-2$（落在 $-5$ 與 $0$ 之間 ✓）、$y$ 截距 $-2$（在原點之下 ✓），三項都與圖吻合，所以答案合理。反過來取 $m=-1$、$n=2$ 得 $y=x-2$，線會往右上斜，與圖不符。",
        "en": "Take a pair inside the range, say $m=1$, $n=2$: the line is $x+y+2=0$, i.e. $y=-x-2$, with slope $-1$ (falling ✓), $x$-intercept $-2$ (between $-5$ and $0$ ✓) and $y$-intercept $-2$ (below the origin ✓). All three agree with the graph, so the answer is consistent. With $m=-1$, $n=2$ the line becomes $y=x-2$, rising to the right and contradicting the figure."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en03-q4",
     "type": "long",
     "topic": "en03",
     "unit": 10,
     "subtopic": "straight-lines",
     "difficulty": 2,
     "code": "EN3-Q4",
     "source": "Endeavour Lesson 3 Q4 · Chapter 4 Extra Questions（平行直線，過一點求方程）",
     "stem": {
      "en": "Find the equation of the straight line $L_2$ which is parallel to $L_1: 4x-y+5=0$ and passes through $A(-1,\\ 2)$.",
      "zh": "求直線 $L_2$ 的方程：$L_2$ 平行於 $L_1: 4x-y+5=0$，且通過 $A(-1,\\ 2)$。"
     },
     "kind": "short",
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 讀出 L1 的斜率（平行＝斜率相同）",
         "en": "Step 1 · Read the slope of $L_1$ (parallel means the same slope)"
        },
        "math": "4x-y+5=0\n\\Rightarrow\\ y=4x+5\n\\Rightarrow\\ \\text{slope of }L_1=4",
        "zh": "先把 $L_1$ 寫成斜截式：$y=4x+5$，斜率是 4。兩條線平行就是斜率相同，所以 $L_2$ 的斜率也是 4（平行不需要做任何運算，直接抄）。",
        "en": "Rewrite $L_1$ as $y=4x+5$; its slope is 4. Parallel lines have equal slopes, so the slope of $L_2$ is also 4 — nothing to calculate, just copy it.",
        "marking": "(1A)",
        "highlight": [
         "m_{L_2}=4"
        ]
       },
       {
        "title": {
         "zh": "第 2 步 · 用點斜式寫出 L2",
         "en": "Step 2 · Write $L_2$ in point-slope form"
        },
        "math": "y-2=4[x-(-1)]\n\\Rightarrow\\ y-2=4(x+1)",
        "zh": "用點斜式 $y-y_1=m(x-x_1)$，點是 $A(-1,\\ 2)$：$y-2=4[x-(-1)]$，即 $y-2=4(x+1)$。代入 $x_1=-1$ 時，「$-(-1)$」變成 $+1$，這一步是最常漏的地方。",
        "en": "Use $y-y_1=m(x-x_1)$ with the point $A(-1,\\ 2)$: $y-2=4[x-(-1)]$, that is $y-2=4(x+1)$. The double negative turns $-(-1)$ into $+1$ — the step most often dropped.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 展開並整理成一般式",
         "en": "Step 3 · Expand and rearrange into general form"
        },
        "math": "y-2=4x+4\n\\Rightarrow\\ y=4x+6\n\\Rightarrow\\ 4x-y+6=0",
        "zh": "展開右邊得 $4x+4$，移項後 $y=4x+6$，再把所有項搬到左邊：$4x-y+6=0$。注意 $L_1$ 是 $4x-y+5=0$ —— 兩條線只是常數項不同（$+5$ 與 $+6$），平行的線一定長這個樣子。",
        "en": "Expanding the right-hand side gives $4x+4$, so $y=4x+6$; moving everything to the left gives $4x-y+6=0$. Compare with $L_1: 4x-y+5=0$ — only the constant differs, exactly as parallel lines should.",
        "marking": "(1A)",
        "highlight": [
         "4x-y+6=0"
        ]
       }
      ],
      "traps": [
       {
        "label": "平行當成垂直",
        "labelEn": "Treating “parallel” as “perpendicular”",
        "zh": "平行＝斜率相同（4）；垂直才要取負倒數（$-\\frac{1}{4}$）。題目寫 parallel 就不要做任何倒數。",
        "en": "Parallel means the same slope (4); only perpendicular requires the negative reciprocal ($-\\frac{1}{4}$). When the question says “parallel”, do not invert anything."
       },
       {
        "label": "點斜式漏括號",
        "labelEn": "Dropping the bracket in point-slope form",
        "zh": "$x-(-1)$ 寫成 $x-1$，會得到 $y=4x-6$ 與 $4x-y-6=0$，整條線平行但位置錯了。",
        "en": "Writing $x-(-1)$ as $x-1$ gives $y=4x-6$ and $4x-y-6=0$: still parallel, but in the wrong place."
       },
       {
        "label": "搬項時符號出錯",
        "labelEn": "A sign error when rearranging",
        "zh": "$y=4x+6$ 搬成 $4x-y+6=0$（$y$ 過左邊變 $-y$，$+6$ 保持 $+6$）；若寫成 $4x-y-6=0$，代 $A(-1,\\ 2)$ 會得 $-12\\ne0$。",
        "en": "From $y=4x+6$ we get $4x-y+6=0$: $y$ becomes $-y$ on the left and the $+6$ stays positive. Writing $4x-y-6=0$ fails the check, since $A(-1,\\ 2)$ gives $-12\\ne0$."
       }
      ],
      "tip": {
       "zh": "平行＝直接抄斜率；抄完之後一定把已知點代回答案驗算（等於 0 就正確），這是最快的自我檢查。",
       "en": "Parallel means copy the slope. Then always substitute the given point back into your answer: if it gives 0, the equation must be right."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：把 A 代入答案",
         "en": "Check: substitute $A$ into the answer"
        },
        "zh": "把 $A(-1,\\ 2)$ 代入 $4x-y+6=0$：$4(-1)-2+6=-4-2+6=0$ ✓ 代表 $A$ 真的在 $L_2$ 上；再看兩條線的斜率都是 4，所以 $L_2$ 確實平行於 $L_1$。兩項條件都成立，答案必定正確。",
        "en": "Substituting $A(-1,\\ 2)$ into $4x-y+6=0$ gives $4(-1)-2+6=-4-2+6=0$, so $A$ lies on $L_2$; both lines have slope 4, so $L_2$ is indeed parallel to $L_1$. Both conditions hold, so the answer is certainly right."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en03-q5",
     "type": "long",
     "topic": "en03",
     "unit": 10,
     "subtopic": "straight-lines",
     "difficulty": 2,
     "code": "EN3-Q5",
     "source": "Endeavour Lesson 3 Q5 · Chapter 4 Extra Questions（兩線同交於 x 軸一點，求方程）",
     "stem": {
      "en": "It is given that the straight lines $L_1: x+y-3=0$ and $L_2$ cut the $x$-axis at the same point $A$, and $L_2$ passes through $(-3,\\ 2)$. Find the equation of $L_2$.",
      "zh": "已知直線 $L_1: x+y-3=0$ 與 $L_2$ 同交 $x$ 軸於點 $A$，且 $L_2$ 通過 $(-3,\\ 2)$。求 $L_2$ 的方程。"
     },
     "kind": "short",
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 先求 A（L1 的 x 截距）",
         "en": "Step 1 · Find $A$, the $x$-intercept of $L_1$"
        },
        "math": "x+0-3=0\n\\Rightarrow\\ x=3\n\\Rightarrow\\ A(3,\\ 0)",
        "zh": "「$L_1$ 與 $L_2$ 同交 $x$ 軸於 $A$」代表 $A$ 是 $L_1$ 的 $x$ 截距，也是 $L_2$ 的 $x$ 截距。在 $L_1$ 中代 $y=0$：$x+0-3=0$，得 $x=3$，所以 $A(3,\\ 0)$。",
        "en": "“$L_1$ and $L_2$ cut the $x$-axis at the same point $A$” means $A$ is the $x$-intercept of both lines. Putting $y=0$ in $L_1$: $x+0-3=0$, so $x=3$ and $A(3,\\ 0)$.",
        "marking": "(1A)",
        "highlight": [
         "A(3,\\ 0)"
        ]
       },
       {
        "title": {
         "zh": "第 2 步 · 用兩點求 L2 的斜率",
         "en": "Step 2 · Find the slope of $L_2$ from two points"
        },
        "math": "m=\\frac{2-0}{-3-3}=\\frac{2}{-6}=-\\frac{1}{3}",
        "zh": "$L_2$ 通過 $A(3,\\ 0)$ 與 $(-3,\\ 2)$，用斜率公式 $m=\\frac{y_2-y_1}{x_2-x_1}$：分子 $2-0=2$、分母 $-3-3=-6$，得 $-\\frac{1}{3}$。兩個點的次序要一致，不能一個用「後減前」、另一個用「前減後」。",
        "en": "$L_2$ passes through $A(3,\\ 0)$ and $(-3,\\ 2)$; by $m=\\frac{y_2-y_1}{x_2-x_1}$ the numerator is $2-0=2$ and the denominator is $-3-3=-6$, giving $-\\frac{1}{3}$. Keep the order of the two points consistent.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 點斜式 → 一般式",
         "en": "Step 3 · Point-slope form, then general form"
        },
        "math": "y-0=-\\frac{1}{3}(x-3)\n\\Rightarrow\\ 3y=-x+3\n\\Rightarrow\\ x+3y-3=0",
        "zh": "用 $A(3,\\ 0)$ 與斜率 $-\\frac{1}{3}$ 寫點斜式：$y=-\\frac{1}{3}(x-3)$。兩邊乘 3 消去分數得 $3y=-x+3$，再搬到一邊就是 $x+3y-3=0$。",
        "en": "With $A(3,\\ 0)$ and slope $-\\frac{1}{3}$, point-slope form gives $y=-\\frac{1}{3}(x-3)$. Multiplying by 3 clears the fraction: $3y=-x+3$, and collecting terms gives $x+3y-3=0$.",
        "marking": "(1A)",
        "highlight": [
         "x+3y-3=0"
        ]
       }
      ],
      "traps": [
       {
        "label": "把 (−3, 2) 當成 A",
        "labelEn": "Mistaking $(-3,\\ 2)$ for $A$",
        "zh": "題目說 $L_2$「通過 $(-3,\\ 2)$」，而 $A$ 是 $x$ 軸上的交點 $(3,\\ 0)$：兩點完全不同。看到兩個點先寫清楚哪個是 $A$。",
        "en": "The question says $L_2$ “passes through $(-3,\\ 2)$”, while $A$ is the point on the $x$-axis, $(3,\\ 0)$. They are different points — label them before you start."
       },
       {
        "label": "斜率次序倒轉",
        "labelEn": "Reversing the order in the slope formula",
        "zh": "寫成 $\\frac{-3-3}{2-0}=-3$ 就全錯（上下次序要一致）。安全寫法：先寫分子 $y_2-y_1$，再寫分母 $x_2-x_1$。",
        "en": "Writing $\\frac{-3-3}{2-0}=-3$ is wrong: the numerator and denominator must use the same order of points. Safe habit: write $y_2-y_1$ first, then $x_2-x_1$."
       },
       {
        "label": "同交一點的條件被忽略",
        "labelEn": "Ignoring the “same point” condition",
        "zh": "「同交 $x$ 軸於 $A$」是這一題的關鍵：少了它，$A$ 就求不出來，而 $A$ 正是求 $L_2$ 斜率的第二點。",
        "en": "“Cutting the $x$-axis at the same point $A$” is the key: without it $A$ cannot be found, and $A$ is the second point needed for the slope of $L_2$."
       }
      ],
      "tip": {
       "zh": "「兩線同交某軸於 $A$」＝ $A$ 同時在兩條線上：先用已知那條求出 $A$，再用 $A$ 與另一點求第二條的方程。",
       "en": "“The two lines meet an axis at the same point $A$” means $A$ lies on both lines: find $A$ from the known line, then use $A$ with the other given point."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：兩個已知點都代回去",
         "en": "Check: put both known points back"
        },
        "zh": "把 $A(3,\\ 0)$ 代入 $x+3y-3=0$：$3+0-3=0$ ✓；把 $(-3,\\ 2)$ 代入：$-3+6-3=0$ ✓。兩個點都成立，代表這條線同時滿足「交 $x$ 軸於 $A$」與「通過 $(-3,\\ 2)$」兩個條件。",
        "en": "Substituting $A(3,\\ 0)$ into $x+3y-3=0$ gives $3+0-3=0$; substituting $(-3,\\ 2)$ gives $-3+6-3=0$. Both points satisfy the equation, so the line meets both given conditions."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en03-q6",
     "type": "long",
     "topic": "en03",
     "unit": 10,
     "subtopic": "straight-lines",
     "difficulty": 2,
     "code": "EN3-Q6",
     "source": "Endeavour Lesson 3 Q6 · Chapter 4 Extra Questions（截距點、AB = BC 與求 AC 的方程）",
     "stem": {
      "en": "In the figure, the straight line $L: 3x+4y+12=0$ cuts the $x$-axis and the $y$-axis at $A$ and $B$ respectively. $C$ is a point on the $y$-axis such that $AB=BC$.",
      "zh": "圖中直線 $L: 3x+4y+12=0$ 分別與 $x$ 軸、$y$ 軸交於 $A$、$B$。$C$ 是 $y$ 軸上的一點，且 $AB=BC$。"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "Find the coordinates of $A$ and $B$.",
       "en": "Find the coordinates of $A$ and $B$.",
       "zh": "求 $A$ 與 $B$ 的坐標。",
       "marks": 2
      },
      {
       "label": "(b)(i)",
       "text": "Find the coordinates of $C$.",
       "en": "Find the coordinates of $C$.",
       "zh": "求 $C$ 的坐標。",
       "marks": 2
      },
      {
       "label": "(b)(ii)",
       "text": "Find the equation of $AC$.",
       "en": "Find the equation of $AC$.",
       "zh": "求 $AC$ 的方程。",
       "marks": 2
      }
     ],
     "marks": 6,
     "figBefore": true,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 求 A（與 x 軸的交點）",
         "en": "Step 1 · Find $A$, the $x$-intercept"
        },
        "math": "3x+4(0)+12=0\n\\Rightarrow\\ 3x=-12\n\\Rightarrow\\ x=-4",
        "zh": "線與 $x$ 軸相交代表該點的 $y=0$：在 $3x+4y+12=0$ 中代 $y=0$，得 $3x+12=0$，所以 $x=-4$，即 $A(-4,\\ 0)$。",
        "en": "A point on the $x$-axis has $y=0$: putting $y=0$ in $3x+4y+12=0$ gives $3x+12=0$, so $x=-4$ and $A(-4,\\ 0)$.",
        "marking": "(1A)",
        "highlight": [
         "A(-4,\\ 0)"
        ]
       },
       {
        "title": {
         "zh": "第 2 步 · 求 B（與 y 軸的交點）",
         "en": "Step 2 · Find $B$, the $y$-intercept"
        },
        "math": "3(0)+4y+12=0\n\\Rightarrow\\ 4y=-12\n\\Rightarrow\\ y=-3",
        "zh": "線與 $y$ 軸相交代表 $x=0$：代 $x=0$ 得 $4y+12=0$，所以 $y=-3$，即 $B(0,\\ -3)$（在原點之下，與圖一致）。",
        "en": "A point on the $y$-axis has $x=0$: putting $x=0$ gives $4y+12=0$, so $y=-3$ and $B(0,\\ -3)$ — below the origin, as the figure shows.",
        "marking": "(1A)",
        "highlight": [
         "B(0,\\ -3)"
        ]
       },
       {
        "title": {
         "zh": "第 3 步 · 用 AB = BC 列方程（設 C(0, c)）",
         "en": "Step 3 · Set up $AB=BC$ with $C(0,\\ c)$"
        },
        "math": "AB=\\sqrt{(-4-0)^{2}+[0-(-3)]^{2}}=\\sqrt{16+9}=5\nBC=|-3-c|\n-3-c=5\\ \\text{or}\\ -3-c=-5\\ (\\text{rejected})",
        "zh": "先求 $AB$：$\\sqrt{(-4)^{2}+3^{2}}=\\sqrt{25}=5$（是 3-4-5 直角三角形）。設 $C(0,\\ c)$，則 $BC=|-3-c|$。由 $AB=BC$ 得 $-3-c=5$ 或 $-3-c=-5$；圖中 $C$ 在 $B$ 之下，所以 $c$ 比 $-3$ 更小，取 $-3-c=5$，另一個解 $c=2$（$B$ 之上）要捨去。",
        "en": "First $AB=\\sqrt{(-4)^{2}+3^{2}}=\\sqrt{25}=5$ (a 3-4-5 right triangle). Let $C(0,\\ c)$, then $BC=|-3-c|$. From $AB=BC$: $-3-c=5$ or $-3-c=-5$. The figure puts $C$ below $B$, so $c<-3$ and we take $-3-c=5$; the other solution $c=2$ (above $B$) is rejected.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 寫出 C 的坐標",
         "en": "Step 4 · State the coordinates of $C$"
        },
        "math": "-3-c=5\n\\Rightarrow\\ c=-8\n\\Rightarrow\\ C(0,\\ -8)",
        "zh": "由 $-3-c=5$ 得 $c=-3-5=-8$，所以 $C(0,\\ -8)$：$C$ 比 $B(0,\\ -3)$ 再低 5 個單位。把 $c=-8$ 代回 $BC=|-3-(-8)|=5=AB$ ✓，與圖中「$C$ 在 $B$ 之下」亦一致。",
        "en": "From $-3-c=5$ we get $c=-3-5=-8$, so $C(0,\\ -8)$: it lies 5 units below $B(0,\\ -3)$. Substituting back, $BC=|-3-(-8)|=5=AB$, consistent with $C$ being below $B$ in the figure.",
        "marking": "(1A)",
        "highlight": [
         "C(0,\\ -8)"
        ]
       },
       {
        "title": {
         "zh": "第 5 步 · 求 AC 的斜率，寫點斜式",
         "en": "Step 5 · Find the slope of $AC$ and write point-slope form"
        },
        "math": "m_{AC}=\\frac{0-(-8)}{-4-0}=\\frac{8}{-4}=-2\ny-0=-2[x-(-4)]",
        "zh": "用 $A(-4,\\ 0)$ 與 $C(0,\\ -8)$ 求斜率：$\\frac{0-(-8)}{-4-0}=\\frac{8}{-4}=-2$。再用 $A$ 寫點斜式：$y-0=-2[x-(-4)]$。",
        "en": "With $A(-4,\\ 0)$ and $C(0,\\ -8)$ the slope is $\\frac{0-(-8)}{-4-0}=\\frac{8}{-4}=-2$. Using $A$ for point-slope form: $y-0=-2[x-(-4)]$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 6 步 · 整理成一般式",
         "en": "Step 6 · Rearrange into general form"
        },
        "math": "y=-2(x+4)\n\\Rightarrow\\ y=-2x-8\n\\Rightarrow\\ 2x+y+8=0",
        "zh": "展開得 $y=-2x-8$，把 $-2x$、$-8$ 搬到左邊：$2x+y+8=0$。驗算：代 $A(-4,\\ 0)$ 得 $-8+0+8=0$ ✓，代 $C(0,\\ -8)$ 得 $0-8+8=0$ ✓。",
        "en": "Expanding gives $y=-2x-8$; collecting terms gives $2x+y+8=0$. Check: $A(-4,\\ 0)$ gives $-8+0+8=0$ and $C(0,\\ -8)$ gives $0-8+8=0$.",
        "marking": "(1A)",
        "highlight": [
         "2x+y+8=0"
        ]
       }
      ],
      "traps": [
       {
        "label": "距離漏括號／漏平方",
        "labelEn": "Distance formula without brackets",
        "zh": "$(-4-0)^{2}=16$、$[0-(-3)]^{2}=9$：兩個括號都不能省，否則會算出 $\\sqrt{-7}$ 之類的無意義結果。",
        "en": "$(-4-0)^{2}=16$ and $[0-(-3)]^{2}=9$: neither bracket can be dropped, or the square root becomes meaningless."
       },
       {
        "label": "取了 B 之上那一點",
        "labelEn": "Choosing the point above $B$",
        "zh": "$AB=BC$ 在 $y$ 軸上有兩個解：$C(0,\\ -8)$ 與 $(0,\\ 2)$。圖中 $C$ 在 $B$ 之下，所以要捨去 $(0,\\ 2)$ —— 這是官方評分明確寫「rejected」的地方。",
        "en": "$AB=BC$ has two solutions on the $y$-axis: $C(0,\\ -8)$ and $(0,\\ 2)$. The figure places $C$ below $B$, so $(0,\\ 2)$ must be rejected — the official scheme marks it “rejected”."
       },
       {
        "label": "AC 的斜率次序倒轉",
        "labelEn": "Reversing the order for the slope of $AC$",
        "zh": "斜率是 $\\frac{y_C-y_A}{x_C-x_A}=\\frac{-8-0}{0-(-4)}=-2$；若上下倒轉會得 $+2$，答案變成 $2x-y+8=0$。",
        "en": "The slope is $\\frac{y_C-y_A}{x_C-x_A}=\\frac{-8-0}{0-(-4)}=-2$. Reversing it gives $+2$ and the wrong line $2x-y+8=0$."
       }
      ],
      "tip": {
       "zh": "「與兩軸相交」＝ 分別代 $y=0$ 與 $x=0$；求未知點先用距離公式把已知的一段算出來，再令兩段相等，最後用圖判斷要哪個解。",
       "en": "“Meets both axes” means substitute $y=0$ and $x=0$ separately. For the unknown point, use the distance formula on the known segment, set the two lengths equal, and let the figure choose between the solutions."
      },
      "alt": [
       {
        "name": {
         "zh": "另解：用 3-4-5 三角形直接讀出 AB",
         "en": "Alternative: read $AB$ from a 3-4-5 triangle"
        },
        "zh": "$A(-4,\\ 0)$ 與 $B(0,\\ -3)$ 的水平距離是 4、垂直距離是 3，所以 $AB=5$（3-4-5 直角三角形，不必開方）。$C$ 在 $B$ 下方 5 單位，直接得 $C(0,\\ -8)$。這個做法在考試時快得多，但記得在卷面寫一句「$AB=\\sqrt{4^{2}+3^{2}}=5$」交代來源。",
        "en": "$A(-4,\\ 0)$ and $B(0,\\ -3)$ differ by 4 horizontally and 3 vertically, so $AB=5$ by the 3-4-5 triangle — no square root needed. Going 5 units down from $B$ gives $C(0,\\ -8)$ directly. It is much faster in an exam, but still write “$AB=\\sqrt{4^{2}+3^{2}}=5$” to show where it comes from."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en03-q7",
     "type": "long",
     "topic": "en03",
     "unit": 10,
     "subtopic": "straight-lines",
     "difficulty": 3,
     "code": "EN3-Q7",
     "source": "Endeavour Lesson 3 Q7 · Chapter 4 Extra Questions（兩線同交 x 軸，用面積求方程）",
     "stem": {
      "en": "In the figure, the two straight lines $L_1$ and $L_2: 2x+3y-20=0$ intersect the $x$-axis at the same point $C$. $L_1$ and $L_2$ cut the $y$-axis at $B$ and $A$ respectively. If the area of $\\triangle ABC$ is 50 square units, find the equation of $L_1$.",
      "zh": "圖中兩條直線 $L_1$ 與 $L_2: 2x+3y-20=0$ 同交 $x$ 軸於點 $C$，而 $L_1$、$L_2$ 分別與 $y$ 軸交於 $B$、$A$。若 $\\triangle ABC$ 的面積是 50 平方單位，求 $L_1$ 的方程。"
     },
     "marks": 6,
     "figBefore": true,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 求 A（L2 的 y 截距）",
         "en": "Step 1 · Find $A$, the $y$-intercept of $L_2$"
        },
        "math": "2(0)+3y-20=0\n\\Rightarrow\\ 3y=20\n\\Rightarrow\\ y=\\frac{20}{3}",
        "zh": "$A$ 是 $L_2$ 與 $y$ 軸的交點，代 $x=0$：$3y-20=0$，得 $y=\\frac{20}{3}$，所以 $A(0,\\ \\frac{20}{3})$。$A$ 在 $x$ 軸之上（$\\frac{20}{3}>0$），與圖一致。",
        "en": "$A$ is where $L_2$ meets the $y$-axis; putting $x=0$ gives $3y-20=0$, so $y=\\frac{20}{3}$ and $A(0,\\ \\frac{20}{3})$, which is above the $x$-axis as the figure shows.",
        "marking": "(1A)",
        "highlight": [
         "A\\left(0,\\ \\frac{20}{3}\\right)"
        ]
       },
       {
        "title": {
         "zh": "第 2 步 · 求 C（兩線同交的 x 截距）",
         "en": "Step 2 · Find $C$, the common $x$-intercept"
        },
        "math": "2x+3(0)-20=0\n\\Rightarrow\\ 2x=20\n\\Rightarrow\\ x=10",
        "zh": "$L_1$ 與 $L_2$ 同交 $x$ 軸於 $C$，所以 $C$ 就是 $L_2$ 的 $x$ 截距：代 $y=0$ 得 $2x-20=0$，$x=10$，即 $C(10,\\ 0)$。",
        "en": "Since $L_1$ and $L_2$ meet the $x$-axis at the same point $C$, $C$ is the $x$-intercept of $L_2$: putting $y=0$ gives $2x-20=0$, so $x=10$ and $C(10,\\ 0)$.",
        "marking": "(1A)",
        "highlight": [
         "C(10,\\ 0)"
        ]
       },
       {
        "title": {
         "zh": "第 3 步 · 用面積列方程求 B(0, b)",
         "en": "Step 3 · Use the area to find $B(0,\\ b)$"
        },
        "math": "\\frac{1}{2}\\times\\left(\\frac{20}{3}-b\\right)\\times10=50\n\\Rightarrow\\ \\frac{20}{3}-b=10",
        "zh": "設 $B(0,\\ b)$。$\\triangle ABC$ 的底是 $y$ 軸上的 $AB={\\frac{20}{3}-b}$，高是 $C$ 到 $y$ 軸的距離 $=10$。面積：$\\frac{1}{2}\\times({\\frac{20}{3}-b})\\times10=50$，兩邊化簡得 ${\\frac{20}{3}-b}=10$，所以 $b={\\frac{20}{3}}-10=-{\\frac{10}{3}}$。$b$ 是負數才符合圖中 $B$ 在 $x$ 軸之下。",
        "en": "Let $B(0,\\ b)$. The base of $\\triangle ABC$ is $AB={\\frac{20}{3}-b}$ on the $y$-axis, and the height is the distance from $C$ to the $y$-axis, which is 10. So $\\frac{1}{2}\\times({\\frac{20}{3}-b})\\times10=50$, giving ${\\frac{20}{3}-b}=10$ and $b=-{\\frac{10}{3}}$ — negative, matching $B$ below the $x$-axis in the figure.",
        "marking": "(1A + 1A)",
        "highlight": [
         "B\\left(0,\\ -\\frac{10}{3}\\right)"
        ]
       },
       {
        "title": {
         "zh": "第 4 步 · 求 L1 的斜率與點斜式",
         "en": "Step 4 · Slope of $L_1$ and point-slope form"
        },
        "math": "m_{L_1}=\\frac{0-\\left(-\\frac{10}{3}\\right)}{10-0}=\\frac{\\frac{10}{3}}{10}=\\frac{1}{3}\ny-0=\\frac{1}{3}(x-10)",
        "zh": "$L_1$ 通過 $C(10,\\ 0)$ 與 $B(0,\\ -\\frac{10}{3})$，斜率是 $\\frac{0-(-\\frac{10}{3})}{10-0}=\\frac{1}{3}$（正數，與圖中 $L_1$ 往右上斜一致）。用 $C$ 寫點斜式：$y=\\frac{1}{3}(x-10)$。",
        "en": "$L_1$ passes through $C(10,\\ 0)$ and $B(0,\\ -\\frac{10}{3})$, so its slope is $\\frac{0-(-\\frac{10}{3})}{10-0}=\\frac{1}{3}$, positive as in the figure. Using $C$: $y=\\frac{1}{3}(x-10)$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 5 步 · 整理成一般式",
         "en": "Step 5 · Rearrange into general form"
        },
        "math": "y=\\frac{1}{3}x-\\frac{10}{3}\n\\Rightarrow\\ 3y=x-10\n\\Rightarrow\\ x-3y-10=0",
        "zh": "展開得 $y=\\frac{1}{3}x-\\frac{10}{3}$，兩邊乘 3 得 $3y=x-10$，再整理成 $x-3y-10=0$。驗算：代 $B(0,\\ -\\frac{10}{3})$ 得 $0+10-10=0$ ✓，代 $C(10,\\ 0)$ 得 $10-0-10=0$ ✓。",
        "en": "Expanding gives $y=\\frac{1}{3}x-\\frac{10}{3}$; multiplying by 3 gives $3y=x-10$, that is $x-3y-10=0$. Check: $B(0,\\ -\\frac{10}{3})$ gives $0+10-10=0$ and $C(10,\\ 0)$ gives $10-0-10=0$.",
        "marking": "(1A)",
        "highlight": [
         "x-3y-10=0"
        ]
       }
      ],
      "traps": [
       {
        "label": "面積忘記乘 ½",
        "labelEn": "Forgetting the $\\frac{1}{2}$ in the area",
        "zh": "三角形面積是 $\\frac{1}{2}\\times$ 底 $\\times$ 高；漏了 $\\frac{1}{2}$ 會得 $b=\\frac{20}{3}-5=\\frac{5}{3}$，答案全錯。",
        "en": "The area of a triangle is $\\frac{1}{2}\\times$ base $\\times$ height. Dropping the $\\frac{1}{2}$ gives $b=\\frac{20}{3}-5=\\frac{5}{3}$, which is wrong."
       },
       {
        "label": "底與高搞錯",
        "labelEn": "Mixing up the base and the height",
        "zh": "$\\triangle ABC$ 的三點都在 $y$ 軸與 $x$ 軸上，所以底取 $y$ 軸上的 $AB$（$A$、$B$ 的 $y$ 坐標相差 ${\\frac{20}{3}-b}$），高取 $C$ 到 $y$ 軸的距離（$=10$）。用 $AC$ 當底就要重新算高，比較容易錯。",
        "en": "The three vertices lie on the axes: take $AB$ on the $y$-axis as the base (the difference ${\\frac{20}{3}-b}$ of the $y$-coordinates) and the distance from $C$ to the $y$-axis, 10, as the height. Using $AC$ as base means recomputing the height and invites mistakes."
       },
       {
        "label": "取了 A 之上那一點",
        "labelEn": "Putting $B$ above $A$",
        "zh": "面積 50 只給出 $|AB|=10$，理論上 $B$ 可以在 $A$ 之上（$b={\\frac{20}{3}}+10$），但圖中 $B$ 在 $x$ 軸之下，所以要取 $b=-{\\frac{10}{3}}$。",
        "en": "An area of 50 only gives $|AB|=10$, so formally $B$ could also lie above $A$; the figure places $B$ below the $x$-axis, so $b=-{\\frac{10}{3}}$ is the one we keep."
       }
      ],
      "tip": {
       "zh": "圖形應用題先把軸上的點全部求出來（代入 $y=0$／$x=0$），再寫面積或距離方程；未知點設成 $(0,\\ b)$，最後用圖檢查答案合不合理。",
       "en": "In graphical questions, find every axis point first (put $y=0$ / $x=0$), then write the area or distance equation. Name the unknown point $(0,\\ b)$ and finish by checking the answer against the figure."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：代兩點入答案 + 重算面積",
         "en": "Check: substitute both points and recompute the area"
        },
        "zh": "把 $B(0,\\ -\\frac{10}{3})$ 代入 $x-3y-10=0$：$0+10-10=0$ ✓；把 $C(10,\\ 0)$ 代入：$10-0-10=0$ ✓。面積重算：$AB={\\frac{20}{3}-(-\\frac{10}{3})}=10$，$\\frac{1}{2}\\times10\\times10=50$ ✓，與題目給的面積完全吻合。",
        "en": "Substituting $B(0,\\ -\\frac{10}{3})$ into $x-3y-10=0$ gives $0+10-10=0$, and $C(10,\\ 0)$ gives $10-0-10=0$. Recomputing the area: $AB={\\frac{20}{3}-(-\\frac{10}{3})}=10$ and $\\frac{1}{2}\\times10\\times10=50$, matching the given area exactly."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en03-q8",
     "type": "long",
     "topic": "en03",
     "unit": 10,
     "subtopic": "straight-lines",
     "difficulty": 1,
     "code": "EN3-Q8",
     "source": "Endeavour Lesson 3 Q8 · Chapter 4 Extra Questions（求兩線交點）",
     "stem": {
      "en": "The figure shows two straight lines $L_1: x+2y-14=0$ and $L_2: x=4$. Find the coordinates of their intersection.",
      "zh": "圖中兩條直線 $L_1: x+2y-14=0$ 與 $L_2: x=4$。求它們的交點坐標。"
     },
     "kind": "short",
     "marks": 2,
     "figBefore": true,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 把 x = 4 代入 L1",
         "en": "Step 1 · Substitute $x=4$ into $L_1$"
        },
        "math": "4+2y-14=0\n\\Rightarrow\\ 2y=10",
        "zh": "$L_2$ 是鉛直線 $x=4$，所以交點的 $x$ 坐標一定是 4。把 $x=4$ 代入 $L_1: x+2y-14=0$，得 $4+2y-14=0$，即 $2y=10$。",
        "en": "$L_2$ is the vertical line $x=4$, so the intersection must have $x=4$. Substituting $x=4$ into $L_1: x+2y-14=0$ gives $4+2y-14=0$, that is $2y=10$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 解出 y，寫出交點",
         "en": "Step 2 · Solve for $y$ and state the point"
        },
        "math": "y=5\n\\Rightarrow\\ (4,\\ 5)",
        "zh": "由 $2y=10$ 得 $y=5$，所以交點是 $(4,\\ 5)$。驗算：代回 $L_1$，$4+2(5)-14=0$ ✓。",
        "en": "From $2y=10$ we get $y=5$, so the intersection is $(4,\\ 5)$. Check: back in $L_1$, $4+2(5)-14=0$.",
        "marking": "(1A)",
        "highlight": [
         "(4,\\ 5)"
        ]
       }
      ],
      "traps": [
       {
        "label": "$x=4$ 當成 $y=4$",
        "labelEn": "Reading $x=4$ as $y=4$",
        "zh": "$L_2: x=4$ 是鉛直線（所有點的 $x$ 都是 4）；若當成 $y=4$，代入 $L_1$ 會得 $(10,\\ 4)$，完全錯。",
        "en": "$L_2: x=4$ is a vertical line on which every point has $x=4$. Taking it as $y=4$ gives $(10,\\ 4)$, which is wrong."
       },
       {
        "label": "解方程時符號錯",
        "labelEn": "A sign slip when solving",
        "zh": "$4+2y-14=0$ 中 $4-14=-10$，所以是 $2y=10$（不是 $2y=18$）。先把同類項合併再移項，可以避免這類錯誤。",
        "en": "In $4+2y-14=0$ we have $4-14=-10$, so $2y=10$ (not $2y=18$). Combine like terms before moving anything across."
       }
      ],
      "tip": {
       "zh": "其中一條線寫成 $x=k$ 或 $y=k$ 時，直接代入另一條方程最快，不必做聯立消元。",
       "en": "When one of the lines is $x=k$ or $y=k$, simply substitute it into the other equation — no elimination needed."
      },
      "alt": [
       {
        "name": {
         "zh": "另解：把 L1 寫成 y 的主項再代入",
         "en": "Alternative: make $y$ the subject of $L_1$ first"
        },
        "zh": "由 $x+2y-14=0$ 得 $y=\\frac{14-x}{2}$。代 $x=4$：$y=\\frac{14-4}{2}=5$，得 $(4,\\ 5)$。兩種做法一樣快，選自己順手的一種，但最後一定要寫出坐標 $(4,\\ 5)$ 才算答完。",
        "en": "From $x+2y-14=0$, $y=\\frac{14-x}{2}$. With $x=4$: $y=\\frac{14-4}{2}=5$, giving $(4,\\ 5)$. Either route is fine, but the final answer must be written as the coordinates $(4,\\ 5)$."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-en03-q9",
     "type": "long",
     "topic": "en03",
     "unit": 10,
     "subtopic": "straight-lines",
     "difficulty": 3,
     "code": "EN3-Q9",
     "source": "Endeavour Lesson 3 Q9 · Chapter 4 Extra Questions（垂直條件求 k，再解聯立方程求交點）",
     "stem": {
      "en": "It is given that the straight lines $L_1: 6x+8y+5=0$ and $L_2: kx-3y-5=0$ are perpendicular to each other, and they intersect at a point $P$.",
      "zh": "已知直線 $L_1: 6x+8y+5=0$ 與 $L_2: kx-3y-5=0$ 互相垂直，並相交於點 $P$。"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "Find the value of $k$.",
       "en": "Find the value of $k$.",
       "zh": "求 $k$ 的值。",
       "marks": 2
      },
      {
       "label": "(b)",
       "text": "Find the coordinates of $P$.",
       "en": "Find the coordinates of $P$.",
       "zh": "求 $P$ 的坐標。",
       "marks": 2
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 寫出兩條線的斜率",
         "en": "Step 1 · Write down the slopes of both lines"
        },
        "math": "\\text{slope of }L_1=-\\frac{6}{8}=-\\frac{3}{4}\n\\text{slope of }L_2=-\\frac{k}{-3}=\\frac{k}{3}",
        "zh": "把 $Ax+By+C=0$ 寫成 $y=-\\frac{A}{B}x-\\frac{C}{B}$ 就讀得到斜率：$L_1$ 的斜率是 $-\\frac{6}{8}=-\\frac{3}{4}$；$L_2$ 的斜率是 $-\\frac{k}{-3}=\\frac{k}{3}$。",
        "en": "Rewriting $Ax+By+C=0$ as $y=-\\frac{A}{B}x-\\frac{C}{B}$ gives the slope: for $L_1$ it is $-\\frac{6}{8}=-\\frac{3}{4}$, and for $L_2$ it is $-\\frac{k}{-3}=\\frac{k}{3}$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 用垂直條件解 k",
         "en": "Step 2 · Use the perpendicular condition to find $k$"
        },
        "math": "\\left(-\\frac{3}{4}\\right)\\times\\frac{k}{3}=-1\n\\Rightarrow\\ -\\frac{k}{4}=-1\n\\Rightarrow\\ k=4",
        "zh": "垂直的兩條線斜率乘積是 $-1$：$(-\\frac{3}{4})(\\frac{k}{3})=-\\frac{k}{4}$，令它等於 $-1$，得 $k=4$。所以 $L_2$ 是 $4x-3y-5=0$。",
        "en": "Perpendicular lines have slopes multiplying to $-1$: $(-\\frac{3}{4})(\\frac{k}{3})=-\\frac{k}{4}$. Setting this equal to $-1$ gives $k=4$, so $L_2$ becomes $4x-3y-5=0$.",
        "marking": "(1A)",
        "highlight": [
         "k=4"
        ]
       },
       {
        "title": {
         "zh": "第 3 步 · 解聯立方程（消去 x）",
         "en": "Step 3 · Solve the simultaneous equations (eliminate $x$)"
        },
        "math": "L_1: 6x+8y+5=0\\ \\ \\cdots(1)\nL_2: 4x-3y-5=0\\ \\ \\cdots(2)\n(1)\\times2: 12x+16y+10=0\\ \\ \\cdots(3)\n(2)\\times3: 12x-9y-15=0\\ \\ \\cdots(4)\n(3)-(4): 25y+25=0\n\\Rightarrow\\ y=-1",
        "zh": "解交點就是解聯立方程。把 (1) 乘 2、(2) 乘 3 令 $x$ 的係數都變成 12，兩式相減消去 $x$：$25y+25=0$，得 $y=-1$。",
        "en": "The intersection is found by solving the two equations together. Multiply (1) by 2 and (2) by 3 so that both have $12x$; subtracting eliminates $x$: $25y+25=0$, so $y=-1$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求 x，寫出 P",
         "en": "Step 4 · Substitute back for $x$ and state $P$"
        },
        "math": "6x+8(-1)+5=0\n\\Rightarrow\\ 6x-3=0\n\\Rightarrow\\ x=\\frac{1}{2}\n\\Rightarrow\\ P\\left(\\frac{1}{2},\\ -1\\right)",
        "zh": "把 $y=-1$ 代回 (1)：$6x-8+5=0$，即 $6x=3$，得 $x=\\frac{1}{2}$，所以 $P(\\frac{1}{2},\\ -1)$。驗算：代回 (2)，$4(\\frac{1}{2})-3(-1)-5=2+3-5=0$ ✓。",
        "en": "Putting $y=-1$ back into (1): $6x-8+5=0$, so $6x=3$ and $x=\\frac{1}{2}$; hence $P(\\frac{1}{2},\\ -1)$. Check in (2): $4(\\frac{1}{2})-3(-1)-5=2+3-5=0$.",
        "marking": "(1A)",
        "highlight": [
         "P\\left(\\frac{1}{2},\\ -1\\right)"
        ]
       }
      ],
      "traps": [
       {
        "label": "把垂直當成平行",
        "labelEn": "Treating perpendicular as parallel",
        "zh": "垂直要令斜率乘積等於 $-1$（本題 $-\\frac{k}{4}=-1$）；若誤用「斜率相等」，會解出 $k=-\\frac{9}{4}$，之後的 $P$ 全錯。",
        "en": "Perpendicular requires the product of the slopes to be $-1$ (here $-\\frac{k}{4}=-1$). Using “equal slopes” instead gives $k=-\\frac{9}{4}$ and a wrong $P$."
       },
       {
        "label": "斜率公式上下寫反",
        "labelEn": "Inverting the slope of $L_1$",
        "zh": "$6x+8y+5=0$ 的斜率是 $-\\frac{6}{8}$（$-\\frac{A}{B}$），不是 $-\\frac{8}{6}$。係數要按 $x$、$y$ 的次序讀。",
        "en": "The slope of $6x+8y+5=0$ is $-\\frac{6}{8}=-\\frac{A}{B}$, not $-\\frac{8}{6}$: read the coefficients in the order of $x$ then $y$."
       },
       {
        "label": "乘方程時漏乘常數項",
        "labelEn": "Not multiplying the constant term",
        "zh": "(2) 乘 3 是整條方程乘 3：$12x-9y-15=0$（$-5\\times3=-15$）。漏了常數項就消不去 $x$，或者算出錯的 $y$。",
        "en": "Multiplying (2) by 3 multiplies the whole equation: $12x-9y-15=0$ (since $-5\\times3=-15$). Forgetting the constant ruins the elimination."
       }
      ],
      "tip": {
       "zh": "垂直條件只用斜率：先分別寫出 $L_1$、$L_2$ 的斜率，相乘等於 $-1$ 就解得 $k$；有了 $k$ 再解聯立求交點，最後一定把 $P$ 代回兩條方程驗算。",
       "en": "The perpendicular condition only involves slopes: write both slopes, set the product to $-1$ to get $k$, then solve the simultaneous equations. Always substitute $P$ back into both equations at the end."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：把 P 代回兩條線",
         "en": "Check: substitute $P$ into both lines"
        },
        "zh": "把 $P(\\frac{1}{2},\\ -1)$ 代回 $L_1$：$6(\\frac{1}{2})+8(-1)+5=3-8+5=0$ ✓；代回 $L_2$：$4(\\frac{1}{2})-3(-1)-5=2+3-5=0$ ✓。兩個方程都成立代表 $P$ 真的是交點；再加上兩條線的斜率（$-\\frac{3}{4}$ 與 $\\frac{4}{3}$）乘積是 $-1$ ✓，$k=4$ 亦得到確認。",
        "en": "Substituting $P(\\frac{1}{2},\\ -1)$ into $L_1$: $6(\\frac{1}{2})+8(-1)+5=3-8+5=0$; into $L_2$: $4(\\frac{1}{2})-3(-1)-5=2+3-5=0$. Both hold, so $P$ is the intersection. The slopes $-\\frac{3}{4}$ and $\\frac{4}{3}$ multiply to $-1$, confirming $k=4$."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    }
   ],
   "pages": []
  }
 ],
 "stats": {
  "mc": 0,
  "long": 9,
  "cards": 4,
  "pages": 0
 }
};
