// CMS Data Types
export interface Author {
  slug: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  credentials: string[];
  linkedin?: string;
  email?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string; // author slug
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  image?: string;
}

export interface Download {
  slug: string;
  title: string;
  description: string;
  category: string;
  fileUrl: string;
  fileType: string;
  fileSize: string;
}

// Authors Data
export const authors: Author[] = [
  {
    slug: 'michael-green',
    name: 'Michael Green',
    title: 'Managing Partner & Investment Advisor',
    bio: 'Michael Green brings over 25 years of experience in financial planning and investment management. As Managing Partner of TGA Capital Management, he leads the firm\'s investment strategy and client relationships. Michael is dedicated to helping clients achieve their long-term financial goals through personalized wealth management strategies.',
    image: '/images/authors/michael-green.jpg',
    credentials: ['CFP®', 'CFA®', 'Series 65'],
    linkedin: 'https://linkedin.com',
    email: 'mgreen@tgacapitalmanagement.com'
  },
  {
    slug: 'sarah-johnson',
    name: 'Sarah Johnson',
    title: 'Senior Financial Advisor',
    bio: 'Sarah Johnson specializes in retirement planning and tax-efficient investment strategies. With over 15 years of experience in wealth management, she helps clients navigate complex financial decisions with clarity and confidence.',
    image: '/images/authors/sarah-johnson.jpg',
    credentials: ['CFP®', 'CPA'],
    linkedin: 'https://linkedin.com',
    email: 'sjohnson@tgacapitalmanagement.com'
  },
  {
    slug: 'david-chen',
    name: 'David Chen',
    title: 'Investment Analyst',
    bio: 'David Chen focuses on market research and portfolio analysis. His analytical approach helps identify opportunities and manage risk across diverse market conditions.',
    image: '/images/authors/david-chen.jpg',
    credentials: ['CFA®', 'MBA'],
    linkedin: 'https://linkedin.com',
    email: 'dchen@tgacapitalmanagement.com'
  }
];

