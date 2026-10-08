/**
 * In-place resize/compress for public/ images. Keeps paths, names, and formats unchanged.
 * Run: node scripts/optimize-images.mjs
 */
import fs from 'fs/promises'
import path from 'path'
import sharp from 'sharp'

const PUBLIC_DIR = path.resolve('public')
const MAX_EDGE = 1600
const MIN_SAVINGS_BYTES = 2048
const JPEG_QUALITY = 82
const PNG_COMPRESSION = 9

const IMAGE_EXT = new Set(['.png', '.jpg', '.jpeg'])

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await walk(full)))
    } else if (IMAGE_EXT.has(path.extname(entry.name).toLowerCase())) {
      files.push(full)
    }
  }
  return files
}

async function optimizeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  const before = (await fs.stat(filePath)).size
  const tmp = `${filePath}.opt`

  let pipeline = sharp(filePath, { failOn: 'none' }).rotate().resize({
    width: MAX_EDGE,
    height: MAX_EDGE,
    fit: 'inside',
    withoutEnlargement: true,
  })

  if (ext === '.png') {
    pipeline = pipeline.png({ compressionLevel: PNG_COMPRESSION, effort: 10 })
  } else {
    pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
  }

  await pipeline.toFile(tmp)
  const after = (await fs.stat(tmp)).size

  if (after < before - MIN_SAVINGS_BYTES) {
    await fs.rename(tmp, filePath)
    return { before, after, kept: false }
  }

  await fs.unlink(tmp)
  return { before, after: before, kept: true }
}

const files = await walk(PUBLIC_DIR)
let totalBefore = 0
let totalAfter = 0
let optimized = 0
let skipped = 0

for (const file of files.sort()) {
  try {
    const { before, after, kept } = await optimizeFile(file)
    totalBefore += before
    totalAfter += after
    if (kept) skipped += 1
    else optimized += 1
    const rel = path.relative(PUBLIC_DIR, file)
    if (!kept) {
      console.log(
        `${rel}: ${(before / 1024).toFixed(0)} KB → ${(after / 1024).toFixed(0)} KB`,
      )
    }
  } catch (err) {
    console.error(`Failed ${file}:`, err.message)
  }
}

console.log('\n---')
console.log(`Files: ${files.length} (${optimized} optimized, ${skipped} unchanged)`)
console.log(
  `Total: ${(totalBefore / 1048576).toFixed(1)} MB → ${(totalAfter / 1048576).toFixed(1)} MB`,
)
