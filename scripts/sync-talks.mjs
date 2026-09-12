#!/usr/bin/env node
// Fetches each conference's talks schedule from its published Google Sheet
// (File > Share > Publish to web, as CSV) and writes it to the matching
// content/**/talks.csv file if it changed. Run with no arguments to sync
// every conference in talks-sources.json, or pass one or more names to sync
// only those, e.g.:
//
//   node scripts/sync-talks.mjs "ORConf 2026"

import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(scriptDir, '..')

const sources = JSON.parse(
  await readFile(path.join(scriptDir, 'talks-sources.json'), 'utf8'),
)

const requestedNames = process.argv.slice(2)
const targets = requestedNames.length
  ? sources.filter((source) => requestedNames.includes(source.name))
  : sources

if (requestedNames.length) {
  const found = new Set(targets.map((source) => source.name))
  const missing = requestedNames.filter((name) => !found.has(name))
  if (missing.length) {
    console.error(`Unknown conference name(s): ${missing.join(', ')}`)
    console.error(`Available: ${sources.map((source) => source.name).join(', ')}`)
    process.exit(1)
  }
}

let hadError = false

for (const source of targets) {
  process.stdout.write(`${source.name}: fetching... `)

  let csv
  try {
    const response = await fetch(source.csvUrl)
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }
    csv = await response.text()
  } catch (err) {
    console.log('FAILED')
    console.error(`  ${err.message}`)
    hadError = true
    continue
  }

  if (!csv.startsWith('Day,Time,Type,Title')) {
    console.log('FAILED')
    console.error(
      "  Response doesn't look like the talks CSV - check that the sheet is still published to the web (File > Share > Publish to web).",
    )
    hadError = true
    continue
  }

  const filePath = path.join(repoRoot, source.path)
  const existing = await readFile(filePath, 'utf8').catch(() => null)
  if (existing === csv) {
    console.log('unchanged')
    continue
  }

  await writeFile(filePath, csv)
  console.log(`updated ${source.path}`)
}

if (hadError) process.exit(1)