// Blog Posts Data
export const blogPosts: BlogPost[] = [
  {
    slug: 'managing-market-volatility',
    title: 'Managing Market Volatility: Strategies for Uncertain Times',
    excerpt: 'Learn how to navigate market fluctuations while keeping your long-term investment goals on track.',
    content: `
Market volatility is a natural part of investing, but it can feel unsettling when you're watching your portfolio fluctuate. Understanding how to manage these periods of uncertainty is crucial for long-term investment success.

## Understanding Market Volatility

Volatility refers to the degree of variation in trading prices over time. While it can create anxiety, it's important to remember that volatility is not the same as risk. In fact, volatility can create opportunities for disciplined investors.

## Key Strategies for Managing Volatility

### 1. Maintain a Long-Term Perspective

History shows that markets have always recovered from downturns. The S&P 500 has experienced numerous corrections and bear markets, yet it has consistently trended upward over long periods.

### 2. Diversification is Your Friend

A well-diversified portfolio across different asset classes, sectors, and geographies can help smooth out returns and reduce overall portfolio risk.

### 3. Rebalancing During Volatility

Market downturns can actually be opportunities to rebalance your portfolio, buying assets that have become undervalued relative to your target allocation.

### 4. Avoid Emotional Decisions

The worst investment decisions are often made during periods of high emotion. Having a written investment policy can help you stay disciplined during turbulent times.

## Working with a Financial Advisor

A qualified financial advisor can help you develop a personalized strategy for managing volatility based on your unique situation, risk tolerance, and goals. Don't hesitate to reach out for guidance during uncertain times.
    `,
    category: 'Market Insights',
    author: 'michael-green',
    publishedAt: '2024-12-15',
    readTime: '5 min read',
    featured: true,
    image: '/images/blog/market-volatility.jpg'
  },
  {
    slug: 'retirement-planning-basics',
    title: 'Retirement Planning: Essential Steps for a Secure Future',
    excerpt: 'A comprehensive guide to building a retirement strategy that works for your unique situation.',
    content: `
Retirement planning is one of the most important financial decisions you'll make. Whether you're just starting your career or approaching retirement, it's never too early or too late to start planning.

## Start with Your Goals

Before diving into investment strategies, take time to envision your retirement. Consider:

- When do you want to retire?
- What lifestyle do you want to maintain?
- Where do you want to live?
- What activities and travel do you plan?

## Calculate Your Retirement Needs

A general rule of thumb suggests you'll need 70-80% of your pre-retirement income to maintain your lifestyle. However, this varies significantly based on individual circumstances.

### Key Factors to Consider

- **Healthcare costs**: Often underestimated and can be substantial
- **Social Security**: Understand your benefits and optimal claiming strategy
- **Inflation**: Your purchasing power will decrease over time
- **Longevity**: Plan for a 30+ year retirement

## Investment Strategies by Age

### In Your 20s-30s
- Maximize contributions to employer-sponsored plans
- Take advantage of compound growth
- Consider aggressive allocation with longer time horizon

### In Your 40s-50s
- Peak earning years - maximize savings
- Catch-up contributions become available at 50
- Begin shifting to more conservative allocation

### In Your 60s and Beyond
- Fine-tune Social Security claiming strategy
- Consider Roth conversions
- Develop withdrawal strategy

## The Importance of Professional Guidance

Retirement planning involves complex decisions about taxes, investments, Social Security, and estate planning. Working with a qualified financial advisor can help you navigate these decisions and create a comprehensive plan.
    `,
    category: 'Retirement',
    author: 'sarah-johnson',
    publishedAt: '2024-12-10',
    readTime: '7 min read',
    featured: true,
    image: '/images/blog/retirement-planning.jpg'
  },
  {
    slug: 'tax-efficient-investing',
    title: 'Tax-Efficient Investing: Maximizing Your After-Tax Returns',
    excerpt: 'Discover strategies to minimize taxes and keep more of your investment gains.',
    content: `
Taxes can significantly impact your investment returns over time. Implementing tax-efficient strategies can help you keep more of what you earn.

## Asset Location Strategy

Not all accounts are taxed equally. Placing investments strategically across different account types can reduce your overall tax burden.

### Tax-Advantaged Accounts (401k, IRA)
- Bonds and high-yield investments
- REITs
- Actively managed funds with high turnover

### Taxable Accounts
- Index funds and ETFs with low turnover
- Municipal bonds
- Long-term stock holdings

## Tax-Loss Harvesting

Selling investments at a loss to offset gains elsewhere in your portfolio is a powerful strategy. However, be aware of wash sale rules that prevent you from repurchasing similar investments within 30 days.

## Qualified Dividends and Long-Term Gains

Holding investments for more than one year qualifies you for long-term capital gains rates, which are significantly lower than ordinary income rates for most taxpayers.

## Roth Conversions

Converting traditional IRA assets to Roth can provide tax-free growth and withdrawals in retirement. The key is timing conversions in lower-income years to minimize the tax impact.

## Municipal Bonds

For high-income investors, municipal bonds can provide tax-free income at the federal level, and often at the state level for in-state bonds.
    `,
    category: 'Tax Planning',
    author: 'sarah-johnson',
    publishedAt: '2024-12-05',
    readTime: '6 min read',
    image: '/images/blog/tax-investing.jpg'
  },
  {
    slug: 'understanding-separately-managed-accounts',
    title: 'Understanding Separately Managed Accounts (SMAs)',
    excerpt: 'Learn how SMAs can provide customization, tax efficiency, and transparency for high-net-worth investors.',
    content: `
Separately Managed Accounts (SMAs) offer a unique investment solution for investors seeking greater customization and control over their portfolios.

## What is an SMA?

Unlike mutual funds where your money is pooled with other investors, an SMA gives you direct ownership of individual securities. This structure provides several key advantages.

## Benefits of SMAs

### Direct Ownership
You own the individual stocks and bonds in your portfolio, not shares of a fund. This provides transparency and control.

### Tax Efficiency
Because you own the securities directly, your advisor can implement tax-loss harvesting strategies specific to your tax situation.

### Customization
SMAs can be tailored to your specific needs, whether that's excluding certain industries, focusing on ESG criteria, or accommodating concentrated stock positions.

### Transparency
You can see exactly what you own at any time, with no surprises about holdings or strategy.

## Is an SMA Right for You?

SMAs typically require higher minimum investments than mutual funds or ETFs. They're most suitable for:

- High-net-worth investors
- Those with specific tax situations
- Investors wanting portfolio customization
- Those valuing transparency and direct ownership

## Working with TGA Capital Management

Our team specializes in implementing SMA strategies through our relationship with leading investment managers. We can help you determine if an SMA approach aligns with your investment goals and circumstances.
    `,
    category: 'Investment',
    author: 'michael-green',
    publishedAt: '2024-11-28',
    readTime: '5 min read',
    image: '/images/blog/sma-guide.jpg'
  },
  {
    slug: 'estate-planning-essentials',
    title: 'Estate Planning Essentials: Protecting Your Legacy',
    excerpt: 'Key components of an effective estate plan and why everyone needs one.',
    content: `
Estate planning isn't just for the wealthy. Everyone can benefit from having a plan in place to protect their assets and loved ones.

## Core Estate Planning Documents

### Will
A will specifies how you want your assets distributed and names guardians for minor children. Without one, state law determines these decisions.

### Trust
Trusts can provide privacy, avoid probate, and offer more control over how and when assets are distributed.

### Power of Attorney
Designates someone to make financial decisions on your behalf if you become incapacitated.

### Healthcare Directive
Specifies your wishes for medical care and designates someone to make healthcare decisions if you cannot.

## Beneficiary Designations

Many assets pass outside of your will through beneficiary designations:
- Retirement accounts (401k, IRA)
- Life insurance policies
- Payable-on-death bank accounts

Review these regularly to ensure they align with your overall estate plan.

## Tax Considerations

Estate tax laws change frequently. Working with qualified professionals can help you understand current exemptions and strategies to minimize estate taxes.

## Regular Reviews

Your estate plan should be reviewed whenever you experience major life changes:
- Marriage or divorce
- Birth or adoption of children
- Significant changes in assets
- Moving to a different state
- Changes in tax laws

## Getting Started

Estate planning can feel overwhelming, but breaking it down into steps makes it manageable. Start with the basics and build from there. Our team can help coordinate with estate planning attorneys to ensure your financial and estate plans work together.
    `,
    category: 'Estate Planning',
    author: 'david-chen',
    publishedAt: '2024-11-20',
    readTime: '6 min read',
    image: '/images/blog/estate-planning.jpg'
  },
  {
    slug: 'navigating-inflation',
    title: 'Navigating Inflation: Protecting Your Purchasing Power',
    excerpt: 'Strategies to help your investments keep pace with rising costs.',
    content: `
Inflation erodes purchasing power over time, making it crucial to have an investment strategy that accounts for rising costs.

## Understanding Inflation's Impact

Even modest inflation of 3% annually means your purchasing power is cut in half over about 24 years. For retirees on fixed incomes, this can be particularly challenging.

## Inflation-Fighting Investments

### Stocks
Historically, equities have outpaced inflation over long periods. Companies can raise prices and grow earnings to keep up with inflation.

### Real Estate
Property values and rental income tend to rise with inflation, making real estate a traditional inflation hedge.

### Treasury Inflation-Protected Securities (TIPS)
These government bonds are specifically designed to keep pace with inflation, with principal adjustments based on the CPI.

### Commodities
Raw materials like gold, oil, and agricultural products often rise with inflation, though they can be volatile.

### I Bonds
Series I savings bonds offer inflation protection with low risk, though purchase limits apply.

## Portfolio Considerations

The right mix depends on your time horizon, risk tolerance, and income needs. A diversified approach across asset classes typically provides the best inflation protection while managing overall portfolio risk.

## Working With Your Advisor

Inflation's impact varies based on your specific situation. We can help you assess your exposure and develop strategies appropriate for your goals and circumstances.
    `,
    category: 'Market Insights',
    author: 'david-chen',
    publishedAt: '2024-11-15',
    readTime: '5 min read',
    image: '/images/blog/inflation.jpg'
  }
];

