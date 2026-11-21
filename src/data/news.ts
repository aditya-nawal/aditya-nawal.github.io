type NewsPart = { text: string; href?: string; emphasis?: boolean };
type NewsItem = { date: string; label: string; parts: NewsPart[] };

// Newest first; month precision for personal milestones without an exact date.
export const news: NewsItem[] = [
  {
    date: '2026-11-07', label: 'Nov 2026',
    parts: [
      { text: 'Memento', href: 'https://arxiv.org/abs/2611.10450', emphasis: true },
      { text: ' is now available on arXiv.' },
    ],
  },
  {
    date: '2026-10', label: 'Oct 2026',
    parts: [
      { text: 'Presented ' },
      { text: 'Relevance as a Vulnerability', href: 'https://aclanthology.org/2026.findings-emnlp.2408/' },
      { text: ' at ' },
      { text: 'EMNLP 2026', emphasis: true },
      { text: ' in Budapest.' },
    ],
  },
  {
    date: '2026-10-16', label: 'Oct 2026',
    parts: [
      { text: 'Before Retrieval Begins', href: 'https://arxiv.org/abs/2610.23071', emphasis: true },
      { text: ' is now available on arXiv.' },
    ],
  },
  {
    date: '2026-10-16', label: 'Oct 2026',
    parts: [
      { text: 'SLIP', href: 'https://arxiv.org/abs/2610.23093', emphasis: true },
      { text: ' is now available on arXiv.' },
    ],
  },
  {
    date: '2026-09-24', label: 'Sep 2026',
    parts: [
      { text: 'Toketive', href: 'https://arxiv.org/abs/2609.29045', emphasis: true },
      { text: ' is now available on arXiv.' },
    ],
  },
  {
    date: '2026-08', label: 'Aug 2026',
    parts: [
      { text: 'Relevance as a Vulnerability (HarmURLBench)', href: 'https://aclanthology.org/2026.findings-emnlp.2408/' },
      { text: ' accepted to ' },
      { text: 'EMNLP Findings', emphasis: true },
      { text: '!' },
    ],
  },
];
