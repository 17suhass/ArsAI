/**
 * Verify then delete exactly 4 confirmed orphaned QA products.
 * Deliberately NOT deleting cmttupkbv0005kng00hoaqngm (the completed QA product).
 */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const ORPHAN_IDS = [
  'cmttu5xc00001aa8v8a3bpswk',
  'cmttua0b30001kng0mhoujwb5',
  'cmttug0jv0003kng01vppzl0n',
  'cmttutw8h0007kng0qhjut1g8',
];

const PROTECTED_ID = 'cmttupkbv0005kng00hoaqngm';

async function main() {
  console.log('=== STEP 1: Verify four orphaned IDs exist ===\n');

  const found = await prisma.product.findMany({
    where: { id: { in: ORPHAN_IDS } },
    select: {
      id: true,
      title: true,
      status: true,
      finalListingPrice: true,
      artisanCostPrice: true,
      suggestedRetailMin: true,
      suggestedRetailMax: true,
      createdAt: true,
    },
    orderBy: { createdAt: 'asc' },
  });

  console.log(`Found ${found.length} of ${ORPHAN_IDS.length} expected orphan records:\n`);
  for (const p of found) {
    console.log(`  ID:           ${p.id}`);
    console.log(`  Title:        ${p.title}`);
    console.log(`  Status:       ${p.status}`);
    console.log(`  FinalPrice:   Rs.${p.finalListingPrice}`);
    console.log(`  CostPrice:    Rs.${p.artisanCostPrice}`);
    console.log(`  RetailMin:    Rs.${p.suggestedRetailMin}`);
    console.log(`  RetailMax:    Rs.${p.suggestedRetailMax}`);
    console.log(`  CreatedAt:    ${p.createdAt.toISOString()}`);
    console.log('');
  }

  // Safety check: abort if protected ID is accidentally in the orphan list
  if (ORPHAN_IDS.includes(PROTECTED_ID)) {
    throw new Error('SAFETY ABORT: Protected ID is in the deletion list!');
  }

  if (found.length === 0) {
    console.log('No orphaned records found — nothing to delete. Aborting.');
    return;
  }

  if (found.length !== ORPHAN_IDS.length) {
    const missingIds = ORPHAN_IDS.filter(id => !found.some(p => p.id === id));
    console.warn(`WARNING: Only ${found.length} of ${ORPHAN_IDS.length} IDs found.`);
    console.warn(`Missing: ${missingIds.join(', ')}`);
    console.log('Proceeding to delete the ones that exist...\n');
  }

  console.log('=== STEP 2: Verify protected product is NOT in the list ===\n');
  const protectedExists = await prisma.product.findUnique({
    where: { id: PROTECTED_ID },
    select: { id: true, title: true, status: true, finalListingPrice: true },
  });
  if (protectedExists) {
    console.log(`OK Protected product exists and will NOT be touched:`);
    console.log(`   ID:     ${protectedExists.id}`);
    console.log(`   Title:  ${protectedExists.title}`);
    console.log(`   Status: ${protectedExists.status}`);
    console.log(`   Price:  Rs.${protectedExists.finalListingPrice}\n`);
  } else {
    console.log(`WARN Protected product ${PROTECTED_ID} not found in DB.\n`);
  }

  console.log('=== STEP 3: Delete exactly the four orphaned records ===\n');
  const deleteResult = await prisma.product.deleteMany({
    where: { id: { in: ORPHAN_IDS } },
  });
  console.log(`DELETED ${deleteResult.count} record(s).\n`);

  console.log('=== STEP 4: Verify four IDs no longer exist ===\n');
  const stillExists = await prisma.product.findMany({
    where: { id: { in: ORPHAN_IDS } },
    select: { id: true },
  });
  if (stillExists.length === 0) {
    console.log('OK All four orphaned IDs confirmed DELETED - none remain.\n');
  } else {
    console.error(`ERROR: ${stillExists.length} record(s) still exist after deletion!`);
    for (const p of stillExists) console.error(`   ${p.id}`);
    console.log('');
  }

  console.log('=== STEP 5: Remaining products ===\n');
  const remaining = await prisma.product.findMany({
    select: {
      id: true,
      title: true,
      status: true,
      finalListingPrice: true,
      craftCategory: true,
      createdAt: true,
    },
    orderBy: { createdAt: 'asc' },
  });

  console.log(`Total remaining products: ${remaining.length}\n`);
  for (const p of remaining) {
    const tag = p.id === PROTECTED_ID ? ' <- (protected QA product)' : '';
    console.log(`  ID:       ${p.id}${tag}`);
    console.log(`  Title:    ${p.title}`);
    console.log(`  Category: ${p.craftCategory}`);
    console.log(`  Status:   ${p.status}`);
    console.log(`  Price:    Rs.${p.finalListingPrice}`);
    console.log(`  Created:  ${p.createdAt.toISOString()}`);
    console.log('');
  }
}

main()
  .catch(e => { console.error('FATAL:', e); process.exit(1); })
  .finally(() => prisma.$disconnect());