// Downloads Data
export const downloads: Download[] = [
  {
    slug: 'reaching-retirement-guide',
    title: 'Reaching Retirement - Now What?',
    description: 'A comprehensive guide to managing your assets and income needs post-retirement. Covers Social Security strategies, withdrawal planning, and lifestyle considerations.',
    category: 'Retirement',
    fileUrl: '/downloads/reaching-retirement-guide.pdf',
    fileType: 'PDF',
    fileSize: '2.4 MB'
  },
  {
    slug: 'retirement-expense-forms',
    title: 'Retirement Expense Worksheets',
    description: 'Essential worksheets to help calculate and plan for your retirement expenses. Includes monthly budget templates and expense tracking tools.',
    category: 'Planning Tools',
    fileUrl: '/downloads/retirement-expense-forms.pdf',
    fileType: 'PDF',
    fileSize: '1.2 MB'
  },
  {
    slug: 'investor-behavior-guide',
    title: 'Investor Behavior in Turbulent Markets',
    description: 'Understanding market volatility and the psychology behind investment decisions. Learn how to avoid common behavioral pitfalls.',
    category: 'Market Insights',
    fileUrl: '/downloads/investor-behavior-guide.pdf',
    fileType: 'PDF',
    fileSize: '1.8 MB'
  },
  {
    slug: 'sma-guide',
    title: 'Guide to Separately Managed Accounts',
    description: 'Learn about the benefits and features of SMAs for high net worth investors. Includes comparison with mutual funds and ETFs.',
    category: 'Investment',
    fileUrl: '/downloads/sma-guide.pdf',
    fileType: 'PDF',
    fileSize: '2.1 MB'
  },
  {
    slug: 'tax-efficient-strategies',
    title: 'Tax-Efficient Investing Strategies',
    description: 'Strategies to minimize tax impact while maximizing portfolio growth. Covers asset location, tax-loss harvesting, and more.',
    category: 'Tax Planning',
    fileUrl: '/downloads/tax-efficient-strategies.pdf',
    fileType: 'PDF',
    fileSize: '1.5 MB'
  },
  {
    slug: 'estate-planning-basics',
    title: 'Estate Planning Basics',
    description: 'Foundational concepts for protecting and transferring your wealth. Includes checklist of essential documents.',
    category: 'Estate Planning',
    fileUrl: '/downloads/estate-planning-basics.pdf',
    fileType: 'PDF',
    fileSize: '1.9 MB'
  }
];

// Helper functions
export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find(author => author.slug === slug);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getDownloadBySlug(slug: string): Download | undefined {
  return downloads.find(download => download.slug === slug);
}

export function getBlogPostsByAuthor(authorSlug: string): BlogPost[] {
  return blogPosts.filter(post => post.author === authorSlug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getRecentPosts(limit: number = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

