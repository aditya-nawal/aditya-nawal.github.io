type NewsPart = { text: string; href?: string; emphasis?: boolean };
type NewsItem = {
  date: string;
  label: string;
  category: 'Preprint' | 'Preprints' | 'Conference' | 'Acceptance';
  parts: NewsPart[];
};

// Newest first. Use month precision where an exact personal milestone date is unknown.
export const news: NewsItem[] = [
  {
    date: '2026-11-07', label: 'Nov 2026', category: 'Preprint',
    parts: [
      { text: 'New on arXiv: ' },
      { text: 'The Truth Beneath the Tokens', href: 'https://arxiv.org/abs/2611.10450', emphasis: true },
      { text: '. We introduce Memento to recover pre-edit knowledge through prompt-space interventions.' },
    ],
  },
  {
    date: '2026-10', label: 'Oct 2026', category: 'Conference',
    parts: [
      { text: 'Presented ' },
      { text: 'Relevance as a Vulnerability', href: 'https://aclanthology.org/2026.findings-emnlp.2408/' },
      { text: ' at ' },
      { text: 'EMNLP 2026', emphasis: true },
      { text: ' in Budapest, sharing our work on retrieval-induced safety degradation in LLM agents.' },
    ],
  },
  {
    date: '2026-10-16', label: 'Oct 2026', category: 'Preprints',
    parts: [
      { text: 'Two new preprints: ' },
      { text: 'Before Retrieval Begins', href: 'https://arxiv.org/abs/2610.23071', emphasis: true },
      { text: ' and ' },
      { text: 'Disentangling Language Effects on Tool Admission and Post-Retrieval Safety', href: 'https://arxiv.org/abs/2610.23093', emphasis: true },
      { text: ', studying tool admission and multilingual agent safety.' },
    ],
  },
  {
    date: '2026-09-24', label: 'Sep 2026', category: 'Preprint',
    parts: [
      { text: 'New on arXiv: ' },
      { text: 'The Tokens Remember', href: 'https://arxiv.org/abs/2609.29045', emphasis: true },
      { text: '. Toketive explores how alternative tokenizations can bypass knowledge editing and unlearning.' },
    ],
  },
  {
    date: '2026-08', label: 'Aug 2026', category: 'Acceptance',
    parts: [
      { text: 'Relevance as a Vulnerability', href: 'https://aclanthology.org/2026.findings-emnlp.2408/' },
      { text: ' accepted to ' },
      { text: 'Findings of EMNLP 2026', emphasis: true },
      { text: ', introducing AgentREVEAL and HarmURLBench.' },
    ],
  },
];
