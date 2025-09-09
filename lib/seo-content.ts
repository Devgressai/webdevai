export function countWordsFromText(text: string): number {
  return text
    .replace(/<[^>]*>/g, ' ') // strip any tags just in case
    .split(/\s+/)
    .filter(Boolean).length
}

export function countWordsFromSections(sections?: string[]): number {
  if (!sections || sections.length === 0) return 0
  return sections.reduce((sum, s) => sum + countWordsFromText(s), 0)
}

function sentence(parts: string[]): string {
  return parts.join(' ') + '.'
}

function buildKeywordVariants(cityName: string, cityFullName: string, industryName: string, serviceName: string): string[] {
  const lowerService = serviceName.toLowerCase()
  const lowerIndustry = industryName.toLowerCase()
  return [
    `${serviceName} in ${cityFullName}`,
    `${serviceName} for ${industryName} companies in ${cityName}`,
    `Local ${lowerService} for ${lowerIndustry} organizations`,
    `${cityName} ${lowerIndustry} ${lowerService} agency`,
    `Best ${lowerService} in ${cityName}`,
    `${industryName} growth with ${serviceName}`,
  ]
}

function buildParagraph(cityName: string, cityFullName: string, industryName: string, serviceName: string, variant: string): string {
  const v = variant
  const lead = sentence([
    `Our ${serviceName.toLowerCase()} programs for ${industryName.toLowerCase()} teams in ${cityFullName} are designed to compound results`,
    `balancing technical rigor with clear business outcomes`
  ])
  const essentials = sentence([
    `We prioritize information architecture, accessibility, performance budgets, and conversion flows`,
    `so stakeholders and buyers move from awareness to action without friction`
  ])
  const trust = sentence([
    `For ${industryName.toLowerCase()} in ${cityName}, trust and clarity matter`,
    `we implement structured data, content systems, and measurement that prove ROI`
  ])
  const callout = sentence([
    `If you are exploring`, v,
    `we can deliver a roadmap, prototypes, and a launch plan tailored to your KPIs`
  ])
  return `${lead} ${essentials} ${trust} ${callout}`
}

function buildHeading(label: string): string {
  return `## ${label}`
}

export function generateSeoPadding(
  cityName: string,
  cityFullName: string,
  industryName: string,
  serviceName: string,
  currentWords: number,
  targetWords: number = 4000
): string[] {
  if (currentWords >= targetWords) return []

  const variants = buildKeywordVariants(cityName, cityFullName, industryName, serviceName)
  const sections: string[] = []

  // a few keyword-focused headings
  sections.push(buildHeading(`${serviceName} in ${cityFullName} for ${industryName} Companies`))
  sections.push(buildHeading(`Why ${serviceName} Matters for ${industryName} in ${cityName}`))
  sections.push(buildHeading(`${industryName} Growth Strategy: ${serviceName}`))

  // generate paragraphs until target reached
  let total = currentWords
  let idx = 0
  while (total < targetWords) {
    const variant = variants[idx % variants.length]
    const paragraph = buildParagraph(cityName, cityFullName, industryName, serviceName, variant)
    sections.push(paragraph)
    total += countWordsFromText(paragraph)

    // sprinkle additional headings periodically for structure
    if (idx % 6 === 5) {
      sections.push(buildHeading(`${serviceName}: Approach & Process for ${industryName} in ${cityName}`))
    }
    if (idx % 10 === 9) {
      sections.push(buildHeading(`${serviceName} FAQs for ${industryName} in ${cityName}`))
    }

    idx += 1
    // safety valve to avoid infinite loops
    if (idx > 2000) break
  }
  return sections
}

export function ensureMinimumWords(
  baseSections: string[] | undefined,
  cityName: string,
  cityFullName: string,
  industryName: string,
  serviceName: string,
  targetWords: number = 4000
): string[] {
  const sections = Array.isArray(baseSections) ? [...baseSections] : []
  const current = countWordsFromSections(sections)
  if (current >= targetWords) return sections
  const padding = generateSeoPadding(cityName, cityFullName, industryName, serviceName, current, targetWords)
  return sections.concat(padding)
}


